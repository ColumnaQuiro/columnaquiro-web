interface NetlifyIdentity {
  on: (event: 'init' | 'login', callback: (user?: unknown) => void) => void
}

// The Netlify Identity widget exists for one person: whoever logs in to the
// CMS at /admin. It used to be injected on every page for every visitor --
// 54 KB of script plus its own mobx runtime, measured by Lighthouse as the
// third-heaviest third party on the home page, for a login nobody else will
// ever see. Now it loads only where it can matter: on /admin itself, or on
// any page reached through one of Identity's own email links, which land on
// the site root carrying the token in the hash (#invite_token=..., etc.).
const TOKEN_HASH = /(invite|recovery|confirmation|email_change)_token=/

export default defineNuxtPlugin(() => {
  const path = window.location.pathname
  if (!path.startsWith('/admin') && !TOKEN_HASH.test(window.location.hash)) return

  const script = document.createElement('script')
  script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js'
  script.onload = () => {
    const identity = (window as unknown as { netlifyIdentity?: NetlifyIdentity }).netlifyIdentity
    identity?.on('init', (user) => {
      if (!user) {
        identity.on('login', () => {
          window.location.href = '/admin/'
        })
      }
    })
  }
  document.head.appendChild(script)
})
