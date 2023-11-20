<template>
  <cq-layout-section class="bg-brand-light-secondary">
    <h2 class="section-title">
      {{ t('whatIsChiropractic.nervousSystem.title') }}
    </h2>
    <div class="text-base" v-html="t('whatIsChiropractic.nervousSystem.body')" />
  </cq-layout-section>
</template>
<script setup lang="ts">

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
