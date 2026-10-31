<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { pathFor, BLOG_HUB } from '@/utils/site-routes'

// The four questions people ask before booking, in the order they ask them.
// Written first for the English home page (newcomers unsure how private
// healthcare works here); the Spanish home page now carries the same answers,
// since referral, payment and insurance are what Spanish patients ask too.
const { locale } = useAppI18n()

const copy = {
  es: {
    eyebrow: 'Antes de reservar',
    title: 'Lo que suele preguntarse antes de la primera visita',
    items: [
      {
        title: 'Sin derivación médica',
        text: 'Reservas directamente online. La primera visita empieza con una valoración completa y, si tu caso necesita otro especialista, te lo decimos.',
      },
      {
        title: 'Pagas en el centro',
        text: '70 € la primera visita, el mismo día. No se cobra nada al reservar y no hace falta tarjeta.',
      },
      {
        title: 'Español, inglés y francés',
        text: 'Atendemos en los tres idiomas, así que puedes venir con tu pareja o tu familia aunque no hablen español.',
      },
      {
        title: 'Seguro médico',
        text: 'La mayoría de pólizas no cubren la quiropráctica; algunas de reembolso devuelven parte. Te contamos qué mirar en nuestra guía.',
        link: { to: `${BLOG_HUB.es}/seguro-medico-cubre-quiropractica-espana`, label: 'Guía de seguros' },
      },
    ],
    book: 'Reservar primera visita · 70 €',
    firstVisit: 'Qué pasa en la primera visita',
    firstVisitPath: `${BLOG_HUB.es}/primera-visita-al-quiropractico-que-esperar`,
  },
  en: {
    eyebrow: 'New to Valencia?',
    title: 'How a chiropractic visit works here',
    items: [
      {
        title: 'No referral needed',
        text: 'Book directly online. The first visit starts with a full assessment; if your case needs another specialist, we say so.',
      },
      {
        title: 'You pay at the clinic',
        text: '€70 for the first visit, paid on the day. Nothing is charged when you book and no card is needed to reserve.',
      },
      {
        title: 'English, Spanish and French',
        text: 'Both chiropractors consult in English. Most of our Google reviews are written by patients from abroad.',
      },
      {
        title: 'Insurance',
        text: 'Most Spanish health policies do not cover chiropractic; some reimburse part of it. We explain what to check in our guide.',
        link: { to: `${BLOG_HUB.en}/does-spanish-health-insurance-cover-chiropractic`, label: 'Insurance guide' },
      },
    ],
    book: 'Book a first visit · €70',
    firstVisit: 'What happens on the first visit',
    firstVisitPath: `${BLOG_HUB.en}/first-chiropractic-visit-what-to-expect`,
  },
}
const c = computed(() => copy[locale.value])
const bookPath = computed(() => pathFor('reserva-cita', locale.value))
</script>

<template>
  <section class="bg-forest px-6 py-20 text-cream">
    <div class="mx-auto max-w-[1280px]">
      <p class="text-sm font-medium text-gold">{{ c.eyebrow }}</p>
      <h2 class="section-title mt-2 text-white">{{ c.title }}</h2>
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="item in c.items" :key="item.title" class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h3 class="font-semibold text-white">{{ item.title }}</h3>
          <p class="mt-2 text-sm text-sage">{{ item.text }}</p>
          <NuxtLink v-if="item.link" :to="item.link.to" class="mt-3 inline-block text-sm font-semibold text-gold underline">{{
            item.link.label
          }}</NuxtLink>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap gap-3" data-cta="expat">
        <NuxtLink
          :to="bookPath"
          class="inline-flex items-center rounded-xl bg-gold px-6 py-3 text-sm font-medium text-gold-dark hover:bg-gold-dark hover:text-white"
          >{{ c.book }}</NuxtLink
        >
        <NuxtLink
          :to="c.firstVisitPath"
          class="inline-flex items-center rounded-xl border border-sage px-6 py-3 text-sm font-medium text-white hover:bg-forest-light"
          >{{ c.firstVisit }}</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
