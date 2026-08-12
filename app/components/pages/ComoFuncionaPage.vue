<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import CtaBanner from '@/components/ui/CtaBanner.vue'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import PageHero from '@/components/ui/PageHero.vue'
import { clinic, socialLinks } from '@/data/clinic'

const whatsappUrl = computed(() => socialLinks.find((link) => link.label === 'WhatsApp')?.href ?? '')

const { locale } = useAppI18n()

const activeStage = ref(0)
const stageRefs = ref<HTMLElement[]>([])
let observer: IntersectionObserver | undefined

function setStageRef(el: Element | null, index: number) {
  if (el instanceof HTMLElement) stageRefs.value[index] = el
}

function closestStageToCenter() {
  const viewportCenter = window.innerHeight / 2
  let closest = 0
  let closestDistance = Infinity
  stageRefs.value.forEach((el, i) => {
    const rect = el.getBoundingClientRect()
    const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter)
    if (distance < closestDistance) {
      closestDistance = distance
      closest = i
    }
  })
  return closest
}

onMounted(() => {
  activeStage.value = closestStageToCenter()

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeStage.value = stageRefs.value.indexOf(entry.target as HTMLElement)
        }
      }
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
  )
  stageRefs.value.forEach((el) => observer?.observe(el))
})

onUnmounted(() => observer?.disconnect())

const seoText = {
  es: {
    title: '¿Cómo funciona nuestro cuidado quiropráctico? | ColumnaQuiro',
    description:
      'Conoce las etapas de tu plan de cuidado quiropráctico personalizado: primera visita, informe, ajustes, revisión y mantenimiento.',
  },
  en: {
    title: 'How does our chiropractic care work? | ColumnaQuiro',
    description:
      'Learn the stages of your personalized chiropractic care plan: first visit, report, adjustments, review, and maintenance.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

const content = {
  es: {
    title: '¿Cómo funciona nuestro cuidado quiropráctico?',
    planTitle: 'Así será tu plan de cuidado quiropráctico personalizado',
    planIntro: 'Te explicamos cómo funciona cada etapa del cuidado y en cuantas sesiones se divide.',
    heroButton: 'Reserva tu visita',
    bookingIntro: 'Para reservar tu visita tienes 3 opciones: escribirnos a través de',
    bookingPhoneIntro: ', por teléfono al',
    bookingOnlineIntro: ', u online en este',
    bookingLink: 'link',
    stages: [
      {
        title: 'Reserva tu primera visita',
        isBooking: true,
      },
      {
        title: 'Primera visita',
        text: 'En la primera visita tomaremos tu historial de salud, para conocer mejor tus necesidades y poder hacer un plan de cuidado personalizado. Además realizaremos unas pruebas de postura para que veas el progreso durante el plan de cuidado. Por último, realizarás la primera sesión del ajuste quiropráctico con Léa, nuestra quiropráctica.',
      },
      {
        title: 'Informe quiropráctico',
        text: 'Empezaremos entregando los resultados de la primera sesión. Aquí podrás preguntar todas las dudas a nuestro equipo quiropráctico. Después pasaremos a realizar un ajuste quiropráctico y te informaremos del plan quiropráctico personalizado para ti.',
      },
      {
        title: 'Plan de cuidado',
        text: 'Empieza el plan que te hayamos explicado en la sesión anterior. Constará de ciertas sesiones de ajustes quiroprácticos realizadas entre una o dos veces por semana.',
      },
      {
        title: 'Revisión',
        text: 'Se realiza una vez terminadas todas las sesiones del plan de cuidado. Volveremos a realizar las pruebas que hicimos en la primera visita para contrastar la mejora durante el cuidado quiropráctico. Por último realizaremos un ajuste quiropráctico.',
      },
      {
        title: 'Mantenimiento',
        text: 'Una vez al mes procederemos con un ajuste quiropráctico para evitar recaídas, manteniendo un estado general de salud óptimo.',
      },
    ],
    pathTitle: 'El camino al bienestar',
    pathIntro:
      'En tu segunda visita al centro, te explicaremos las distintas fases del cuidado quiropráctico. Es fundamental comprender que la quiropráctica no solo alivia dolencias, sino que promueve un bienestar integral. El camino hacia una mejor calidad de vida se divide en tres fases, cada una de ellas esencial, ya que interrumpir el proceso puede hacer que regreses al punto de partida.',
    phases: [
      {
        title: '1. Recuperación',
        text: 'Durante esta fase, nos enfocamos en la recuperación intensiva de tu cuerpo. En esta etapa, tu cuerpo se defiende y los problemas en la columna dañan los nervios. Es normal sentir dolor y otros síntomas porque tu cuerpo no funciona de forma correcta. En esta fase es normal notar mejorías en pocos días.',
      },
      {
        title: '2. Corrección',
        text: 'Esta fase requiere un poco más de tiempo, alrededor de unas semanas. Tu cuerpo se adapta a los cambios gracias a los ajustes que hemos ido haciendo. Esto alinea tu columna y mejora el rendimiento de tu cuerpo.',
      },
      {
        title: '3. Mantenimiento',
        text: 'El objetivo de esta fase es prevenir recaídas, porque estas harían un efecto opuesto, volviendo a la primera fase del camino. Todos estamos expuestos a diferentes estreses en nuestra vida que no paran de cesar, como es el trabajo, las relaciones, la familia, los amigos, etc.',
      },
    ],
    faqTitle: '¿Alguna pregunta?',
    faqs: [
      {
        q: '¿Por qué necesito el mantenimiento?',
        a: 'Como explicamos en el camino al bienestar, el mantenimiento es el último paso del cuidado quiropráctico. Por desgracia, aunque hayas terminado el cuidado quiropráctico con todos los ajustes recomendados, todos acumulamos estrés en nuestra vida diaria. Esto hace que necesites hacer ajustes puntuales normalmente cada 3 semanas o un mes para no recaer y seguir mejorando tu salud.',
      },
      {
        q: '¿Cuánto dura el plan de cuidado?',
        a: 'El plan de cuidado depende de cada persona y las dolencias u objetivos que tenga. No es lo mismo una persona que busque mejorar su salud y no tiene ninguna dolencia, a una persona que tiene escoliosis o un problema grave y busca un cuidado. Nuestros quiroprácticos te ayudarán a solucionar cualquier duda sobre el cuidado en la segunda cita donde te explicarán todo en detalle.',
      },
      {
        q: '¿Por qué es necesario el historial de salud?',
        a: 'La información de tu historial de salud es importante para brindarte una mejor atención. También nos ayuda a identificar posibles problemas que puedan afectar el cuidado quiropráctico que te ofrecemos.',
      },
      {
        q: '¿Puedo cancelar la visita?',
        a: 'Sí, no hay ningún problema en cancelar la visita con anterioridad. Si cancelas la primera visita con menos de 24 horas, te la reprogramaremos una vez. Si cancelas dos veces con menos de 24 horas, se descontará del bono el ajuste realizado. Muchas veces tenemos lista de espera y cada cancelación es una oportunidad perdida para ayudar a otra persona.',
      },
      {
        q: '¿Necesito cita previa para acudir al centro?',
        a: 'Sí, nuestro centro funciona con cita previa, ya sea para la primera visita o una sesión de ajuste normal. Esto nos ayuda a planificar cada paciente y poder darte una mejor atención.',
      },
    ],
  },
  en: {
    title: 'How does our chiropractic care work?',
    planTitle: 'This will be your personalized chiropractic care plan',
    planIntro: 'We explain how each stage of care works and how many sessions it is divided into.',
    heroButton: 'Book your visit',
    bookingIntro: 'To book your visit you have 3 options: write to us on',
    bookingPhoneIntro: ', by phone at',
    bookingOnlineIntro: ', or online at this',
    bookingLink: 'link',
    stages: [
      {
        title: 'Book your first visit',
        isBooking: true,
      },
      {
        title: 'First visit',
        text: 'On the first visit we will take your health history, to better understand your needs and put together a personalized care plan. We will also run some posture tests so you can see your progress during the care plan. Finally, you will have your first chiropractic adjustment session with Léa, our chiropractor.',
      },
      {
        title: 'Chiropractic report',
        text: "We'll start by delivering the results of the first session. Here you can ask our chiropractic team any questions you have. Then we will perform a chiropractic adjustment and walk you through your personalized chiropractic plan.",
      },
      {
        title: 'Care plan',
        text: 'This starts the plan we explained to you in the previous session. It will consist of a number of chiropractic adjustment sessions, performed once or twice a week.',
      },
      {
        title: 'Review',
        text: 'This happens once all sessions of the care plan are complete. We will re-run the tests from your first visit to measure the improvement from chiropractic care, and finish with a chiropractic adjustment.',
      },
      {
        title: 'Maintenance',
        text: 'Once a month we will carry out a chiropractic adjustment to prevent relapses and maintain an optimal overall state of health.',
      },
    ],
    pathTitle: 'The path to wellness',
    pathIntro:
      'On your second visit to the center, we will explain the different phases of chiropractic care. It is essential to understand that chiropractic not only relieves ailments, but also promotes overall well-being. The path to a better quality of life is divided into three phases, each one essential — interrupting the process can bring you back to the starting point.',
    phases: [
      {
        title: '1. Recovery',
        text: "During this phase, we focus on your body's intensive recovery. At this stage, your body is fighting back and spinal problems are damaging nerves. It's normal to feel pain and other symptoms because your body isn't working properly. In this phase, it's normal to notice improvements within a few days.",
      },
      {
        title: '2. Correction',
        text: "This phase takes a little more time — around a few weeks. Your body adapts to the changes thanks to the adjustments we've been making. This aligns your spine and improves your body's performance.",
      },
      {
        title: '3. Maintenance',
        text: 'The goal of this phase is to prevent relapses, since those would have the opposite effect, sending you back to the first phase. We are all exposed to different stresses in our lives that never really stop — work, relationships, family, friends, and so on.',
      },
    ],
    faqTitle: 'Any questions?',
    faqs: [
      {
        q: 'Why do I need maintenance?',
        a: "As we explained on the path to wellness, maintenance is the last step of chiropractic care. Unfortunately, even after finishing chiropractic care with all the recommended adjustments, we all accumulate stress in our daily lives. That's why you'll need occasional adjustments, usually every 3 weeks or a month, to avoid relapse and keep improving your health.",
      },
      {
        q: 'How long does the care plan last?',
        a: "The care plan depends on each person and the ailments or goals they have. Someone looking to improve their health with no particular condition is different from someone with scoliosis or a serious problem seeking care. Our chiropractors will answer any questions about your care at your second appointment, where everything is explained in detail.",
      },
      {
        q: 'Why is a health history necessary?',
        a: 'Your health history helps us provide better care. It also helps us identify potential issues that could affect the chiropractic care we offer you.',
      },
      {
        q: 'Can I cancel my visit?',
        a: "Yes, there's no problem canceling your visit ahead of time. If you cancel your first visit with less than 24 hours' notice, we'll reschedule it once. If you cancel twice with less than 24 hours' notice, the adjustment will be deducted from your package. We often have a waiting list, and every cancellation is a missed opportunity to help someone else.",
      },
      {
        q: 'Do I need an appointment to visit the center?',
        a: 'Yes, our center works by appointment, whether for the first visit or a regular adjustment session. This helps us plan for each patient and give you better care.',
      },
    ],
  },
}

const c = computed(() => content[locale.value])
</script>

<template>
  <PageHero
    :eyebrow="c.title"
    :title="c.planTitle"
    :body="c.planIntro"
    :button-label="c.heroButton"
    :button-to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'"
    image="/assets/images/comofunciona-header.webp"
    image-alt="how chiropractic care works"
  />

  <section class="mx-auto max-w-3xl px-6 py-24">
    <div>
      <div
        v-for="(stage, i) in c.stages"
        :key="stage.title"
        :ref="(el) => setStageRef(el as Element | null, i)"
        class="flex gap-6 rounded-3xl p-6 transition-all duration-300 md:min-h-[50vh] md:items-center"
        :class="activeStage === i ? 'bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]' : 'opacity-50'"
      >
        <div class="flex shrink-0 flex-col items-center">
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-semibold transition-colors duration-300"
            :class="activeStage === i ? 'bg-gold text-gold-dark' : 'bg-taupe text-body/50'"
          >
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <span v-if="i < c.stages.length - 1" class="mt-2 w-px flex-1 bg-taupe" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-forest">{{ stage.title }}</h3>
          <p v-if="stage.isBooking" class="mt-2 text-body/80">
            {{ c.bookingIntro }}
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener"
              class="font-semibold text-gold-dark underline"
              >WhatsApp</a
            >{{ c.bookingPhoneIntro }}
            <a :href="`tel:${clinic.phone.replace(/\\s/g, '')}`" class="font-semibold text-gold-dark underline">{{
              clinic.phone
            }}</a
            >{{ c.bookingOnlineIntro }}
            <NuxtLink
              :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'"
              class="font-semibold text-gold-dark underline"
              >{{ c.bookingLink }}</NuxtLink
            >.
          </p>
          <p v-else class="mt-2 text-body/80">{{ stage.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-24">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-3xl font-semibold text-forest">{{ c.pathTitle }}</h2>
      <p class="mx-auto mt-4 max-w-2xl text-body/80">{{ c.pathIntro }}</p>
      <img
        src="/assets/images/camino-al-bienestar.webp"
        alt="the path to wellness"
        class="mx-auto mt-10 max-w-2xl"
      />
    </div>
    <div class="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
      <div v-for="phase in c.phases" :key="phase.title" class="rounded-3xl bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
        <h3 class="text-lg font-medium text-forest">{{ phase.title }}</h3>
        <p class="mt-2 text-sm text-body/70">{{ phase.text }}</p>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-4xl px-6 py-24">
    <div class="text-center">
      <h2 class="text-3xl font-semibold text-forest">{{ c.faqTitle }}</h2>
      <img
        src="/assets/images/comofunciona-preguntas.webp"
        alt="frequently asked questions"
        class="mx-auto mt-6 max-w-md"
      />
    </div>
    <div class="mx-auto mt-12 max-w-3xl">
      <FaqAccordion :faqs="c.faqs" />
    </div>
  </section>

  <CtaBanner />
</template>
