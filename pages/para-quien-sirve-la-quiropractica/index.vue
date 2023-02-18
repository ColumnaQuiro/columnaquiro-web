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
      "title": "¿Quiropráctica para ti? - Enfoque integral - ColumnaQuiro",
      "description": "Descubre si la quiropráctica es adecuada para ti. Nuestro enfoque mejora la salud de atletas, personas activas y aquellos que buscan alivio del dolor crónico."
    }
  }
}
</i18n>
