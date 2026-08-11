<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { clinicSchema, SITE_URL } from '@/utils/seo'

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
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(businessJsonLd),
    },
  ],
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-cream">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
