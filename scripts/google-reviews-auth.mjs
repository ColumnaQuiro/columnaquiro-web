#!/usr/bin/env node
// One-off: signs the Business Profile owner (or a manager) in and obtains the
// OAuth refresh token that scripts/sync-google-reviews.mjs needs. Full setup
// in the README under "Google reviews sync".
//
//   node scripts/google-reviews-auth.mjs --client-json ~/Downloads/client_secret_….json --write-env --gh-secrets
//
//   --client-json <file>  read the client id and secret from the JSON that the
//                         Cloud Console offers when the OAuth client is created
//                         (otherwise GBP_CLIENT_ID / GBP_CLIENT_SECRET from env)
//   --write-env           save GBP_CLIENT_ID, GBP_CLIENT_SECRET and
//                         GBP_REFRESH_TOKEN into .env.local (gitignored)
//   --gh-secrets          set the same three as GitHub Actions secrets with the
//                         gh CLI (needs `gh auth login` and the repo remote)
//   --push-env            no sign-in: read .env.local and push what it holds to
//                         GitHub (GBP_CLIENT_ID, GBP_CLIENT_SECRET,
//                         GBP_REFRESH_TOKEN and GOOGLE_PLACES_API_KEY as
//                         secrets; GBP_LOCATION and GBP_PLACE_ID as variables)
//
// With --write-env or --gh-secrets the token is never printed. Without them it
// is printed to stdout so it can be pasted wherever it is needed.
//
// The client must be an OAuth client of type "Desktop app": those accept a
// loopback redirect on any port, which is what this script listens on.

import { createServer } from 'node:http'
import { randomBytes } from 'node:crypto'
import { exec, execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SCOPE } from './sync-google-reviews.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ENV_FILE = resolve(root, '.env.local')

const argv = process.argv.slice(2)
const flag = (f) => argv.includes(f)
const value = (f) => {
  const i = argv.indexOf(f)
  return i === -1 ? null : argv[i + 1]
}

function readEnvFile() {
  if (!existsSync(ENV_FILE)) return {}
  return Object.fromEntries(
    readFileSync(ENV_FILE, 'utf8')
      .split('\n')
      .filter((l) => l.includes('=') && !l.startsWith('#'))
      .map((l) => [l.slice(0, l.indexOf('=')).trim(), l.slice(l.indexOf('=') + 1).trim()]),
  )
}

if (flag('--push-env')) {
  const env = readEnvFile()
  const secrets = ['GBP_CLIENT_ID', 'GBP_CLIENT_SECRET', 'GBP_REFRESH_TOKEN', 'GOOGLE_PLACES_API_KEY'].filter((k) => env[k])
  const variables = ['GBP_LOCATION', 'GBP_PLACE_ID'].filter((k) => env[k])
  for (const k of secrets) execFileSync('gh', ['secret', 'set', k], { cwd: root, input: env[k], stdio: ['pipe', 'inherit', 'inherit'] })
  for (const k of variables) execFileSync('gh', ['variable', 'set', k, '--body', env[k]], { cwd: root, stdio: 'inherit' })
  console.error(`Pushed ${secrets.join(', ') || 'no secrets'}${variables.length ? ` and variables ${variables.join(', ')}` : ''} from ${ENV_FILE}.`)
  process.exit(0)
}

let clientId = process.env.GBP_CLIENT_ID
let clientSecret = process.env.GBP_CLIENT_SECRET
const clientJson = value('--client-json')
if (clientJson) {
  const parsed = JSON.parse(readFileSync(resolve(clientJson), 'utf8'))
  const c = parsed.installed ?? parsed.web ?? parsed
  clientId = c.client_id
  clientSecret = c.client_secret
  if (parsed.web) console.error('Warning: this is a "Web application" client; a "Desktop app" client is what the loopback flow expects.')
}
if (!clientId || !clientSecret) {
  console.error('Need the OAuth client: pass --client-json <downloaded file> or set GBP_CLIENT_ID and GBP_CLIENT_SECRET.')
  process.exit(2)
}
const writeEnv = flag('--write-env')
const ghSecrets = flag('--gh-secrets')

// Merge into .env.local without disturbing other variables in it.
function saveEnv(values) {
  const lines = existsSync(ENV_FILE) ? readFileSync(ENV_FILE, 'utf8').split('\n') : []
  for (const [k, v] of Object.entries(values)) {
    const line = `${k}=${v}`
    const i = lines.findIndex((l) => l.startsWith(`${k}=`))
    if (i === -1) lines.push(line)
    else lines[i] = line
  }
  writeFileSync(ENV_FILE, `${lines.filter((l, i, a) => l !== '' || i < a.length - 1).join('\n').replace(/\n*$/, '')}\n`)
}

function setGhSecrets(values) {
  for (const [k, v] of Object.entries(values)) {
    execFileSync('gh', ['secret', 'set', k], { cwd: root, input: v, stdio: ['pipe', 'inherit', 'inherit'] })
  }
}

const state = randomBytes(16).toString('hex')
let redirectUri

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1')
  if (url.pathname !== '/callback') {
    res.writeHead(404).end()
    return
  }
  const reply = (status, text) => {
    res.writeHead(status, { 'content-type': 'text/html; charset=utf-8' })
    res.end(`<!doctype html><meta charset="utf-8"><body style="font-family:system-ui;padding:2rem"><p>${text}</p></body>`)
  }
  if (url.searchParams.get('state') !== state) {
    reply(400, 'State mismatch, start the script again.')
    return
  }
  if (url.searchParams.get('error')) {
    reply(400, `Google returned an error: ${url.searchParams.get('error')}`)
    finish(1)
    return
  }
  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code: url.searchParams.get('code'),
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    })
    const tokens = await tokenRes.json()
    if (!tokenRes.ok || !tokens.refresh_token) {
      reply(500, 'No refresh token in the response, see the terminal.')
      console.error('Token exchange failed:', JSON.stringify({ ...tokens, access_token: undefined, id_token: undefined }))
      if (!tokens.refresh_token && tokenRes.ok) {
        console.error('Google only issues a refresh token when the consent screen was shown; revoke the app at https://myaccount.google.com/permissions and run again.')
      }
      finish(1)
      return
    }
    reply(200, 'Signed in. You can close this tab and go back to the terminal.')
    const values = { GBP_CLIENT_ID: clientId, GBP_CLIENT_SECRET: clientSecret, GBP_REFRESH_TOKEN: tokens.refresh_token }
    if (writeEnv) {
      saveEnv(values)
      console.error(`Saved GBP_CLIENT_ID, GBP_CLIENT_SECRET and GBP_REFRESH_TOKEN to ${ENV_FILE}`)
    }
    if (ghSecrets) {
      setGhSecrets(values)
      console.error('Set the GitHub Actions secrets GBP_CLIENT_ID, GBP_CLIENT_SECRET and GBP_REFRESH_TOKEN.')
    }
    if (!writeEnv && !ghSecrets) {
      console.error('\nAdd this as the GBP_REFRESH_TOKEN secret (and to .env.local for local runs):\n')
      console.log(tokens.refresh_token)
    }
    console.error('\nNext: node --env-file=.env.local scripts/sync-google-reviews.mjs --list-locations')
    finish(0)
  } catch (err) {
    reply(500, 'Token exchange failed, see the terminal.')
    console.error(err)
    finish(1)
  }
})

function finish(code) {
  server.close()
  clearTimeout(timer)
  setTimeout(() => process.exit(code), 100)
}

const timer = setTimeout(() => {
  console.error('No sign-in after 5 minutes, giving up.')
  finish(1)
}, 5 * 60 * 1000)

server.listen(0, '127.0.0.1', () => {
  redirectUri = `http://127.0.0.1:${server.address().port}/callback`
  const auth = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  auth.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: SCOPE,
    access_type: 'offline',
    prompt: 'consent',
    state,
  }).toString()
  console.error('Sign in with a Google account that owns or manages the Business Profile:\n')
  console.error(auth.href)
  const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start ""' : 'xdg-open'
  exec(`${opener} "${auth.href}"`, () => {})
})
