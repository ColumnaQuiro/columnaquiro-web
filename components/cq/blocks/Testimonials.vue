<template>
  <cq-layout-section class="bg-brand-light-tertiary">
    <div class="section-title">
      {{ t('general.testimonials.title') }}
    </div>
    <carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
      <slide v-for="item in items" :key="rt(item.author)">
        <div
          class="p-3 h-full rounded-xl bg-white"
        >
          <div class="flex flex-row justify-end">
            <NuxtImg :src="`${STATICS_CDN}icons/icon__google.webp`" width="20" alt="google" />
          </div>
          <div class="flex flex-col justify-center h-full">
            <NuxtImg :src="`${STATICS_CDN}icons/icon__five-stars.webp`" width="100" class="pb-4 mx-auto" alt="five stars" />
            <div class="text-base pb-2">
              {{ rt(item.description) }}
            </div>
            <div class="text-xs italic">
              {{ rt(item.author) }}
            </div>
          </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { STATICS_CDN } from '~/constants/urls'

interface Testimonial {
  author: string
  description: string
}

const { t, tm, rt } = useI18n()

const items: Testimonial[] = tm('general.testimonials.items')

const carouselSettings = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 2000,
  transition: 1000
}

const carouselBreakpoints = {
  800: {
    itemsToShow: 2
  },
  1280: {
    itemsToShow: 3
  }
}
</script>
<style lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  color: var(--v-theme-blackBranded);
  border-radius: 8px;
}

.carousel__pagination-button--active::after {
  @apply bg-brand-black;
}

.carousel__slide {
  padding: 10px;
}

.carousel__next {
  right: -30px;
}

.carousel__prev {
  left: -30px;
}
</style>
