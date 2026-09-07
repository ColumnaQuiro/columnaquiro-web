<script setup lang="ts">
import { onMounted } from 'vue'
import { useSeo } from '@/composables/useSeo'
import BaseButton from '@/components/ui/BaseButton.vue'

useSeo({
  title: 'Tu cita está reservada | ColumnaQuiro',
  description: 'Tu cita en ColumnaQuiro está confirmada. Recibirás un recordatorio unos días antes.',
})

// The Google Ads conversion for a booking is a URL rule on this page ("Reserva
// de cita", 50 EUR, fires when the URL contains cita-reservada), so nothing
// here sends a conversion event of its own -- doing both would count every
// booking twice, since that action counts every conversion rather than one per
// person.
//
// What the rule does need is for this page to be the *top* document. QuiroFlow's
// success redirect runs `window.location.href` from inside the booking iframe,
// so this page first loads nested in /reserva-cita or /oferta-primera-visita:
// the browser's URL stays on the booking page, the rule never sees the
// navigation, and the consent manager -- which is what loads the Google tag at
// all -- never runs for this document either. Both windows are columnaquiro.com
// by then, so we pull the top window across and let it load normally.
//
// useQuiroFlowWidget handles the faster path, where the host page takes the
// widget's booking_completed message and navigates before the frame ever
// redirects itself. This is the fallback for when that message is missed.
onMounted(() => {
  if (window.top && window.top !== window.self) {
    window.top.location.href = window.location.href
  }
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
