<script setup lang="ts">
import { computed } from 'vue'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import { clinic, schedule } from '@/data/clinic'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'

// One landing serves every first-visit offer route -- the Meta promo URLs and
// the Google Ads ones -- so the copy only has to be tuned in a single place.
// `slotCount` is the remaining-places number the promo creatives quote;
// `practitionerId` preselects a professional for practitioner-specific promos.
const props = withDefaults(
  defineProps<{
    slotCount?: number
    practitionerId?: string
    noindex?: boolean
    seoTitle?: string
    seoDescription?: string
  }>(),
  {
    slotCount: undefined,
    practitionerId: undefined,
    noindex: false,
    seoTitle: undefined,
    seoDescription: undefined,
  },
)

const { locale } = useAppI18n()

const content = {
  es: {
    eyebrow: 'Oferta especial',
    heading: '¿Aún vives con dolor?',
    lead: 'Tu primera visita incluye una evaluación completa, un ajuste quiropráctico y un plan de cuidado personalizado para ti.',
    priceNow: '50€',
    priceWas: '70€',
    priceNote: '30% de descuento en tu primera visita',
    scarcity: (n: number) => `Solo para los ${n} primeros pacientes.`,
    ctaBook: 'Reservar mi primera visita',
    ctaCall: 'Llamar al centro',
    trust: [
      '4,9 sobre 5 en Google',
      'Más de 5.000 pacientes',
      'Quiroprácticos titulados',
      'No pagas nada al reservar',
    ],
    bookingTitle: 'Elige tu fecha y hora',
    bookingNote: 'No pagas nada al reservar: abonas los 50€ en el centro, el día de tu visita.',
    benefitsTitle: 'Qué incluye tu primera visita',
    reviewsTitle: 'Lo que opinan nuestros pacientes',
    locationTitle: 'Dónde estamos',
    hoursTitle: 'Horario de atención',
    directions: 'Ver cómo llegar',
    closed: 'Cerrado',
    days: {
      lunes: 'Lunes',
      martes: 'Martes',
      miercoles: 'Miércoles',
      jueves: 'Jueves',
      viernes: 'Viernes',
      finde: 'Sábados y domingos',
    },
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Tengo que pagar algo al reservar?',
        a: 'No. La reserva es gratuita y sin tarjeta. Abonas los 50€ en el centro, el día de tu primera visita.',
      },
      {
        q: '¿Qué incluye exactamente la primera visita?',
        a: 'Una evaluación completa de tu estado, tu primer ajuste quiropráctico y un plan de cuidado personalizado con recomendaciones para tu día a día.',
      },
      {
        q: '¿Puedo elegir con qué profesional voy?',
        a: 'Sí. Al reservar puedes escoger profesional o dejar que te asignemos el primero disponible en el horario que te venga bien.',
      },
      {
        q: '¿Qué días abrís?',
        a: 'Atendemos martes, miércoles y jueves, de 09:00 a 13:00 y de 15:00 a 20:00. Si no encuentras hueco, escríbenos por WhatsApp o llámanos.',
      },
    ],
  },
  en: {
    eyebrow: 'Special offer',
    heading: 'Still living with pain?',
    lead: 'Your first visit includes a full assessment, a chiropractic adjustment and a care plan tailored to you.',
    priceNow: '€50',
    priceWas: '€70',
    priceNote: '30% off your first visit',
    scarcity: (n: number) => `Only for the first ${n} patients.`,
    ctaBook: 'Book my first visit',
    ctaCall: 'Call the clinic',
    trust: [
      '4.9 out of 5 on Google',
      'More than 5,000 patients',
      'Qualified chiropractors',
      'Nothing to pay when booking',
    ],
    bookingTitle: 'Choose your date and time',
    bookingNote: 'Nothing to pay when booking: you pay the €50 at the clinic, on the day of your visit.',
    benefitsTitle: 'What your first visit includes',
    reviewsTitle: 'What our patients say',
    locationTitle: 'Where to find us',
    hoursTitle: 'Opening hours',
    directions: 'Get directions',
    closed: 'Closed',
    days: {
      lunes: 'Monday',
      martes: 'Tuesday',
      miercoles: 'Wednesday',
      jueves: 'Thursday',
      viernes: 'Friday',
      finde: 'Saturday and Sunday',
    },
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'Do I have to pay anything to book?',
        a: 'No. Booking is free and no card is needed. You pay the €50 at the clinic, on the day of your first visit.',
      },
      {
        q: 'What exactly does the first visit include?',
        a: 'A full assessment of your condition, your first chiropractic adjustment and a personalized care plan with recommendations for your daily life.',
      },
      {
        q: 'Can I choose which professional I see?',
        a: 'Yes. When booking you can pick a professional, or let us assign the first one available at a time that suits you.',
      },
      {
        q: 'Which days are you open?',
        a: 'We are open Tuesday, Wednesday and Thursday, from 09:00 to 13:00 and from 15:00 to 20:00. If you cannot find a slot, message us on WhatsApp or give us a call.',
      },
    ],
  },
}

const benefitContent = {
  es: [
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
  ],
  en: [
    {
      icon: '/assets/images/icon-metodo-evaluacion.svg',
      title: 'Full assessment',
      text: 'Understand the state of your health and the recommendations to follow to improve your day to day.',
    },
    {
      icon: '/assets/images/icon-metodo-ajuste.svg',
      title: 'Chiropractic adjustment',
      text: 'A first chiropractic adjustment so your body releases tension and the relief from pain can begin.',
    },
    {
      icon: '/assets/images/icon-identificas-sueno.svg',
      title: 'Less stress, better sleep',
      text: 'By improving the alignment of the body and the nervous system, it can help regulate sleep hormones and reduce stress.',
    },
  ],
}

const c = computed(() => content[locale.value])
const benefits = computed(() => benefitContent[locale.value])
const telHref = computed(() => `tel:+34${clinic.phone.replace(/\s/g, '')}`)

const defaultSeo = {
  es: {
    title: 'Primera visita quiropráctica por 50€ en Valencia | ColumnaQuiro',
    description:
      'Primera visita quiropráctica en Valencia por 50€ en vez de 70€: evaluación completa, primer ajuste y plan de cuidado personalizado. Reserva sin pagar nada.',
  },
  en: {
    title: 'First chiropractic visit for €50 in Valencia | ColumnaQuiro',
    description:
      'First chiropractic visit in Valencia for €50 instead of €70: full assessment, first adjustment and a personalized care plan. Book without paying anything.',
  },
}

useSeo({
  title: computed(() => props.seoTitle ?? defaultSeo[locale.value].title),
  description: computed(() => props.seoDescription ?? defaultSeo[locale.value].description),
  noindex: props.noindex,
})

useHead({
  script: [{ src: 'https://widgets.sociablekit.com/google-reviews/widget.js', defer: true }],
})

// "Oferta Primera visita" is the discounted QuiroFlow appointment type behind
// this 30%-off offer, as opposed to the standard "Primera visita" type the
// general /reserva-cita page books.
const OFERTA_PRIMERA_VISITA_TYPE_ID = '91a6b6d9-1bb3-4a66-aa8c-f17ee66e4d1e'
const bookingUrl = computed(() => {
  const params = new URLSearchParams({ type: OFERTA_PRIMERA_VISITA_TYPE_ID })
  if (props.practitionerId) params.set('practitioner', props.practitionerId)
  return `https://app.quiroflow.com/book/columnaquiro?${params.toString()}`
})
// Tracks the booking widget's own postMessage'd height so a step never gets
// clipped or shows a scrollbar nested inside this page's scrollbar.
const { heightPx } = useQuiroFlowWidget()
</script>

<template>
  <section class="bg-cream px-6">
    <div class="mx-auto grid max-w-[calc(1280px+3rem)] items-center gap-12 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-gold-dark">{{ c.eyebrow }}</p>
        <h1 class="mt-4 text-4xl font-semibold text-forest sm:text-5xl">{{ c.heading }}</h1>
        <p class="mt-6 text-lg text-body/80">{{ c.lead }}</p>

        <p class="mt-6 flex flex-wrap items-baseline gap-3">
          <span class="text-4xl font-semibold text-forest">{{ c.priceNow }}</span>
          <span class="text-xl text-body/50 line-through">{{ c.priceWas }}</span>
          <span class="text-sm font-medium text-gold-dark">{{ c.priceNote }}</span>
        </p>
        <p v-if="slotCount" class="mt-2 text-sm text-body/70">{{ c.scarcity(slotCount) }}</p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#reservar-cita"
            class="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-medium text-gold-dark transition-colors hover:bg-gold-dark hover:text-white"
            >{{ c.ctaBook }}</a
          >
          <a
            :href="telHref"
            class="inline-flex items-center gap-2 rounded-xl border border-forest px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-white"
            >{{ c.ctaCall }}</a
          >
        </div>

        <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-body/70">
          <li v-for="item in c.trust" :key="item" class="flex items-center gap-2">
            <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full bg-gold-dark" />{{ item }}
          </li>
        </ul>
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

  <!-- The booking widget sits directly under the hero: paid-search visitors
       arrive ready to book and should not have to scroll past the pitch. The
       proof sections stay below for colder social traffic. -->
  <section id="reservar-cita" class="mx-auto max-w-3xl px-6 py-16">
    <h2 class="section-title text-center">{{ c.bookingTitle }}</h2>
    <p class="mt-3 text-center text-sm text-body/70">{{ c.bookingNote }}</p>
    <iframe
      :src="bookingUrl"
      title="Reservar cita"
      :style="{ height: `${heightPx}px` }"
      class="mt-8 w-full rounded-3xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
    />
  </section>

  <section class="mx-auto max-w-[calc(1280px+3rem)] px-6 py-16 text-center">
    <h2 class="section-title">{{ c.benefitsTitle }}</h2>
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
    <h2 class="section-title">{{ c.reviewsTitle }}</h2>
    <div class="sk-ww-google-reviews mx-auto mt-10 w-full max-w-[1280px]" data-embed-id="236880" />
  </section>

  <section class="mx-auto max-w-[calc(1280px+3rem)] px-6 py-16">
    <div class="grid gap-10 md:grid-cols-2">
      <div>
        <h2 class="section-title">{{ c.locationTitle }}</h2>
        <p class="mt-6 text-body/80">{{ clinic.address }}</p>
        <p class="mt-2">
          <a :href="telHref" class="text-forest underline hover:text-gold-dark">{{ clinic.phone }}</a>
        </p>
        <p class="mt-4">
          <a
            :href="clinic.mapsUrl"
            target="_blank"
            rel="noopener"
            class="text-sm font-medium text-gold-dark underline"
            >{{ c.directions }}</a
          >
        </p>
      </div>
      <div>
        <h2 class="section-title">{{ c.hoursTitle }}</h2>
        <dl class="mt-6 space-y-2 text-sm">
          <div v-for="row in schedule" :key="row.dayKey" class="flex justify-between gap-4">
            <dt class="text-body/70">{{ c.days[row.dayKey] }}</dt>
            <dd class="text-right font-medium text-forest">{{ row.hours ?? c.closed }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-3xl px-6 pb-20">
    <h2 class="section-title text-center">{{ c.faqTitle }}</h2>
    <div class="mt-10">
      <FaqAccordion :faqs="c.faqs" />
    </div>
  </section>
</template>
