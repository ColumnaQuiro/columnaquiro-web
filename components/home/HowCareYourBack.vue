<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('home.howCareYourBack.title') }}
    </h2>
    <div class="flex flex-col md:flex-row gap-5">
      <div v-for="item in items" :key="item.title" class="flex-1">
        <NuxtImg
          :src="`website/home/${rt(item.imagePath)}.webp`"
          provider="cloudinary"
          :width="55"
          loading="lazy"
          :alt="rt(item.title)"
        />
        <h3 class="text-lg font-medium pt-4 pb-2">
          {{ rt(item.title) }}
        </h3>
        <div class="text-base" v-html="rt(item.description)" />
      </div>
    </div>
    <div class="text-center pt-10">
      <cq-components-button :to="localePath('/reserva-cita')" color="tertiary" size="large" @click="trackBookButton">
        {{ t('home.howCareYourBack.button') }}
      </cq-components-button>
    </div>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Item {
  imagePath: string
  title: string
  description: string
}

const { t, rt, tm } = useI18n()
const items: Item[] = tm('home.howCareYourBack.items')
const localePath = useLocalePath()

const trackBookButton = () => {
  useTrackEvent('Book button clicked', {
    from: 'HowCareYourBack'
  })
}
</script>
