<template>
  <div class="flex flex-col justify-center align-middle">
    <NuxtLink
      v-for="availableLocale in availableLocales"
      :key="availableLocale.code"
      :to="switchLocalePath(availableLocale.code)"
      :class="{'text-white': !isScrolling}"
      class="text-sm"
    >
      {{
        availableLocale.code.toUpperCase()
      }}
    </NuxtLink>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
defineProps({
  isScrolling: {
    type: Boolean
  }
})
</script>
