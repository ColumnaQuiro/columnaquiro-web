<script setup lang="ts">
import { onMounted } from 'vue'
import { useSeo } from '@/composables/useSeo'
import BaseButton from '@/components/ui/BaseButton.vue'

const route = useRoute()

useSeo({
  title: 'Tu cita está reservada | ColumnaQuiro',
  description: 'Tu cita en ColumnaQuiro está confirmada. Recibirás un recordatorio unos días antes.',
})

// Google Ads conversion for a completed booking.
//
// Paste the conversion label from Google Ads (Objetivos -> Conversiones -> the
// "Cita reservada" action -> Configurar la etiqueta) here. While it still holds
// the placeholder, nothing is sent: a `send_to` pointing at a label that does
// not exist records no conversion and just makes the tag look healthy in Tag
// Assistant, which is worse than sending nothing.
const CONVERSION_LABEL = 'REEMPLAZAR_ETIQUETA'

// QuiroFlow appends the booking id, type, amount and currency to the success
// URL it was configured with (Settings > Online Booking > "Successful booking
// page"). The fallback covers anyone who reaches this page without them --
// a bookmark, or a success URL saved before QuiroFlow started sending them.
const FALLBACK_VALUE_EUR = 50

function queryParam(name: string): string | null {
  const raw = route.query[name]
  const value = Array.isArray(raw) ? raw[0] : raw
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

onMounted(() => {
  // If the host page missed the widget's `booking_completed` message, QuiroFlow
  // navigates its own frame here instead, so this page first loads *nested* in
  // /reserva-cita or /oferta-primera-visita: the whole site chrome inside the
  // widget box, the parent URL unchanged, and the consent manager -- which is
  // what unblocks the Ads tag -- never running for this document. Both windows
  // are columnaquiro.com by then, so we can pull the top window across and let
  // it load normally. This has to happen before the dedupe key is claimed:
  // sessionStorage is shared between the two windows, so writing it here would
  // make the real top-level load skip the conversion.
  if (window.top && window.top !== window.self) {
    window.top.location.href = window.location.href
    return
  }

  if (CONVERSION_LABEL === 'REEMPLAZAR_ETIQUETA') return

  const bookingId = queryParam('booking')
  const parsedValue = Number(queryParam('value'))
  const value = Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : FALLBACK_VALUE_EUR
  const currency = queryParam('currency') ?? 'EUR'

  // Keyed by booking so reloading the confirmation doesn't count a second one,
  // while two genuine bookings in the same session still both report.
  try {
    const key = `cq-booking-conversion:${bookingId ?? 'sin-id'}`
    if (sessionStorage.getItem(key)) return
    sessionStorage.setItem(key, '1')
  } catch {
    // Private mode or blocked storage: send the conversion rather than lose it.
  }

  // The Ads tag (AW-17548404792, nuxt.config.ts) ships as `type: 'text/plain'`
  // and only becomes executable once the consent manager unblocks it, so
  // `window.gtag` may still be undefined here. Pushing straight onto dataLayer
  // queues the hit -- gtag replays the array when it initialises -- so a late
  // consent grant still records the conversion rather than dropping it.
  const w = window as Window & { dataLayer?: unknown[] }
  w.dataLayer = w.dataLayer ?? []
  w.dataLayer.push([
    'event',
    'conversion',
    {
      send_to: `AW-17548404792/${CONVERSION_LABEL}`,
      value,
      currency,
      // Lets Google discard a duplicate too, if this page is ever reached
      // twice across sessions (a shared link, a restored tab).
      ...(bookingId ? { transaction_id: bookingId } : {}),
    },
  ])
})
</script>

<template>
  <section class="bg-cream px-6 py-24 text-center">
    <div class="mx-auto max-w-lg">
      <span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-badge-mint/40">
        <img src="/assets/images/icon-bullet-check.svg" alt="" class="h-8 w-8" />
      </span>
      <h1 class="mt-6 text-3xl font-semibold text-forest sm:text-4xl">¡Tu cita está confirmada!</h1>
      <p class="mt-4 text-lg text-body/80">Recibirás un recordatorio unos días antes.</p>
      <BaseButton to="/" class="mt-8">Volver al inicio</BaseButton>
    </div>
  </section>
</template>
