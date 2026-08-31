<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'

const { locale } = useAppI18n()

const content = {
  es: {
    title: 'Reserva tu visita personalizada',
    step: 'Paso 1 de 2',
    subtitle: 'Elija su fecha y hora',
    seoDescription: 'Reserva tu cita en ColumnaQuiro, tu centro quiropráctico en Valencia. Elige la fecha y hora que mejor te convenga.',
  },
  en: {
    title: 'Book your personalized appointment',
    step: 'Step 1 of 2',
    subtitle: 'Choose your date and time',
    seoDescription: 'Book your appointment at ColumnaQuiro, your chiropractic center in Valencia. Choose the date and time that works best for you.',
  },
}
const c = computed(() => content[locale.value])

useSeo({
  title: computed(() => `${c.value.title} | ColumnaQuiro`),
  description: computed(() => c.value.seoDescription),
})

// Migrated from PracticeHub's embedded widget to QuiroFlow's own public
// booking page -- iframed rather than linked out so this page keeps the same
// "book right here" layout it always had. The iframe height tracks the
// widget's own postMessage'd height (useIframeAutoHeight) so a step never
// gets clipped or shows a scrollbar nested inside this page's scrollbar.
// "Primera visita" is the standard (non-promo) first-visit type -- this is
// the general booking page, not one of the discounted promo landing pages.
const PRIMERA_VISITA_TYPE_ID = '70a38844-ebb9-4a42-b59e-dd6720160e0d'
const bookingUrl = `https://app.quiroflow.com/book/columnaquiro?type=${PRIMERA_VISITA_TYPE_ID}`
const { heightPx } = useIframeAutoHeight()
</script>

<template>
  <section class="mx-auto max-w-4xl px-6 py-24">
    <div class="text-center">
      <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>
      <p class="mt-2 text-sm font-semibold uppercase tracking-wide text-gold-dark">
        {{ c.step }}
      </p>
      <h2 class="mt-2 text-xl text-body/80">{{ c.subtitle }}</h2>
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
