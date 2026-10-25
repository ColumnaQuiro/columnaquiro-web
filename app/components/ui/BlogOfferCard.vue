<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { symptomContent } from '@/data/symptom-content'
import { SYMPTOM_HUB, SYMPTOM_SLUG_PAIRS, pathFor } from '@/utils/site-routes'
import { socialLinks } from '@/data/clinic'

// The ask, placed where the reader is: after the second section of a post,
// not at the end of it. Blog posts were 4 of the site's 10 biggest landing
// pages over 27 Jul - 24 Oct 2026 (327 sessions, one to two minutes of
// reading) and produced no bookings; the only call to action was a generic
// banner below the last line. The copy names the price and the place, and
// when the post maps to a condition page (blog-symptom.ts) it links there
// too, which is also the first internal link most /sintomas pages get.
const props = defineProps<{ symptomSlug?: string }>()
const { locale } = useAppI18n()

const copy = {
  es: {
    title: '¿Llevas semanas con este dolor?',
    body: 'En la primera visita (70 €, en Russafa / L\'Eixample) evaluamos tu caso, hacemos el primer ajuste y te decimos con claridad si la quiropráctica puede ayudarte. No pagas nada al reservar.',
    book: 'Reservar primera visita',
    whatsapp: 'Preguntar por WhatsApp',
    symptom: (name: string) => `Ver la página de ${name.toLowerCase()} →`,
  },
  en: {
    title: 'Weeks with this pain already?',
    body: 'On the first visit (€70, in Russafa / L\'Eixample) we assess your case, do the first adjustment and tell you plainly whether chiropractic can help. Nothing to pay when booking.',
    book: 'Book a first visit',
    whatsapp: 'Ask on WhatsApp',
    symptom: (name: string) => `Read about ${name.toLowerCase()} →`,
  },
}
const c = computed(() => copy[locale.value])

const symptom = computed(() => {
  if (!props.symptomSlug) return null
  const entry = symptomContent[props.symptomSlug]
  if (!entry) return null
  const pair = SYMPTOM_SLUG_PAIRS.find((p) => p.es === props.symptomSlug)
  const path =
    locale.value === 'es'
      ? `${SYMPTOM_HUB.es}/${props.symptomSlug}`
      : `${SYMPTOM_HUB.en}/${pair?.en ?? props.symptomSlug}`
  return { name: entry[locale.value].title, path }
})

const bookPath = computed(() => pathFor('reserva-cita', locale.value))
const whatsappHref = socialLinks.find((link) => link.label === 'WhatsApp')?.href ?? ''
</script>

<template>
  <aside class="my-10 rounded-2xl bg-forest p-6 text-cream sm:p-8" data-cta="blog-card">
    <h2 class="text-xl font-semibold text-white">{{ c.title }}</h2>
    <p class="mt-2 text-sm text-sage">{{ c.body }}</p>
    <div class="mt-5 flex flex-wrap gap-3">
      <NuxtLink
        :to="bookPath"
        class="inline-flex items-center rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-gold-dark hover:bg-gold-dark hover:text-white"
        >{{ c.book }}</NuxtLink
      >
      <a
        :href="whatsappHref"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-xl border border-sage px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest-light"
        >{{ c.whatsapp }}</a
      >
    </div>
    <NuxtLink v-if="symptom" :to="symptom.path" class="mt-4 inline-block text-sm font-semibold text-gold underline">{{
      c.symptom(symptom.name)
    }}</NuxtLink>
  </aside>
</template>
