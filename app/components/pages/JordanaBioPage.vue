<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import BaseButton from '@/components/ui/BaseButton.vue'
import CtaBanner from '@/components/ui/CtaBanner.vue'

const { locale } = useAppI18n()

const content = {
  es: {
    role: 'Doctora en Quiropráctica',
    intro:
      'Me gradué en el McTimoney College of Chiropractic en 2026. Antes de descubrir mi verdadera vocación por la quiropráctica, cursé dos años del Grado en Enfermería en la Fundación Jiménez Díaz en Madrid, una etapa que despertó mi pasión por la salud y me llevó a buscar un enfoque más integral y preventivo del bienestar corporal.',
    paragraphs: [
      'Durante mi formación académica, completé un año de residencia clínica en el centro quiropráctico de McTimoney en Madrid, donde pude aplicar mis conocimientos y consolidar mi práctica en la atención directa a pacientes con diversas necesidades. Desde siempre he sentido una profunda vocación por el cuidado de las madres, los bebés y la salud materno-infantil, razón por la cual actualmente compagino mi labor en consulta con la realización del Máster de Pediatría en McTimoney.',
      'Con el compromiso de ofrecer un servicio de máxima calidad, desde mi primer año de carrera he asistido de forma continua a seminarios y cursos especializados para perfeccionar mi técnica y ampliar mi perspectiva clínica. Esto me permite combinar y adaptar diferentes métodos según la etapa vital y las necesidades individuales de cada paciente:',
    ],
    techniques: [
      'Técnica Diversificada (Diversified)',
      'SOT (Sacro Occipital Technique)',
      'Activator',
      'McTimoney Technique (Modified Toggle Recoil)',
    ],
    closing:
      'Considero que, en un mundo a menudo enfocado en lo superficial y en calmar únicamente el dolor inmediato, es fundamental apostar por un cuidado integral que profundice hasta encontrar la base de nuestros desequilibrios. Mi objetivo es acompañar a cada persona y a su familia a restablecer su equilibrio, aliviar sus molestias y promover una salud duradera.',
    button: 'Reserva tu visita',
    backButton: '← Volver al equipo',
  },
  en: {
    role: 'Doctor of Chiropractic',
    intro:
      'I graduated from the McTimoney College of Chiropractic in 2026. Before discovering my true calling in chiropractic, I completed two years of a Nursing degree at the Fundación Jiménez Díaz in Madrid — a stage that sparked my passion for health and led me to look for a more comprehensive, preventive approach to body wellness.',
    paragraphs: [
      "During my academic training, I completed a year of clinical residency at the McTimoney chiropractic centre in Madrid, where I applied my knowledge and built my practice caring directly for patients with a wide range of needs. I've always felt a deep calling toward the care of mothers, babies, and maternal-infant health, which is why I currently combine my work in the clinic with a Master's in Paediatrics at McTimoney.",
      "Committed to offering the highest quality of care, I've continuously attended specialized seminars and courses since my first year of training to refine my technique and broaden my clinical perspective. This lets me combine and adapt different methods to each patient's stage of life and individual needs:",
    ],
    techniques: [
      'Diversified Technique',
      'SOT (Sacro Occipital Technique)',
      'Activator',
      'McTimoney Technique (Modified Toggle Recoil)',
    ],
    closing:
      "I believe that in a world often focused on the superficial and on relieving only immediate pain, it's essential to commit to comprehensive care that goes deep enough to find the root of our imbalances. My goal is to help each person and their family restore their balance, ease their discomfort, and promote lasting health.",
    button: 'Book your visit',
    backButton: '← Back to the team',
  },
}

const c = computed(() => content[locale.value])

useSeo({
  title: computed(() =>
    locale.value === 'es'
      ? 'Jordana Aguar, Doctora en Quiropráctica | ColumnaQuiro'
      : 'Jordana Aguar, Doctor of Chiropractic | ColumnaQuiro',
  ),
  description: computed(() => c.value.intro),
})
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-24">
    <img
      src="/assets/images/team-jordana.jpg"
      alt="Jordana Aguar"
      class="mx-auto h-40 w-40 rounded-full object-cover"
    />
    <h1 class="mt-6 text-center text-4xl font-semibold text-forest sm:text-5xl">Jordana Aguar</h1>
    <p class="mt-2 text-center text-sm font-semibold uppercase tracking-wide text-gold-dark">
      {{ c.role }}
    </p>

    <div class="mt-8 space-y-4 text-body/80">
      <p>{{ c.intro }}</p>
      <p v-for="(paragraph, i) in c.paragraphs" :key="i">{{ paragraph }}</p>
    </div>

    <ul class="mt-4 list-disc space-y-1 pl-5 text-body/80">
      <li v-for="technique in c.techniques" :key="technique">{{ technique }}</li>
    </ul>

    <p class="mt-4 text-body/80">{{ c.closing }}</p>

    <div class="mt-10 flex flex-wrap items-center gap-4">
      <BaseButton :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'">{{
        c.button
      }}</BaseButton>
      <NuxtLink
        :to="locale === 'es' ? '/sobre-nosotros/equipo' : '/en/about-us/our-team'"
        class="text-sm font-semibold text-gold-dark"
      >
        {{ c.backButton }}
      </NuxtLink>
    </div>
  </section>

  <CtaBanner />
</template>
