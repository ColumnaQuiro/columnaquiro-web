<script setup lang="ts">
defineProps<{
  stat: string
  label: string
}>()
</script>

<template>
  <div class="rounded-2xl bg-white/10 p-6 text-center">
    <p class="text-4xl font-bold text-gold">{{ stat }}</p>
    <p class="mt-2 text-sm text-cream/80">{{ label }}</p>
  </div>
</template>
