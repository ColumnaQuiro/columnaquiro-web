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
- Text is quoted verbatim. When Google serves a "(Translated by Google) … (Original) …" pair, only the original is kept. Nothing is translated or paraphrased. Reviews longer than 420 characters are cut at a sentence end and marked with `[…]`.
- First name only, as the reviewer published it (`Maria Teresa García` becomes `Maria`; a one-word handle stays whole).
- `lang` is `es` or `en`, detected from the text, so each page can lead with reviews in its own language. Reviews in other languages (French is common) are skipped.
- Newest first, at most 30. The rating is rounded to one decimal; the count is the listing's `totalReviewCount`.
- The site only switches from the hand-written list to the synced one when it holds at least six reviews, so a thin result cannot leave the home page half empty.

Why the owner-side API and not the public Places API: Places returns five reviews per place, chosen by Google, which is not enough to pick from. The Business Profile API lists every review and returns the listing's average rating and total count in the same response.

### Setup

Everything happens in the Google account that owns the Business Profile, hola@columnaquiro.com. The whole thing is about an hour of clicking plus however long Google takes to approve the API access; the sync cannot run before step 1 is approved.

**1. Request access to the Business Profile APIs.** They ship with a quota of 0 and return `403` until Google approves the Cloud project.

1. In [Google Cloud Console](https://console.cloud.google.com/) create a project (say `columnaquiro-web`) and note its **project number** (Dashboard → Project info).
2. Fill in the [Business Profile API access request](https://support.google.com/business/contact/api_default) choosing "Application for Basic API Access". Use the owner's email, give the project number, describe the use as "display our own location's rating and reviews on our website". Eligibility: the profile must be verified, active for 60+ days and list a website, which it does.
3. Wait for the confirmation email. Then, in the project, enable these three APIs (APIs & Services → Library):
   - **My Business Account Management API** (lists the account)
   - **My Business Business Information API** (lists the location)
   - **Google My Business API** (the v4 API; the only one that serves reviews)

**2. Create the OAuth client.**

1. APIs & Services → OAuth consent screen (Google Auth Platform → Branding/Audience). User type: **Internal** if hola@columnaquiro.com is a Google Workspace account (it then needs no verification and the token never expires for being in testing). If the account is a plain Gmail account choose External, add the owner as a test user, and **publish the app** (Audience → Publish) before minting the token: refresh tokens of apps left in "Testing" die after seven days, which would break the Monday run.
2. Add the scope `https://www.googleapis.com/auth/business.manage`.
3. APIs & Services → Credentials → Create credentials → OAuth client ID → Application type **Desktop app**. Copy the client ID and client secret.

**3. Mint the refresh token** on a laptop:

```bash
cat > .env.local <<'EOT'
GBP_CLIENT_ID=…apps.googleusercontent.com
GBP_CLIENT_SECRET=…
EOT
node --env-file=.env.local scripts/google-reviews-auth.mjs
```

It opens the Google sign-in page (sign in as hola@columnaquiro.com), listens on a loopback port for the redirect, and prints the refresh token. Add it to `.env.local` as `GBP_REFRESH_TOKEN=…`. `.env.local` is gitignored; do not commit it.

**4. Run it once locally.**

```bash
node --env-file=.env.local scripts/sync-google-reviews.mjs --list-locations
node --env-file=.env.local scripts/sync-google-reviews.mjs --dry-run
node --env-file=.env.local scripts/sync-google-reviews.mjs
npm run generate
```

`--list-locations` prints `accounts/<id>/locations/<id>` for every location the token can see. With a single location the script finds it on its own; otherwise set `GBP_LOCATION` to the right one. The last command builds the site from the fresh JSON so it can be checked before anything is committed.

**5. Configure GitHub.** Repository → Settings → Secrets and variables → Actions:

| Kind | Name | Value |
|---|---|---|
| Secret | `GBP_CLIENT_ID` | the OAuth client ID |
| Secret | `GBP_CLIENT_SECRET` | the OAuth client secret |
| Secret | `GBP_REFRESH_TOKEN` | the token from step 3 |
| Variable | `GBP_LOCATION` | optional, `accounts/<id>/locations/<id>` |

Then run the workflow by hand (Actions → Sync Google reviews → Run workflow). It opens the first PR with the generated file; review the quoted reviews and merge.

### Troubleshooting

- `403 … quota` or `… has not been used in project` — the access request is not approved yet, or one of the three APIs is not enabled on the project.
- `403` without a quota message — the signed-in account is not an owner or manager of the Business Profile.
- `invalid_grant` on the token refresh — the refresh token was revoked or expired (an OAuth app still in "Testing" expires them after seven days). Publish the app, run `google-reviews-auth.mjs` again and update the secret.
- The badge still shows the old number after merging — the JSON is read at build time; check the Netlify deploy ran from the merged `main`.
- To test the pipeline without credentials: `node scripts/sync-google-reviews.mjs --from-file scripts/fixtures/google-reviews.sample.json --dry-run` builds the output from a synthetic API response.
