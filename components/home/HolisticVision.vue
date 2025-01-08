<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraph-with-image
      image-position="left"
      :image-width="400"
      :image-alt="t('home.holisticVision.alt')"
      mobile-image-position="first"
      image="website/home/vision-holistica.webp"
      provider="cloudinary"
    >
      <template #text>
        <h2 class="section-title pb-6">
          {{ t('home.holisticVision.title') }}
        </h2>
        <h3 class="text-base font-bold pb-6">
          {{ t('home.holisticVision.subtitle') }}
        </h3>
        <div class="text-base" v-html="t('home.holisticVision.body')" />
      </template>
    </cq-blocks-sections-paragraph-with-image>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>

</style>
