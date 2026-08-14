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
      'Soy diplomada del Barcelona College of Chiropractic en 2021 después de completar una carrera de 6 años. Inicié mis dos primeros años de estudio en IFEC en Francia y luego decidí trasladarme a España.',
    paragraphs: [
      'Durante mi formación, también tuve la oportunidad de trabajar como profesora de técnicas y supervisora de clínica en el Barcelona College of Chiropractic. Después de obtener mi diploma, trabajé en una consulta quiropráctica en Barcelona, donde pude aplicar mis conocimientos y habilidades en el cuidado <a href="/blog/cuanto-cuesta-un-quiropractico" class="font-semibold text-gold-dark underline">quiropráctico</a>.',
      'Además, he asistido a numerosos seminarios y cursos de quiroprácticos tanto durante mis estudios como después de graduarme. Esto me ha permitido ampliar mis conocimientos y combinar una variedad de técnicas para brindar a cada paciente una experiencia personalizada:',
    ],
    techniques: [
      'SOT (Sacro Occipital Technique)',
      'Kinesiología Aplicada (Applied Kinesiology)',
      'Gonstead',
      'TBM (Total Body Modification)',
      'Técnica Toggle Recoil-Hole in One',
      'Técnica Webster',
    ],
    closing:
      'Cada una de estas técnicas tiene sus propias características y enfoques, y las adapto según las necesidades individuales de cada paciente. Mi objetivo es brindar un cuidado quiropráctico integral y efectivo para ayudar a restaurar el equilibrio y promover la salud y el bienestar en cada persona que atiendo.',
    button: 'Reserva tu visita',
    backButton: '← Volver al equipo',
  },
  en: {
    role: 'Doctor of Chiropractic',
    intro:
      'I graduated from the Barcelona College of Chiropractic in 2021 after completing a 6-year program. I started my first two years of study at IFEC in France before deciding to move to Spain.',
    paragraphs: [
      'During my training, I also had the opportunity to work as a technique instructor and clinic supervisor at the Barcelona College of Chiropractic. After earning my diploma, I worked at a chiropractic practice in Barcelona, where I was able to apply my knowledge and skills in chiropractic care.',
      "I've also attended numerous chiropractic seminars and courses, both during my studies and after graduating. This has allowed me to broaden my knowledge and combine a range of techniques to give each patient a personalized experience:",
    ],
    techniques: [
      'SOT (Sacro Occipital Technique)',
      'Applied Kinesiology',
      'Gonstead',
      'TBM (Total Body Modification)',
      'Toggle Recoil-Hole in One Technique',
      'Webster Technique',
    ],
    closing:
      'Each of these techniques has its own characteristics and approach, and I adapt them to the individual needs of each patient. My goal is to provide comprehensive, effective chiropractic care that helps restore balance and promotes health and well-being in everyone I see.',
    button: 'Book your visit',
    backButton: '← Back to the team',
  },
}

const c = computed(() => content[locale.value])

useSeo({
  title: computed(() =>
    locale.value === 'es' ? 'Léa Guido, Doctora en Quiropráctica | ColumnaQuiro' : 'Léa Guido, Doctor of Chiropractic | ColumnaQuiro',
  ),
  description: computed(() => c.value.intro),
})
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-24">
    <img
      src="/assets/images/team-lea.avif"
      alt="Léa Guido"
      class="mx-auto h-40 w-40 rounded-full object-cover"
    />
    <h1 class="mt-6 text-center text-4xl font-semibold text-forest sm:text-5xl">Léa Guido</h1>
    <p class="mt-2 text-center text-sm font-semibold uppercase tracking-wide text-gold-dark">
      {{ c.role }}
    </p>
    <div class="mt-4 flex justify-center">
      <a
        href="https://es.linkedin.com/in/lea-guido-a70b4a1bb"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        class="text-slate hover:text-forest"
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </a>
    </div>

    <div class="mt-8 space-y-4 text-body/80">
      <p>{{ c.intro }}</p>
      <p v-for="(paragraph, i) in c.paragraphs" :key="i" v-html="paragraph" />
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
