<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import CtaBanner from '@/components/ui/CtaBanner.vue'
import PageHero from '@/components/ui/PageHero.vue'

const { locale } = useAppI18n()

const seoText = {
  es: {
    title: '¿Qué es la quiropráctica? | ColumnaQuiro',
    description:
      'Qué es la quiropráctica, qué hace un quiropráctico en consulta y qué dice la evidencia sobre el dolor de espalda y cuello. Y cuándo ir antes al médico.',
  },
  en: {
    title: 'What is chiropractic? | ColumnaQuiro',
    description:
      'What chiropractic is, what a chiropractor does in a session and what the evidence says about back and neck pain. Plus when to see a doctor first.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

// The evidence section states only what systematic reviews and guidelines
// support (spinal pain), each with its source. Claims about the nervous
// system "working at 100%", toxins or improvement percentages were removed
// on purpose in Oct 2026: health pages are held to the strictest quality bar
// by Google and by Spanish health-advertising rules, and the blog already
// tells readers to distrust exactly those claims.
const content = {
  es: {
    eyebrow: '¿Qué es la quiropráctica?',
    heroTitle: 'Qué es la quiropráctica y qué puede hacer por ti',
    heroBody:
      'La quiropráctica es una profesión de la salud centrada en la columna, las articulaciones y su relación con el sistema nervioso. Usamos ajustes, movilizaciones y ejercicio para aliviar el dolor y que te muevas mejor.',
    intro: [
      'Un quiropráctico valora cómo se mueven tu columna y tus articulaciones, busca el origen mecánico de tu dolor y lo trata con las manos: ajustes (manipulaciones rápidas y precisas), movilizaciones suaves y trabajo de tejido blando. Casi siempre lo acompañamos de ejercicios y pautas para casa, porque lo que haces entre sesiones cuenta tanto como la sesión.',
      'La mayoría de las personas que vienen a consulta lo hacen por dolor lumbar, dolor de cuello, ciática, dolor de cabeza de origen cervical o rigidez. Es en el dolor de columna donde la quiropráctica tiene más respaldo científico, y es ahí donde ponemos el foco.',
      'En España la quiropráctica no está regulada como profesión sanitaria. Por eso conviene acudir a profesionales con una formación completa en quiropráctica, como la que la Asociación Española de Quiropráctica (AEQ) exige a sus miembros. Todo el equipo de ColumnaQuiro es miembro de la AEQ. Si es tu primera vez, en <a href="/blog/primera-visita-al-quiropractico-que-esperar/" class="font-semibold text-gold-dark underline">qué esperar de la primera visita</a> te lo contamos paso a paso.',
    ],
    stressTitle: '¿Qué suele haber detrás del dolor de espalda?',
    stressSubtitle:
      'Casi nunca hay una sola causa. Estas son las tres cargas que más vemos en consulta, y las que revisamos contigo en la primera visita.',
    stressTypes: [
      {
        title: 'Carga física',
        icon: '/assets/images/icon-estres-fisico.webp',
        text: 'Muchas horas sentado o de pie, levantar peso de forma brusca, caídas, el embarazo y el posparto, o un aumento rápido del entrenamiento.',
      },
      {
        title: 'Estrés emocional',
        icon: '/assets/images/icon-estres-emocional.webp',
        text: 'El estrés sostenido aumenta la tensión muscular, sobre todo en cuello y hombros, y hace que el dolor se perciba con más intensidad.',
      },
      {
        title: 'Hábitos',
        icon: '/assets/images/icon-estres-quimico.webp',
        text: 'Dormir poco o mal, el sedentarismo y la falta de fuerza muscular hacen que la espalda tolere peor el día a día.',
      },
    ],
    scienceTitle: 'Qué dice la evidencia',
    scienceIntro:
      'Estos son los resultados de las revisiones y guías clínicas más sólidas. Los citamos tal cual, también cuando son modestos.',
    findings: [
      {
        text: 'En el dolor lumbar crónico, la manipulación vertebral consigue resultados parecidos a los de otros tratamientos recomendados, como el ejercicio.',
        source: 'Rubinstein SM et al. BMJ 2019;364:l689 (revisión sistemática y metaanálisis)',
      },
      {
        text: 'En el dolor lumbar agudo, la manipulación vertebral se asocia a una mejora modesta del dolor y la función durante las primeras seis semanas.',
        source: 'Paige NM et al. JAMA 2017;317(14):1451-1460 (revisión sistemática y metaanálisis)',
      },
      {
        text: 'La guía británica de dolor lumbar y ciática recomienda la terapia manual solo dentro de un plan que incluya ejercicio, nunca como tratamiento aislado.',
        source: 'NICE NG59, Low back pain and sciatica in over 16s (2016, actualizada en 2020)',
      },
    ],
    limitsTitle: 'Lo que la quiropráctica no hace',
    limits:
      'No cura enfermedades ni sustituye a tu médico. Ve antes a urgencias o a tu médico si tienes pérdida de fuerza en las piernas, pérdida de control de la orina o las heces, adormecimiento en la zona genital, fiebre, pérdida de peso sin explicación o dolor tras un golpe fuerte.',
  },
  en: {
    eyebrow: 'What is chiropractic?',
    heroTitle: 'What chiropractic is and what it can do for you',
    heroBody:
      'Chiropractic is a health profession focused on the spine, the joints and how they relate to the nervous system. We use adjustments, mobilisation and exercise to ease pain and help you move better.',
    intro: [
      'A chiropractor assesses how your spine and joints move, looks for the mechanical source of your pain and treats it by hand: adjustments (quick, precise manipulations), gentle mobilisation and soft-tissue work. We almost always add exercises and advice for home, because what you do between sessions matters as much as the session itself.',
      'Most people come to us with lower back pain, neck pain, sciatica, headaches that start in the neck, or stiffness. Spinal pain is where chiropractic has the strongest scientific support, and it is where we focus.',
      'In Spain chiropractic is not a regulated health profession. That is why it pays to see practitioners with full chiropractic training, the kind the Spanish Chiropractic Association (AEQ) requires of its members. The whole ColumnaQuiro team belongs to the AEQ. If it is your first time, <a href="/en/blog/first-chiropractic-visit-what-to-expect/" class="font-semibold text-gold-dark underline">what to expect at your first visit</a> walks you through it.',
    ],
    stressTitle: 'What usually sits behind back pain?',
    stressSubtitle:
      'There is rarely a single cause. These are the three kinds of load we see most often, and the ones we go through with you at your first visit.',
    stressTypes: [
      {
        title: 'Physical load',
        icon: '/assets/images/icon-estres-fisico.webp',
        text: 'Long hours sitting or standing, lifting awkwardly, falls, pregnancy and the postpartum period, or ramping up training too fast.',
      },
      {
        title: 'Emotional stress',
        icon: '/assets/images/icon-estres-emocional.webp',
        text: 'Ongoing stress raises muscle tension, especially in the neck and shoulders, and makes pain feel more intense.',
      },
      {
        title: 'Habits',
        icon: '/assets/images/icon-estres-quimico.webp',
        text: 'Poor or short sleep, a sedentary routine and low muscle strength all make your back cope less well with daily life.',
      },
    ],
    scienceTitle: 'What the evidence says',
    scienceIntro:
      'These are the findings of the strongest reviews and clinical guidelines. We quote them as they are, including when the effect is modest.',
    findings: [
      {
        text: 'For chronic lower back pain, spinal manipulation gives results similar to other recommended treatments such as exercise.',
        source: 'Rubinstein SM et al. BMJ 2019;364:l689 (systematic review and meta-analysis)',
      },
      {
        text: 'For acute lower back pain, spinal manipulation is associated with a modest improvement in pain and function over the first six weeks.',
        source: 'Paige NM et al. JAMA 2017;317(14):1451-1460 (systematic review and meta-analysis)',
      },
      {
        text: 'The UK guideline for low back pain and sciatica recommends manual therapy only as part of a plan that includes exercise, never on its own.',
        source: 'NICE NG59, Low back pain and sciatica in over 16s (2016, updated 2020)',
      },
    ],
    limitsTitle: 'What chiropractic does not do',
    limits:
      'It does not cure disease or replace your doctor. Go to A&E or your doctor first if you have weakness in your legs, loss of bladder or bowel control, numbness around the groin, fever, unexplained weight loss, or pain after a hard fall or blow.',
  },
}

const c = computed(() => content[locale.value])
</script>

<template>
  <PageHero
    :eyebrow="c.eyebrow"
    :title="c.heroTitle"
    :body="c.heroBody"
    image="/assets/images/quees-intro.webp"
    :image-alt="locale === 'es' ? 'Quiropráctica en consulta' : 'Chiropractic care in the clinic'"
  />

  <section class="mx-auto max-w-3xl space-y-4 px-6 pb-24 text-body/80">
    <p v-for="(paragraph, i) in c.intro" :key="i" v-html="paragraph" />
  </section>

  <section class="mx-auto max-w-[calc(1280px+3rem)] px-6 pb-24 text-center">
    <h2 class="section-title">{{ c.stressTitle }}</h2>
    <p class="mx-auto mt-4 max-w-2xl text-body/80">{{ c.stressSubtitle }}</p>
    <div class="mt-12 grid gap-6 sm:grid-cols-3">
      <div
        v-for="(type, i) in c.stressTypes"
        :key="type.title"
        class="rounded-3xl bg-white p-8 text-left shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
      >
        <div
          class="flex h-16 w-16 items-center justify-center rounded-2xl"
          :class="[i === 0 ? 'bg-badge-mint/20' : i === 1 ? 'bg-badge-apricot/20' : 'bg-badge-teal/20']"
        >
          <img :src="type.icon" alt="" class="h-8 w-8" />
        </div>
        <h3 class="mt-4 text-lg font-semibold text-forest">{{ type.title }}</h3>
        <p class="mt-2 text-sm text-body/70">{{ type.text }}</p>
      </div>
    </div>
  </section>

  <section class="bg-forest px-6 py-24">
    <div class="mx-auto max-w-3xl">
      <h2 class="section-title text-center text-white">{{ c.scienceTitle }}</h2>
      <p class="mt-6 text-center text-cream/90">{{ c.scienceIntro }}</p>
      <ul class="mt-10 space-y-6">
        <li v-for="finding in c.findings" :key="finding.source" class="rounded-2xl bg-white/5 p-6">
          <p class="text-cream">{{ finding.text }}</p>
          <p class="mt-2 text-sm text-sage">{{ finding.source }}</p>
        </li>
      </ul>
      <h3 class="mt-12 text-xl font-semibold text-white">{{ c.limitsTitle }}</h3>
      <p class="mt-3 text-cream/90">{{ c.limits }}</p>
    </div>
  </section>

  <CtaBanner />
</template>
