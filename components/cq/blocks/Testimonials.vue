<template>
  <cq-layout-section class="bg-light-grey">
    <h2 class="section-title">
      {{ t('general.testimonials.title') }}
    </h2>
    <div class="sk-ww-google-reviews" data-embed-id="236880" />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
