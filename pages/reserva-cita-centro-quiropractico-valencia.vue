<template>
  <div>
    <reserva-tu-visita-header />
    <reserva-tu-visita-booking />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSetSEOTags } from '~/composables/seo'

const { t } = useI18n()

useSetSEOTags(t('seo.title'), t('seo.description'))
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
