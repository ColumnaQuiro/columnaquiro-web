<script setup lang="ts">
import FirstVisitOfferPage from '@/components/pages/FirstVisitOfferPage.vue'
</script>

<template>
  <!-- Meta ads landing. Same offer as /oferta-primera-visita, kept on its own
       URL so the existing Meta creatives keep working; noindex so the two do
       not compete for the same organic queries. -->
  <FirstVisitOfferPage
    :slot-count="15"
    noindex
    seo-title="Oferta especial: 30% en tu primera visita | ColumnaQuiro"
    seo-description="Primera visita quiropráctica con evaluación completa y ajuste personalizado por solo 50€. Oferta limitada a los primeros 15 pacientes."
  />
</template>
