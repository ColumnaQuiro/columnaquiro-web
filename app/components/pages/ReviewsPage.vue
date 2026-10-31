<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { breadcrumbJsonLd } from '@/utils/schema'
import { pathFor } from '@/utils/site-routes'
import { googleRating } from '@/data/clinic'
import { reviews } from '@/data/reviews'
import RatingBadge from '@/components/ui/RatingBadge.vue'
import ReviewsSection from '@/components/sections/ReviewsSection.vue'
import CtaBanner from '@/components/ui/CtaBanner.vue'

// One page that holds the patient reviews and asks for the next one. Two
// jobs: give a searcher comparing clinics the proof in one place, and give
// the clinic a single link to put on a card at reception and in the day-after
// message -- review count is the number the local pack ranks on, and 159
// after several years is about one a week.
const { locale } = useAppI18n()

const crumbName = { es: 'Reseñas', en: 'Reviews' }
useHead({
  script: [
    {
      key: 'breadcrumbs',
      type: 'application/ld+json',
      innerHTML: () =>
        JSON.stringify(breadcrumbJsonLd(locale.value, [{ name: crumbName[locale.value], path: pathFor('resenas', locale.value) }])),
    },
  ],
})

const content = {
  es: {
    title: `Reseñas de pacientes · ${googleRating.value.toLocaleString('es-ES', { minimumFractionDigits: 1 })} en Google | ColumnaQuiro`,
    description: `${googleRating.count} reseñas en Google con una media de ${googleRating.value.toLocaleString('es-ES', { minimumFractionDigits: 1 })} sobre 5. Lo que cuentan los pacientes de ColumnaQuiro, centro quiropráctico en Russafa / L'Eixample, València.`,
    eyebrow: 'Reseñas',
    heading: 'Lo que dicen nuestros pacientes',
    intro: `${googleRating.count} reseñas en Google con una media de ${googleRating.value.toLocaleString('es-ES', { minimumFractionDigits: 1 })} sobre 5.`,
    askTitle: '¿Has venido a vernos?',
    askBody: 'Una reseña de dos frases en Google es lo que más ayuda a que alguien con tu mismo dolor nos encuentre. Se escribe en un minuto desde el móvil.',
    askButton: 'Escribir una reseña en Google',
    allTitle: 'Reseñas',
  },
  en: {
    title: `Patient reviews · ${googleRating.value.toLocaleString('en-GB', { minimumFractionDigits: 1 })} on Google | ColumnaQuiro`,
    description: `${googleRating.count} Google reviews averaging ${googleRating.value.toLocaleString('en-GB', { minimumFractionDigits: 1 })} out of 5. What patients say about ColumnaQuiro, an English-speaking chiropractic clinic in Russafa / L'Eixample, Valencia.`,
    eyebrow: 'Reviews',
    heading: 'What our patients say',
    intro: `${googleRating.count} Google reviews averaging ${googleRating.value.toLocaleString('en-GB', { minimumFractionDigits: 1 })} out of 5.`,
    askTitle: 'Been to see us?',
    askBody: 'A two-sentence review on Google is what most helps someone with the same pain find us. It takes a minute from your phone.',
    askButton: 'Write a review on Google',
    allTitle: 'Reviews',
  },
}
const c = computed(() => content[locale.value])

useSeo({
  title: computed(() => c.value.title),
  description: computed(() => c.value.description),
})

const total = reviews.length
</script>

<template>
  <section class="bg-cream px-6 pb-12 pt-16 sm:pt-24">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-medium text-gold-dark">{{ c.eyebrow }}</p>
      <h1 class="mt-4 text-4xl font-semibold leading-[1.05] text-forest sm:text-5xl">{{ c.heading }}</h1>
      <div class="mt-6 flex justify-center"><RatingBadge /></div>
      <p class="mt-6 text-lg text-slate">{{ c.intro }}</p>
    </div>
  </section>

  <ReviewsSection :title="c.allTitle" :limit="total" />

  <section class="bg-tan px-6 py-16">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="section-title">{{ c.askTitle }}</h2>
      <p class="mt-4 text-body/80">{{ c.askBody }}</p>
      <a
        :href="googleRating.writeReviewUrl"
        target="_blank"
        rel="noopener"
        class="mt-8 inline-flex items-center gap-2 rounded-xl bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-forest-light"
        >{{ c.askButton }}</a
      >
    </div>
  </section>

  <CtaBanner />
</template>
