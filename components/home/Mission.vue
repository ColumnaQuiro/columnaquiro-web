<template>
  <cq-layout-section class="bg-brand-light-quaternary" shape="shape-tertiary-light-right" :shape-width="200" shape-position="bottom-right">
    <h1 class="section-title">
      {{ t('home.mission.title') }}
    </h1>
    <cq-blocks-sections-paragraph-with-image :text="t('home.mission.description')" image="https://dummyimage.com/80/8d5b4c/ffffff" :image-width="350" />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
