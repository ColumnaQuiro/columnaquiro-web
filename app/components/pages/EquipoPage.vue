<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { SITE_URL } from '@/utils/seo'
import { team } from '@/data/team'
import BaseButton from '@/components/ui/BaseButton.vue'

const { locale } = useAppI18n()
const members = computed(() => team[locale.value])

const seoText = {
  es: {
    title: 'Nuestro equipo | ColumnaQuiro',
    description:
      'Conoce a Léa Guido, doctora en quiropráctica en ColumnaQuiro Valencia, y nuestra filosofía de cuidado natural y personalizado.',
  },
  en: {
    title: 'Our team | ColumnaQuiro',
    description:
      "Meet Léa Guido, Doctor of Chiropractic at ColumnaQuiro Valencia, and our philosophy of natural, personalized care.",
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

const content = {
  es: {
    title: 'Conoce a nuestro equipo',
    subtitle:
      'Nuestra filosofía es ayudar a la gente a través del cuidado quiropráctico de una forma natural y no invasiva.',
    button: 'Reserva tu visita',
    bioLink: 'Conoce mi historia →',
    bioPath: '/sobre-nosotros/equipo/lea-guido',
  },
  en: {
    title: 'Meet our team',
    subtitle:
      'Our philosophy is to help people through chiropractic care in a natural and non-invasive way.',
    button: 'Book your visit',
    bioLink: 'Learn more about me →',
    bioPath: '/en/about-us/our-team/lea-guido',
  },
}
const c = computed(() => content[locale.value])

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () =>
        JSON.stringify(
          members.value.map((member) => ({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: member.name,
            jobTitle: member.role,
            description: member.bio,
            image: `${SITE_URL}${member.photo}`,
            worksFor: { '@type': 'Chiropractic', name: 'ColumnaQuiro' },
          })),
        ),
    },
  ],
})
</script>

<template>
  <section class="mx-auto max-w-4xl px-6 py-24 text-center">
    <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>
    <p class="mx-auto mt-4 max-w-2xl text-lg text-body/80">{{ c.subtitle }}</p>
  </section>

  <section class="mx-auto max-w-4xl px-6 pb-24">
    <div
      v-for="member in members"
      :key="member.name"
      class="flex flex-col items-center gap-8 rounded-3xl bg-white p-8 text-center shadow-sm sm:flex-row sm:text-left"
    >
      <img
        :src="member.photo"
        :alt="member.name"
        class="h-40 w-40 shrink-0 rounded-full object-cover"
      />
      <div>
        <h2 class="text-2xl font-semibold text-forest">{{ member.name }}</h2>
        <p class="mt-1 text-sm font-semibold uppercase tracking-wide text-gold-dark">
          {{ member.role }}
        </p>
        <p class="mt-4 text-body/80">{{ member.bio }}</p>
        <div class="mt-6 flex flex-wrap items-center gap-4">
          <BaseButton :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'">{{
            c.button
          }}</BaseButton>
          <NuxtLink :to="c.bioPath" class="text-sm font-semibold text-gold-dark underline">{{
            c.bioLink
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
