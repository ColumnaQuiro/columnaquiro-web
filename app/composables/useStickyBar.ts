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
  // `shown`: this page has a bar at all. `visible`: it is on screen right now
  // (it slides in once the hero's own buttons have scrolled away). The cookie
  // banner sits above the bar only while the bar is visible; offsetting it
  // whenever the page merely has a bar parked it over the hero's booking
  // button on a phone, before the visitor had scrolled at all.
  const shown = computed(() => !CALENDAR_PAGES.some((p) => route.path.startsWith(p)))
  const pastHero = useState('sticky-bar-past-hero', () => false)
  const visible = computed(() => shown.value && pastHero.value)
  return { shown, pastHero, visible }
}
