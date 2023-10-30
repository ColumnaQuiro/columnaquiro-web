<template>
  <cq-layout-section class="quiro-logos">
    <div class="flex flex-wrap gap-7 justify-center md:justify-start">
      <img
        v-for="logo in logos"
        :key="rt(logo.id)"
        class="quiro-logos__logo"
        :src="`${STATICS_CDN}website/home/quiro-logos/${rt(logo.id)}.webp`"
        :width="200"
        :alt="rt(logo.alt)"
        loading="lazy"
      >
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { tm, rt } = useI18n()
const logos = tm('home.quiroLogos.logos')
</script>

<style lang="scss" scoped>
.quiro-logos {
  &__logo {
    max-height: 80px;
    object-fit: contain;
  }
}
</style>
