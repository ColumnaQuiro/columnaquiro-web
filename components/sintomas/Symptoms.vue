<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t(`symptoms.${symptom}.symptoms.title`) }}
    </h2>
    <p v-html="t(`symptoms.${symptom}.symptoms.description`)" />
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
defineProps({
  symptom: {
    type: String,
    required: true
  }
})
const { t } = useI18n()
</script>
