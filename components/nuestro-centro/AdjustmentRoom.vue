<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('ourCenter.adjustmentRoom.title') }}
    </h2>
    <cq-blocks-sections-paragraph-with-image
      image="website/nuestro-centro/local-adjustment-room.webp"
      :image-width="350"
      :text="t('ourCenter.adjustmentRoom.description')"
      :image-alt="t('ourCenter.adjustmentRoom.title')"
      text-narrow
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
