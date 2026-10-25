// The output of `scripts/sync-google-reviews.mjs`, when it exists. The script
// pulls the clinic's own Google Business Profile (rating, review count and the
// 5-star reviews with text) and writes `reviews.generated.json` next to this
// file; a weekly GitHub Action opens a PR whenever that output changes.
//
// The file is optional on purpose. `import.meta.glob` is resolved by Vite at
// build time and simply matches nothing when the file is absent, so a fresh
// clone, or a repo where the API access was never set up, builds from the
// hand-written values in `reviews.ts` and `clinic.ts` instead of failing.
export interface SyncedReview {
  id: string
  name: string
  lang: 'es' | 'en'
  rating: number
  date: string
  text: string
}

export interface SyncedReviews {
  fetchedAt: string
  rating: number
  count: number
  reviews: SyncedReview[]
}

const modules = import.meta.glob<SyncedReviews>('./reviews.generated.json', { eager: true, import: 'default' })

// A generated file that is present but unusable (half-written, wrong shape)
// should behave like a missing one, not take the rating off every page.
function validate(data: SyncedReviews | undefined): SyncedReviews | null {
  if (!data || typeof data !== 'object') return null
  const rating = Number(data.rating)
  const count = Number(data.count)
  if (!(rating >= 1 && rating <= 5) || !Number.isInteger(count) || count < 1) return null
  const reviews = Array.isArray(data.reviews)
    ? data.reviews.filter(
        (r) =>
          r &&
          typeof r.name === 'string' &&
          r.name.trim() &&
          typeof r.text === 'string' &&
          r.text.trim() &&
          (r.lang === 'es' || r.lang === 'en'),
      )
    : []
  return { fetchedAt: String(data.fetchedAt ?? ''), rating, count, reviews }
}

export const synced: SyncedReviews | null = validate(Object.values(modules)[0])
