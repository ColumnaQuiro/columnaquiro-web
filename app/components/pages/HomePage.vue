<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import BaseButton from '@/components/ui/BaseButton.vue'
import FaqAccordion from '@/components/ui/FaqAccordion.vue'
import RatingBadge from '@/components/ui/RatingBadge.vue'
import SymptomGrid from '@/components/sections/SymptomGrid.vue'
import ReviewsSection from '@/components/sections/ReviewsSection.vue'
import LocationBlock from '@/components/sections/LocationBlock.vue'
import ExpatSection from '@/components/sections/ExpatSection.vue'
import { socialLinks } from '@/data/clinic'

const { locale } = useAppI18n()

const whyBulletIcons = ['/assets/images/icon-ajuste-primera-visita.svg', '/assets/images/icon-enfoque-holistico.svg']

const whyIcons = [
  'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
  'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z',
]

const seoText = {
  // Search Console, 24 Jul-23 Oct 2026: the home page showed 10,191 times
  // for queries like "quiropractico valencia" (position 7) and was clicked
  // 1.7% of the time. The old title said the brand and the category and
  // nothing a searcher could compare on; this one leads with the query, then
  // the two facts the listing competes on -- the price and the rating.
  es: {
    title: 'Quiropráctico en Valencia · Primera visita 70 € | ColumnaQuiro',
    description:
      'Centro quiropráctico en Russafa / L\'Eixample, València. Quiroprácticas tituladas, 4,9 sobre 5 en Google con más de 150 reseñas. Primera visita 70 € con evaluación completa y primer ajuste. Reserva online.',
  },
  en: {
    title: 'English-speaking Chiropractor in Valencia · First visit €70 | ColumnaQuiro',
    description:
      'Chiropractic clinic in Russafa / L\'Eixample, Valencia. Qualified chiropractors who speak English, rated 4.9 on Google from 150+ reviews. First visit €70 with a full assessment and first adjustment. Book online.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

const content = {
  es: {
    eyebrow: 'Centro quiropráctico · Russafa / L\'Eixample, València',
    heroTitle: 'Quiropráctico en Valencia: vuelve a moverte sin dolor',
    heroSubtitle: '',
    heroBody:
      'Quiroprácticas tituladas en el centro de València. Primera visita 70 €: evaluación completa, primer ajuste y plan de cuidado personalizado.',
    heroButton: 'Reservar primera visita · 70 €',
    heroWhatsApp: 'Escríbenos por WhatsApp',
    heroNote: 'No pagas al reservar · Sin tarjeta · Mar–Jue 9–13 h y 15–20 h',
    heroTrust: [
      'Más de 5.000 pacientes',
      'Hablamos español, inglés y francés',
      'Quiroprácticas tituladas',
      'Miembros de la AEQ, WFC y ECU',
    ],
    trustBarLabel: 'Somos miembros de prestigiosas instituciones',
    trustBar: [
      { name: 'AEQ', label: 'Asociación Española de Quiropráctica' },
      { name: 'WFC', label: 'World Federation of Chiropractic' },
      { name: 'ECU', label: "European Chiropractors' Union" },
    ],
    stressFreeTitle: 'Imagina tu día sin dolor de espalda',
    stressFreeBody:
      'Cuando la espalda deja de doler, se nota en todo: duermes mejor, te mueves con más libertad y vuelves a hacer lo que te gusta. En ColumnaQuiro buscamos el origen de tu dolor, no solo el alivio de hoy.',
    stressFreeBullets: [
      'Mejor postura y movilidad articular',
      'Pautas y ejercicios para que el alivio dure',
      'Menos tensión en cuello, hombros y espalda',
    ],
    methodologyTitle: 'Empieza por descubrir qué ocurre en tu cuerpo.',
    methodologyBody:
      'Nuestra metodología se basa en la precisión y el cuidado personalizado con un enfoque integral y adaptado a ti.',
    methodology: [
      {
        icon: '/assets/images/icon-metodo-evaluacion.svg',
        title: 'Evaluación Digital',
        text: 'Analizamos tu postura, tu movilidad y tu columna para entender de dónde viene tu dolor.',
      },
      {
        icon: '/assets/images/icon-metodo-ajuste.svg',
        title: 'Ajuste Manual',
        text: 'Técnicas manuales precisas para devolver el movimiento a las articulaciones rígidas y aliviar el dolor.',
      },
      {
        icon: '/assets/images/icon-metodo-plan.svg',
        title: 'Plan Holístico',
        text: 'Diseñamos una hoja de ruta personalizada para que mantengas tu salud a largo plazo.',
      },
    ],
    reviewsTitle: 'Reseñas de nuestros pacientes',
    leaTitle: 'Hola, soy Léa Guido, quiropráctica',
    leaParagraphs: [
      'Y voy a ayudarte a aumentar tu calidad de vida a través del cuidado quiropráctico.',
      'Ya son más de 10 años de formación y dedicación profesional en el mundo de la quiropráctica. Desde mi graduación, he seguido formándome para ampliar mis conocimientos y habilidades con el fin de poder ofrecer el mejor cuidado a mis pacientes.',
      'Para mí, ColumnaQuiro va más allá de ser un centro quiropráctico. Es un proyecto humanista que permite empoderar la salud de la población desde dentro hacia fuera.',
      'Por eso mi misión es acompañarte a mejorar tu estilo de vida, tu salud y tu conciencia corporal.',
    ],
    leaButton: 'Conoce mi historia',
    identifyTitle: 'Dime, ¿con cuál de estas situaciones te identificas?',
    identifyCards: [
      {
        icon: '/assets/images/icon-identificas-laboral.svg',
        title: 'Estrés laboral',
        text: 'Tensión en hombros y cuello tras largas jornadas de oficina.',
      },
      {
        icon: '/assets/images/icon-identificas-rendimiento.svg',
        title: 'Bajo rendimiento',
        text: 'Fatiga constante o lesiones recurrentes al entrenar.',
      },
      {
        icon: '/assets/images/icon-identificas-sueno.svg',
        title: 'Problemas de sueño',
        text: 'Dificultad para descansar debido a molestias físicas.',
      },
      {
        icon: '/assets/images/icon-identificas-cambio.svg',
        title: 'Etapas de cambio',
        text: 'Embarazo o crecimiento infantil que requiere equilibrio.',
      },
    ],
    exploreTitle: 'La quiropráctica, para cada etapa de la vida',
    exploreParagraphs: [
      'Descubre <a href="/que-es-la-quiropractica/" class="font-semibold text-gold-dark underline">qué es la quiropráctica</a> y qué dice la evidencia sobre el dolor de espalda y cuello.',
      'Atendemos a personas con dolor de espalda o cuello por el trabajo, a <a href="/para-quien-sirve-la-quiropractica/embarazadas/" class="font-semibold text-gold-dark underline">embarazadas</a>, deportistas, personas mayores, niños y bebés, con técnicas adaptadas a cada edad.',
    ],
    exploreButton: 'Reserva tu primera visita',
    processTitle: 'Así cuidamos de tu columna vertebral',
    processSubtitle: 'Un proceso de tres fases diseñado para ti',
    processSteps: [
      {
        number: '01',
        title: 'Estudio adaptado a ti',
        text: 'A través de un cuestionario de salud, estudiamos tu caso de forma individual. En la primera visita haremos una serie de pruebas y el primer ajuste quiropráctico.',
      },
      {
        number: '02',
        title: 'Informe quiropráctico',
        text: 'Te daremos tu informe quiropráctico con los resultados de las pruebas de la primera visita. Nuestro quiropráctico te resolverá cualquier duda.',
      },
      {
        number: '03',
        title: 'Plan de cuidado',
        text: 'Te proponemos un número de sesiones y una frecuencia según tu caso, con ejercicios para casa, y revisamos juntos cómo vas.',
      },
    ],
    processButton: 'Pide tu estudio personalizado',
    whyChooseUs: [
      { title: 'Centro en Valencia', text: 'Ubicación céntrica y accesible.' },
      {
        title: 'Certificación AEQ',
        text: 'Profesionales titulados y en constante formación, para ofrecerte el mejor cuidado posible.',
      },
      { title: 'Flexibilidad', text: 'Horarios adaptados a tu vida.' },
      {
        title: 'Foco en resultados',
        text: 'Cuidado personalizado, con objetivos claros que revisamos contigo en cada fase del plan.',
      },
    ],
    whyTitle: '¿Por qué elegir nuestro Centro Quiropráctico?',
    whyBody:
      'Tomamos el tiempo necesario para ajustarte de forma correcta. Nuestras salas son cerradas, es decir, no compartirás camilla con más pacientes, como hacen otros centros.',
    whyBullets: ['Ajuste quiropráctico en la primera visita', 'Enfoque holístico'],
    faqTitle: '¿Alguna pregunta?',
    faqs: [
      {
        q: '¿La quiropráctica es un cuidado a largo plazo?',
        a: 'Depende de ti. Primero buscamos aliviar el dolor; después, si quieres, trabajamos con ejercicios y revisiones espaciadas para que no vuelva. Tú decides hasta dónde llegar.',
      },
      {
        q: '¿Cuántas sesiones necesitaré?',
        a: 'La cantidad de sesiones depende del problema en concreto y de cómo respondas al cuidado quiropráctico. Exponemos planes de cuidado adaptados a cada paciente. Algunos pacientes sienten alivio después de la primera sesión, mientras que otros pueden necesitar varias. Muchos pacientes notan mejoría en la primera o la segunda sesión.',
      },
      {
        q: '¿La quiropráctica solo ayuda con el dolor de espalda?',
        a: 'No. Además del dolor lumbar, atendemos dolor de cuello, ciática, dolor de cabeza de origen cervical y molestias en hombros, cadera o rodillas. Donde la quiropráctica tiene más respaldo científico es en el dolor de columna.',
      },
      {
        q: '¿Estaré solo/a en el ajuste?',
        a: 'Muchos centros usan sala abierta con varias camillas donde van pasando de paciente en paciente. El problema es que no se focalizan en un solo paciente por lo que tienen peores resultados. En nuestro centro quiropráctico tenemos una sala para la primera visita y dos salas para ajustes. Pasamos entre 20 y 30 minutos por ajuste y paciente, siempre siendo flexibles.',
      },
      {
        q: '¿Cómo es una sesión típica de quiropráctica?',
        a: 'Las sesiones de quiropráctica incluyen una serie de ajustes, donde la técnica se adapta a cada persona.',
      },
      {
        q: '¿Cómo sé si la quiropráctica es adecuada para mí?',
        a: 'La quiropráctica es segura para la mayoría de las personas. En la primera visita hacemos una valoración completa y, si vemos algo que necesita otro especialista, te derivamos antes de tratarte.',
      },
      {
        q: '¿Cuáles son los problemas de salud comunes con los que ayuda la quiropráctica?',
        a: 'Sobre todo dolor lumbar, dolor de cuello, ciática y dolor de cabeza de origen cervical. También atendemos molestias en hombros, cadera y rodillas, túnel carpiano, tortícolis, rigidez por artrosis, escoliosis y lesiones deportivas, siempre en coordinación con tu médico cuando hace falta.',
      },
      {
        q: '¿Qué es la quiropráctica y cómo puede beneficiar mi salud?',
        a: 'Es una profesión de la salud centrada en la columna, las articulaciones y el sistema nervioso. Con ajustes, movilizaciones y ejercicio ayuda a aliviar el dolor de espalda, cuello y cabeza, y la ciática, para que vuelvas a moverte con normalidad.',
      },
    ],
  },
  en: {
    eyebrow: 'Chiropractic clinic · Russafa / L\'Eixample, Valencia',
    heroTitle: 'English-speaking chiropractors in Valencia',
    heroSubtitle: '',
    heroBody:
      'Move without pain again. Qualified chiropractors in Russafa / L\'Eixample who consult in English, Spanish and French. First visit €70: full assessment, first adjustment and a care plan made for you.',
    heroButton: 'Book your first visit · €70',
    heroWhatsApp: 'Message us on WhatsApp',
    heroNote: 'Nothing to pay when booking · No card needed · Tue–Thu 9–13 h and 15–20 h',
    heroTrust: [
      'More than 5,000 patients',
      'We speak English, Spanish and French',
      'Qualified chiropractors',
      'Members of the AEQ, WFC and ECU',
    ],
    trustBarLabel: 'We are members of',
    trustBar: [
      { name: 'AEQ', label: 'Spanish Chiropractic Association' },
      { name: 'WFC', label: 'World Federation of Chiropractic' },
      { name: 'ECU', label: "European Chiropractors' Union" },
    ],
    stressFreeTitle: 'Imagine your day without back pain',
    stressFreeBody:
      "When your back stops hurting you notice it everywhere: you sleep better, move more freely and get back to what you enjoy. At ColumnaQuiro we look for the source of your pain, not just today's relief.",
    stressFreeBullets: [
      'Improved posture and joint mobility',
      'Exercises and advice so the relief lasts',
      'Less tension in your neck, shoulders and back',
    ],
    methodologyTitle: "Start by discovering what's going on in your body.",
    methodologyBody:
      'Our methodology is based on precision and personalized care, with a comprehensive approach tailored to you.',
    methodology: [
      {
        icon: '/assets/images/icon-metodo-evaluacion.svg',
        title: 'Digital Assessment',
        text: 'We assess your posture, mobility and spine to understand where your pain comes from.',
      },
      {
        icon: '/assets/images/icon-metodo-ajuste.svg',
        title: 'Manual Adjustment',
        text: 'Precise manual techniques to restore movement to stiff joints and ease pain.',
      },
      {
        icon: '/assets/images/icon-metodo-plan.svg',
        title: 'Holistic Plan',
        text: 'We design a personalized roadmap to help you maintain your long-term health.',
      },
    ],
    reviewsTitle: 'Reviews from our patients',
    leaTitle: "Hello, I'm Léa Guido, chiropractor",
    leaParagraphs: [
      "And I'm going to help you improve your quality of life through chiropractic care.",
      'I have over 10 years of training and professional dedication in the world of chiropractic. Since graduating, I have continued my education to expand my knowledge and skills, enabling me to offer the best care to my patients.',
      "For me, ColumnaQuiro is more than just a chiropractic center. It's a humanistic project that empowers people's health from the inside out.",
      "That's why my mission is to guide you in improving your lifestyle, health, and body awareness.",
    ],
    leaButton: "I'll explain it better here",
    identifyTitle: 'Tell me, which of these situations do you identify with?',
    identifyCards: [
      {
        icon: '/assets/images/icon-identificas-laboral.svg',
        title: 'Work-related stress',
        text: 'Shoulder and neck tension after long office hours.',
      },
      {
        icon: '/assets/images/icon-identificas-rendimiento.svg',
        title: 'Low performance',
        text: 'Constant fatigue or recurrent training injuries.',
      },
      {
        icon: '/assets/images/icon-identificas-sueno.svg',
        title: 'Sleep problems',
        text: 'Difficulty resting due to physical discomfort.',
      },
      {
        icon: '/assets/images/icon-identificas-cambio.svg',
        title: 'Stages of change',
        text: 'Pregnancy or childhood growth requiring balance.',
      },
    ],
    exploreTitle: 'Chiropractic for every stage of life',
    exploreParagraphs: [
      'Find out <a href="/en/what-is-chiropractic/" class="font-semibold text-gold-dark underline">what chiropractic is</a> and what the evidence says about back and neck pain.',
      'We see people with back or neck pain from work, <a href="/en/who-is-chiropractic-for/pregnant-women/" class="font-semibold text-gold-dark underline">pregnant women</a>, athletes, older adults, children and babies, with techniques adapted to each age.',
    ],
    exploreButton: 'Book your first visit',
    processTitle: 'This is how we care for your spine',
    processSubtitle: 'A three-phase process designed for you',
    processSteps: [
      {
        number: '01',
        title: 'Personalized assessment',
        text: 'Through a health questionnaire, we study your case individually. During the first visit, we will conduct a series of tests and perform the first chiropractic adjustment.',
      },
      {
        number: '02',
        title: 'Chiropractic report',
        text: "We will provide your chiropractic report with the results from your first visit's tests. Our chiropractor will answer any questions you have.",
      },
      {
        number: '03',
        title: 'Care plan',
        text: 'We suggest a number of sessions and how often, based on your case, with exercises for home, and we review your progress together.',
      },
    ],
    processButton: 'Request your personalized assessment',
    whyChooseUs: [
      { title: 'Center in Valencia', text: 'Central and accessible location.' },
      {
        title: 'AEQ Certification',
        text: 'Qualified professionals with continuous training, to offer you the best possible care.',
      },
      { title: 'Flexibility', text: 'Hours adapted to your life.' },
      {
        title: 'Focus on results',
        text: 'Personalised care, with clear goals we review with you at each stage of the plan.',
      },
    ],
    whyTitle: 'Why choose our Chiropractic Center?',
    whyBody:
      "We take the necessary time to adjust you correctly. Our rooms are private, meaning you won't share an adjustment table with other patients, unlike some other centers.",
    whyBullets: ['Chiropractic adjustment on the first visit', 'Holistic approach'],
    faqTitle: 'Any questions?',
    faqs: [
      {
        q: 'Is chiropractic long-term care?',
        a: "It's up to you. First we work on easing the pain; then, if you want, we use exercises and spaced-out check-ups to keep it from coming back. You decide how far to take it.",
      },
      {
        q: 'How many sessions will I need?',
        a: 'The number of sessions depends on the specific problem and how you respond to chiropractic care. We present care plans adapted to each patient. Some patients feel relief after the first session, while others may need several. Many patients notice an improvement after the first or second session.',
      },
      {
        q: 'Does chiropractic only help with back pain?',
        a: 'No. Besides lower back pain, we see neck pain, sciatica, headaches that start in the neck, and shoulder, hip or knee pain. Spinal pain is where chiropractic has the strongest scientific support.',
      },
      {
        q: 'Will I be alone in the adjustment?',
        a: "Many centers use an open room with several stretchers where they go from patient to patient. The problem is that they don't focus on a single patient, so they have worse outcomes. In our chiropractic center we have a room for the first visit and two rooms for adjustments. We spend between 20 and 30 minutes per adjustment and patient, always being flexible.",
      },
      {
        q: 'What does a typical chiropractic session look like?',
        a: 'The chiropractic sessions include a series of adjustments, where the technique is adapted to each person.',
      },
      {
        q: 'How do I know if chiropractic is right for me?',
        a: 'Chiropractic is safe for most people. At your first visit we do a full assessment and, if we see anything that needs another specialist, we refer you before treating you.',
      },
      {
        q: 'What are the common health problems that chiropractic helps with?',
        a: 'Mainly lower back pain, neck pain, sciatica and headaches that start in the neck. We also see shoulder, hip and knee pain, carpal tunnel, a stiff neck, osteoarthritis stiffness, scoliosis and sports injuries, working with your doctor where needed.',
      },
      {
        q: 'What is chiropractic and how can it benefit my health?',
        a: 'It is a health profession focused on the spine, the joints and the nervous system. With adjustments, mobilisation and exercise it helps ease back, neck and head pain and sciatica, so you can move normally again.',
      },
    ],
  },
}

const c = computed(() => content[locale.value])
const whatsappHref = socialLinks.find((link) => link.label === 'WhatsApp')?.href ?? ''

useHead({
  script: [
    {
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
</script>

<template>
  <!-- Hero: the three things a new patient checks before anything else --
       is it good (rating), how much (price), where and when (neighbourhood,
       hours) -- all above the fold on a phone, then the two ways to act. -->
  <section class="bg-cream">
    <div class="mx-auto grid max-w-[calc(1280px+3rem)] items-center gap-10 px-6 pb-16 pt-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
      <div>
        <div class="flex flex-wrap items-center gap-2">
          <RatingBadge />
          <span class="rounded-full bg-tan px-3 py-1.5 text-sm font-medium text-forest">{{ c.eyebrow }}</span>
        </div>
        <h1 class="mt-5 text-4xl font-semibold leading-[1.05] text-forest sm:text-5xl lg:text-6xl">
          {{ c.heroTitle }}
        </h1>
        <p class="mt-5 text-lg text-forest lg:text-xl">{{ c.heroBody }}</p>
        <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap" data-cta="hero">
          <BaseButton :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'" class="justify-center">{{
            c.heroButton
          }}</BaseButton>
          <a
            :href="whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-forest px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-white"
            >{{ c.heroWhatsApp }}</a
          >
        </div>
        <p class="mt-3 text-sm text-slate">{{ c.heroNote }}</p>
        <ul class="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate sm:flex sm:flex-wrap">
          <li v-for="item in c.heroTrust" :key="item" class="flex items-center gap-2">
            <span class="h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />{{ item }}
          </li>
        </ul>
      </div>
      <img
        src="/assets/images/home-hero.avif"
        alt="Ajuste quiropráctico en ColumnaQuiro"
        fetchpriority="high"
        width="443"
        height="600"
        class="aspect-[16/10] w-full rounded-3xl object-cover md:aspect-[443/600]"
      />
    </div>
  </section>

  <SymptomGrid />

  <ExpatSection />

  <!-- Trust bar -->
  <section class="bg-beige px-6 py-20">
    <p class="text-center text-lg font-medium text-slate">{{ c.trustBarLabel }}</p>
    <div
      class="mx-auto mt-8 flex max-w-[1280px] flex-wrap items-center justify-center gap-x-24 gap-y-8 bg-white p-4 sm:p-0"
    >
      <div v-for="item in c.trustBar" :key="item.name" class="flex items-center gap-2">
        <p class="text-base font-bold text-forest">{{ item.name }}</p>
        <p class="text-sm font-semibold text-forest">{{ item.label }}</p>
      </div>
    </div>
  </section>

  <ReviewsSection :title="c.reviewsTitle" />

  <!-- Stress-free body -->
  <section class="bg-cream">
    <div class="mx-auto grid max-w-[calc(1280px+3rem)] items-center gap-8 px-6 py-24 md:grid-cols-2">
      <img
        src="/assets/images/home-ajuste.avif"
        loading="lazy"
        decoding="async"
        :alt="locale === 'es' ? 'Ajuste quiropráctico de columna' : 'Chiropractic spinal adjustment'"
        class="aspect-[616/600] w-full rounded-2xl object-cover"
      />
      <div>
        <h2 class="section-title">{{ c.stressFreeTitle }}</h2>
        <p class="mt-4 text-slate">{{ c.stressFreeBody }}</p>
        <ul class="mt-6 space-y-3">
          <li v-for="bullet in c.stressFreeBullets" :key="bullet" class="flex items-start gap-3">
            <img src="/assets/images/icon-bullet-check.svg" alt="" class="mt-1 h-5 w-5" />
            <span class="text-slate">{{ bullet }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Methodology -->
  <section class="bg-taupe px-6 py-24">
    <div class="mx-auto max-w-[1280px]">
      <div class="max-w-xl">
        <h2 class="section-title">{{ c.methodologyTitle }}</h2>
        <p class="mt-4 text-slate">{{ c.methodologyBody }}</p>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div
          v-for="(item, i) in c.methodology"
          :key="item.title"
          class="rounded-3xl bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-10"
          :class="[
            i === 0 ? 'sm:col-start-1 sm:row-start-1' : '',
            i === 1 ? 'sm:col-start-3 sm:row-start-1' : '',
            i === 2 ? 'sm:col-start-1 sm:row-start-2' : '',
          ]"
        >
          <div
            class="flex h-16 w-16 items-center justify-center rounded-2xl"
            :class="[i === 0 ? 'bg-badge-mint/20' : i === 1 ? 'bg-badge-apricot/20' : 'bg-badge-teal/20']"
          >
            <img :src="item.icon" :alt="item.title" class="h-8 w-8" />
          </div>
          <h3 class="mt-4 text-xl font-bold text-forest">{{ item.title }}</h3>
          <p class="mt-2 text-base text-slate">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Léa intro -->
  <section class="bg-forest">
    <div class="mx-auto flex max-w-[calc(1280px+3rem)] flex-col items-center gap-12 px-6 py-24 md:flex-row">
      <div class="flex-1">
        <h2 class="section-title text-white">{{ c.leaTitle }}</h2>
        <p v-for="(paragraph, i) in c.leaParagraphs" :key="i" class="mt-4 text-sage">
          {{ paragraph }}
        </p>
        <BaseButton
          variant="secondary"
          :to="locale === 'es' ? '/sobre-nosotros/equipo/lea-guido' : '/en/about-us/our-team/lea-guido'"
          class="mt-6"
          >{{ c.leaButton }}</BaseButton
        >
      </div>
      <img
        src="/assets/images/home-lea.avif"
        loading="lazy"
        decoding="async"
        alt="Léa Guido"
        class="aspect-[4/5] w-full rounded-2xl object-cover md:w-[480px] md:shrink-0"
      />
    </div>
  </section>

  <!-- Identificas -->
  <section class="bg-beige px-6 py-24">
    <h2 class="section-title mx-auto max-w-2xl text-center">
      {{ c.identifyTitle }}
    </h2>
    <div class="mx-auto mt-12 grid max-w-[1280px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="card in c.identifyCards"
        :key="card.title"
        class="rounded-3xl bg-cream p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-8"
      >
        <img :src="card.icon" :alt="card.title" class="h-10 w-10" />
        <h3 class="mt-4 font-bold text-forest">{{ card.title }}</h3>
        <p class="mt-2 text-sm text-slate">{{ card.text }}</p>
      </div>
    </div>
  </section>

  <!-- Explorar salud holística -->
  <section class="bg-[#86531a]/5 px-6">
    <div class="mx-auto grid max-w-[1280px] items-center gap-12 py-24 md:grid-cols-2">
    <div>
      <h2 class="section-title text-center">{{ c.exploreTitle }}</h2>
      <p v-for="(paragraph, i) in c.exploreParagraphs" :key="i" class="mt-4 text-body/80" v-html="paragraph" />
      <BaseButton
        variant="dark"
        :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'"
        class="mt-6"
        >{{ c.exploreButton }}</BaseButton
      >
    </div>
    <div class="grid grid-cols-2 gap-4">
      <img
        src="/assets/images/home-natasha.avif"
        loading="lazy"
        decoding="async"
        alt="chiropractor examining a vertebra"
        class="aspect-square w-full rounded-2xl object-cover"
      />
      <img
        src="/assets/images/home-lea-ajuste.avif"
        loading="lazy"
        decoding="async"
        alt="Léa performing a chiropractic adjustment"
        class="aspect-square w-full rounded-2xl object-cover"
      />
    </div>
    </div>
  </section>

  <!-- 3-step process -->
  <section class="bg-taupe-dark px-6 py-24">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="section-title">{{ c.processTitle }}</h2>
      <p class="mt-2 text-slate">{{ c.processSubtitle }}</p>
    </div>
    <div class="mx-auto mt-12 grid max-w-[1280px] gap-6 sm:grid-cols-3 sm:divide-x sm:divide-forest/15">
      <div v-for="step in c.processSteps" :key="step.number" class="relative px-6 py-6 text-center">
        <span
          class="pointer-events-none absolute inset-x-0 top-0 select-none text-6xl font-bold text-forest/10 sm:text-7xl"
          aria-hidden="true"
          >{{ step.number }}</span
        >
        <h3 class="relative mt-10 text-lg font-bold text-forest">{{ step.title }}</h3>
        <p class="relative mt-2 text-sm text-slate">{{ step.text }}</p>
      </div>
    </div>
    <div class="mt-12 text-center">
      <BaseButton variant="dark" :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'">{{
        c.processButton
      }}</BaseButton>
    </div>
  </section>

  <!-- Why choose us -->
  <section class="bg-cream px-6 py-24">
    <div class="mx-auto max-w-[1280px]">
    <div class="grid items-center gap-12 md:grid-cols-2">
      <div class="order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:order-1">
        <div
          v-for="(tile, i) in c.whyChooseUs"
          :key="tile.title"
          class="flex aspect-square flex-col items-center justify-center rounded-3xl p-4 text-center sm:px-8 sm:py-0"
          :class="i === 3 ? 'bg-forest text-white' : 'bg-taupe text-forest'"
        >
          <svg
            class="mx-auto h-8 w-8"
            :class="i === 3 ? 'text-badge-apricot' : 'text-gold-dark'"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path :d="whyIcons[i]" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h3 class="mt-4 font-bold" :class="i === 3 ? 'text-white' : 'text-forest'">
            {{ tile.title }}
          </h3>
          <p class="mt-2 text-sm" :class="i === 3 ? 'text-cream/80' : 'text-slate'">
            {{ tile.text }}
          </p>
        </div>
      </div>

      <div class="order-1 md:order-2">
        <h2 class="section-title">{{ c.whyTitle }}</h2>
        <p class="mt-4 text-slate">{{ c.whyBody }}</p>
        <ul class="mt-6 space-y-4">
          <li v-for="(bullet, i) in c.whyBullets" :key="bullet" class="flex items-center gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-badge-apricot">
              <img :src="whyBulletIcons[i]" alt="" class="h-5 w-5" />
            </span>
            <span class="font-semibold text-forest">{{ bullet }}</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </section>

  <LocationBlock />

  <!-- FAQ -->
  <section class="bg-beige px-6 py-24">
    <h2 class="section-title text-center">{{ c.faqTitle }}</h2>
    <div class="mx-auto mt-12 max-w-3xl">
      <FaqAccordion :faqs="c.faqs" />
    </div>
  </section>
</template>
