#!/usr/bin/env node
// One-off: signs the Business Profile owner in and prints the OAuth refresh
// token that scripts/sync-google-reviews.mjs needs (GBP_REFRESH_TOKEN). Run it
// once on a laptop, paste the token into the GitHub secret, done. Full setup
// in the README under "Google reviews sync".
//
//   GBP_CLIENT_ID=… GBP_CLIENT_SECRET=… node scripts/google-reviews-auth.mjs
//   node --env-file=.env.local scripts/google-reviews-auth.mjs
//
// The client must be an OAuth client of type "Desktop app": those accept a
// loopback redirect on any port, which is what this script listens on.

import { createServer } from 'node:http'
import { randomBytes } from 'node:crypto'
import { exec } from 'node:child_process'
import { SCOPE } from './sync-google-reviews.mjs'

const clientId = process.env.GBP_CLIENT_ID
const clientSecret = process.env.GBP_CLIENT_SECRET
if (!clientId || !clientSecret) {
  console.error('Set GBP_CLIENT_ID and GBP_CLIENT_SECRET (from the OAuth client in Google Cloud Console) and run again.')
  process.exit(2)
}

const state = randomBytes(16).toString('hex')

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
      console.error('Token exchange failed:', JSON.stringify(tokens))
      if (!tokens.refresh_token && tokenRes.ok) {
        console.error('Google only issues a refresh token when the consent screen was shown; revoke the app at https://myaccount.google.com/permissions and run again.')
      }
      finish(1)
      return
    }
    reply(200, 'Signed in. You can close this tab and go back to the terminal.')
    console.error('\nAdd this as the GBP_REFRESH_TOKEN secret (and to .env.local for local runs):\n')
    console.log(tokens.refresh_token)
    console.error('\nNext: node --env-file=.env.local scripts/sync-google-reviews.mjs --list-locations')
    finish(0)
  } catch (err) {
    reply(500, 'Token exchange failed, see the terminal.')
    console.error(err)
    finish(1)
  }
})

let redirectUri
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
  console.error('Sign in with the Google account that owns the Business Profile (hola@columnaquiro.com):\n')
  console.error(auth.href)
  const opener = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start ""' : 'xdg-open'
  exec(`${opener} "${auth.href}"`, () => {})
})
