<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'

withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
    body?: string
    buttonLabel?: string
    buttonTo?: string
    image?: string
    imageAlt?: string
    imageFetchPriority?: 'high'
    align?: 'center' | 'start'
  }>(),
  {
    align: 'center',
  },
)
</script>

<template>
  <section class="bg-cream px-6">
    <div
      v-if="image"
      class="mx-auto grid max-w-[calc(1280px+3rem)] gap-12 py-24 md:grid-cols-[1.8fr_1fr]"
      :class="align === 'start' ? 'items-start' : 'items-center'"
    >
      <div>
        <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-wide text-gold-dark">{{ eyebrow }}</p>
        <h1 class="mt-4 text-4xl font-semibold text-forest sm:text-5xl">{{ title }}</h1>
        <p v-if="subtitle" class="mt-3 text-base font-medium text-forest/80">{{ subtitle }}</p>
        <p v-if="body" class="mt-6 text-lg text-body/80">{{ body }}</p>
        <slot />
        <BaseButton v-if="buttonLabel && buttonTo" :to="buttonTo" class="mt-8">{{ buttonLabel }}</BaseButton>
      </div>
      <img
        :src="image"
        :alt="imageAlt ?? ''"
        :fetchpriority="imageFetchPriority"
        class="aspect-[443/600] w-full rounded-3xl object-cover"
      />
    </div>

    <div v-else class="mx-auto max-w-4xl py-24 text-center">
      <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-wide text-gold-dark">{{ eyebrow }}</p>
      <h1 class="mt-4 text-4xl font-semibold text-forest sm:text-5xl">{{ title }}</h1>
      <p v-if="body" class="mx-auto mt-4 max-w-2xl text-lg text-body/80">{{ body }}</p>
      <slot />
    </div>
  </section>
</template>
