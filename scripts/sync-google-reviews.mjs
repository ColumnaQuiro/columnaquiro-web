#!/usr/bin/env node
// Pulls the clinic's rating, review count and 5-star reviews from its own
// Google Business Profile and writes app/data/reviews.generated.json, which
// app/data/clinic.ts and app/data/reviews.ts read at build time (with the
// hand-written values as fallback when the file is missing). Run weekly by
// .github/workflows/sync-google-reviews.yml, which opens a PR when the output
// changes. Setup (OAuth client, API access request, secrets) is in the README
// under "Google reviews sync".
//
// Why the owner-side API: the public Places API returns five reviews per
// place, chosen by Google. The Business Profile API lists all of them, with
// the location's averageRating and totalReviewCount in the same response, so
// the number in the hero cannot drift from the listing.
//
//   node scripts/sync-google-reviews.mjs                  fetch and write
//   node scripts/sync-google-reviews.mjs --dry-run        fetch, print, write nothing
//   node scripts/sync-google-reviews.mjs --list-locations print the accounts and
//                                                          locations the token can see
//   node scripts/sync-google-reviews.mjs --from-file f.json
//                                        build the output from a saved API response
//                                        (one page object, or an array of pages)
//   node scripts/sync-google-reviews.mjs --out path.json  write somewhere else
//   node scripts/sync-google-reviews.mjs --source places  rating and count only,
//                                        from the public Places API (no reviews)
//   node scripts/sync-google-reviews.mjs --find-place "ColumnaQuiro Vivons 29 València"
//                                        print Place IDs matching a query
//
// Env: GBP_CLIENT_ID, GBP_CLIENT_SECRET, GBP_REFRESH_TOKEN (required to call the
// Business Profile API), GBP_LOCATION = accounts/<id>/locations/<id> (optional;
// skips discovery and is required when the account has more than one
// location). GOOGLE_PLACES_API_KEY enables the Places source; GBP_PLACE_ID
// pins the listing's Place ID and GBP_PLACE_QUERY overrides the text search
// used to find it when GBP_PLACE_ID is not set (default: the clinic's name and
// address; the search must return exactly one place). Locally,
// `node --env-file=.env.local scripts/sync-google-reviews.mjs` reads them from
// a gitignored file.
//
// --source auto (the default) tries the Business Profile API first and, while
// Google has not approved the project for it, falls back to the Places API for
// the rating and count. Places returns five reviews chosen by Google, not
// enough to pick from, so that mode writes no reviews and the site keeps its
// hand-written quotes; the moment the approval lands the same run switches to
// the full sync on its own.
//
// Exit codes: 0 ok, 1 API or runtime error, 2 missing configuration,
// 3 the Cloud project is not allowlisted yet (quota 0), which the workflow
// reports as a notice rather than a failure.

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const DEFAULT_OUT = resolve(root, 'app/data/reviews.generated.json')

export const SCOPE = 'https://www.googleapis.com/auth/business.manage'

const ENDPOINTS = {
  token: 'https://oauth2.googleapis.com/token',
  accounts: 'https://mybusinessaccountmanagement.googleapis.com/v1/accounts',
  locations: (account) =>
    `https://mybusinessbusinessinformation.googleapis.com/v1/${account}/locations?readMask=name,title&pageSize=100`,
  // v4 is the only Business Profile surface that still serves reviews.
  reviews: (location) => `https://mybusiness.googleapis.com/v4/${location}/reviews?pageSize=50&orderBy=updateTime%20desc`,
  // Places API (New). `rating` and `userRatingCount` sit in the Enterprise
  // SKU, whose free monthly calls cover a weekly run many times over.
  place: (id) => `https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`,
  searchText: 'https://places.googleapis.com/v1/places:searchText',
}

// What a review needs to be quoted on the site. The home page shows six, the
// /resenas page every one in the file, so ~30 keeps that page meaningful
// without quoting the whole listing.
export const LIMITS = {
  maxReviews: 30,
  // "At least one sentence": a few words and some length, so "Muy bien." and
  // star-only reviews do not get a card of their own.
  minWords: 6,
  minChars: 30,
  // Longer reviews are cut at a sentence end and marked with […], the same way
  // the hand-curated list did it. Nothing is paraphrased.
  maxChars: 420,
}

// ---------------------------------------------------------------------------
// Pure helpers (exported for the test file)
// ---------------------------------------------------------------------------

// Google serves reviews written in another language than the account's as
// "(Translated by Google) … (Original) …". We only ever quote the original.
export function originalText(comment) {
  if (!comment) return ''
  let text = String(comment)
  const marker = text.indexOf('(Original)')
  if (marker !== -1) text = text.slice(marker + '(Original)'.length)
  text = text.replace(/^\s*\(Translated by Google\)\s*/i, '')
  return text.replace(/\s+/g, ' ').trim()
}

// First name only, as the reviewer published it. Handles ("WhitestWaters")
// are one token and stay whole; "Maria Teresa García" becomes "Maria".
export function firstName(displayName) {
  if (!displayName) return ''
  const token = String(displayName).trim().split(/\s+/)[0] ?? ''
  return token.replace(/[.,;:!?]+$/u, '')
}

const STOPWORDS = {
  es: 'de la que el en y a los se del las un por con no una su para es al lo como más pero sus le ya o este sí porque esta entre cuando muy sin sobre también me hasta hay donde desde todo nos durante todos uno les ni otros ese eso ellos esto mí antes algunos qué unos yo otro otras otra él tanto esa estos mucho nada muchos poco ella estar algo nosotros mi mis tú te tu tus estoy está están he ha hemos han soy eres somos son fui fue era tengo tiene tenía tenido había sido gracias recomiendo recomendable trato profesional dolor espalda sesión sesiones quiropráctica quiropráctico mejor mejoría encantada encantado súper buena bueno siempre después desde hace años meses semana cada vez'.split(
    ' ',
  ),
  en: 'the and to of a in i is it that was for with my she he her his you are have had has not be at this but from they we so me very all were been would there their what which who when if can an or as by on about out up after back pain recommend highly great really feel felt go went just now also am get got than then them into because more some been being since first time year years month months week every'.split(
    ' ',
  ),
  fr: 'le la les et un une des du de en je tu il elle nous vous ils elles est sont été avoir être pour avec sans sur dans par que qui ne pas plus très bien mal mon ma mes ton ta tes son sa ses leur leurs ce cette ces cet au aux chez merci recommande séance séances douleur dos depuis après avant toujours jamais'.split(
    ' ',
  ),
}

// Language by stopword overlap. Deliberately crude: the site only has Spanish
// and English pages, so all we need is to tell those two apart and to notice
// when a review is in neither (French is common here, Léa is French).
export function detectLang(text) {
  const words = String(text)
    .toLowerCase()
    .replace(/[^\p{L}\s']/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
  if (words.length === 0) return null
  const score = {}
  for (const [lang, list] of Object.entries(STOPWORDS)) {
    const set = new Set(list)
    score[lang] = words.filter((w) => set.has(w)).length
  }
  // Spanish-only letters are a strong signal English text never has.
  if (/[ñ¿¡]/i.test(text)) score.es += 2
  const ranked = Object.entries(score).sort((a, b) => b[1] - a[1])
  const [best, bestScore] = ranked[0]
  const second = ranked[1][1]
  if (bestScore === 0 || bestScore === second) return null
  return best === 'es' || best === 'en' ? best : null
}

// Cut long reviews at a sentence boundary and mark the cut, never mid-word.
export function clip(text, maxChars = LIMITS.maxChars, minChars = LIMITS.minChars) {
  if (text.length <= maxChars) return text
  const head = text.slice(0, maxChars)
  let cut = -1
  for (const match of head.matchAll(/[.!?…]+(?=\s|$)/g)) {
    const end = match.index + match[0].length
    if (end >= minChars) cut = end
  }
  if (cut === -1) cut = head.lastIndexOf(' ')
  if (cut < minChars) cut = maxChars
  return `${text.slice(0, cut).trimEnd()} […]`
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length
}

// Turns the raw API reviews into the list the site quotes. Returns the kept
// reviews plus a tally of why the others were dropped, for the run log.
export function selectReviews(rawReviews, limits = LIMITS) {
  const skipped = {}
  const skip = (reason) => {
    skipped[reason] = (skipped[reason] ?? 0) + 1
  }
  const seen = new Set()
  const kept = []
  for (const raw of rawReviews) {
    const id = raw.reviewId || raw.name || ''
    if (seen.has(id)) {
      skip('duplicate')
      continue
    }
    seen.add(id)
    if (raw.starRating !== 'FIVE') {
      skip('not 5 stars')
      continue
    }
    if (raw.reviewer?.isAnonymous || !raw.reviewer?.displayName) {
      skip('anonymous')
      continue
    }
    const name = firstName(raw.reviewer.displayName)
    if (name.length < 2) {
      skip('no usable name')
      continue
    }
    const text = originalText(raw.comment)
    if (text.length < limits.minChars || wordCount(text) < limits.minWords) {
      skip('too short')
      continue
    }
    const lang = detectLang(text)
    if (!lang) {
      skip('not es/en')
      continue
    }
    const date = String(raw.createTime ?? raw.updateTime ?? '').slice(0, 10)
    kept.push({ id, name, lang, rating: 5, date, text: clip(text, limits.maxChars, limits.minChars) })
  }
  kept.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
  return { reviews: kept.slice(0, limits.maxReviews), skipped }
}

export function buildOutput(pages, now = new Date()) {
  const list = Array.isArray(pages) ? pages : [pages]
  const first = list.find((p) => p && (p.averageRating != null || p.totalReviewCount != null)) ?? list[0] ?? {}
  const rating = Number(first.averageRating)
  const count = Number(first.totalReviewCount)
  if (!(rating >= 1 && rating <= 5)) throw new Error(`API response has no usable averageRating (got ${first.averageRating})`)
  if (!Number.isInteger(count) || count < 1) throw new Error(`API response has no usable totalReviewCount (got ${first.totalReviewCount})`)
  const rawReviews = list.flatMap((p) => p?.reviews ?? [])
  const { reviews, skipped } = selectReviews(rawReviews)
  return {
    output: {
      fetchedAt: now.toISOString(),
      source: 'business-profile',
      rating: Math.round(rating * 10) / 10,
      count,
      reviews,
    },
    skipped,
    fetched: rawReviews.length,
  }
}

// The Places API answer: rating and count only, no reviews (see the header).
export function buildPlacesOutput(place, now = new Date()) {
  const rating = Number(place?.rating)
  const count = Number(place?.userRatingCount)
  if (!(rating >= 1 && rating <= 5)) throw new Error(`Places response has no usable rating (got ${place?.rating})`)
  if (!Number.isInteger(count) || count < 1) throw new Error(`Places response has no usable userRatingCount (got ${place?.userRatingCount})`)
  return {
    output: {
      fetchedAt: now.toISOString(),
      source: 'places',
      rating: Math.round(rating * 10) / 10,
      count,
      reviews: [],
    },
    skipped: {},
    fetched: 0,
  }
}

// ---------------------------------------------------------------------------
// Google API
// ---------------------------------------------------------------------------

class ConfigError extends Error {}
class NotApprovedError extends Error {}

function requireEnv(names) {
  const missing = names.filter((n) => !process.env[n])
  if (missing.length) {
    throw new ConfigError(
      `Missing ${missing.join(', ')}. Set them in the environment (locally: node --env-file=.env.local …; in CI: repository secrets). See README "Google reviews sync".`,
    )
  }
}

async function getAccessToken() {
  requireEnv(['GBP_CLIENT_ID', 'GBP_CLIENT_SECRET', 'GBP_REFRESH_TOKEN'])
  const res = await fetch(ENDPOINTS.token, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GBP_CLIENT_ID,
      client_secret: process.env.GBP_CLIENT_SECRET,
      refresh_token: process.env.GBP_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok || !body.access_token) {
    const hint =
      body.error === 'invalid_grant'
        ? ' The refresh token was revoked or has expired (OAuth apps left in "Testing" expire tokens after 7 days). Run scripts/google-reviews-auth.mjs again and update GBP_REFRESH_TOKEN.'
        : ''
    throw new Error(`Token refresh failed (${res.status}): ${body.error ?? ''} ${body.error_description ?? ''}.${hint}`.trim())
  }
  return body.access_token
}

async function apiGet(url, token) {
  const res = await fetch(url, { headers: { authorization: `Bearer ${token}` } })
  const text = await res.text()
  let body = {}
  try {
    body = text ? JSON.parse(text) : {}
  } catch {
    body = { raw: text }
  }
  if (!res.ok) {
    const message = body.error?.message ?? text.slice(0, 300)
    let hint = ''
    if ((res.status === 403 || res.status === 429) && /quota|has not been used|is disabled|not enabled/i.test(message)) {
      throw new NotApprovedError(
        `GET ${url} → ${res.status}: ${message}\nThe Business Profile APIs ship with a quota of 0 until Google approves the access request for the Cloud project (a 429 "Quota exceeded" on the very first request means exactly that), and each API also has to be enabled on it. See README "Google reviews sync", step 1.`,
      )
    } else if (res.status === 403) {
      hint = '\nThe signed-in Google account must be an owner or manager of the Business Profile.'
    } else if (res.status === 401) {
      hint = '\nAccess token rejected: check GBP_CLIENT_ID / GBP_CLIENT_SECRET match the client the refresh token was issued for.'
    }
    throw new Error(`GET ${url} → ${res.status}: ${message}${hint}`)
  }
  return body
}

async function listLocations(token) {
  const accounts = (await apiGet(ENDPOINTS.accounts, token)).accounts ?? []
  const out = []
  for (const account of accounts) {
    const locations = (await apiGet(ENDPOINTS.locations(account.name), token)).locations ?? []
    for (const location of locations) {
      out.push({ account: account.name, accountName: account.accountName, location: location.name, title: location.title })
    }
  }
  return out
}

// Resolves the `accounts/*/locations/*` name the reviews endpoint needs.
async function resolveLocation(token) {
  const configured = process.env.GBP_LOCATION
  if (configured) {
    if (!/^accounts\/[^/]+\/locations\/[^/]+$/.test(configured)) {
      throw new ConfigError(`GBP_LOCATION must look like accounts/<id>/locations/<id>, got "${configured}".`)
    }
    return configured
  }
  const found = await listLocations(token)
  if (found.length === 0) throw new Error('The token can see no Business Profile locations. Is the account an owner or manager of the listing?')
  if (found.length > 1) {
    throw new ConfigError(
      `The token can see ${found.length} locations; set GBP_LOCATION to the right one:\n` +
        found.map((f) => `  ${f.account}/${f.location}  ${f.title}`).join('\n'),
    )
  }
  return `${found[0].account}/${found[0].location}`
}

async function fetchReviewPages(token, location) {
  const pages = []
  let url = ENDPOINTS.reviews(location)
  for (let guard = 0; guard < 100; guard++) {
    const page = await apiGet(url, token)
    pages.push(page)
    if (!page.nextPageToken) break
    url = `${ENDPOINTS.reviews(location)}&pageToken=${encodeURIComponent(page.nextPageToken)}`
  }
  return pages
}

// ---------------------------------------------------------------------------
// Places API (New)
// ---------------------------------------------------------------------------

async function placesRequest(url, fieldMask, init = {}) {
  requireEnv(['GOOGLE_PLACES_API_KEY'])
  const res = await fetch(url, {
    ...init,
    headers: {
      'content-type': 'application/json',
      'x-goog-api-key': process.env.GOOGLE_PLACES_API_KEY,
      'x-goog-fieldmask': fieldMask,
      ...(init.headers ?? {}),
    },
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    const message = body.error?.message ?? JSON.stringify(body).slice(0, 300)
    const hint =
      res.status === 403
        ? '\nIs "Places API (New)" enabled on the project, and does the key\'s API restriction allow it?'
        : ''
    throw new Error(`${init.method ?? 'GET'} ${url} → ${res.status}: ${message}${hint}`)
  }
  return body
}

// The listing as the Places API knows it, with the search in the comment
// above when nothing pins the Place ID. One IDs-only text search is free.
const DEFAULT_PLACE_QUERY = 'ColumnaQuiro, Carrer dels Vivons 29, 46006 València'

async function resolvePlaceId() {
  if (process.env.GBP_PLACE_ID) return process.env.GBP_PLACE_ID
  const query = process.env.GBP_PLACE_QUERY || DEFAULT_PLACE_QUERY
  const places = await findPlaces(query)
  if (places.length !== 1) {
    throw new ConfigError(
      `The Places text search for "${query}" returned ${places.length} places; set GBP_PLACE_ID to the right one:\n` +
        places.map((p) => `  ${p.id}  ${p.displayName?.text ?? ''}  ${p.formattedAddress ?? ''}`).join('\n'),
    )
  }
  console.error(`Place ID ${places[0].id} (${places[0].displayName?.text ?? ''}); set GBP_PLACE_ID to skip this search.`)
  return places[0].id
}

async function fetchPlace() {
  const id = await resolvePlaceId()
  return placesRequest(ENDPOINTS.place(id), 'id,displayName,rating,userRatingCount')
}

async function findPlaces(query) {
  const body = await placesRequest(ENDPOINTS.searchText, 'places.id,places.displayName,places.formattedAddress', {
    method: 'POST',
    body: JSON.stringify({ textQuery: query }),
  })
  return body.places ?? []
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = { dryRun: false, listLocations: false, fromFile: null, findPlace: null, source: 'auto', out: DEFAULT_OUT }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--dry-run') args.dryRun = true
    else if (a === '--list-locations') args.listLocations = true
    else if (a === '--from-file') args.fromFile = argv[++i]
    else if (a === '--find-place') args.findPlace = argv[++i]
    else if (a === '--source') args.source = argv[++i]
    else if (a === '--out') args.out = resolve(argv[++i])
    else throw new ConfigError(`Unknown argument ${a}`)
  }
  if (!['auto', 'business-profile', 'places'].includes(args.source)) {
    throw new ConfigError(`--source must be auto, business-profile or places, got "${args.source}"`)
  }
  return args
}

function summarise({ output, skipped, fetched }, source) {
  const byLang = output.reviews.reduce((acc, r) => ((acc[r.lang] = (acc[r.lang] ?? 0) + 1), acc), {})
  const lines = [
    `Source: ${source}`,
    `Rating ${output.rating} · ${output.count} reviews on the listing`,
    `Fetched ${fetched} reviews, kept ${output.reviews.length} (${Object.entries(byLang)
      .map(([l, n]) => `${l}: ${n}`)
      .join(', ') || 'none'})`,
  ]
  const dropped = Object.entries(skipped)
  if (dropped.length) lines.push(`Skipped: ${dropped.map(([why, n]) => `${why} ${n}`).join(', ')}`)
  return lines.join('\n')
}

async function main() {
  const args = parseArgs(process.argv.slice(2))

  if (args.listLocations) {
    const token = await getAccessToken()
    const found = await listLocations(token)
    if (found.length === 0) console.log('No locations visible to this token.')
    for (const f of found) console.log(`${f.account}/${f.location}\t${f.title}\t(${f.accountName ?? ''})`)
    return
  }

  if (args.findPlace) {
    const places = await findPlaces(args.findPlace)
    if (places.length === 0) console.log('No places match that query.')
    for (const p of places) console.log(`${p.id}\t${p.displayName?.text ?? ''}\t${p.formattedAddress ?? ''}`)
    return
  }

  let result
  let source
  if (args.fromFile) {
    result = buildOutput(JSON.parse(readFileSync(resolve(args.fromFile), 'utf8')))
    source = args.fromFile
  } else if (args.source === 'places') {
    const place = await fetchPlace()
    result = buildPlacesOutput(place)
    source = `Places API, place ${place.id}`
  } else {
    try {
      const token = await getAccessToken()
      const location = await resolveLocation(token)
      result = buildOutput(await fetchReviewPages(token, location))
      source = location
    } catch (err) {
      const canFallBack = args.source === 'auto' && process.env.GOOGLE_PLACES_API_KEY
      if (!(err instanceof NotApprovedError) || !canFallBack) throw err
      console.error('Business Profile API not approved yet; falling back to the Places API for the rating and count.')
      const place = await fetchPlace()
      result = buildPlacesOutput(place)
      source = `Places API (interim), place ${place.id}`
    }
  }

  console.error(summarise(result, source))

  if (args.dryRun) {
    console.log(JSON.stringify(result.output, null, 2))
    return
  }
  writeFileSync(args.out, `${JSON.stringify(result.output, null, 2)}\n`)
  console.error(`Wrote ${args.out}`)
}

const invokedDirectly = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (invokedDirectly) {
  main().catch((err) => {
    if (err instanceof NotApprovedError) {
      console.error(`Not approved yet: ${err.message}`)
      process.exit(3)
    }
    console.error(err instanceof ConfigError ? `Configuration: ${err.message}` : `Error: ${err.message}`)
    process.exit(err instanceof ConfigError ? 2 : 1)
  })
}
