<template>
  <div class="to-who grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
    <nuxt-link
      v-for="item in items"
      :key="rt(item.key)"
      class="to-who__card relative"
      :to="localePath(`/para-quien-sirve-la-quiropractica/${rt(item.urlParam)}`)"
    >
      <NuxtImg
        provider="s3"
        :src="`website/home/${rt(item.key)}.webp`"
        class="to-who__card-image w-full max-h-[200px] object-cover rounded-md"
        :alt="rt(item.title)"
      />
      <div class="to-who__card-text absolute inset-0 py-4 px-4">
        <div class="text-lg font-medium text-center">
          {{ rt(item.title) }}
        </div>
        <div class="text-base text-center">
          {{ rt(item.description) }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Item {
  key: string
  title: string
  description: string
  urlParam: string
}

const localePath = useLocaleRoute()
const { tm, rt } = useI18n()
const items: Item[] = tm('general.toWho.items')
</script>
<style lang="scss">
.to-who {
  &__card {
    &-text {
      transition: opacity 0.3s;
      @apply opacity-0;
    }

    &-image {
      transition: opacity 0.3s;
    }
    &:hover {
      .to-who__card-text {
        @apply opacity-100;
      }

      .to-who__card-image {
        @apply opacity-20;
      }
    }
  }
}
</style>
