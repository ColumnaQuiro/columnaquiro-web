<template>
  <div>
    <h1 class="section-title text-center pb-4">
      {{ t('title') }}
    </h1>
    <h2 class="text-2xl text-center">
      {{ t('subtitle') }}
    </h2>
    <contacto-form />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })
</script>
<i18n>
{
  "es": {
    "title": "Contacta con ColumnaQuiro",
    "subtitle": "Centro Quiropráctico en Valencia"
  }
}
</i18n>
