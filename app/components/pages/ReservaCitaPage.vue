<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { useBookingWidget } from '@/composables/useBookingWidget'

const { locale } = useAppI18n()

const content = {
  es: {
    title: 'Reserva tu visita personalizada',
    step: 'Paso 1 de 2',
    subtitle: 'Elija su fecha y hora',
    seoDescription: 'Reserva tu cita en ColumnaQuiro, tu centro quiropráctico en Valencia. Elige la fecha y hora que mejor te convenga.',
  },
  en: {
    title: 'Book your personalized appointment',
    step: 'Step 1 of 2',
    subtitle: 'Choose your date and time',
    seoDescription: 'Book your appointment at ColumnaQuiro, your chiropractic center in Valencia. Choose the date and time that works best for you.',
  },
}
const c = computed(() => content[locale.value])

useSeo({
  title: computed(() => `${c.value.title} | ColumnaQuiro`),
  description: computed(() => c.value.seoDescription),
})

useBookingWidget()
</script>

<template>
  <section class="mx-auto max-w-4xl px-6 py-24">
    <div class="text-center">
      <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>
      <p class="mt-2 text-sm font-semibold uppercase tracking-wide text-gold-dark">
        {{ c.step }}
      </p>
      <h2 class="mt-2 text-xl text-body/80">{{ c.subtitle }}</h2>
    </div>

    <div
      id="ph_online_bookings_widget"
      class="mt-12 min-h-[400px] rounded-3xl bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
    />
  </section>
</template>
