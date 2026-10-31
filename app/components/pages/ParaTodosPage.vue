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
      'A quién ayuda la quiropráctica en ColumnaQuiro, València: trabajadores con dolor de espalda, embarazadas, deportistas, personas mayores, niños y bebés.',
  },
  en: {
    title: 'Who is chiropractic for? | ColumnaQuiro',
    description:
      'Who chiropractic helps at ColumnaQuiro, Valencia: workers with back pain, pregnant women, athletes, older adults, children and babies.',
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
        text: 'Dolor de espalda, cuello u hombros por pasar muchas horas sentado o de pie. Te ayudamos a aliviarlo y a ajustar tu postura y tus pausas en el trabajo.',
        linkText: 'Quiropráctica para trabajadores',
      },
      {
        text: 'Revisamos con técnicas muy suaves la postura y el movimiento de bebés y niños, y te derivamos al pediatra cuando algo lo requiere.',
        linkText: 'Quiropráctica para niños',
      },
      {
        text: 'Dolor lumbar, pélvico o ciático durante el embarazo y el posparto, con técnicas suaves y posiciones adaptadas a cada trimestre.',
        linkText: 'Quiropráctica para embarazadas',
      },
      {
        text: 'Molestias de espalda, cadera o cuello que te frenan al entrenar, y una vuelta progresiva a la actividad después de una lesión.',
        linkText: 'Quiropráctica para deportistas',
      },
      {
        text: 'Rigidez y dolor articular, con técnicas suaves para que sigas activo, siempre en coordinación con tu médico.',
        linkText: 'Quiropráctica para tercera edad',
      },
      {
        text: 'Dolor y rigidez de espalda o cuello en personas con discapacidad motora o intelectual, con un trato adaptado a cada persona.',
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
        text: 'Back, neck or shoulder pain from long hours sitting or standing. We help ease it and adjust your posture and breaks at work.',
        linkText: 'Chiropractic for workers',
      },
      {
        text: 'We gently check the posture and movement of babies and children, and refer you to the paediatrician when something needs it.',
        linkText: 'Chiropractic for children',
      },
      {
        text: 'Lower back, pelvic or sciatic pain during pregnancy and after birth, with gentle techniques and positions adapted to each trimester.',
        linkText: 'Chiropractic for pregnant women',
      },
      {
        text: 'Back, hip or neck pain that holds back your training, and a gradual return to activity after an injury.',
        linkText: 'Chiropractic for athletes',
      },
      {
        text: 'Joint stiffness and pain, with gentle techniques to keep you active, always alongside your doctor.',
        linkText: 'Chiropractic for the elderly',
      },
      {
        text: 'Back and neck pain and stiffness in people with motor or intellectual disabilities, with care adapted to each person.',
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
    bgImage: page.heroImage,
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
        :alt="locale === 'es' ? 'Quiropráctica para todas las edades' : 'Chiropractic for every age'"
        class="w-full rounded-3xl"
      />
    </div>
  </section>

  <section class="mx-auto max-w-[calc(1280px+3rem)] px-6 pb-24">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CategoryCard v-for="category in categories" :key="category.title" v-bind="category" />
    </div>
  </section>

  <CtaBanner />
</template>
