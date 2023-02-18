<template>
  <div>

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
      "title": "Mejora tu salud con nuestros servicios - ColumnaQuiro",
      "description": "Respuestas a tus preguntas sobre nuestro centro quiropráctico: servicios, enfoque integral y cómo mejorar tu salud. Descubrelo en nuestras preguntas frecuentes."
    }
  }
}
</i18n>
