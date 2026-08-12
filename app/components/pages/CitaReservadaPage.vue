<script setup lang="ts">
import { useSeo } from '@/composables/useSeo'
import BaseButton from '@/components/ui/BaseButton.vue'

useSeo({
  title: 'Tu cita está reservada | ColumnaQuiro',
  description: 'Tu cita en ColumnaQuiro está confirmada. Recibirás un recordatorio unos días antes.',
})
</script>

<template>
  <section class="bg-cream px-6 py-24 text-center">
    <div class="mx-auto max-w-lg">
      <span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-badge-mint/40">
        <img src="/assets/images/icon-bullet-check.svg" alt="" class="h-8 w-8" />
      </span>
      <h1 class="mt-6 text-3xl font-semibold text-forest sm:text-4xl">¡Tu cita está confirmada!</h1>
      <p class="mt-4 text-lg text-body/80">Recibirás un recordatorio unos días antes.</p>
      <BaseButton to="/" class="mt-8">Volver al inicio</BaseButton>
    </div>
  </section>
</template>
