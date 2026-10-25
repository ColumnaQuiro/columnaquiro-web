<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { LOCALE_CHOICE_STORAGE_KEY } from '@/utils/site-routes'
import { useAppI18n } from '@/composables/useAppI18n'

// Replaces the old locale-redirect plugin. That plugin waited for the whole
// page to load, then sent English-language browsers from / to /en with a
// full second navigation: Lighthouse put the cost at about 6.5 s of LCP for
// every English visitor's first visit, and it also meant a visitor who
// followed a Spanish link saw the page they asked for vanish. Suggesting the
// other language instead costs nothing and leaves the choice to them.
//
// Shown only on the two home pages, only when the browser language does not
// match the page, and only until the visitor dismisses it or switches
// language anywhere (useLocale.switchTo sets the same storage key).
const { locale } = useAppI18n()
const route = useRoute()
const visible = ref(false)

const copy = {
  es: { text: 'This site is also available in English.', link: 'View in English', dismiss: 'Seguir en español' },
  en: { text: 'Este sitio también está disponible en español.', link: 'Ver en español', dismiss: 'Stay in English' },
}

const target = locale.value === 'es' ? '/en' : '/'

onMounted(() => {
  if (route.path !== '/' && route.path !== '/en') return
  let chosen = false
  try {
    chosen = !!localStorage.getItem(LOCALE_CHOICE_STORAGE_KEY)
  } catch {
    chosen = false
  }
  if (chosen) return
  const prefersEnglish = navigator.language.toLowerCase().startsWith('en')
  visible.value = (prefersEnglish && locale.value === 'es') || (!prefersEnglish && locale.value === 'en')
})

function remember() {
  try {
    localStorage.setItem(LOCALE_CHOICE_STORAGE_KEY, '1')
  } catch {
    // Private mode or blocked storage: the bar simply shows again next time.
  }
  visible.value = false
}
</script>

<template>
  <div
    v-if="visible"
    class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-forest px-4 py-2 text-center text-sm text-cream"
  >
    <span>{{ copy[locale].text }}</span>
    <NuxtLink :to="target" class="font-semibold text-gold underline" @click="remember">{{ copy[locale].link }}</NuxtLink>
    <button type="button" class="text-cream/70 underline hover:text-cream" @click="remember">{{ copy[locale].dismiss }}</button>
  </div>
</template>
