<script setup lang="ts">
import { computed } from 'vue'
import { BOOKING_WIDGET_PATHS } from '@/utils/site-routes'

const props = withDefaults(
  defineProps<{
    to?: string
    variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'light'
  }>(),
  {
    variant: 'primary',
  },
)

const base =
  'inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors'
const variants = {
  primary: 'bg-gold text-gold-dark hover:bg-gold-dark hover:text-white',
  secondary: 'bg-gold-dark text-white hover:bg-forest',
  dark: 'bg-forest text-white hover:bg-forest-light',
  outline: 'border border-forest text-forest hover:bg-forest hover:text-white',
  light: 'bg-white text-forest hover:bg-cream',
}

// The PracticeHub booking widget only initializes reliably on a real
// page load — a client-side SPA transition into these pages leaves it
// blank. Force a full navigation for them specifically.
const needsHardNavigation = computed(() => !!props.to && BOOKING_WIDGET_PATHS.includes(props.to))
</script>

<template>
  <a v-if="to && needsHardNavigation" :href="to" :class="[base, variants[variant]]">
    <slot />
  </a>
  <NuxtLink v-else-if="to" :to="to" :class="[base, variants[variant]]">
    <slot />
  </NuxtLink>
  <button v-else :class="[base, variants[variant]]">
    <slot />
  </button>
</template>
