<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraph-with-image
      :text="t('home.interferencesSchema.description')"
      image="website/home/interferences-schema.webp"
      :image-width="500"
      image-position="left"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
