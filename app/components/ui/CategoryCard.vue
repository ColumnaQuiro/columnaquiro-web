<script setup lang="ts">
defineProps<{
  title: string
  text: string
  linkText: string
  bgImage: string
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <div class="absolute inset-0 bg-forest/60" />
    <div class="relative">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <p class="mt-2 text-sm text-white/85">{{ text }}</p>
      <span class="mt-4 inline-block text-sm font-semibold text-gold underline">{{
        linkText
      }}</span>
    </div>
  </NuxtLink>
</template>
