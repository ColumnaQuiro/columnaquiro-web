<template>
  <div class="header-video w-screen h-screen">
    <div class="absolute inset-0 bg-brand-light-tertiary" />
    <client-only>
      <video
        autoplay
        muted
        loop
        playsinline
        :src="`${STATICS_CDN}website/home/header_video.mp4`"
        class="header-video__video w-full"
        :width="theme.screenWidth"
        :height="theme.screenHeight"
      />
    </client-only>
  </div>
</template>
<script setup lang="ts">
import { STATICS_CDN } from '~/constants/urls'
const theme = computed(() => ({
  screenWidth: process.client && Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
  screenHeight: process.client && Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 64
}))
</script>
<style lang="scss" scoped>
.header-video {
  &__video {
  }
}
</style>
