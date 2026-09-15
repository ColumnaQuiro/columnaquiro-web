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
      { icon: 'star', label: '4,9 sobre 5 en Google' },
      { icon: 'people', label: 'Más de 5.000 pacientes' },
      { icon: 'verified', label: 'Quiroprácticos titulados' },
      { icon: 'card', label: 'No pagas nada al reservar' },
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
      { icon: 'star', label: '4.9 out of 5 on Google' },
      { icon: 'people', label: 'More than 5,000 patients' },
      { icon: 'verified', label: 'Qualified chiropractors' },
      { icon: 'card', label: 'Nothing to pay when booking' },
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

const TRUST_ICONS: Record<string, string> = {
  star: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  people:
    'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  verified:
    'M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z',
  card: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
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
// useBookingUrl also forwards this page's own utm_*/fbclid into the iframe --
// this is the Meta ads landing page, so without that the clinic cannot tell an
// ad booking from someone who typed the URL in.
const bookingUrl = useBookingUrl({ type: OFERTA_PRIMERA_VISITA_TYPE_ID, practitioner: props.practitionerId })
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

        <ul class="mt-8 flex flex-wrap gap-2">
          <li
            v-for="item in c.trust"
            :key="item.label"
            class="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white py-2 pl-3 pr-4 text-sm text-body/80 shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              class="h-4 w-4 shrink-0 text-gold-dark"
              fill="currentColor"
            >
              <path :d="TRUST_ICONS[item.icon]" />
            </svg>
            {{ item.label }}
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
