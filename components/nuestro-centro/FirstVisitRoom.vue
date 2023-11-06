<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('nuestroCentro.salaDePrimeraVisita.title') }}
    </h2>
    <cq-blocks-sections-paragraph-with-image
      :image="`${STATICS_CDN}website/nuestro-centro/local-first-visit-room.webp`"
      :image-width="350"
      :text="t('nuestroCentro.salaDePrimeraVisita.description')"
      image-position="left"
      :image-alt="t('nuestroCentro.salaDePrimeraVisita.title')"
      text-narrow
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
</script>
