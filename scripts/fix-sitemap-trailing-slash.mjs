import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const sitemapPath = join(__dirname, '..', 'dist', 'sitemap.xml')

function withTrailingSlash(url) {
  const match = url.match(/^(https?:\/\/[^/]+)(\/[^?#]*)?(.*)$/)
  if (!match) return url
  const [, origin, path = '/', rest] = match
  if (path.endsWith('/')) return url
  return `${origin}${path}/${rest}`
}

let xml = readFileSync(sitemapPath, 'utf-8')
xml = xml.replace(/<loc>([^<]+)<\/loc>/g, (_, url) => `<loc>${withTrailingSlash(url)}</loc>`)
xml = xml.replace(/href="(https?:\/\/[^"]+)"/g, (_, url) => `href="${withTrailingSlash(url)}"`)
writeFileSync(sitemapPath, xml)

// Every URL in the sitemap must be the 200 form; one without the slash is a
// 301, and a whole sitemap of them is what this script exists to prevent.
const bad = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((url) => !url.endsWith('/'))
if (bad.length) {
  console.error(`[fix-sitemap-trailing-slash] ${bad.length} <loc> without a trailing slash, e.g. ${bad[0]}`)
  process.exit(1)
}

console.log('[fix-sitemap-trailing-slash] Rewrote sitemap.xml locs/alternates to match live trailing-slash URLs')
