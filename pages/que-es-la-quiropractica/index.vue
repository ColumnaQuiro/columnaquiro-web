<template>
  <div>
    <home-quiro-intro title-type="h1" />
    <que-es-la-quiropractica-subluxation />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta, useTagTitle } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })

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
      "title": "¿Qué es la quiropráctica? - ColumnaQuiro",
      "description": "Mejora con la quiropráctica: centrada en mejorar la funcionalidad del sistema nervioso. Ajustes quiroprácticos para el estrés, el dolor y otros síntomas."
    }
  }
}
</i18n>
