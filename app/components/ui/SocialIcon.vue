<script setup lang="ts">
defineProps<{
  name: 'Instagram' | 'Facebook' | 'WhatsApp'
}>()
</script>

<template>
  <svg
    v-if="name === 'Instagram'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    class="h-5 w-5"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
  <svg
    v-else-if="name === 'Facebook'"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="h-5 w-5"
  >
    <path
      d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.1C15.9 5 15 5 13.9 5c-2.4 0-4 1.5-4 4.2V11H7.5v2.8H10V21h3.5Z"
    />
  </svg>
  <svg v-else viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
    <path
      d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm0 16.2a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.5.7.7-2.4-.2-.3A7.2 7.2 0 1 1 12 19.2Zm3.9-5.4c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1-1.2-.6-2-1.4-2.7-2.6-.1-.2-.1-.4.1-.5l.6-.7c.1-.2.1-.3 0-.5l-.7-1.6c-.1-.3-.4-.3-.6-.2-.5.3-1 .8-1 1.6 0 1.7 1.5 3.9 3.6 5.2 1.7 1 2.7.9 3.2.8.5-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z"
    />
  </svg>
</template>
