<template>
  <cq-blocks-sections-intro-section
    :title="t('nuestroCentro.title')"
    :description="t('nuestroCentro.description')"
    :background-image-url="`${STATICS_CDN}website/nuestro-centro/local-outside-landscape.webp`"
  />
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
</script>
