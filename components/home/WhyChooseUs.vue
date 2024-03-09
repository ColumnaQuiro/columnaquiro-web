<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('home.whyChooseUs.title') }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
      <div v-for="item in items" :key="rt(item.title)">
        <div class="pb-4">
          <NuxtImg
            :src="rt(item.icon)"
            class="mx-auto"
            provider="cloudinary"
            loading="lazy"
            height="100"
            :alt="rt(item.title)"
          />
        </div>
        <h3 class="text-xl pb-2 font-medium">
          {{ rt(item.title) }}
        </h3>
        <div>
          {{ rt(item.description) }}
        </div>
      </div>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

type Item = {
  title: string
  description: string
  icon: string
}
const { t, tm, rt } = useI18n()

const items: Item[] = tm('home.whyChooseUs.items')
</script>

<style scoped>

</style>
