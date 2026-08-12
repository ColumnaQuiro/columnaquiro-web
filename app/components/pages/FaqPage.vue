<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { faqGroups } from '@/data/faq-groups'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import PageHero from '@/components/ui/PageHero.vue'

const { locale } = useAppI18n()
const groups = computed(() => faqGroups[locale.value])
const title = computed(() =>
  locale.value === 'es'
    ? 'Resuelve tus dudas sobre nuestro cuidado quiropráctico'
    : 'Answer your questions about our chiropractic care',
)

const seoText = {
  es: {
    title: 'Preguntas frecuentes sobre la quiropráctica | ColumnaQuiro',
    description:
      'Respuestas a las preguntas más frecuentes sobre la quiropráctica, los ajustes quiroprácticos y nuestro centro en Valencia.',
  },
  en: {
    title: 'Chiropractic FAQs | ColumnaQuiro',
    description:
      'Answers to the most frequently asked questions about chiropractic care, chiropractic adjustments, and our center in Valencia.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: groups.value.flatMap((group) =>
            group.items.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          ),
        }),
    },
  ],
})
</script>

<template>
  <PageHero :title="title" />

  <section class="mx-auto max-w-4xl space-y-16 px-6 pb-24">
    <div v-for="group in groups" :key="group.title">
      <h2 class="text-2xl font-semibold text-forest">{{ group.title }}</h2>
      <p class="mt-1 text-body/70">{{ group.subtitle }}</p>
      <div class="mt-6">
        <FaqAccordion :faqs="group.items" />
      </div>
    </div>
  </section>
</template>
