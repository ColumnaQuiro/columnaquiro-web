<template>
  <div class="flex flex-col justify-center align-middle">
    <NuxtLink
      v-for="availableLocale in availableLocales"
      :key="availableLocale.code"
      :to="switchLocalePath(availableLocale.code)"
      :external="true"
      :class="`text-${textColor}`"
      class="text-sm"
    >
      {{
        availableLocale.code.toUpperCase()
      }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
defineProps({
  textColor: {
    type: String as PropType<'blackBranded' | 'background'>
  }
})
</script>
