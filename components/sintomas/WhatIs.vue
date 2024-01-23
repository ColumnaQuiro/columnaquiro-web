<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t(`symptoms.${symptom}.whatIs.title`) }}
    </h2>
    <cq-blocks-sections-paragraph-with-image
      :text="t(`symptoms.${symptom}.whatIs.description`)"
      :image="t(`symptoms.${symptom}.whatIs.image`)"
      :image-alt="t(`symptoms.${symptom}.whatIs.imageAlt`)"
      :image-width="310"
      provider="cloudinary"
    />
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
