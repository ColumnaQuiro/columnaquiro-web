<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'

const { locale } = useAppI18n()

// `heading` is the on-page h1, `seoTitle` the <title> tag -- deliberately
// separate. The h1 avoids echoing the QuiroFlow widget's own "Reservar una
// cita" header below it (two booking prompts stacked read as a broken page),
// while the title tag stays exactly as indexed. Kept short so the widget
// itself sits above the fold.
const content = {
  es: {
    heading: 'Tu visita quiropráctica en Valencia',
    seoTitle: 'Reserva tu visita personalizada',
    seoDescription: 'Reserva tu cita en ColumnaQuiro, tu centro quiropráctico en Valencia. Elige la fecha y hora que mejor te convenga.',
  },
  en: {
    heading: 'Your chiropractic visit in Valencia',
    seoTitle: 'Book your personalized appointment',
    seoDescription: 'Book your appointment at ColumnaQuiro, your chiropractic center in Valencia. Choose the date and time that works best for you.',
  },
}
const c = computed(() => content[locale.value])

useSeo({
  title: computed(() => `${c.value.seoTitle} | ColumnaQuiro`),
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
  <section class="mx-auto max-w-4xl px-6 py-10 sm:py-14">
    <div class="text-center">
      <h1 class="text-3xl font-semibold text-forest sm:text-4xl">{{ c.heading }}</h1>
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
