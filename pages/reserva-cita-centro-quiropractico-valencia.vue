<template>
  <div>
    <reserva-tu-visita-header />
    <reserva-tu-visita-booking />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSeoMeta, useTagTitle } from '@unhead/vue'

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
      "title": "Reserva tu visita - ColumaQuiro",
      "description": "Reserva una cita en el Centro Quiropráctico de Valencia. Nuestro equipo de profesionales altamente capacitados brinda atención personalizada y efectiva."
    }
  }
}
</i18n>
