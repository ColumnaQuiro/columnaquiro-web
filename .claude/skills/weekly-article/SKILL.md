---
name: weekly-article
description: Write the blog article that is due this week from content/seo/content-plan.json, in Spanish and English, and open a PR for clinician review. Use when asked to write the weekly article, the next post from the content plan, or a specific plan week.
---

# Weekly article

Writes one planned article in both locales and opens a pull request. It never
pushes to `main`: this is health content, and a person signs off before it goes
live.

## 1. Get the brief

```bash
node scripts/next-article.mjs          # the entry that is due
node scripts/next-article.mjs --week 7 # a specific week
```

Exit code 2 means nothing is due yet. Stop and say so — do not skip ahead to a
future week unless the user asks.

If the brief says `Action: refresh-only`, go to [Refresh sprints](#refresh-sprints).

## 2. Branch

```bash
git checkout main && git pull && git checkout -b content/w<week>-<es-slug>
```

## 3. Research before writing

Search the actual SERP for the primary keyword. You are looking for what the
top results cover, what they all miss, and the specific numbers, ranges and
timelines that make an answer concrete. Two or three searches is usually
enough.

For any clinical claim — incidence, recovery times, contraindications — find a
real source and cite it inline. This is the main thing separating these posts
from the competitors', so do not skip it and do not invent citations. If you
cannot source a claim, cut the claim.

## 4. Write

Write the locale the brief lists first (EN first when `enFirst` is set,
otherwise ES). The second locale is a **localisation, not a translation**:
re-work examples, references and phrasing for that reader. The EN corpus is
currently 56 straight translations, which is exactly the weakness this plan is
correcting.

Match the existing house style, which you can see in any file under
`content/blog/es/`:

- Frontmatter: `title`, `slug`, `date`, `excerpt`, `cover`, `author` — then a
  blank line, then `---`. The `slug` must equal the filename or the page 404s.
- `date`: the plan entry's date, `YYYY-MM-DD`.
- `author`: `Léa Guido` unless told otherwise.
- `cover`: `/assets/images/home-hero.jpg` unless a topic-specific image exists
  in `public/assets/images/`. Flag in the PR body that a real image is wanted.
- Body starts at `##`. No `#` — the page renders the title from frontmatter.
- Close with a `## Preguntas frecuentes` / `## Frequently asked questions`
  section of four to six `**bold question**` + answer pairs.

Hit the brief's word target. The existing corpus averages 381 words and that is
the single biggest reason it does not rank; 1200+ with real substance is the
point of the exercise. Do not pad to reach it — if the topic genuinely runs
short, say so in the PR rather than inflating it.

Work the brief's internal links in where they genuinely help the reader, as
markdown links on natural anchor text. Never force all of them in.

Voice: plain, direct, second person. No hype, no "unlock", no promises of
cures. Where evidence is weak, say it is weak — that honesty is what the
commercial and trust posts in this plan are built on.

### Health-content rules

These are not stylistic preferences.

- Never promise a cure or a guaranteed outcome.
- Name red flags that need a doctor, early, not buried at the end.
- Entries with `reviewRequired: clinician` (infants, pregnancy, osteoporosis,
  rib pain, disc herniation, restless legs) must say so prominently in the PR
  body. Do not let those merge on a rubber stamp.
- Keep claims inside what chiropractic can actually support.

## 5. Register and verify

```bash
node scripts/register-post.mjs --week <week>
npm run generate
```

`register-post` refuses to run on missing files, slug mismatches or incomplete
frontmatter, and warns under 700 words. `npm run generate` must pass — it
prerenders the new routes and is the only check that the pair actually resolves.

## 6. Open the PR

```bash
git add -A && git commit && git push -u origin HEAD
gh pr create --title "[Added][Blog]: <ES title>" --body "..."
```

Commit message follows the repo's existing `[Added][Blog]: ...` convention.

The PR body should carry: the target keyword and why this post, word counts for
both locales, the sources cited, anything you were unsure about, and — in bold
at the top — the clinician-review flag when the entry has one.

Then report the PR URL. Do not merge it.

## Refresh sprints

Some weeks expand existing posts instead of adding new ones (week 49), and some
expand one in place while keeping its URL (weeks 10 and 51, marked
`refresh-and-expand`).

For these: keep the existing slug, filename and `date` — changing the URL throws
away the crawl history that makes refreshing worthwhile in the first place. Grow
the body to the target, keep every existing internal link that still makes
sense, and add the new ones from the brief. Update `title` and `excerpt` only if
the brief gives new ones.

Add an `updated:` line to the frontmatter set to today's date, in both locales.
That is what `dateModified` is built from, and it is the only thing telling
Google the page was actually refreshed rather than left alone — without it the
whole refresh track is invisible.

Then `node scripts/register-post.mjs --week <week>` (it will detect the pair is
already registered and just mark the plan entry done) and open the PR as above.
