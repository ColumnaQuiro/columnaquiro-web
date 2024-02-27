<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraph-with-image
      image="website/home/ajuste-quiropractico-columnaquiro"
      image-position="left"
      provider="cloudinary"
      :image-width="450"
    >
      <template #text>
        <h1 class="section-title mb-0">
          {{ t('home.pain.title') }}
        </h1>
        <div class="pb-4" v-html="t('home.pain.description')" />
      </template>
    </cq-blocks-sections-paragraph-with-image>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
