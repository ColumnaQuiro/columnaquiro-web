<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'

const { locale } = useAppI18n()

// The heading leads with the offer rather than with "book an appointment":
// the QuiroFlow widget below renders its own "Reservar una cita" header, and
// two booking prompts stacked on top of each other read as a broken page.
// Kept deliberately short so the widget itself sits above the fold.
const content = {
  es: {
    heading: 'Tu primera visita por 50€',
    oldPrice: '70€',
    subline: 'Evaluación completa, primer ajuste y plan de cuidado personalizado.',
    seoTitle: 'Oferta primera visita quiropráctica | ColumnaQuiro',
    seoDescription:
      'Reserva tu primera visita quiropráctica en ColumnaQuiro Valencia por 50€: evaluación completa, primer ajuste y plan de cuidado personalizado.',
  },
  en: {
    heading: 'Your first visit for €50',
    oldPrice: '€70',
    subline: 'Full assessment, first adjustment and a personalized care plan.',
    seoTitle: 'First chiropractic visit offer | ColumnaQuiro',
    seoDescription:
      'Book your first chiropractic visit at ColumnaQuiro Valencia for €50: full assessment, first adjustment and a personalized care plan.',
  },
}
const c = computed(() => content[locale.value])

useSeo({
  title: computed(() => c.value.seoTitle),
  description: computed(() => c.value.seoDescription),
})

// "Oferta Primera visita" is the discounted QuiroFlow appointment type -- the
// same one the promo landing pages book (PromoFirstVisitPage), as opposed to
// the standard "Primera visita" type used by the general /reserva-cita page.
// This page is the bare booking step for ad/lead traffic that has already
// seen the offer, so it carries the widget without the landing-page pitch.
const OFERTA_PRIMERA_VISITA_TYPE_ID = '91a6b6d9-1bb3-4a66-aa8c-f17ee66e4d1e'
const bookingUrl = `https://app.quiroflow.com/book/columnaquiro?type=${OFERTA_PRIMERA_VISITA_TYPE_ID}`
// Tracks the booking widget's own postMessage'd height so a step never gets
// clipped or shows a scrollbar nested inside this page's scrollbar.
const { heightPx } = useIframeAutoHeight()
</script>

<template>
  <section class="mx-auto max-w-4xl px-6 py-10 sm:py-14">
    <div class="text-center">
      <h1 class="text-3xl font-semibold text-forest sm:text-4xl">
        {{ c.heading }}
        <span class="font-normal text-body/50 line-through">{{ c.oldPrice }}</span>
      </h1>
      <p class="mx-auto mt-3 max-w-2xl text-body/80">{{ c.subline }}</p>
    </div>

    <iframe
      :src="bookingUrl"
      title="Reservar cita"
      loading="lazy"
      :style="{ height: `${heightPx}px` }"
      class="mt-6 w-full rounded-3xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:mt-8"
    />
  </section>
</template>
