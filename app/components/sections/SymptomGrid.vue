<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { SYMPTOM_HUB, SYMPTOM_SLUG_PAIRS } from '@/utils/site-routes'

// The six most searched conditions, each with the words people actually type
// (Search Console: "dolor lumbar", "irradia a la pierna"...). The /sintomas
// pages have existed for a long time with no link to them from anywhere but
// the footer; this is their front door.
const { locale } = useAppI18n()

const content = {
  es: {
    title: '¿Qué te duele?',
    subtitle: 'Elige lo que más se parece a lo tuyo y te contamos cómo podemos ayudarte.',
    items: [
      { slug: 'lumbalgia', label: 'Lumbalgia', hint: 'dolor lumbar' },
      { slug: 'ciatica', label: 'Ciática', hint: 'dolor que baja por la pierna' },
      { slug: 'dolor-de-cervicales-y-cabeza', label: 'Cervicales y dolor de cabeza', hint: 'cuello, migraña' },
      { slug: 'hernia-discal', label: 'Hernia discal', hint: 'diagnosticada o sospecha' },
      { slug: 'escoliosis', label: 'Escoliosis', hint: 'adultos y adolescentes' },
      { slug: 'sindrome-del-tunel-carpiano', label: 'Túnel carpiano', hint: 'mano y muñeca' },
    ],
  },
  en: {
    title: 'Where does it hurt?',
    subtitle: 'Pick what sounds most like you and we explain how we can help.',
    items: [
      { slug: 'lumbalgia', label: 'Lower back pain', hint: 'lumbar pain' },
      { slug: 'ciatica', label: 'Sciatica', hint: 'pain running down the leg' },
      { slug: 'dolor-de-cervicales-y-cabeza', label: 'Neck pain and headaches', hint: 'neck, migraine' },
      { slug: 'hernia-discal', label: 'Herniated disc', hint: 'diagnosed or suspected' },
      { slug: 'escoliosis', label: 'Scoliosis', hint: 'adults and teenagers' },
      { slug: 'sindrome-del-tunel-carpiano', label: 'Carpal tunnel', hint: 'hand and wrist' },
    ],
  },
}

const c = computed(() => content[locale.value])

function pathFor(slugEs: string) {
  if (locale.value === 'es') return `${SYMPTOM_HUB.es}/${slugEs}`
  const pair = SYMPTOM_SLUG_PAIRS.find((p) => p.es === slugEs)
  return `${SYMPTOM_HUB.en}/${pair?.en ?? slugEs}`
}
</script>

<template>
  <section class="bg-cream px-6 pb-20 pt-4">
    <div class="mx-auto max-w-[1280px]">
      <h2 class="section-title">{{ c.title }}</h2>
      <p class="mt-2 text-slate">{{ c.subtitle }}</p>
      <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <NuxtLink
          v-for="item in c.items"
          :key="item.slug"
          :to="pathFor(item.slug)"
          class="group flex flex-col gap-1.5 rounded-2xl border border-forest/10 bg-white p-4 transition-colors hover:border-forest/30 hover:bg-beige"
        >
          <span class="font-semibold leading-tight text-forest">{{ item.label }}</span>
          <span class="text-sm text-slate">{{ item.hint }}</span>
          <span class="mt-auto pt-2 text-sm font-semibold text-gold-dark" aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
