<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('nuestroCentro.salaDePrimeraVisita.title') }}
    </h2>
    <cq-blocks-sections-paragraph-with-image
      image="https://dummyimage.com/80/8d5b4c/ffffff"
      :image-width="400"
      :text="t('nuestroCentro.salaDePrimeraVisita.description')"
      image-position="left"
      :image-alt="t('nuestroCentro.salaDePrimeraVisita.title')"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
