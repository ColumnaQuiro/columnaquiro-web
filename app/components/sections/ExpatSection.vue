<script setup lang="ts">
import { pathFor, BLOG_HUB } from '@/utils/site-routes'

// English home page only. The English site used to read as a translation of
// the Spanish one, while the Google reviews show who actually books in
// English: newcomers who found the clinic because it speaks their language,
// often unsure how private healthcare works here. This answers the four
// questions they ask before booking, in the order they ask them.
const items = [
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
]

const firstVisit = `${BLOG_HUB.en}/first-chiropractic-visit-what-to-expect`
const bookPath = pathFor('reserva-cita', 'en')
</script>

<template>
  <section class="bg-forest px-6 py-20 text-cream">
    <div class="mx-auto max-w-[1280px]">
      <p class="text-sm font-medium text-gold">New to Valencia?</p>
      <h2 class="section-title mt-2 text-white">How a chiropractic visit works here</h2>
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="item in items" :key="item.title" class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
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
          >Book a first visit · €70</NuxtLink
        >
        <NuxtLink
          :to="firstVisit"
          class="inline-flex items-center rounded-xl border border-sage px-6 py-3 text-sm font-medium text-white hover:bg-forest-light"
          >What happens on the first visit</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
