#!/usr/bin/env node
// Wires a finished article into the site: adds its ES/EN pair to
// BLOG_SLUG_PAIRS (which feeds both the sitemap and the prerender routes) and
// marks the plan entry done.
//
//   node scripts/register-post.mjs --week 7
//   node scripts/register-post.mjs --es my-slug --en my-slug-en
//
// Refuses to run unless the markdown files exist and their frontmatter slug
// matches the filename, because a mismatch there produces a page that
// prerenders to a 404 without failing the build.

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const routesPath = resolve(root, 'app/utils/site-routes.ts')
const planPath = resolve(root, 'content/seo/content-plan.json')

const args = process.argv.slice(2)
const valueOf = (flag) => {
  const i = args.indexOf(flag)
  return i === -1 ? null : args[i + 1]
}

const plan = JSON.parse(readFileSync(planPath, 'utf8'))
const weekArg = valueOf('--week')

let esSlug = valueOf('--es')
let enSlug = valueOf('--en')
let entry = null

if (weekArg) {
  entry = plan.plan.find((e) => e.week === Number(weekArg))
  if (!entry) fail(`No plan entry for week ${weekArg}.`)
  if (entry.action === 'refresh-only') {
    markDone(entry)
    console.log(`Week ${entry.week} was a refresh sprint — nothing to register. Marked done.`)
    process.exit(0)
  }
  esSlug ??= entry.es?.slug
  enSlug ??= entry.en?.slug
}

if (!esSlug) fail('Need --es <slug> (or --week N to take it from the plan).')

function fail(msg) {
  console.error(`register-post: ${msg}`)
  process.exit(1)
}

// --- verify the markdown actually exists and is coherent -------------------

function checkFile(locale, slug) {
  const path = resolve(root, `content/blog/${locale}/${slug}.md`)
  if (!existsSync(path)) fail(`Missing ${locale.toUpperCase()} file: content/blog/${locale}/${slug}.md`)
  const raw = readFileSync(path, 'utf8')
  const fm = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!fm) fail(`No frontmatter in content/blog/${locale}/${slug}.md`)
  const front = fm[1]
  const declared = front.match(/^slug:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, '')
  if (declared !== slug) {
    fail(
      `Frontmatter slug mismatch in content/blog/${locale}/${slug}.md — ` +
        `file says "${declared}", filename says "${slug}". These must match or the page 404s.`,
    )
  }
  for (const key of ['title', 'date', 'excerpt', 'author']) {
    if (!new RegExp(`^${key}:\\s*\\S`, 'm').test(front)) {
      fail(`Frontmatter is missing "${key}" in content/blog/${locale}/${slug}.md`)
    }
  }
  const words = raw.split(/\s+/).length
  if (words < 700) {
    console.warn(
      `register-post: warning — content/blog/${locale}/${slug}.md is only ~${words} words. ` +
        `The plan targets 1200+; thin posts are the main reason the existing corpus underperforms.`,
    )
  }
  return words
}

checkFile('es', esSlug)
if (enSlug) checkFile('en', enSlug)

// --- insert the pair into BLOG_SLUG_PAIRS ----------------------------------

let routes = readFileSync(routesPath, 'utf8')

if (routes.includes(`es: '${esSlug}'`)) {
  console.log(`Pair for "${esSlug}" is already registered. Nothing to do.`)
} else {
  const anchor = 'export const BLOG_SLUG_PAIRS: { es: string; en: string | null }[] = ['
  const start = routes.indexOf(anchor)
  if (start === -1) fail('Could not find BLOG_SLUG_PAIRS in app/utils/site-routes.ts.')
  const end = routes.indexOf('\n]', start)
  if (end === -1) fail('Could not find the end of BLOG_SLUG_PAIRS.')

  const line = `  { es: '${esSlug}', en: ${enSlug ? `'${enSlug}'` : 'null'} },`
  routes = `${routes.slice(0, end)}\n${line}${routes.slice(end)}`
  writeFileSync(routesPath, routes)
  console.log(`Registered ${esSlug}${enSlug ? ` / ${enSlug}` : ' (ES only)'} in BLOG_SLUG_PAIRS.`)
}

if (entry) markDone(entry)

function markDone(e) {
  e.status = 'done'
  e.publishedAt = new Date().toISOString().slice(0, 10)
  writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`)
  console.log(`Marked plan week ${e.week} as done.`)
}

console.log('\nNext: run `npm run generate` to confirm the routes prerender before opening the PR.')
