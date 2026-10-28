# columnaquiro.com

Static site for ColumnaQuiro, a chiropractic clinic in Russafa / L'Eixample, València. Nuxt 4 (Vue 3, TypeScript, Tailwind), generated with `nuxt generate` and served by Netlify from `main`. Spanish is the default locale, English lives under `/en`.

```bash
npm install        # also runs `nuxt prepare`
npm run dev        # http://localhost:5173
npm run generate   # static build into .output/public (Netlify writes dist/, see netlify.toml)
npm run typecheck
npm test           # unit tests for the scripts
```

Content that changes on a schedule is automated and lands as a pull request, never directly on `main`:

- **Weekly article** — `.github/workflows/weekly-article.yml` writes the post that `content/seo/content-plan.json` says is due (Monday 07:00 UTC) and opens a PR for clinician review.
- **Google reviews sync** — `.github/workflows/sync-google-reviews.yml` refreshes the rating, review count and quoted reviews from the clinic's Google Business Profile (Monday 06:00 UTC) and opens a PR when they changed. Setup below.

## Google reviews sync

The rating badge ("4,9 · 159 reseñas en Google") sits in the hero of every main page, and the reviews block on the home page and `/resenas` quotes patients verbatim. Both read `app/data/reviews.generated.json`, written by `scripts/sync-google-reviews.mjs` from the clinic's own Business Profile, so nobody has to edit code when the count moves or a new review comes in.

How it fits together:

| Piece | Role |
|---|---|
| `scripts/sync-google-reviews.mjs` | Calls the Business Profile API, writes the JSON. Node built-ins only. |
| `app/data/reviews.generated.json` | Output: `fetchedAt`, `rating`, `count`, and up to 30 reviews (`id`, `name`, `lang`, `rating`, `date`, `text`). Committed, so Netlify needs no Google credentials. |
| `app/data/google-reviews-sync.ts` | Loads and validates the JSON at build time. Resolves to `null` when the file is missing or malformed. |
| `app/data/clinic.ts`, `app/data/reviews.ts` | Read from it, falling back to the hand-written rating and review list (copied from the listing on 25 Oct 2026) when there is nothing usable. |
| `.github/workflows/sync-google-reviews.yml` | Runs the script weekly on the branch `chore/sync-google-reviews` and opens or refreshes one PR. Until the secrets exist it logs a notice and exits green. |
| `scripts/google-reviews-auth.mjs` | One-off helper that signs the owner in and prints the refresh token. |

Selection rules, applied by the script and covered by `scripts/sync-google-reviews.test.mjs`:

- Only 5-star reviews from named (non-anonymous) reviewers, with at least six words and 30 characters of text.
- Text is quoted verbatim. Google attaches a machine translation to reviews not in the account's language, either as "(Translated by Google) … (Original) …" or, as the listing actually returns it, "… (Translated by Google) …" with the original first; only the original is kept. Nothing is translated or paraphrased. Reviews longer than 420 characters are cut at a sentence end and marked with `[…]`.
- First name only, as the reviewer published it (`Maria Teresa García` becomes `Maria`; a one-word handle stays whole). An initial keeps the next word too (`M ANGELES` → `M Angeles`), and a name typed all in caps or all in lower case is title-cased for the card.
- `lang` is `es` or `en`, detected from the text, so each page can lead with reviews in its own language. Reviews in other languages (French is common) are skipped.
- Newest first, at most 30, with each language guaranteed 8 of those slots while it has reviews to fill them, so the English pages never go thin after a Spanish-heavy month. The rating is rounded to one decimal; the count is the listing's `totalReviewCount`.
- A run whose rating, count and reviews match the committed file leaves it untouched (only `fetchedAt` would differ), so the weekly job opens a PR only when something moved.
- The site only switches from the hand-written list to the synced one when it holds at least six reviews, so a thin result cannot leave the home page half empty.

Why the owner-side API and not the public Places API: Places returns five reviews per place, chosen by Google, which is not enough to pick from. The Business Profile API lists every review and returns the listing's average rating and total count in the same response.

**Interim while Google reviews the access request.** With `--source auto` (the default) the script tries the Business Profile API first and, while that still answers with the quota-0 `429`, falls back to the Places API (New) for the rating and count only. That output is tagged `"source": "places"` and carries no reviews, so the badge moves with the listing while the quotes stay on the hand-written list. The first run after the approval switches to the full sync on its own; nothing to flip. It needs:

| Kind | Name | Value |
|---|---|---|
| Secret | `GOOGLE_PLACES_API_KEY` | an API key on the same project, restricted to Places API (New). Enabling that API makes the console accept the Google Maps Platform EEA terms and mint a key ("Maps Platform API Key"). |
| Variable | `GBP_PLACE_ID` | `ChIJTdAqy2xJYA0RzzX3L8LwfwQ`, the listing's Place ID. Optional: when unset the script runs one IDs-only text search for the clinic's name and address (`GBP_PLACE_QUERY` overrides it) and insists on exactly one match. `--find-place "<query>"` prints candidates. |

Cost: rating and count sit in the Place Details Enterprise SKU, whose free monthly calls cover a weekly run many times over. Nothing is billed.

### Setup

Everything happens in the Google account the listing is linked to, raulcatalanluis@gmail.com (not hola@columnaquiro.com, which manages no listing). Steps 1 to 5 were done on 25 Oct 2026; what is left is Google's approval of step 1, then enabling the v4 API and running the workflow once by hand. The sync cannot run before the approval.

**1. Request access to the Business Profile APIs.** They ship with a quota of 0 and return `429 Quota exceeded` until Google approves the Cloud project.

1. In [Google Cloud Console](https://console.cloud.google.com/) create a project and note its **project number** (IAM & Admin → Settings). The one in use is `columnaquiro-web`, number `948892751276`, owned by raulcatalanluis@gmail.com.
2. Open the [Business Profile API access request](https://support.google.com/business/contact/api_default), choose "Application for Basic API Access" and follow the link to the guided workflow. It only works signed in as the Google account the listing is linked to (raulcatalanluis@gmail.com; hola@columnaquiro.com has no listing in Business Profile manager and is rejected with "Business profile not found"). It asks you to pick the listing, then for the project number, the website, how you found the form and why you want access ("show our own listing's rating, count and 5-star reviews on our website, read-only, weekly"), whether the profile has been verified for 60+ days (yes) and whether the project is already allowlisted (no). The last Continue submits it and opens a support case; review takes 7 to 10 business days. Submitted on 25 Oct 2026 as case 9-7015000042055.
3. Enable the APIs on the project (APIs & Services → Library):
   - **My Business Account Management API** and **My Business Business Information API** can be enabled right away (done).
   - **Google My Business API** (the v4 API, the only one that serves reviews) is hidden from the library until the project is approved. After the approval email, open the library again and enable it. Until then `--list-locations` already proves the token works, it just hits the 0 quota.

**2. Create the OAuth client.**

1. Google Auth Platform → Branding/Audience. A Gmail account only gets the **External** user type, so fill in Branding (home page, privacy policy and legal notice URLs, `columnaquiro.com` as authorized domain) and then **publish the app** (Audience → Publish app) before minting the token: refresh tokens of apps left in "Testing" die after seven days, which would break the Monday run. The scope below is non-sensitive, so publishing needs no verification.
2. Add the scope `https://www.googleapis.com/auth/business.manage`.
3. APIs & Services → Credentials → Create credentials → OAuth client ID → Application type **Desktop app**. Copy the client ID and client secret.

**3. Mint the refresh token** on a laptop. When the OAuth client is created the console offers **Download JSON**; save that file (it holds the client ID and secret) and run:

```bash
node scripts/google-reviews-auth.mjs --client-json ~/Downloads/client_secret_….json --write-env --gh-secrets
```

It opens the Google sign-in page (sign in as the account the listing is linked to, raulcatalanluis@gmail.com), listens on a loopback port for the redirect, and then writes `GBP_CLIENT_ID`, `GBP_CLIENT_SECRET` and `GBP_REFRESH_TOKEN` to `.env.local` (gitignored) and to the repository's GitHub Actions secrets through the `gh` CLI, without printing them. Without those two flags it prints the refresh token instead; without `--client-json` it reads `GBP_CLIENT_ID` and `GBP_CLIENT_SECRET` from the environment. Delete the downloaded JSON afterwards.

**4. Run it once locally.**

```bash
node --env-file=.env.local scripts/sync-google-reviews.mjs --list-locations
node --env-file=.env.local scripts/sync-google-reviews.mjs --dry-run
node --env-file=.env.local scripts/sync-google-reviews.mjs
npm run generate
```

`--list-locations` prints `accounts/<id>/locations/<id>` for every location the token can see. With a single location the script finds it on its own; otherwise set `GBP_LOCATION` to the right one. The last command builds the site from the fresh JSON so it can be checked before anything is committed.

**5. Configure GitHub.** Step 3 with `--gh-secrets` already set the three secrets; otherwise add them by hand under Repository → Settings → Secrets and variables → Actions:

| Kind | Name | Value |
|---|---|---|
| Secret | `GBP_CLIENT_ID` | the OAuth client ID |
| Secret | `GBP_CLIENT_SECRET` | the OAuth client secret |
| Secret | `GBP_REFRESH_TOKEN` | the token from step 3 |
| Variable | `GBP_LOCATION` | optional, `accounts/<id>/locations/<id>` |

Then run the workflow by hand (Actions → Sync Google reviews → Run workflow; tick "dry run" to only print the result). It opens the first PR with the generated file; review the quoted reviews and merge. Manual runs are only offered once the workflow file is on `main`.

### Troubleshooting

- `Not approved yet` / `429 Quota exceeded … Requests per minute` on the very first request, or `403 … has not been used in project` — the access request is not approved yet (the quota is 0 until then), or one of the three APIs is not enabled on the project. The script exits 3 and the workflow reports it as a notice instead of failing.
- `403` without a quota message — the signed-in account is not an owner or manager of the Business Profile.
- `invalid_grant` on the token refresh — the refresh token was revoked or expired (an OAuth app still in "Testing" expires them after seven days). Publish the app, run `google-reviews-auth.mjs` again and update the secret.
- The badge still shows the old number after merging — the JSON is read at build time; check the Netlify deploy ran from the merged `main`.
- To test the pipeline without credentials: `node scripts/sync-google-reviews.mjs --from-file scripts/fixtures/google-reviews.sample.json --dry-run` builds the output from a synthetic API response.
