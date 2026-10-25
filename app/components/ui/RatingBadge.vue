<script setup lang="ts">
import { computed } from 'vue'
import { googleRating } from '@/data/clinic'
import { useAppI18n } from '@/composables/useAppI18n'

const props = withDefaults(defineProps<{ tone?: 'light' | 'dark' }>(), { tone: 'light' })
const { locale } = useAppI18n()

const text = computed(() => {
  const value = googleRating.value.toLocaleString(locale.value === 'es' ? 'es-ES' : 'en-GB', {
    minimumFractionDigits: 1,
  })
  return locale.value === 'es'
    ? `${value} · ${googleRating.count} reseñas en Google`
    : `${value} · ${googleRating.count} Google reviews`
})
</script>

<template>
  <a
    :href="googleRating.url"
    target="_blank"
    rel="noopener"
    class="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold"
    :class="
      tone === 'dark'
        ? 'border-white/20 bg-white/10 text-white'
        : 'border-forest/10 bg-white text-forest shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]'
    "
  >
    <span class="flex text-[#e3a008]" aria-hidden="true">
      <svg v-for="n in 5" :key="n" viewBox="0 0 20 20" class="h-3.5 w-3.5" fill="currentColor">
        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
      </svg>
    </span>
    {{ text }}
  </a>
</template>
