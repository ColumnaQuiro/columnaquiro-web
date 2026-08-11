<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { faqGroups } from '@/data/faq-groups'

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
  <section class="mx-auto max-w-4xl px-6 py-24 text-center">
    <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ title }}</h1>
  </section>

  <section class="mx-auto max-w-4xl space-y-16 px-6 pb-24">
    <div v-for="group in groups" :key="group.title">
      <h2 class="text-2xl font-semibold text-forest">{{ group.title }}</h2>
      <p class="mt-1 text-body/70">{{ group.subtitle }}</p>
      <div class="mt-6 space-y-4">
        <details
          v-for="item in group.items"
          :key="item.q"
          class="rounded-2xl bg-white p-6 shadow-sm"
        >
          <summary class="cursor-pointer font-semibold text-forest">{{ item.q }}</summary>
          <p class="mt-3 whitespace-pre-line text-sm text-body/70">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
