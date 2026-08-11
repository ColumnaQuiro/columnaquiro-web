<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import CtaBanner from '@/components/ui/CtaBanner.vue'
import StatTile from '@/components/ui/StatTile.vue'

const { locale } = useAppI18n()

const seoText = {
  es: {
    title: '¿Qué es la quiropráctica? | ColumnaQuiro',
    description:
      'Descubre qué es la quiropráctica, cómo mejora la función del sistema nervioso y qué dice la ciencia sobre sus beneficios para la salud.',
  },
  en: {
    title: 'What is chiropractic? | ColumnaQuiro',
    description:
      'Discover what chiropractic care is, how it improves nervous system function, and what the science says about its health benefits.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

const content = {
  es: {
    eyebrow: '¿Qué es la quiropráctica?',
    heroTitle: 'La quiropráctica y el sistema nervioso',
    heroBody:
      'La quiropráctica mejora la función del sistema nervioso, optimizando la conexión entre el cerebro y el cuerpo. Al alinear la columna vertebral, favorece la autorregulación, reduce el estrés y mejora la salud de forma integral.',
    intro:
      'La quiropráctica es una profesión de la salud que se enfoca en mejorar la funcionalidad del sistema nervioso y del cuerpo en su totalidad a través de un enfoque integral y holístico. El sistema nervioso es el primer sistema del cuerpo en desarrollarse, coordinando cada órgano, músculo, glándula y célula para que cada uno pueda funcionar en perfecta sincronía. El cerebro recibe constantemente información del mundo externo e interno, y gracias al funcionamiento del sistema nervioso, puede responder adecuadamente a las necesidades del momento, enviando información de vuelta al cuerpo. Este proceso conlleva una constante adaptación óptima del cuerpo, comúnmente llamada salud. Esta conexión entre el cerebro y el resto del cuerpo es crucial para regular el estrés, el dolor y otros síntomas que puedan aparecer en otros sistemas. El Sistema Nervioso Central (SNC), compuesto por el cerebro y la médula espinal, es el único órgano del cuerpo que está completamente protegido por una capa de hueso: el cráneo protege el cerebro y la columna vertebral protege la médula espinal. Podemos imaginar la médula espinal como una autovía que transporta toda la información del cuerpo al cerebro y viceversa, siendo un elemento esencial para el correcto funcionamiento del sistema nervioso.',
    stressTitle: '¿Por qué tengo interferencias nerviosas en mi cuerpo?',
    stressSubtitle:
      'Nuestro cuerpo se adapta constantemente a varios tipos de estrés a diario para mantenernos en un estado óptimo.',
    stressTypes: [
      {
        title: 'Estrés físico',
        icon: '/assets/images/icon-estres-fisico.webp',
        text: 'Debido a accidentes, golpes, caídas fuertes, levantar peso de forma incorrecta, mantener malas posturas por períodos prolongados, un parto o la práctica de deportes de élite.',
      },
      {
        title: 'Estrés emocional',
        icon: '/assets/images/icon-estres-emocional.webp',
        text: 'Causado por las relaciones humanas, el nerviosismo crónico, las preocupaciones económicas, el agotamiento familiar, el empleo, la relación de pareja, la dificultad para manejar a los niños y las relaciones con amigos.',
      },
      {
        title: 'Estrés químico',
        icon: '/assets/images/icon-estres-quimico.webp',
        text: 'En nuestro estilo de vida, no tenemos mucho tiempo y recurrimos a menudo a cosas rápidas, lo que nos expone a una gran cantidad de toxinas. Por ejemplo, en la comida rápida, contaminación ambiental, productos de belleza o de limpieza.',
      },
    ],
    scienceTitle: 'La quiropráctica bajo la ciencia',
    scienceQuote:
      '"Un estudio de 2.818 pacientes que recibieron cuidado quiropráctico en los Estados Unidos y en todo el mundo, demostró que el cuidado quiropráctico está asociado con una mejora profunda y estadísticamente significativa en las áreas del bienestar. Los pacientes informan cambios en: bienestar físico, disminución del nivel de estrés percibido, disfrute de la vida, cambios en el estilo de vida, bienestar emocional, psicológico y calidad de vida."',
    scienceCitation:
      'Blanks, RH; Boone, WR; Schmidt, S; Dobson, M; Network Care: A retrospective outcomes assessment. 1996 · Dobson, M; Boone WR; Blanks, RH; Women and Alternative Health Care: A retrospective study of recipients of Network Care. 1996',
    scienceLeadIn: 'Se ha demostrado que con los ajustes quiroprácticos se mejora un:',
    stats: [
      { stat: '65%', label: 'en 1-3 meses (recuperación)' },
      { stat: '74%', label: 'en 3-12 meses (recuperación)' },
      { stat: '84%', label: 'en 13-36 meses (mejora)' },
      { stat: '95%', label: 'en +36 meses (optimización)' },
    ],
  },
  en: {
    eyebrow: 'What is chiropractic?',
    heroTitle: 'Chiropractic and the nervous system',
    heroBody:
      'Chiropractic improves nervous system function, optimizing the connection between the brain and the body. By aligning the spine, it promotes self-regulation, reduces stress, and improves overall health.',
    intro:
      'Chiropractic is a health profession that focuses on improving the functionality of the nervous system and the body as a whole through a comprehensive and holistic approach. The nervous system is the first system in the body to develop, coordinating each organ, muscle, gland, and cell so that each one can work in perfect synchrony. The brain constantly receives information from the external and internal world, and thanks to the functioning of the nervous system, it can respond adequately to the needs of the moment, sending information back to the body. This process involves a constant optimal adaptation of the body, commonly called health. This connection between the brain and the rest of the body is crucial for regulating stress, pain, and other symptoms that may appear in other systems. The Central Nervous System (CNS), made up of the brain and spinal cord, is the only organ in the body that is completely protected by a layer of bone: the skull protects the brain and the spine protects the spinal cord. We can think of the spinal cord as a highway that carries all information from the body to the brain and back, an essential element for the proper functioning of the nervous system.',
    stressTitle: 'Why do I have nerve interference in my body?',
    stressSubtitle:
      'Our body constantly adapts to various types of stress on a daily basis to keep us in an optimal state.',
    stressTypes: [
      {
        title: 'Physical stress',
        icon: '/assets/images/icon-estres-fisico.webp',
        text: 'Due to accidents, blows, heavy falls, improper weight lifting, maintaining poor posture for long periods of time, childbirth, or the practice of elite sports.',
      },
      {
        title: 'Emotional stress',
        icon: '/assets/images/icon-estres-emocional.webp',
        text: 'Caused by human relationships, chronic nervousness, financial worries, family exhaustion, employment, relationships, difficulty managing children, and relationships with friends.',
      },
      {
        title: 'Chemical stress',
        icon: '/assets/images/icon-estres-quimico.webp',
        text: "In our lifestyle, we don't have much time and we often turn to quick fixes, which exposes us to a large amount of toxins — for example, fast food, environmental pollution, or beauty and cleaning products.",
      },
    ],
    scienceTitle: 'Chiropractic under science',
    scienceQuote:
      '"A study of 2,818 patients who received chiropractic care in the United States and around the world demonstrated that chiropractic care is associated with profound and statistically significant improvement in the areas of well-being. Patients report changes in: physical well-being, decreased level of perceived stress, enjoyment of life, lifestyle changes, and emotional, psychological well-being, and quality of life."',
    scienceCitation:
      'Blanks, RH; Boone, WR; Schmidt, S; Dobson, M; Network Care: A Retrospective Outcomes Assessment. 1996 · Dobson, M; Boone WR; Blanks, RH; Women and Alternative Health Care: A Retrospective Study of Recipients of Network Care. 1996',
    scienceLeadIn: 'Chiropractic adjustments have been shown to improve:',
    stats: [
      { stat: '65%', label: 'in 1-3 months (recovery)' },
      { stat: '74%', label: 'in 3-12 months (recovery)' },
      { stat: '84%', label: 'in 13-36 months (improvement)' },
      { stat: '95%', label: 'in +36 months (optimization)' },
    ],
  },
}

const c = computed(() => content[locale.value])
</script>

<template>
  <section class="bg-cream px-6">
    <div class="mx-auto grid max-w-[1280px] items-center gap-12 py-24 md:grid-cols-2">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-gold-dark">{{ c.eyebrow }}</p>
        <h1 class="mt-4 text-4xl font-semibold text-forest sm:text-5xl">{{ c.heroTitle }}</h1>
        <p class="mt-6 text-lg text-body/80">{{ c.heroBody }}</p>
      </div>
      <img src="/assets/images/quees-intro.webp" alt="chiropractic care" class="w-full rounded-3xl" />
    </div>
  </section>

  <section class="mx-auto max-w-3xl px-6 pb-24 text-body/80">
    <p>{{ c.intro }}</p>
  </section>

  <section class="mx-auto max-w-[1280px] px-6 pb-24 text-center">
    <h2 class="text-3xl font-semibold text-forest">{{ c.stressTitle }}</h2>
    <p class="mx-auto mt-4 max-w-2xl text-body/80">{{ c.stressSubtitle }}</p>
    <div class="mt-12 grid gap-6 sm:grid-cols-3">
      <div
        v-for="type in c.stressTypes"
        :key="type.title"
        class="rounded-3xl bg-white p-8 shadow-sm"
      >
        <img :src="type.icon" :alt="type.title" class="mx-auto h-14 w-14" />
        <h3 class="mt-4 text-lg font-semibold text-forest">{{ type.title }}</h3>
        <p class="mt-2 text-sm text-body/70">{{ type.text }}</p>
      </div>
    </div>
  </section>

  <section class="bg-[#cbaa9c] px-6 py-24 text-cream">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-semibold text-white">{{ c.scienceTitle }}</h2>
      <blockquote class="mt-6 text-cream/90">{{ c.scienceQuote }}</blockquote>
      <p class="mt-4 text-xs text-cream/60">{{ c.scienceCitation }}</p>
      <p class="mt-8 font-medium text-white">{{ c.scienceLeadIn }}</p>
    </div>
    <div class="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-4">
      <StatTile v-for="item in c.stats" :key="item.stat" v-bind="item" />
    </div>
  </section>

  <CtaBanner />
</template>
