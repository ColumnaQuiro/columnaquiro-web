<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraph-with-image
      image="website/home/tu-cuerpo.webp"
      :image-width="400"
      :image-alt="t('home.yourBody.alt')"
      image-position="right"
      mobile-image-position="first"
      provider="cloudinary"
    >
      <template #text>
        <h2 class="section-title pb-6">
          {{ t('home.yourBody.title') }}
        </h2>
        <div class="text-base font-semibold pb-8 lg:pb-12">
          {{ t('home.yourBody.subtitle') }}
        </div>
        <div v-html="t('home.yourBody.body')" />
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
