<template>
  <a class="whatsapp-widget" :href="WHATSAPP_URL" target="_blank" @click="onWhatsappClicked">
    <NuxtImg :src="`${STATICS_CDN}icons/icon__whatsapp.webp`" width="50" alt="whatsapp" />
  </a>
</template>
<script setup lang="ts">
import { STATICS_CDN, WHATSAPP_URL } from '~/constants/urls'

const onWhatsappClicked = () => {
  useTrackEvent('contact', {
    method: 'Whatsapp-widget'
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
