#!/usr/bin/env node
// Resolves which article from content/seo/content-plan.json is due, and prints
// its brief. Used by the weekly automation to decide what to write, and by
// hand (`node scripts/next-article.mjs --week 7`) to look up any entry.
//
//   --week N   pick that week regardless of date or status
//   --json     emit raw JSON instead of the readable brief
//   --force    ignore the date gate and take the next pending entry
//   --list     summarise the whole plan and stop

import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const planPath = resolve(root, 'content/seo/content-plan.json')
const plan = JSON.parse(readFileSync(planPath, 'utf8'))

const args = process.argv.slice(2)
const has = (flag) => args.includes(flag)
const valueOf = (flag) => {
  const i = args.indexOf(flag)
  return i === -1 ? null : args[i + 1]
}

if (has('--list')) {
  for (const e of plan.plan) {
    const mark = e.status === 'done' ? 'x' : ' '
    const title = e.es?.title ?? e.en?.title ?? `(${e.action})`
    console.log(`[${mark}] W${String(e.week).padStart(2)} ${e.date}  ${e.cluster.padEnd(11)} ${title}`)
  }
  process.exit(0)
}

const weekArg = valueOf('--week')
let entry

if (weekArg) {
  entry = plan.plan.find((e) => e.week === Number(weekArg))
  if (!entry) {
    console.error(`No plan entry for week ${weekArg}.`)
    process.exit(1)
  }
} else {
  const pending = plan.plan.filter((e) => e.status !== 'done')
  const today = new Date().toISOString().slice(0, 10)
  // Take the oldest entry whose publish date has arrived, so a missed week is
  // picked up on the next run rather than silently skipped.
  entry = has('--force') ? pending[0] : pending.find((e) => e.date <= today)
  if (!entry) {
    const next = pending[0]
    console.error(
      next
        ? `Nothing due yet. Next is week ${next.week} on ${next.date}. Use --force to write it now.`
        : 'The plan is complete — every entry is marked done.',
    )
    process.exit(2)
  }
}

if (has('--json')) {
  console.log(JSON.stringify({ meta: plan.meta, entry }, null, 2))
  process.exit(0)
}

const lines = []
const push = (s = '') => lines.push(s)

push(`WEEK ${entry.week} — ${entry.date}`)
push(`Cluster: ${entry.cluster}   Priority: ${entry.priority}   Intent: ${entry.intent}`)
if (entry.action) push(`Action: ${entry.action}`)
if (entry.reviewRequired) push(`Review required before publish: ${entry.reviewRequired}`)
if (entry.seasonalHook) push(`Timing: ${entry.seasonalHook}`)
push()

if (entry.action === 'refresh-only') {
  push('REFRESH SPRINT — no new post this week. Expand these files:')
  for (const f of entry.refreshTargets ?? []) push(`  - ${f}`)
  push()
  push(`Why: ${entry.why}`)
  console.log(lines.join('\n'))
  process.exit(0)
}

const order = entry.enFirst ? ['en', 'es'] : ['es', 'en']
for (const loc of order) {
  const l = entry[loc]
  if (!l) continue
  push(`── ${loc.toUpperCase()}${entry.enFirst && loc === 'en' ? '  (write this one first)' : ''}`)
  push(`  Title:   ${l.title}`)
  push(`  Slug:    ${l.slug}`)
  push(`  File:    content/blog/${loc}/${l.slug}.md`)
  push(`  Primary: ${l.primaryKeyword}`)
  if (l.secondaryKeywords?.length) push(`  Also:    ${l.secondaryKeywords.join(', ')}`)
  push()
}

push(`Word target: ${entry.wordTarget}`)
push(`Why this post: ${entry.why}`)
if (entry.angle) push(`Angle: ${entry.angle}`)
if (entry.mustCover?.length) {
  push('Must cover:')
  for (const m of entry.mustCover) push(`  - ${m}`)
}
if (entry.internalLinks?.length) {
  push('Internal links to work in naturally:')
  for (const l of entry.internalLinks) push(`  - ${l}`)
}
if (entry.audienceHub) push(`Audience hub to link and support: ${entry.audienceHub}`)
if (entry.refreshTarget) push(`Expand in place (keep the URL): ${entry.refreshTarget}`)
if (entry.warning) push(`\n!! ${entry.warning}`)

console.log(lines.join('\n'))
