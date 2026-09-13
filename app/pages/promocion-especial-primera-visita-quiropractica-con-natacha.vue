<script setup lang="ts">
import FirstVisitOfferPage from '@/components/pages/FirstVisitOfferPage.vue'
</script>

<template>
  <!-- Meta ads landing for the promo that names Natacha. `practitioner-id` is
       intentionally unset: QuiroFlow expects a team-member UUID and the old
       PracticeHub numeric id ("4") is not one, so passing it only produced a
       booking URL QuiroFlow ignores. -->
  <FirstVisitOfferPage
    :slot-count="30"
    noindex
    seo-title="Oferta especial con Natacha: 30% en tu primera visita | ColumnaQuiro"
    seo-description="Primera visita quiropráctica con Natacha: evaluación completa y ajuste personalizado por solo 50€. Oferta limitada a los primeros 30 pacientes."
  />
</template>
