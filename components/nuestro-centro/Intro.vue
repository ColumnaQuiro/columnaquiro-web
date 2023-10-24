<template>
  <cq-blocks-sections-intro-section
    :title="t('nuestroCentro.title')"
    :description="t('nuestroCentro.description')"
    background-image-url="https://dummyimage.com/80/8d5b4c/ffffff"
  />
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
