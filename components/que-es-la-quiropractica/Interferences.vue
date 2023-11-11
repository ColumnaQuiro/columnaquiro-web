<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('queEsLaQuiropractica.interferences.title') }}
    </h2>
    <div class="text-base">
      {{ t('queEsLaQuiropractica.interferences.subtitle') }}
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-center">
      <div v-for="item in items" :key="rt(item.icon)">
        <NuxtImg
          :src="`${STATICS_CDN}icons/icon-${rt(item.icon)}.webp`"
          :alt="rt(item.title)"
          width="80"
          class="mx-auto"
          loading="lazy"
        />
        <div class="text-xl pt-4">
          {{ rt(item.title) }}
        </div>
        <div class="pt-2">
          {{ rt(item.body ) }}
        </div>
      </div>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

interface Item {
  icon: string
  title: string
  body: string
}
const { t, tm, rt } = useI18n()
const items: Item[] = tm('queEsLaQuiropractica.interferences.items')
</script>
