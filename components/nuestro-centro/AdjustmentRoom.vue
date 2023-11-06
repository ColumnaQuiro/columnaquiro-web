<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('nuestroCentro.salaDeAjuste.title') }}
    </h2>
    <cq-blocks-sections-paragraph-with-image
      :image="`${STATICS_CDN}website/nuestro-centro/local-adjustment-room.webp`"
      :image-width="350"
      :text="t('nuestroCentro.salaDeAjuste.description')"
      :image-alt="t('nuestroCentro.salaDeAjuste.title')"
      text-narrow
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
</script>
