<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('nuestroCentro.salaDeEspera.title') }}
    </h2>
    <cq-blocks-sections-paragraph-with-image
      :image="`${STATICS_CDN}website/nuestro-centro/local-reception.webp`"
      :image-width="400"
      :text="t('nuestroCentro.salaDeEspera.description')"
      image-alt="t('nuestroCentro.salaDeEspera.title')"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
</script>
