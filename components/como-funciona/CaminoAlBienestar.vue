<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('howItWorks.caminoAlBienestar.title') }}
    </h2>
    <div class="text-base pb-10">
      {{ t('howItWorks.caminoAlBienestar.description') }}
    </div>
    <NuxtImg :src="`website/home/camino-al-bienestar-${locale}`" provider="cloudinary" class="mx-auto pb-10" :alt="t('howItWorks.caminoAlBienestar.alt')" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="(item, i) in items"
        :key="item.title"
        :class="['rounded-md p-4', {
          'bg-brand-light-secondary': i === 2,
          'bg-brand-light-tertiary': i === 1,
          'bg-brand-light-red': i === 0,
        }]"
      >
        <div class="flex items-baseline">
          <div class="text-3xl font-medium pr-2">
            {{ i + 1 }}
          </div>
          <div class="text-lg pb-4 font-medium">
            {{ rt(item.title) }}
          </div>
        </div>
        <div>
          {{ rt(item.description) }}
        </div>
      </div>
    </div>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
interface Item {
  title: string
  description: string
  color: string
}

const { t, rt, tm, locale } = useI18n()
const items: Item[] = tm('howItWorks.caminoAlBienestar.items')
</script>
