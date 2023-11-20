<template>
  <div>
    <cq-blocks-sections-intro-section
      :title="t('bookVisit.header.title')"
      :description="t('bookVisit.header.subtitle')"
      :background-image-url="`${STATICS_CDN}website/nuestro-centro/local-outside-landscape.webp`"
    />
    <reserva-tu-visita-header />
    <lazy-cq-blocks-testimonials />
    <lazy-home-quiro-logos />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()

useSEO().setSeoTags(t('bookVisit.seo.title'), t('bookVisit.seo.description'))
</script>
