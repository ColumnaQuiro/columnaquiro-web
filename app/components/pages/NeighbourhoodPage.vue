<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { SITE_URL } from '@/utils/seo'
import { pathFor, withTrailingSlash } from '@/utils/site-routes'
import { neighbourhoods, type NeighbourhoodId } from '@/data/neighbourhoods'
import { socialLinks } from '@/data/clinic'
import BaseButton from '@/components/ui/BaseButton.vue'
import RatingBadge from '@/components/ui/RatingBadge.vue'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import SymptomGrid from '@/components/sections/SymptomGrid.vue'
import ReviewsSection from '@/components/sections/ReviewsSection.vue'
import LocationBlock from '@/components/sections/LocationBlock.vue'

const props = defineProps<{ id: NeighbourhoodId }>()
const { locale } = useAppI18n()
const route = useRoute()

const entry = computed(() => neighbourhoods[props.id])
const c = computed(() => entry.value[locale.value])

useSeo({
  title: computed(() => c.value.title),
  description: computed(() => c.value.description),
})

const labels = {
  es: { book: 'Reservar primera visita · 70 €', whatsapp: 'Escríbenos por WhatsApp', reviews: 'Reseñas de pacientes del barrio y de fuera' },
  en: { book: 'Book a first visit · €70', whatsapp: 'Message us on WhatsApp', reviews: 'What patients say' },
}
const l = computed(() => labels[locale.value])
const whatsappHref = socialLinks.find((link) => link.label === 'WhatsApp')?.href ?? ''

useHead({
  script: () => [
    {
      key: 'nb-faq',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: c.value.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }),
    },
    {
      key: 'nb-breadcrumbs',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}${locale.value === 'es' ? '/' : '/en/'}` },
          { '@type': 'ListItem', position: 2, name: c.value.heading, item: `${SITE_URL}${withTrailingSlash(route.path)}` },
        ],
      }),
    },
  ],
})
</script>

<template>
  <section class="bg-cream px-6 pb-16 pt-12 sm:pt-20">
    <div class="mx-auto max-w-3xl">
      <div class="flex flex-wrap items-center gap-2">
        <RatingBadge />
        <span class="rounded-full bg-tan px-3 py-1.5 text-sm font-medium text-forest">{{ c.eyebrow }}</span>
      </div>
      <h1 class="mt-5 text-4xl font-semibold leading-[1.05] text-forest sm:text-5xl">{{ c.heading }}</h1>
      <p v-for="(paragraph, i) in c.intro" :key="i" class="mt-4 text-lg text-forest">{{ paragraph }}</p>
      <div class="mt-7 flex flex-col gap-3 sm:flex-row" data-cta="hero">
        <BaseButton :to="pathFor('reserva-cita', locale)" class="justify-center">{{ l.book }}</BaseButton>
        <a
          :href="whatsappHref"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-xl border border-forest px-6 py-3 text-sm font-medium text-forest hover:bg-forest hover:text-white"
          >{{ l.whatsapp }}</a
        >
      </div>
    </div>
  </section>

  <section class="bg-beige px-6 py-16">
    <div class="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold text-forest">{{ c.gettingHereTitle }}</h2>
        <ul class="mt-4 space-y-2 text-body">
          <li v-for="item in c.gettingHere" :key="item" class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />{{ item }}
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold text-forest">{{ c.whoTitle }}</h2>
        <ul class="mt-4 space-y-2 text-body">
          <li v-for="item in c.who" :key="item" class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />{{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>

  <SymptomGrid />

  <ReviewsSection :title="l.reviews" :limit="3" />

  <section class="bg-beige px-6 py-16">
    <div class="mx-auto max-w-3xl">
      <h2 class="section-title text-center">{{ c.faqTitle }}</h2>
      <div class="mt-8"><FaqAccordion :faqs="c.faqs" /></div>
    </div>
  </section>

  <LocationBlock />
</template>
