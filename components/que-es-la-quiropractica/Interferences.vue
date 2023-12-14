<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('whatIsChiropractic.interferences.title') }}
    </h2>
    <div class="text-base">
      {{ t('whatIsChiropractic.interferences.subtitle') }}
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-center">
      <div v-for="item in items" :key="rt(item.icon)">
        <NuxtImg
          :src="`icons/icon-${rt(item.icon)}.webp`"
          provider="s3"
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

interface Item {
  icon: string
  title: string
  body: string
}
const { t, tm, rt } = useI18n()
const items: Item[] = tm('whatIsChiropractic.interferences.items')
</script>
