<template>
  <div class="header-video w-screen h-screen">
    <div class="header-video__overlay">
      <h1 class="header-video__title">
        {{ t('home.headerVideo.title') }}
      </h1>
    </div>
    <video
      autoplay
      muted
      loop
      playsinline
      class="header-video__video"
      poster="https://res.cloudinary.com/dqrtj7gca/image/upload/f_auto,q_auto/v1/website/home/header_video_poster"
    >
      <source src="https://res.cloudinary.com/dqrtj7gca/video/upload/f_auto:video,q_auto/v1/website/home/header_video_webm" type="video/webm">
      <source src="https://res.cloudinary.com/dqrtj7gca/video/upload/f_auto:video,q_auto/v1/website/home/header_video_mp4" type="video/mp4">
    </video>

    <a class="header-video__arrow-down" href="#tu-centro">
      <NuxtImg
        src="icons/icon__arrow-down--white.webp"
        provider="s3"
        :width="40"
        alt="flecha abajo"
      />
    </a>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
