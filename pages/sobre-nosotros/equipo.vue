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
      "title": "Equipo Quiropráctico - Dedicados a Mejorar tu Salud",
      "description": "Conoce a nuestro equipo de profesionales altamente capacitados dedicados a mejorar tu salud y bienestar. Comienza tu camino hacia una vida más saludable hoy."
    }
  }
}
</i18n>
