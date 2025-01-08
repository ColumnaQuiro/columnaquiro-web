<template>
  <div class="text-center">
    <cq-layout-section>
      <h2 class="section-title">
        {{ title || t('general.orderAppointment.title') }}
      </h2>
      <p class="text-lg pb-6" v-html="description || t('general.orderAppointment.subtitle')" />
      <cq-components-button size="x-large" color="tertiary" :to="localePath('/reserva-cita')">
        {{ t('general.orderAppointment.button') }}
      </cq-components-button>
    </cq-layout-section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  description: {
    type: String,
    required: false,
    default: ''
  }
})
const { t } = useI18n()
const localePath = useLocalePath()
</script>
