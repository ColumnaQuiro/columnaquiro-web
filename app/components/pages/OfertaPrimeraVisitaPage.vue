<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'

const { locale } = useAppI18n()

const content = {
  es: {
    eyebrow: 'Oferta especial',
    title: 'Reserva tu primera visita',
    intro:
      'Incluye evaluación completa, primer ajuste quiropráctico y un plan de cuidado personalizado.',
    price: 'Primera visita por solo 50€',
    priceStrikethrough: '70€',
    seoTitle: 'Oferta primera visita quiropráctica | ColumnaQuiro',
    seoDescription:
      'Reserva tu primera visita quiropráctica en ColumnaQuiro Valencia por 50€: evaluación completa, primer ajuste y plan de cuidado personalizado.',
  },
  en: {
    eyebrow: 'Special offer',
    title: 'Book your first visit',
    intro:
      'Includes a complete assessment, your first chiropractic adjustment and a personalized care plan.',
    price: 'First visit for only €50',
    priceStrikethrough: '€70',
    seoTitle: 'First chiropractic visit offer | ColumnaQuiro',
    seoDescription:
      'Book your first chiropractic visit at ColumnaQuiro Valencia for €50: complete assessment, first adjustment and a personalized care plan.',
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
  <section class="mx-auto max-w-4xl px-6 py-24">
    <div class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wide text-gold-dark">{{ c.eyebrow }}</p>
      <h1 class="mt-4 text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-body/80">{{ c.intro }}</p>
      <p class="mt-4 text-lg font-semibold text-forest">
        {{ c.price }} <span class="font-normal line-through text-body/50">{{ c.priceStrikethrough }}</span>
      </p>
    </div>

    <iframe
      :src="bookingUrl"
      title="Reservar cita"
      loading="lazy"
      :style="{ height: `${heightPx}px` }"
      class="mt-12 w-full rounded-3xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
    />
  </section>
</template>
