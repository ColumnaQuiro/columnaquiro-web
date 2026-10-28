// npm test  (node --test "scripts/**/*.test.mjs")
// Exercises the selection rules against scripts/fixtures/google-reviews.sample.json,
// a synthetic two-page Business Profile API response (no real reviews in it).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { balance, buildOutput, buildPlacesOutput, clip, detectLang, firstName, originalText, sameData, LIMITS } from './sync-google-reviews.mjs'

const pages = JSON.parse(readFileSync(new URL('./fixtures/google-reviews.sample.json', import.meta.url), 'utf8'))

test('rating and count come from the API, rating rounded to one decimal', () => {
  const { output } = buildOutput([{ averageRating: 4.8666, totalReviewCount: 159, reviews: [] }])
  assert.equal(output.rating, 4.9)
  assert.equal(output.count, 159)
})

test('keeps only 5-star, named, es/en reviews with a sentence of text', () => {
  const { output, skipped } = buildOutput(pages, new Date('2026-10-25T00:00:00Z'))
  assert.deepEqual(
    output.reviews.map((r) => r.id),
    ['fx-01', 'fx-02', 'fx-03', 'fx-07', 'fx-09', 'fx-10', 'fx-11'],
  )
  assert.deepEqual(skipped, { 'not 5 stars': 1, anonymous: 1, 'too short': 1, 'not es/en': 1, duplicate: 1 })
  assert.equal(output.fetchedAt, '2026-10-25T00:00:00.000Z')
})

test('first name only, verbatim original text, language per review', () => {
  const { output } = buildOutput(pages)
  const byId = Object.fromEntries(output.reviews.map((r) => [r.id, r]))
  assert.equal(byId['fx-01'].name, 'Prueba')
  assert.equal(byId['fx-01'].lang, 'es')
  assert.equal(byId['fx-01'].date, '2026-10-12')
  assert.equal(byId['fx-02'].lang, 'en')
  assert.match(byId['fx-03'].text, /^Texto de prueba: un trato estupendo/)
  assert.doesNotMatch(byId['fx-03'].text, /Translated by Google|\(Original\)/)
  for (const r of output.reviews) assert.equal(r.rating, 5)
})

test('long reviews are cut at a sentence end and marked', () => {
  const { output } = buildOutput(pages)
  const long = output.reviews.find((r) => r.id === 'fx-09')
  assert.ok(long.text.length <= LIMITS.maxChars + 4)
  assert.match(long.text, /\. \[…\]$/)
  assert.equal(clip('Short enough.'), 'Short enough.')
})

test('helpers', () => {
  assert.equal(firstName('  Maria Teresa García '), 'Maria')
  assert.equal(firstName('WhitestWaters'), 'WhitestWaters')
  assert.equal(firstName('Ana,'), 'Ana')
  assert.equal(firstName('M ANGELES'), 'M Angeles')
  assert.equal(firstName('M LUZ “merypopins”'), 'M Luz')
  assert.equal(firstName('A. Bad'), 'A Bad')
  assert.equal(firstName('AGUSTÍN'), 'Agustín')
  assert.equal(firstName('laura'), 'Laura')
  assert.equal(firstName('C'), 'C')
  assert.equal(originalText('(Translated by Google) Hi\n\n(Original)\nHola  qué tal'), 'Hola qué tal')
  assert.equal(originalText('Mil gracias Lea! (Translated by Google) Thank you so much, Lea!'), 'Mil gracias Lea!')
  assert.equal(originalText('(Translated by Google) Only a translation'), 'Only a translation')
  assert.equal(originalText('Plain\ntext'), 'Plain text')
  assert.equal(detectLang('Me ha ayudado mucho con el dolor de espalda y lo recomiendo'), 'es')
  assert.equal(detectLang('She helped me a lot with my back pain and I would recommend her'), 'en')
  assert.equal(detectLang('Je recommande vivement, mes douleurs ont disparu après quelques séances'), null)
  assert.equal(detectLang('👍'), null)
})

test('refuses a response without rating or count', () => {
  assert.throws(() => buildOutput([{ reviews: [] }]), /averageRating/)
  assert.throws(() => buildOutput([{ averageRating: 4.9, reviews: [] }]), /totalReviewCount/)
})

test('Places source gives rating and count only, tagged as such', () => {
  const { output } = buildPlacesOutput({ id: 'x', rating: 4.86, userRatingCount: 162 }, new Date('2026-10-25T00:00:00Z'))
  assert.deepEqual(output, { fetchedAt: '2026-10-25T00:00:00.000Z', source: 'places', rating: 4.9, count: 162, reviews: [] })
  assert.throws(() => buildPlacesOutput({ rating: 4.9 }), /userRatingCount/)
})

test('a run with the same data as the file is a no-op, whatever the timestamp', () => {
  const a = buildPlacesOutput({ rating: 4.9, userRatingCount: 159 }, new Date('2026-10-25T00:00:00Z')).output
  const b = buildPlacesOutput({ rating: 4.9, userRatingCount: 159 }, new Date('2026-11-01T00:00:00Z')).output
  const c = buildPlacesOutput({ rating: 4.9, userRatingCount: 160 }, new Date('2026-11-01T00:00:00Z')).output
  assert.equal(sameData(a, b), true)
  assert.equal(sameData(a, c), false)
  assert.equal(sameData(null, b), false)
  const full = buildOutput(pages, new Date('2026-10-25T00:00:00Z')).output
  assert.equal(sameData(full, buildOutput(pages, new Date('2026-11-01T00:00:00Z')).output), true)
  assert.equal(sameData(full, a), false)
})

test('each language keeps a floor of its newest reviews inside the cap', () => {
  const mk = (lang, i) => ({ id: `${lang}${i}`, lang, date: `2026-${String(12 - Math.floor(i / 28)).padStart(2, '0')}-${String(28 - (i % 28)).padStart(2, '0')}` })
  // 40 Spanish reviews, all newer than 10 English ones.
  const sorted = [...Array.from({ length: 40 }, (_, i) => mk('es', i)), ...Array.from({ length: 10 }, (_, i) => mk('en', i + 40))]
  const out = balance(sorted, { maxReviews: 30, minPerLang: 8 })
  assert.equal(out.length, 30)
  assert.equal(out.filter((r) => r.lang === 'en').length, 8)
  assert.equal(out.filter((r) => r.lang === 'es').length, 22)
  // Still newest first, and the English ones are the newest English ones.
  assert.deepEqual(out.map((r) => r.id).slice(0, 3), ['es0', 'es1', 'es2'])
  assert.deepEqual(out.filter((r) => r.lang === 'en').map((r) => r.id), ['en40', 'en41', 'en42', 'en43', 'en44', 'en45', 'en46', 'en47'])
  // Nothing to balance when both fit.
  assert.equal(balance(sorted.slice(0, 20), { maxReviews: 30, minPerLang: 8 }).length, 20)
})
