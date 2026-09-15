import { computed, onMounted, ref } from 'vue'

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
// Appended on the client, never during render. Every page that embeds the
// widget is prerendered (nuxt.config nitro.prerender.routes), so at build
// time there is no query string at all -- computing the src from the route
// during render would bake in the bare URL and then differ from it on
// hydration. Starting from the same bare URL the prerender emits and adding
// to it in onMounted keeps the markup identical, and leaves the src untouched
// for the direct visits that carry nothing.

const BOOKING_BASE = 'https://app.quiroflow.com/book/columnaquiro'

/**
 * Carried through to the widget. The utm_* five are the standard campaign
 * fields; the rest are the ad platforms' own click ids, which are what let a
 * booking be matched back to a click in the platform's own reporting.
 */
const ATTRIBUTION_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid', 'ttclid', 'msclkid']

export function useBookingUrl(base: { type: string; practitioner?: string }) {
  const attribution = ref<Record<string, string>>({})

  onMounted(() => {
    const here = new URLSearchParams(window.location.search)
    const found: Record<string, string> = {}
    // Keys are compared trimmed and lowercased because hand-built ad URLs are
    // not always clean: the live Meta creative points at "?+utm_campaign=..."
    // and that "+" decodes to a space, so the parameter arrives named
    // " utm_campaign". Analytics drops it on the floor; no reason to do the
    // same here over a character nobody can see.
    for (const [key, value] of here) {
      const normalised = key.trim().toLowerCase()
      if (ATTRIBUTION_PARAMS.includes(normalised) && value.trim()) found[normalised] = value.trim()
    }
    if (Object.keys(found).length > 0) attribution.value = found
  })

  return computed(() => {
    const params = new URLSearchParams({ type: base.type })
    if (base.practitioner) params.set('practitioner', base.practitioner)
    for (const [key, value] of Object.entries(attribution.value)) params.set(key, value)
    return `${BOOKING_BASE}?${params.toString()}`
  })
}
