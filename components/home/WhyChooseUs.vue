<template>
  <cq-layout-section class="bg-luxury-grey">
    <h2 class="section-title text-white">
      {{ t('home.whyChooseUs.title') }}
    </h2>
    <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
      <div v-for="item in items" :key="rt(item.title)">
        <div class="h-[280px] overflow-hidden">
          <NuxtImg
            :src="rt(item.icon)"
            class="w-full rounded-t-2xl"
            provider="cloudinary"
            loading="lazy"
            :alt="rt(item.title)"
          />
        </div>
        <div class="h-[200px] bg-white rounded-b-2xl p-8">
          <h3 class="text-2xl font-normal pb-2">
            {{ rt(item.title) }}
          </h3>
          <p>
            {{ rt(item.description) }}
          </p>
        </div>
      </div>
    </div>
    <carousel class="md:hidden" :items-to-show="1.2">
      <slide v-for="item in items" :key="rt(item.title)" class="flex flex-col pr-3">
        <div class="w-full h-[220px] overflow-hidden">
          <NuxtImg
            :src="rt(item.icon)"
            class="w-full rounded-t-2xl"
            provider="cloudinary"
            loading="lazy"
            :alt="rt(item.title)"
          />
        </div>
        <div class="h-[200px] bg-white rounded-b-2xl p-4">
          <h3 class="text-xl pb-2 font-medium">
            {{ rt(item.title) }}
          </h3>
          <div>
            {{ rt(item.description) }}
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

type Item = {
  title: string
  description: string
  icon: string
}
const {
  t,
  tm,
  rt
} = useI18n()

const items: Item[] = tm('home.whyChooseUs.items')
</script>
