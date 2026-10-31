import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

// Every prerendered page ships as page/index.html, which Netlify's default
// pretty-URL resolution happily serves at BOTH /page and /page/ with a 200 —
// it does not redirect one to the other on its own. useSeo.ts sets the
// canonical to the trailing-slash form (see withTrailingSlash in
// site-routes.ts), but without an explicit redirect that canonical is just a
// hint: Google has been indexing both forms of the same page as separate
// URLs and splitting their rankings and backlinks between them. This walks
// the generated site for every page/index.html and writes an exact-match
// 301 forcing the no-slash form to the slash form, so only one URL per page
// is ever served as a 200.
const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'dist')
const redirectsPath = join(publicDir, '_redirects')

// Retired pages that used to be indexable and may still carry backlinks or
// cached SERP entries. Add an entry here whenever a route is removed instead
// of just deleting it, so the old URL 301s to its replacement rather than
// 404ing away whatever authority it had.
const LEGACY_REDIRECTS = [
  // /blog/dolor-de-espalda duplicated /sintomas/dolor-de-espalda almost
  // word for word and never ranked on its own — retired in favour of the
  // symptom page, which is the one meant to own the generic term.
  { from: '/blog/dolor-de-espalda', to: '/sintomas/dolor-de-espalda/' },
  { from: '/en/blog/back-pain', to: '/en/symptoms/back-pain/' },
  // The two neighbourhood posts became proper landing pages (Oct 2026): a
  // dated article for "quiropráctico en Russafa" competed with itself.
  { from: '/blog/quiropractico-en-russafa-valencia', to: '/quiropractico-russafa-valencia/' },
  { from: '/blog/quiropractico-en-russafa-valencia/', to: '/quiropractico-russafa-valencia/' },
  { from: '/en/blog/chiropractor-in-russafa-valencia', to: '/en/chiropractor-russafa-valencia/' },
  { from: '/en/blog/chiropractor-in-russafa-valencia/', to: '/en/chiropractor-russafa-valencia/' },
  { from: '/blog/quiropractico-eixample-valencia', to: '/quiropractico-eixample-valencia/' },
  { from: '/blog/quiropractico-eixample-valencia/', to: '/quiropractico-eixample-valencia/' },
  { from: '/en/blog/chiropractor-in-eixample-valencia', to: '/en/chiropractor-eixample-valencia/' },
  { from: '/en/blog/chiropractor-in-eixample-valencia/', to: '/en/chiropractor-eixample-valencia/' },
  // Overlapping posts merged into one (Oct 2026 SEO audit): each pair
  // competed for the same searches, so the weaker one now 301s to the
  // merged post (or, for scoliosis, to the symptom page that owns the term).
  { from: '/blog/lordosis-cervical', to: '/blog/rectificacion-de-cervicales-sintomas-y-tratamiento-quiropractico/' },
  { from: '/en/blog/cervical-lordosis', to: '/en/blog/straight-neck-and-cervical-lordosis/' },
  { from: '/blog/migrana-cervical-que-es-y-como-aliviarla', to: '/blog/guia-completa-para-tratar-el-dolor-de-cabeza-por-cervicales/' },
  { from: '/en/blog/cervical-migraine', to: '/en/blog/complete-guide-to-treating-cervical-headache/' },
  { from: '/blog/como-eliminar-pitidos-en-los-oidos-con-quiropractica', to: '/blog/puede-la-cervical-afectar-el-oido-descubre-como-y-por-que/' },
  { from: '/en/blog/how-to-eliminate-ringing-in-the-ears-with-chiropractic', to: '/en/blog/can-the-cervical-affect-the-ear/' },
  { from: '/blog/quiropractica-clave-para-la-escoliosis', to: '/sintomas/escoliosis/' },
  { from: '/en/blog/chiropractic-key-to-fighting-scoliosis', to: '/en/symptoms/scoliosis/' },
  { from: '/blog/es-bueno-crujirse-los-dedos-descubre-la-verdad-aqui', to: '/blog/es-malo-que-te-crujan-los-huesos-descubre-la-verdad/' },
  { from: '/blog/coxalgia-que-es-sintomas-y-beneficios-de-la-quiropractica', to: '/blog/dolor-de-cadera-y-piernas/' },
  { from: '/en/blog/coxalgia', to: '/en/blog/hip-and-leg-pain-what-it-is-and-how-to-treat-it/' },
  // English slugs that read as machine translations, renamed (Oct 2026).
  { from: '/en/blog/trapezius-nerve-grip', to: '/en/blog/trapezius-pinched-nerve/' },
  { from: '/en/blog/is-it-good-to-crunch-your-back', to: '/en/blog/is-it-good-to-crack-your-back/' },
  { from: '/en/blog/is-it-bad-to-have-your-bones-crunching', to: '/en/blog/is-it-bad-when-your-joints-crack/' },
  { from: '/en/blog/cervical-rectification-symptoms-and-chiropractic-care', to: '/en/blog/straight-neck-and-cervical-lordosis/' },
  { from: '/en/blog/valencia-se-endereza-por-que-la-quiropractica-gana-terreno-frente-al-dolor-de-espalda', to: '/en/blog/valencia-is-straightening-up/' },
]

if (!existsSync(publicDir)) {
  console.error(`[write-trailing-slash-redirects] ${publicDir} does not exist, skipping`)
  process.exit(0)
}

// No generated trailing-slash rules any more. Netlify matches redirect
// sources with and without the trailing slash, so a forced rule
// `/page  /page/  301!` also matches `/page/` and sends it to itself: the
// moment these rules were placed ahead of Nitro's catch-all (25 Oct 2026)
// every page except the home entered a redirect loop in production. They
// had never been needed: Netlify redirects /page to /page/ on its own for
// every page/index.html, which is what the earlier "working" 301s were.
const legacyRules = LEGACY_REDIRECTS.map(({ from, to }) => `${from}  ${to}  301!`)

// Netlify applies the first matching rule and ignores the rest. Nitro's
// netlify-static preset has already written `/* /404.html 404` into this
// file by the time we run, and an earlier version of this script appended
// our rules AFTER it -- so every retired URL was answered by the catch-all
// 404 and the legacy redirects never fired in production (checked 25 Oct
// 2026: /blog/dolor-de-espalda, redirected here since August, still 404ed).
// The trailing-slash redirects only appeared to work because Netlify
// redirects /dir to /dir/ on its own. Our rules now go first, and whatever
// Nitro (or anything else) wrote stays below them.
const GENERATED_MARK = '# Auto-generated by scripts/write-trailing-slash-redirects.mjs'
let existing = existsSync(redirectsPath) ? readFileSync(redirectsPath, 'utf-8') : ''
// Idempotent: drop a block this script wrote on a previous run.
const markIndex = existing.indexOf(GENERATED_MARK)
if (markIndex !== -1) {
  const endIndex = existing.indexOf('# End of auto-generated rules.')
  existing = endIndex === -1 ? existing.slice(0, markIndex) : existing.slice(0, markIndex) + existing.slice(endIndex + '# End of auto-generated rules.'.length)
}
existing = existing.trim()

writeFileSync(
  redirectsPath,
  `${GENERATED_MARK} — do not hand-edit.\n` +
    `# Retired pages redirected to their replacement.\n${legacyRules.join('\n')}\n\n` +
    `# End of auto-generated rules.\n` +
    (existing ? `\n# Rules written before this script ran (Nitro's fallback must stay last).\n${existing}\n` : ''),
)

console.log(`[write-trailing-slash-redirects] Wrote ${legacyRules.length} legacy redirect(s) to dist/_redirects`)
