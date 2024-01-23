<template>
  <div>
    <h3 class="text-base font-medium text-center pb-4">
      {{ t('general.symptoms.title') }}
    </h3>
    <div v-for="item in items" :key="rt(item.title)" class="text-center">
      <NuxtLink class="text-sm text-center mb-4" :to="rt(item.to)">
        {{ rt(item.title) }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Item {
  title: string
  to: string
}

const { tm, rt, t } = useI18n()

const items: Item[] = tm('general.symptoms.items')
</script>
