<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { SYMPTOM_SLUG_PAIRS } from '@/utils/site-routes'
import { symptomContent } from '@/data/symptom-content'
import CtaBanner from '@/components/ui/CtaBanner.vue'

const route = useRoute()
const { locale, t } = useAppI18n()

const symptomKey = computed(() => {
  const slug = route.params.slug as string
  const pair = SYMPTOM_SLUG_PAIRS.find((p) => p.es === slug || p.en === slug)
  return pair?.es
})

const content = computed(() => (symptomKey.value ? symptomContent[symptomKey.value] : undefined))
const c = computed(() => (content.value ? content.value[locale.value] : undefined))

const imageBySlug: Record<string, string> = {
  artrosis: '/assets/images/symptom-osteoarthritis.avif',
  'deficit-de-atencion': '/assets/images/symptom-attention-deficit.avif',
  'espectro-autistico': '/assets/images/symptom-autism.avif',
  'dolor-de-espalda': '/assets/images/symptom-back-pain.avif',
  'bajo-rendimiento': '/assets/images/symptom-low-performance.avif',
  braquicefalia: '/assets/images/symptom-brachycephaly.avif',
  'sindrome-del-tunel-carpiano': '/assets/images/symptom-tunel-carpiano.avif',
  ciatica: '/assets/images/symptom-sciatica.avif',
  colicos: '/assets/images/symptom-colic.avif',
  estrenimiento: '/assets/images/symptom-constipated.avif',
  dislexia: '/assets/images/symptom-dyslexia.avif',
  'dolor-de-cervicales-y-cabeza': '/assets/images/symptom-head-pain.avif',
  'dolor-de-cuello': '/assets/images/symptom-neck-pain.avif',
  escoliosis: '/assets/images/symptom-scoliosis.avif',
  'estres-y-depresion': '/assets/images/symptom-stress.avif',
  fibromialgia: '/assets/images/symptom-fibromyalgia.avif',
  'hernia-discal': '/assets/images/symptom-herniated-disc.avif',
  lumbalgia: '/assets/images/symptom-lower-back-pain.avif',
  'retraso-motor': '/assets/images/symptom-intellectual-disability.avif',
  reflujo: '/assets/images/symptom-reflux.avif',
}
const image = computed(() => (symptomKey.value ? imageBySlug[symptomKey.value] : undefined))

useSeo({
  title: computed(() => (c.value ? `${c.value.title} | ColumnaQuiro` : 'ColumnaQuiro')),
  description: computed(() => c.value?.intro[0] ?? ''),
})
</script>

<template>
  <section v-if="c" class="mx-auto max-w-3xl px-6 py-24">
    <img v-if="image" :src="image" :alt="c.title" class="mx-auto h-20 w-20 object-contain" />
    <h1 class="mt-6 text-center text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>

    <nav class="mt-6 flex items-center justify-center gap-2 text-sm text-body/60">
      <span>{{ locale === 'es' ? 'Síntomas' : 'Symptoms' }}</span>
      <span>›</span>
      <span class="text-body/80">{{ c.title }}</span>
    </nav>

    <h2 class="mt-10 text-xl font-semibold text-forest">
      {{ locale === 'es' ? '¿Qué es?' : 'What is it?' }}
    </h2>
    <div class="mt-4 space-y-4 text-body/80">
      <p v-for="(paragraph, i) in c.intro" :key="i">{{ paragraph }}</p>
    </div>

    <h2 class="mt-10 text-xl font-semibold text-forest">
      {{ locale === 'es' ? 'Señales habituales' : 'Common signs' }}
    </h2>
    <ul class="mt-4 list-disc space-y-1 pl-5 text-body/80">
      <li v-for="sign in c.signs" :key="sign">{{ sign }}</li>
    </ul>

    <h2 class="mt-10 text-xl font-semibold text-forest">
      {{ locale === 'es' ? '¿Cómo ayuda la quiropráctica?' : 'How chiropractic care helps' }}
    </h2>
    <div class="mt-4 space-y-4 text-body/80">
      <p v-for="(paragraph, i) in c.howChiropracticHelps" :key="i">{{ paragraph }}</p>
    </div>

    <p v-if="c.note" class="mt-8 rounded-2xl bg-white p-4 text-sm text-body/70 shadow-sm">
      {{ c.note }}
    </p>
  </section>

  <CtaBanner v-if="c" />
</template>
