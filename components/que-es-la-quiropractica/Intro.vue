<template>
  <cq-layout-section>
    <h1 class="section-title">
      {{ t('whatIsChiropractic.intro.title') }}
    </h1>
    <cq-blocks-sections-paragraph-with-image
      :text="t('whatIsChiropractic.intro.description')"
      image="website/home/quiro-intro.webp"
      :image-width="240"
      preload
      image-alt="quiropractica valencia"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
