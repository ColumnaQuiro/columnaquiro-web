<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    variant?: 'primary' | 'outline'
  }>(),
  {
    variant: 'primary',
  },
)

const base =
  'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors'
const variants = {
  primary: 'bg-gold text-gold-dark hover:bg-gold-dark hover:text-white',
  outline: 'border border-forest text-forest hover:bg-forest hover:text-white',
}
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="[base, variants[variant]]">
    <slot />
  </NuxtLink>
  <button v-else :class="[base, variants[variant]]">
    <slot />
  </button>
</template>
