import { onMounted, onUnmounted, ref } from 'vue'

// Every message we act on has to come from the booking widget's own origin.
// Without the check, any page or frame could post us a `booking_completed`
// and bounce visitors wherever it liked, from a page they already trust.
const WIDGET_ORIGIN = 'https://app.quiroflow.com'

type Gtag = (...args: unknown[]) => void

// The widget's first step ("choose a practitioner") measures 930 px tall on
// a 375 px phone and 850 px on desktop. Reserving the phone height up front
// means the page lays out once; the old 900 px guess, plus the widget's own
// late height report, was part of a 0.60 layout shift Lighthouse measured on
// /reserva-cita.
const FIRST_STEP_HEIGHT_PX = 930

// Handles both messages the embedded QuiroFlow booking widget sends.
export function useQuiroFlowWidget(fallbackPx = FIRST_STEP_HEIGHT_PX) {
  const heightPx = ref(fallbackPx)

  function onMessage(event: MessageEvent) {
    if (event.origin !== WIDGET_ORIGIN) return
    const data = event.data
    if (!data || data.source !== 'quiroflow-booking') return

    // The widget posts its own document height on resize, so a fixed-height
    // iframe never clips a step or nests a scrollbar inside this page's.
    if (typeof data.height === 'number') heightPx.value = data.height

    // On a completed booking it hands us the thank-you URL instead of
    // following it itself: a cross-origin frame may only navigate the top
    // window while it still holds user activation, which is easily gone by
    // the time the booking round-trip finishes. Taking it here also avoids
    // the confirmation page rendering nested inside the widget box first.
    // Only our own pages are accepted -- anything else would be an open
    // redirect. If the target is refused, the widget still navigates itself
    // a moment later and CitaReservadaPage pulls the top window across.
    if (data.event === 'booking_completed' && typeof data.url === 'string') {
      let target: URL
      try {
        target = new URL(data.url)
      } catch {
        return
      }
      if (target.origin !== window.location.origin) return
      reportBooking(target)
      window.location.href = target.href
    }
  }

  onMounted(() => window.addEventListener('message', onMessage))
  onUnmounted(() => window.removeEventListener('message', onMessage))

  return { heightPx }
}

// Records the booking from THIS page, in the visitor's own GA4 session, the
// moment the widget says it happened.
//
// Until now the booking was only counted inside the widget's iframe (by the
// GTM container QuiroFlow loads there) and on the thank-you page. The iframe
// lives on app.quiroflow.com, where GA4 keeps a different cookie, so every
// booking turned up as a brand-new "direct" visitor: over 27 Jul - 24 Oct
// 2026, 65 of 87 bookings were credited to sessions that began on
// /cita-reservada, and organic search -- the best-engaged traffic on the
// site -- was credited with 3. Firing here, before the redirect, ties the
// booking to the session that clicked the ad or the search result.
//
// The widget describes the booking in the thank-you URL's query string:
// appointment id, type name, value, currency. The id goes out as
// transaction_id so a duplicate report of the same booking can be
// de-duplicated downstream; nothing in it identifies the patient.
//
// `gtag` is the global declared inline in nuxt.config.ts. Under Consent
// Mode it sends a cookieless ping when the visitor has not consented, so
// the booking is counted (unattributed) even then.
//
// Deliberately GA4 only. The Google Ads conversion "Reserva de cita" (account
// 658-257-5519) is defined in Ads as a page-load rule -- "someone visits a
// page containing cita-reservada" -- and the AW tag configured in
// nuxt.config.ts fires it by itself on the thank-you page. Sending an Ads
// conversion from here as well would count every booking twice.
function reportBooking(target: URL) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (!gtag) return
  const id = target.searchParams.get('booking') ?? undefined
  const type = target.searchParams.get('type') ?? undefined
  const value = Number(target.searchParams.get('value'))
  const currency = target.searchParams.get('currency') ?? 'EUR'
  const payload = {
    transaction_id: id,
    appointment_type: type,
    value: Number.isFinite(value) ? value : undefined,
    currency,
    page_path: window.location.pathname,
  }
  gtag('event', 'Appointment_booked', payload)
}
