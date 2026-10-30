import { computed } from 'vue'

// Pages where the booking calendar is already on screen. The sticky bar's one
// job is to put "Reservar" a tap away; where the calendar itself is the page,
// a bar over it would only hide the bottom of the widget. The cookie bar and
// the chat bubble's placement (main.css) share this rule so the bottom edge
// never stacks things on a phone.
const CALENDAR_PAGES = [
  '/reserva-cita',
  '/en/book-appointment',
  '/oferta-primera-visita',
  '/en/first-visit-offer',
  '/promocion-especial-primera-visita-quiropractica',
  '/cita-reservada',
]

export function useStickyBar() {
  const route = useRoute()
  const shown = computed(() => !CALENDAR_PAGES.some((p) => route.path.startsWith(p)))
  return { shown }
}
