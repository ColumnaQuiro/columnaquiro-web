<script setup lang="ts">
import FirstVisitOfferPage from '@/components/pages/FirstVisitOfferPage.vue'
</script>

<template>
  <!-- Landing for the Valencia Expat Daily sponsor spot. English only, like
       the newsletter. Same €50 first visit as /en/first-visit-offer, but with
       no slot count: the newsletter runs for a week and the readers are
       promised the price, not a race for 15 places. The newsletter link
       carries utm_source=valenciaexpatdaily, which useBookingUrl hands to
       QuiroFlow, so these bookings land in booking_attribution. -->
  <FirstVisitOfferPage
    noindex
    heading="A chiropractor who speaks your language"
    lead="Explain your back or neck pain in English or French, without searching for the words. Your first visit includes a full assessment, a chiropractic adjustment and a care plan tailored to you."
    seo-title="€50 first chiropractic visit for Valencia Expat Daily readers | ColumnaQuiro"
    seo-description="English-speaking chiropractors between Russafa and L'Eixample. Valencia Expat Daily readers get their first visit for €50 instead of €70. Book without paying anything."
  />
</template>
