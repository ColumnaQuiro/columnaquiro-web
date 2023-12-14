<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('ourCenter.library.title') }}
    </h2>
    <cq-blocks-sections-paragraph-with-image
      image="website/nuestro-centro/local-library.webp"
      :image-width="350"
      :text="t('ourCenter.library.description')"
      :image-alt="t('ourCenter.library.title')"
      image-position="left"
      text-narrow
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
