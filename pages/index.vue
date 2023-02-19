<template>
  <div>
<!--    <home-quiro-intro />-->
<!--    <home-science />-->
<!--    <home-to-who />-->
<!--    <home-how-it-works />-->
<!--    <cq-blocks-testimonials />-->
<!--    <home-quiro-logos />-->
    haol
  </div>
</template>
<script setup lang="ts">
import { useSeoMeta, useTagTitle } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ inheritLocale: true, useScope: 'local' })

useTagTitle(t('seo.title'))
useSeoMeta({
  description: t('seo.description'),
  ogDescription: t('seo.description'),
  ogTitle: t('seo.title')
})
</script>
<i18n>
{
  "es": {
    "seo": {
      "title": "Centro Quiropráctico de Alta Calidad en València - ColumaQuiro",
      "description": "Centro de quiropráctica en el centro de València. Descubre en el centro ColumnaQuiro qué es la quiropráctica y sus beneficios. La Quiropráctica es para tí"
    }
  }
}
</i18n>
