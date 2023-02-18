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
      "title": "Tu primera visita - Evaluación y plan personalizado",
      "description": "Descubre qué esperar en tu primera visita en nuestro centro quiropráctico: evaluación de salud y plan de tratamiento personalizado. Programa tu consulta hoy."
    }
  }
}
</i18n>
