<template>
  <cq-layout-section shape="shape-secondary-light-left" shape-position="center-left" :shape-width="160">
    <cq-blocks-sections-paragraph-with-image :text="t('home.interferencesSchema.description')" :image="`${STATICS_CDN}website/home/interferences-schema.webp`" :image-width="500" image-position="left" />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
</script>
