import { computed } from 'vue'

// Builds the src for the embedded QuiroFlow booking widget, carrying this
// page's own campaign parameters into the iframe.
//
// They do not get there by themselves. A Meta ad lands on
// columnaquiro.com/promocion-especial-... with utm_source/fbclid on the
// query string, but the iframe src is built from scratch -- so inside the
// widget those parameters simply do not exist, and every ad-driven booking
// looked, from the clinic's side, like it came from nowhere. The referrer is
// no help either: this is a cross-origin frame under the default
// strict-origin-when-cross-origin policy, so the widget is told only
// "https://columnaquiro.com/", with no path and no query.
//
// Read from the route rather than from `window.location`, and that
// distinction is the whole reason this was rewritten. The first version
// snapshotted `window.location.search` inside onMounted. That works in dev
// and does nothing at all on the generated site: every page here is
// prerendered and the live URLs carry a trailing slash, and on those the
// router is still settling the real URL at the moment the component mounts.
// Instrumenting the built site is what caught it -- onMounted ran, and
// `window.location.search` was `''` right then, with the query reappearing a
// moment later and nothing left to read it.
//
// It shipped on 15 Sep and was still doing nothing a week later: measured
// against production, 7 bookings, none carrying a click id or a utm, while
// Google Ads alone had sent 48 paid clicks to /oferta-primera-visita over the
// same window. A fix that cannot be seen working is worth no more than the
// bug.
//
// `useRoute().query` has no such race. It is populated from the real URL once
// the router is ready, and it is reactive, so the computed below re-runs on
// its own when that happens. The prerendered HTML still ships the bare URL --
// there is no query at build time -- and the client patches the src exactly
// once, only for the visits that actually carry a campaign.

const BOOKING_BASE = 'https://app.quiroflow.com/book/columnaquiro'

/**
 * Carried through to the widget. The utm_* five are the standard campaign
 * fields; the rest are the ad platforms' own click ids, which are what let a
 * booking be matched back to a click in the platform's own reporting.
 *
 * gbraid/wbraid are Google's stand-ins for gclid when the click cannot be
 * cookied -- iOS app-to-web, mostly, which is a large share of the traffic
 * these pages are bought for.
 */
const ATTRIBUTION_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
  'gbraid',
  'wbraid',
  'ttclid',
  'msclkid',
]

export function useBookingUrl(base: { type: string; practitioner?: string }) {
  const route = useRoute()

  return computed(() => {
    const params = new URLSearchParams({ type: base.type })
    if (base.practitioner) params.set('practitioner', base.practitioner)

    for (const [key, raw] of Object.entries(route.query)) {
      // Keys are compared trimmed and lowercased because hand-built ad URLs
      // are not always clean: the live Meta creative points at
      // "?+utm_campaign=..." and that "+" decodes to a space, so the
      // parameter arrives named " utm_campaign". Analytics drops it on the
      // floor; no reason to do the same here over a character nobody can see.
      const normalised = key.trim().toLowerCase()
      if (!ATTRIBUTION_PARAMS.includes(normalised)) continue

      // A repeated key arrives as an array. The first is the one the ad put
      // there; anything after it was appended by something else.
      const value = (Array.isArray(raw) ? raw[0] : raw)?.trim()
      if (value) params.set(normalised, value)
    }

    return `${BOOKING_BASE}?${params.toString()}`
  })
}
