<template>
  <div class="header-video w-screen h-screen">
    <div class="header-video__overlay">
      <div class="text-4xl lg:text-6xl text-white pb-8">
        Bienvenid@ a Columnaquiro
      </div>
      <div class="text-2xl lg:text-3xl text-white">
        ¡Estas a un paso de mejorar tu salud!
      </div>
    </div>
    <video
      autoplay
      muted
      loop
      playsinline
      :src="`${STATICS_CDN}website/home/header_video.mp4`"
      class="header-video__video"
    />
    <a class="header-video__arrow-down" href="#mission">
      <NuxtImg :src="`${STATICS_CDN}icons/icon__arrow-down--white.webp`" :width="40" alt="flecha abajo" />
    </a>
  </div>
</template>
<script setup lang="ts">
import { STATICS_CDN } from '~/constants/urls'

useHead({
  link: [
    { rel: 'prefetch', href: 'https://statics.columnaquiro.com/website/home/header_video.mp4' }
  ]
})
</script>
<style lang="scss" scoped>
.header-video {
  &__overlay {
    @apply absolute inset-0 top-14 h-screen bg-[#47474780] flex flex-col justify-center items-center;
    @apply lg:top-16;
  }

  &__video {
    @apply object-cover w-screen h-screen;
  }

  &__arrow-down {
    @apply absolute bottom-2 inset-x-0 animate-bounce;

    img {
      @apply mx-auto;
    }
  }
}
</style>
