<template>
  <div>
    <cq-blocks-sections-intro-section
      :title="t('reservaVisita.header.title')"
      :description="t('reservaVisita.header.subtitle')"
      :background-image-url="`${STATICS_CDN}website/nuestro-centro/local-outside-landscape.webp`"
    />
    <reserva-tu-visita-header />
    <lazy-cq-blocks-testimonials />
    <lazy-home-quiro-logos />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSetSEOTags } from '~/composables/seo'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()

useSetSEOTags(t('reservaVisita.seo.title'), t('reservaVisita.seo.description'))
</script>
