<template>
  <cq-layout-section>
    <h1 class="section-title">
      {{ t('title') }}
    </h1>
    <div class="text-lg pt-4 text-center text-md-start">
      {{ t('subtitle') }}
    </div>
    <div>
      <div class="pt-12">
        <h2 class="text-lg font-medium text-center text-md-start">
          {{ t('steps.title') }}
        </h2>
        <div class="grid grid-cols-3">
          <div class="col-span-2">
            <ol class="pt-3 list-decimal">
              <li v-for="step in steps" :key="step" class="text-base" v-html="rt(step)" />
            </ol>
          </div>
        </div>
      </div>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n({ useScope: 'local', inheritLocale: true })

const steps = tm('steps.items')
</script>

<style scoped>

</style>
<i18n>
{
  "es": {
    "title": "Reserva tu visita en ColumnaQuiro",
    "subtitle": "¡Hola! A continuación puedes reservar tu próxima visita en ColumnaQuiro. Ya sea primera visita o paciente frecuente.",
    "steps": {
      "title": "¿Cómo hacer la reserva en 3 sencillos pasos?",
      "items": [
        "Selecciona la cita (Primera visita o Ajuste quiropráctico).",
        "Selecciona la fecha que mejor te vaya y rellena los campos con tus datos de contacto.",
        "Contáctanos por Whatsapp (+34 645967420) y te guiaremos en el proceso de pago (aceptamos efectivo, transferencia bancaria, tarjeta de crédito o Bizum) y hacer efectiva la reserva."
      ]
    }
  }
}
</i18n>
