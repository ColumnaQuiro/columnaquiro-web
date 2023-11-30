<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('home.howCareYourBack.title') }}
    </h2>
    <div class="flex flex-col md:flex-row gap-5 text-center">
      <div v-for="item in items" :key="item.title" class="flex-1">
        <NuxtImg
          :src="`${STATICS_CDN}website/home/${rt(item.imagePath)}.webp`"
          :width="150"
          loading="lazy"
          :alt="rt(item.title)"
          class="mx-auto"
        />
        <h3 class="text-lg font-medium">
          {{ rt(item.title) }}
        </h3>
        <div class="text-base" v-html="rt(item.description)" />
      </div>
    </div>
    <div class="text-center pt-8">
      <cq-components-button :to="localePath('/reserva-cita-centro-quiropractico-valencia')" color="tertiary" @click="trackBookButton">
        {{ t('home.howCareYourBack.button') }}
      </cq-components-button>
    </div>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

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
