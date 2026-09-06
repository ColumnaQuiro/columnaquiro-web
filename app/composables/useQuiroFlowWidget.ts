import { onMounted, onUnmounted, ref } from 'vue'

// Every message we act on has to come from the booking widget's own origin.
// Without the check, any page or frame could post us a `booking_completed`
// and bounce visitors wherever it liked, from a page they already trust.
const WIDGET_ORIGIN = 'https://app.quiroflow.com'

// Handles both messages the embedded QuiroFlow booking widget sends.
export function useQuiroFlowWidget(fallbackPx = 900) {
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
      window.location.href = target.href
    }
  }

  onMounted(() => window.addEventListener('message', onMessage))
  onUnmounted(() => window.removeEventListener('message', onMessage))

  return { heightPx }
}
