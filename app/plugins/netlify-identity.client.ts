interface NetlifyIdentity {
  on: (event: 'init' | 'login', callback: (user?: unknown) => void) => void
}

export default defineNuxtPlugin(() => {
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
