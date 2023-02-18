<template>
  <div>
    <h1 class="section-title pb-4">
      {{ t('title') }}
    </h1>
    <h2 class="text-2xl text-center">
      {{ t('subtitle') }}
    </h2>
    <contacto-form />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSeoMeta, useTagTitle } from '@unhead/vue'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })

useTagTitle(t('seo.title'))
useSeoMeta({
  description: t('seo.description'),
  ogDescription: t('seo.description'),
  ogTitle: t('seo.title'),
  ogImage: `${STATICS_CDN}website/seo/og-image.png`,
  twitterCard: 'summary_large_image'
})
</script>
<i18n>
{
  "es": {
    "seo": {
      "title": "Contacta con los expertos en quiropráctica - ColumnaQuiro",
      "description": "Contacta con nuestros quiroprácticos altamente capacitados para programar una cita personalizada y descubre cómo podemos ayudarte a recuperar tu calidad de vida."
    },
    "title": "Contacta con ColumnaQuiro",
    "subtitle": "Centro Quiropráctico en Valencia"
  }
}
</i18n>
