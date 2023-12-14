<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('ourCenter.waitingRoom.title') }}
    </h2>
    <cq-blocks-sections-paragraph-with-image
      image="website/nuestro-centro/local-reception.webp"
      :image-width="350"
      :text="t('ourCenter.waitingRoom.description')"
      :image-alt="t('ourCenter.waitingRoom.title')"
      text-narrow
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
