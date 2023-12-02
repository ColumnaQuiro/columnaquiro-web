<template>
  <cq-layout-section
    id="tu-centro"
    class="bg-brand-light-tertiary"
  >
    <h1 class="section-title pb-0 mb-0">
      {{ t('home.yourCenter.title') }}
    </h1>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
