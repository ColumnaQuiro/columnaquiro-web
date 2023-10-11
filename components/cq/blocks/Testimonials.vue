<template>
  <cq-layout-section>
    <div class="section-title">
      {{ t('general.testimonials.title') }}
    </div>
    <carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
      <slide v-for="item in items" :key="rt(item.author)">
        <v-card
          :flat="true"
          class="p-3 h-full !bg-brand-light-quaternary"
        >
          <v-card-text class="flex flex-col justify-center h-full">
            <div class="text-base pb-2">
              {{ rt(item.description) }}
            </div>
            <div class="text-xs italic">
              {{ rt(item.author) }}
            </div>
          </v-card-text>
        </v-card>
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

const { t, tm, rt } = useI18n()
const items = tm('general.testimonials.items')
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
  background: rgb(var(--v-theme-quaternary));
  color: var(--v-theme-blackBranded);
  border-radius: 8px;
}

.carousel__slide {
  padding: 10px;
}

</style>
