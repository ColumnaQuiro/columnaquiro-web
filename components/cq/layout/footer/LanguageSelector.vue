<template>
  <div>
    <div
      v-for="availableLocale in availableLocales"
      :key="availableLocale.toString()"
      @click="changeLang(availableLocale.toString())"
    >
      {{ availableLocale }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const changeLang = (code: string) => {
  setLocale(code)
}
</script>
