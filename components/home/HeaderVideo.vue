<template>
  <div class="header-video w-screen h-screen">
    <div class="header-video__overlay">
      <h1 class="header-video__title">
        {{ t('home.headerVideo.title') }}
      </h1>
      <h2 class="header-video__subtitle px-4 md:px-0 pb-5">
        {{ t('home.headerVideo.subtitle') }}
      </h2>
      <cq-components-button href="#oferta" variant="outlined" color="#ffffff" size="large">
        {{ t('home.headerVideo.button') }}
      </cq-components-button>
    </div>
    <video
      autoplay
      muted
      loop
      playsinline
      :src="`${STATICS_CDN}website/home/header_video.mp4`"
      class="header-video__video"
    />
    <a class="header-video__arrow-down" href="#tu-centro">
      <NuxtImg :src="`${STATICS_CDN}icons/icon__arrow-down--white.webp`" :width="40" alt="flecha abajo" />
    </a>
  </div>
</template>
<script setup lang="ts">
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
useHead({
  link: [
    { rel: 'prefetch', href: 'https://statics.columnaquiro.com/website/home/header_video.mp4' }
  ]
})
</script>
<style lang="scss" scoped>
.header-video {
  &__overlay {
    @apply absolute inset-0 h-screen bg-[#47474780] flex flex-col justify-center items-center z-10;
  }

  &__video {
    @apply object-cover w-screen h-screen;
  }

  &__title {
    @apply text-4xl text-white pb-8 text-center;
    @apply lg:text-6xl lg:text-start;
  }

  &__subtitle {
    @apply text-2xl text-white text-center;
    @apply lg:text-3xl lg:text-start;
  }

  &__arrow-down {
    @apply absolute bottom-2 inset-x-0 animate-bounce z-10;

    img {
      @apply mx-auto;
    }
  }
}
</style>
