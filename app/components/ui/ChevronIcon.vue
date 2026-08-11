<script setup lang="ts">
defineProps<{
  open?: boolean
}>()
</script>

<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    class="transition-transform duration-200"
    :class="{ 'rotate-180': open }"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
