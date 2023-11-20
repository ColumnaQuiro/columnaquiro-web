<template>
  <div>
    <div v-for="availableLocale in availableLocales" :key="availableLocale" @click="changeLang(availableLocale)">
      {{ availableLocale }}
    </div>
  </div>
</template>
<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const changeLang = (code: string) => {
  setLocale(code)
}
</script>
