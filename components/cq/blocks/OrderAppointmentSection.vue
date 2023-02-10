<template>
  <div class="bg-quaternary text-center">
    <cq-layout-section>
      <h3 class="text-4xl">
        {{ t('title') }}
      </h3>
      <div class="text-lg pt-4 pb-6" v-html="t('subtitle')" />
      <cq-components-button size="x-large" color="tertiary" to="/reserva-tu-visita">
        {{ t('button')}}
      </cq-components-button>
    </cq-layout-section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })
</script>

<style scoped>

</style>
<i18n>
{
  "es": {
    "title": "¿Quieres empezar a sentirte mejor con ColumnaQuiro?",
    "subtitle": "Más vale prevenir que curar. Cuanto antes te cuides más potencial de vida podrás descubrir.<br>¡Estás a un paso de empezar a sentirte mejor!",
    "button": "Pide tu cita"
  }
}
</i18n>
