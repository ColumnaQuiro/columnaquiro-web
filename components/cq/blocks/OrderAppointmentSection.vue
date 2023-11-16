<template>
  <div class="text-center">
    <cq-layout-section>
      <h2 class="section-title">
        {{ t('general.orderAppointment.title') }}
      </h2>
      <div class="text-lg pt-4 pb-6" v-html="t('general.orderAppointment.subtitle')" />
      <cq-components-button size="x-large" color="tertiary" to="/reserva-cita-centro-quiropractico-valencia">
        {{ t('general.orderAppointment.button') }}
      </cq-components-button>
    </cq-layout-section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
