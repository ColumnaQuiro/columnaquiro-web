<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('nuestroCentro.biblioteca.title') }}
    </h2>
    <cq-blocks-sections-paragraph-with-image
      :image="`${STATICS_CDN}website/nuestro-centro/local-library.webp`"
      :image-width="350"
      :text="t('nuestroCentro.biblioteca.description')"
      :image-alt="t('nuestroCentro.biblioteca.title')"
      image-position="left"
      text-narrow
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
</script>
