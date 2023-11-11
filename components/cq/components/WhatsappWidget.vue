<template>
  <a class="whatsapp-widget" href="https://api.whatsapp.com/send?phone=34744735363" target="_blank" @click="onWhatsappClicked">
    <NuxtImg :src="`${STATICS_CDN}icons/icon__whatsapp.webp`" width="50" alt="whatsapp" />
  </a>
</template>
<script setup lang="ts">
import { STATICS_CDN } from '~/constants/urls'

const onWhatsappClicked = () => {
  useTrackEvent('contact', {
    method: 'Whatsapp'
  })
}
</script>
<style lang="scss" scoped>
.whatsapp-widget {
  transition: all;
  @apply fixed bottom-2 right-4;

  &:hover {
    img {
      @apply scale-110;
    }
  }
}
</style>
