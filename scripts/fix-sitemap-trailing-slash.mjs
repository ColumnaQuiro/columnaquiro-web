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

console.log('[fix-sitemap-trailing-slash] Rewrote sitemap.xml locs/alternates to match live trailing-slash URLs')
