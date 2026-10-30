<script setup lang="ts">
import { computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import CookieConsent from '@/components/ui/CookieConsent.vue'
import LocaleSuggestBar from '@/components/ui/LocaleSuggestBar.vue'
import StickyActionBar from '@/components/ui/StickyActionBar.vue'
import { useStickyBar } from '@/composables/useStickyBar'
import { clinicSchema, SITE_URL } from '@/utils/seo'

const { shown: stickyBarShown } = useStickyBar()

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Chiropractic',
  name: clinicSchema.name,
  legalName: clinicSchema.legalName,
  url: SITE_URL,
  image: `${SITE_URL}/assets/images/home-hero.jpg`,
  logo: `${SITE_URL}/assets/images/logo-quiro.png`,
  telephone: clinicSchema.telephone,
  email: clinicSchema.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: clinicSchema.streetAddress,
    addressLocality: clinicSchema.addressLocality,
    postalCode: clinicSchema.postalCode,
    addressRegion: clinicSchema.addressRegion,
    addressCountry: clinicSchema.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: clinicSchema.latitude,
    longitude: clinicSchema.longitude,
  },
  hasMap: clinicSchema.mapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
      opens: '15:00',
      closes: '20:00',
    },
  ],
  sameAs: clinicSchema.sameAs,
  priceRange: '€€',
}

useHead({
  // Read by main.css to lift the QuiroFlow chat bubble above the sticky bar
  // on a phone. The bubble is added to <body> by its own script, outside this
  // layout, so a class here is the one thing it can be placed by.
  bodyAttrs: { class: computed(() => (stickyBarShown.value ? 'has-sticky-bar' : '')) },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(businessJsonLd),
    },
  ],
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-cream" :class="{ 'pb-20 md:pb-0': stickyBarShown }">
    <AppHeader />
    <LocaleSuggestBar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <StickyActionBar />
    <CookieConsent />
  </div>
</template>
