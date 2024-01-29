<template>
  <div>
    <cq-blocks-sections-intro-section
      :title="t('bookVisit.header.title')"
      :description="t('bookVisit.header.subtitle')"
      background-image-url="https://res.cloudinary.com/dqrtj7gca/image/upload/f_auto,q_auto/v1/website/nuestro-centro/zgnomxfz9it5y5loooke"
    />
    <reserva-tu-visita-header />
    <lazy-home-quiro-logos />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setI18nTags()
useSeo.setSeoTags(t('bookVisit.seo.title'), t('bookVisit.seo.description'))
</script>
