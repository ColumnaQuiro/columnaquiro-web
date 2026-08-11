<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import BaseButton from '@/components/ui/BaseButton.vue'
import CategoryCard from '@/components/ui/CategoryCard.vue'
import CtaBanner from '@/components/ui/CtaBanner.vue'
import { categoryPages } from '@/data/category-pages'

const { locale } = useAppI18n()

const seoText = {
  es: {
    title: '¿Para quién sirve la quiropráctica? | ColumnaQuiro',
    description:
      'La quiropráctica es apta para todas las edades: trabajadores, niños, embarazadas, deportistas, personas mayores y personas con discapacidad.',
  },
  en: {
    title: 'Who is chiropractic for? | ColumnaQuiro',
    description:
      'Chiropractic is suitable for all ages: workers, children, pregnant women, athletes, the elderly, and people with disabilities.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

const content = {
  es: {
    eyebrow: 'La quiropráctica es para ti',
    title: 'Descubre lo que la quiropráctica puede hacer para ti',
    body: 'En ColumnaQuiro nuestro objetivo es ayudar a todas las personas independientemente de su edad o situación.',
    button: 'Reserva tu visita',
    hub: '/para-quien-sirve-la-quiropractica',
    cards: [
      {
        text: 'Cuida las dolencias ocasionadas por malas posturas en el trabajo. Mejora tu rendimiento laboral, los ajustes afectan positivamente a la toma de decisiones, cognición... reduciendo ausencias por salud.',
        linkText: 'Quiropráctica para trabajadores',
      },
      {
        text: 'Prevé disfunciones en el sistema nervioso de tu bebé: cómo un sistema nervioso óptimo mejora su desarrollo sensorial y motor, coordinación y sentidos.',
        linkText: 'Quiropráctica para niños',
      },
      {
        text: 'Prepara tu cuerpo para los cambios físicos, químicos y emocionales del embarazo y mejorar tu recuperación postparto, optimizando la función del sistema nervioso y la salud.',
        linkText: 'Quiropráctica para embarazadas',
      },
      {
        text: 'Mejora tu rendimiento deportivo. Los ajustes aumentan la fuerza, el tiempo de reacción, la movilidad, el equilibrio y la recuperación.',
        linkText: 'Quiropráctica para deportistas',
      },
      {
        text: 'Mejora tu movilidad, equilibrio y calidad de vida: disfruta de un estilo de vida activo y saludable.',
        linkText: 'Quiropráctica para tercera edad',
      },
      {
        text: 'La quiropráctica mejora la movilidad, equilibrio y coordinación en personas con discapacidades. También mejora el desarrollo en trastornos neuroconductuales.',
        linkText: 'Quiropráctica para discapacidades',
      },
    ],
  },
  en: {
    eyebrow: 'Chiropractic is for you',
    title: 'Discover what chiropractic can do for you',
    body: 'At ColumnaQuiro our goal is to help everyone, regardless of age or situation.',
    button: 'Book your visit',
    hub: '/en/who-is-chiropractic-for',
    cards: [
      {
        text: 'Take care of ailments caused by poor posture at work. Improve your work performance — adjustments positively affect decision-making and cognition, reducing health-related absences.',
        linkText: 'Chiropractic for workers',
      },
      {
        text: "Anticipate dysfunctions in your baby's nervous system: how an optimal nervous system improves sensory and motor development, coordination, and the senses.",
        linkText: 'Chiropractic for children',
      },
      {
        text: 'Prepare your body for the physical, chemical, and emotional changes of pregnancy, and improve postpartum recovery by optimizing nervous system function and health.',
        linkText: 'Chiropractic for pregnant women',
      },
      {
        text: 'Improve your sports performance. Adjustments increase strength, reaction time, mobility, balance, and recovery.',
        linkText: 'Chiropractic for athletes',
      },
      {
        text: 'Improve your mobility, balance, and quality of life: enjoy an active and healthy lifestyle.',
        linkText: 'Chiropractic for the elderly',
      },
      {
        text: 'Chiropractic improves mobility, balance, and coordination in people with disabilities. It also supports development in neurobehavioral disorders.',
        linkText: 'Chiropractic for disabilities',
      },
    ],
  },
}

const c = computed(() => content[locale.value])
const categories = computed(() =>
  categoryPages.map((page, i) => ({
    title: page[locale.value].title,
    text: c.value.cards[i]!.text,
    linkText: c.value.cards[i]!.linkText,
    bgImage: `/assets/images/category-${
      ['trabajadores', 'ninos', 'embarazadas', 'deportistas', 'tercera-edad', 'discapacidades'][i]
    }.webp`,
    to: `${c.value.hub}/${locale.value === 'es' ? page.slugEs : page.slugEn}`,
  })),
)
</script>

<template>
  <section class="bg-cream px-6">
    <div class="mx-auto grid max-w-[1280px] items-center gap-12 py-24 md:grid-cols-2">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-gold-dark">{{ c.eyebrow }}</p>
        <h1 class="mt-4 text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>
        <p class="mt-6 text-lg text-body/80">{{ c.body }}</p>
        <BaseButton :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'" class="mt-8">{{
          c.button
        }}</BaseButton>
      </div>
      <img
        src="/assets/images/para-todos-header.webp"
        alt="chiropractic for everyone"
        class="w-full rounded-3xl"
      />
    </div>
  </section>

  <section class="mx-auto max-w-[1280px] px-6 pb-24">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CategoryCard v-for="category in categories" :key="category.title" v-bind="category" />
    </div>
  </section>

  <CtaBanner />
</template>
