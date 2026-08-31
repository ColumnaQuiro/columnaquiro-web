import { onMounted, onUnmounted, ref } from 'vue'

// The QuiroFlow booking widget posts its own document height on resize
// (source: 'quiroflow-booking') so a fixed-height iframe never clips a
// step or shows a scrollbar inside a scrollbar. Falls back to `fallbackPx`
// until the first message arrives.
export function useIframeAutoHeight(fallbackPx = 900) {
  const heightPx = ref(fallbackPx)

  function onMessage(event: MessageEvent) {
    if (event.data && event.data.source === 'quiroflow-booking' && typeof event.data.height === 'number') {
      heightPx.value = event.data.height
    }
  }

  onMounted(() => window.addEventListener('message', onMessage))
  onUnmounted(() => window.removeEventListener('message', onMessage))

  return { heightPx }
}
