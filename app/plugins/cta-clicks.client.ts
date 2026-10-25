// Reports the three clicks that precede a booking -- the "Reservar" buttons,
// phone taps and WhatsApp taps -- as GA4 events, with the page they happened
// on. One delegated listener rather than a handler per button: the links are
// rendered by a dozen components (header, hero, sticky bar, blog card, FAQ,
// contact page, footer) and a listener here cannot be forgotten by the next
// component that adds one.
//
// These are the numbers every design change is judged by. GA4 sees the
// booking itself from the calendar's postMessage (useQuiroFlowWidget), but
// without these it cannot say which button, on which page, started it.
//
// `gtag` is the global declared inline in nuxt.config.ts; it queues into the
// dataLayer even before gtag.js has loaded, and under Consent Mode it sends a
// cookieless ping when the visitor has not consented, so nothing is lost.
const BOOKING_PATHS = ['/reserva-cita', '/en/book-appointment']

type Gtag = (...args: unknown[]) => void

function eventFor(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute('href') ?? ''
  if (href.startsWith('tel:')) return 'call_click'
  if (/wa\.me|whatsapp\.com/.test(href)) return 'whatsapp_click'
  if (href === '#reservar-cita') return 'book_click'
  try {
    const url = new URL(href, window.location.origin)
    if (url.origin !== window.location.origin) return null
    const path = url.pathname.replace(/\/$/, '')
    if (BOOKING_PATHS.includes(path)) return 'book_click'
  } catch {
    return null
  }
  return null
}

export default defineNuxtPlugin(() => {
  document.addEventListener(
    'click',
    (event) => {
      const anchor = (event.target as Element | null)?.closest?.('a')
      if (!anchor) return
      const name = eventFor(anchor)
      if (!name) return
      const gtag = (window as unknown as { gtag?: Gtag }).gtag
      gtag?.('event', name, {
        page_path: window.location.pathname,
        link_text: (anchor.textContent ?? '').trim().slice(0, 60),
        // Where on the page the button sits, when the component says so --
        // the sticky bar and the hero both say "Reservar", and the point is
        // to tell them apart.
        cta_position: anchor.closest<HTMLElement>('[data-cta]')?.dataset.cta ?? anchor.dataset.cta ?? 'inline',
      })
    },
    // Capture phase: runs even when a component's own handler stops the
    // event, and before the navigation starts.
    true,
  )
})
