<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { clinic, socialLinks } from '@/data/clinic'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import RatingBadge from '@/components/ui/RatingBadge.vue'
import SocialIcon from '@/components/ui/SocialIcon.vue'

const { locale } = useAppI18n()

// This was the worst-converting page on the site: over 27 Jul - 24 Oct 2026,
// 285 sessions landed here directly, stayed 21 s and 0.7% booked; in
// October, 61 landings and none. The visitor saw a title and an empty
// rounded box while the calendar loaded, with no price, no "what's
// included" and nothing to do if no slot suited. Everything around the
// calendar below exists to answer those three things before the calendar
// has even painted.
//
// `heading` is the on-page h1, `seoTitle` the <title> tag -- deliberately
// separate. The h1 avoids echoing the QuiroFlow widget's own "Reservar una
// cita" header below it, while the title tag stays as indexed.
const content = {
  es: {
    heading: 'Reserva tu primera visita',
    seoTitle: 'Reserva tu visita personalizada',
    seoDescription:
      'Reserva tu primera visita quiropráctica en ColumnaQuiro, València: 70 € con evaluación completa y primer ajuste. No pagas nada al reservar. Elige fecha y hora.',
    chips: ['70 € · evaluación completa + primer ajuste', 'No pagas al reservar', 'Mar–Jue · 9–13 h · 15–20 h'],
    loading: 'Cargando el calendario…',
    pickTitle: 'Elige fecha y hora',
    noSlot: '¿No encuentras hueco o prefieres hablar con nosotras?',
    call: 'Llamar',
    whatsapp: 'WhatsApp',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Tengo que pagar algo al reservar?',
        a: 'No. La reserva es gratuita y sin tarjeta. Abonas los 70 € en el centro, el día de tu primera visita.',
      },
      {
        q: '¿Qué incluye exactamente la primera visita?',
        a: 'Una evaluación completa de tu estado, tu primer ajuste quiropráctico y un plan de cuidado personalizado con recomendaciones para tu día a día.',
      },
      {
        q: '¿Puedo elegir con qué profesional voy?',
        a: 'Sí. Al reservar puedes escoger profesional o dejar que te asignemos la primera disponible en el horario que te venga bien.',
      },
      {
        q: '¿Qué días abrís?',
        a: 'Atendemos martes, miércoles y jueves, de 09:00 a 13:00 y de 15:00 a 20:00. Si no encuentras hueco, escríbenos por WhatsApp o llámanos.',
      },
    ],
  },
  en: {
    heading: 'Book your first visit',
    seoTitle: 'Book your personalized appointment',
    seoDescription:
      'Book your first chiropractic visit at ColumnaQuiro, Valencia: €70 with a full assessment and first adjustment. Nothing to pay when booking. Choose a date and time.',
    chips: ['€70 · full assessment + first adjustment', 'Nothing to pay when booking', 'Tue–Thu · 9–13 h · 15–20 h'],
    loading: 'Loading the calendar…',
    pickTitle: 'Choose a date and time',
    noSlot: 'No slot that suits you, or rather talk to us first?',
    call: 'Call',
    whatsapp: 'WhatsApp',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'Do I have to pay anything to book?',
        a: 'No. Booking is free and no card is needed. You pay the €70 at the clinic, on the day of your first visit.',
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
const c = computed(() => content[locale.value])

useSeo({
  title: computed(() => `${c.value.seoTitle} | ColumnaQuiro`),
  description: computed(() => c.value.seoDescription),
})

useHead({
  script: [
    {
      key: 'booking-faq',
      type: 'application/ld+json',
      innerHTML: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: c.value.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }),
    },
  ],
})

// QuiroFlow's public booking page, iframed so this page keeps its "book right
// here" layout. The iframe height tracks the widget's own postMessage'd height
// (useQuiroFlowWidget) so a step never gets clipped or scrolls inside the
// page. "Primera visita" is the standard (non-promo) first-visit type.
const PRIMERA_VISITA_TYPE_ID = '70a38844-ebb9-4a42-b59e-dd6720160e0d'
// Forwards any campaign parameters this page was reached with, same as the
// promo landings -- an ad or a newsletter can point here too.
const bookingUrl = useBookingUrl({ type: PRIMERA_VISITA_TYPE_ID })
const { heightPx } = useQuiroFlowWidget()

// The skeleton shows until the iframe's document has loaded. It is drawn at
// the widget's reserved height, so the swap is a fade, not a jump.
const loaded = ref(false)

const telHref = `tel:+34${clinic.phone.replace(/\s/g, '')}`
const whatsappHref = socialLinks.find((link) => link.label === 'WhatsApp')?.href ?? ''
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-10 sm:py-14">
    <div class="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:items-start">
      <div class="min-w-0">
        <h1 class="text-3xl font-semibold text-forest sm:text-4xl">{{ c.heading }}</h1>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="chip in c.chips"
            :key="chip"
            class="rounded-full bg-tan px-3 py-1.5 text-sm font-medium text-forest"
          >
            {{ chip }}
          </li>
          <li><RatingBadge /></li>
        </ul>

        <div class="relative mt-6" :style="{ minHeight: `${heightPx}px` }">
          <div
            v-if="!loaded"
            aria-hidden="true"
            class="absolute inset-0 rounded-3xl border border-forest/10 bg-white p-5"
          >
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-forest">{{ c.pickTitle }}</span>
              <span class="text-xs text-slate">{{ c.loading }}</span>
            </div>
            <div class="mt-5 h-3 w-1/2 rounded bg-tan" />
            <div class="mt-5 grid grid-cols-7 gap-2">
              <span
                v-for="n in 14"
                :key="n"
                class="aspect-square rounded-lg"
                :class="[2, 3, 4, 9, 10, 11].includes(n) ? 'bg-forest/15' : 'bg-tan'"
              />
            </div>
            <div class="mt-6 h-3 w-4/5 rounded bg-tan" />
            <div class="mt-3 h-3 w-3/5 rounded bg-tan" />
          </div>
          <iframe
            :src="bookingUrl"
            title="Reservar cita"
            :style="{ height: `${heightPx}px` }"
            class="relative w-full rounded-3xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-opacity duration-300"
            :class="loaded ? 'opacity-100' : 'opacity-0'"
            @load="loaded = true"
          />
        </div>

        <div class="mt-6 rounded-2xl bg-beige p-5">
          <p class="text-sm text-body">{{ c.noSlot }}</p>
          <div class="mt-3 flex flex-wrap gap-2" data-cta="booking-help">
            <a
              :href="telHref"
              class="inline-flex items-center gap-2 rounded-xl border border-forest px-4 py-2.5 text-sm font-medium text-forest hover:bg-forest hover:text-white"
              >{{ c.call }} · {{ clinic.phone }}</a
            >
            <a
              :href="whatsappHref"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-4 py-2.5 text-sm font-medium text-white hover:brightness-95"
              ><SocialIcon name="WhatsApp" size-class="h-4 w-4" />{{ c.whatsapp }}</a
            >
          </div>
        </div>
      </div>

      <aside class="rounded-3xl bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
        <h2 class="text-lg font-semibold text-forest">{{ c.faqTitle }}</h2>
        <div class="mt-4">
          <FaqAccordion :faqs="c.faqs" />
        </div>
      </aside>
    </div>
  </section>
</template>
