<script setup lang="ts">
import { computed } from 'vue'
import { useSeo } from '@/composables/useSeo'

const props = withDefaults(
  defineProps<{
    slotCount: number
    practitionerId?: string
    seoTitle: string
    seoDescription: string
  }>(),
  {
    practitionerId: undefined,
  },
)

useSeo({ title: props.seoTitle, description: props.seoDescription })

useHead({
  script: [{ src: 'https://widgets.sociablekit.com/google-reviews/widget.js', defer: true }],
})

const benefits = [
  {
    icon: '/assets/images/icon-metodo-evaluacion.svg',
    title: 'Evaluación completa',
    text: 'Conoce el estado de tu salud y las recomendaciones a seguir para mejorar en tu día a día.',
  },
  {
    icon: '/assets/images/icon-metodo-ajuste.svg',
    title: 'Ajuste quiropráctico',
    text: 'Primer ajuste quiropráctico para que tu cuerpo libere las tensiones y se inicie el alivio de los dolores.',
  },
  {
    icon: '/assets/images/icon-identificas-sueno.svg',
    title: 'Reducción del estrés y mejora del sueño',
    text: 'Al mejorar la alineación del cuerpo y del sistema nervioso, puede ayudar a regular las hormonas del sueño y a reducir el estrés.',
  },
]

// Migrated from PracticeHub -- "Oferta Primera visita" is the QuiroFlow
// appointment type behind this 30%-off offer. `practitionerId` is now a
// QuiroFlow team-member UUID (was a PracticeHub numeric id); leave it unset
// until the specific practitioner this promo names has a QuiroFlow account.
const OFERTA_PRIMERA_VISITA_TYPE_ID = '91a6b6d9-1bb3-4a66-aa8c-f17ee66e4d1e'
const bookingUrl = computed(() => {
  const params = new URLSearchParams({ type: OFERTA_PRIMERA_VISITA_TYPE_ID })
  if (props.practitionerId) params.set('practitioner', props.practitionerId)
  return `https://app.quiroflow.com/book/columnaquiro?${params.toString()}`
})
</script>

<template>
  <section class="bg-cream px-6">
    <div class="mx-auto grid max-w-[calc(1280px+3rem)] items-center gap-12 py-24 md:grid-cols-[1.4fr_1fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-gold-dark">Oferta especial</p>
        <h1 class="mt-4 text-4xl font-semibold text-forest sm:text-5xl">¿Aún vives con dolor?</h1>
        <p class="mt-6 text-lg text-body/80">
          La 1ª visita incluye una <strong class="text-forest">evaluación completa</strong>, un
          <strong class="text-forest">ajuste quiropráctico</strong> y un tratamiento personalizado acorde a tus
          necesidades.
        </p>
        <a
          href="#reservar-cita"
          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-medium text-gold-dark transition-colors hover:bg-gold-dark hover:text-white"
          >Reserva tu visita</a
        >
      </div>
      <div class="aspect-video w-full overflow-hidden rounded-3xl shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
        <iframe
          class="h-full w-full"
          src="https://www.youtube.com/embed/F8goW9I2MPk"
          title="Bienvenid@ a ColumnaQuiro, tu centro quiropráctico de confianza en Valencia"
          loading="lazy"
          allowfullscreen
        />
      </div>
    </div>
  </section>

  <section class="px-6 py-16">
    <div class="mx-auto max-w-3xl rounded-3xl bg-[#c9755c] p-10 text-center text-white">
      <p class="text-3xl font-semibold sm:text-4xl"><span class="text-5xl">30%</span> en tu primera visita personalizada</p>
      <p class="mt-4 text-lg">
        ¡Solo para los {{ slotCount }} primeros! Primera visita por solo
        <span class="font-semibold">50€</span> <span class="line-through opacity-70">70€</span>.
      </p>
      <p class="mt-2 text-white/90">Reserva hoy, más de 5000 pacientes ya confían en nosotros.</p>
    </div>
  </section>

  <section class="mx-auto max-w-[calc(1280px+3rem)] px-6 py-16 text-center">
    <h2 class="section-title">Beneficios de tu primera visita</h2>
    <div class="mt-12 grid gap-6 sm:grid-cols-3">
      <div
        v-for="benefit in benefits"
        :key="benefit.title"
        class="rounded-3xl bg-white p-8 text-left shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
      >
        <img :src="benefit.icon" :alt="benefit.title" class="h-12 w-12" />
        <h3 class="mt-4 text-lg font-semibold text-forest">{{ benefit.title }}</h3>
        <p class="mt-2 text-sm text-body/70">{{ benefit.text }}</p>
      </div>
    </div>
  </section>

  <section class="overflow-x-hidden bg-gray-light px-6 py-16 text-center">
    <h2 class="section-title">Lo que nuestros pacientes opinan...</h2>
    <div
      class="sk-ww-google-reviews mx-auto mt-10 w-full max-w-[1280px]"
      data-embed-id="236880"
      style="min-height: 480px"
    />
  </section>

  <section id="reservar-cita" class="mx-auto max-w-3xl px-6 py-16">
    <h2 class="section-title text-center">Elige tu fecha y hora</h2>
    <iframe
      :src="bookingUrl"
      title="Reservar cita"
      loading="lazy"
      class="mt-8 h-[900px] w-full rounded-3xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
    />
  </section>
</template>
