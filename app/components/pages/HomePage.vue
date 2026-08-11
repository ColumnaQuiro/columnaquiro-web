<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import BaseButton from '@/components/ui/BaseButton.vue'
import CtaBanner from '@/components/ui/CtaBanner.vue'

const { locale } = useAppI18n()

const seoText = {
  es: {
    title: 'ColumnaQuiro · Centro Quiropráctico en Valencia',
    description:
      'Centro Quiropráctico en Valencia. Cuidamos tu sistema nervioso para que tu cuerpo recupere su capacidad innata de sanar y prosperar. Reserva tu primera visita.',
  },
  en: {
    title: 'ColumnaQuiro · Chiropractic Center in Valencia',
    description:
      'Chiropractic center in Valencia. We care for your nervous system so your body can restore its innate ability to heal and thrive. Book your first visit.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

const content = {
  es: {
    eyebrow: 'Bienestar natural',
    heroTitle: 'Del dolor a mejorar tu rendimiento de forma natural.',
    heroSubtitle: '',
    heroBody:
      'Cuidamos tu sistema nervioso para que tu cuerpo recupere su capacidad innata de sanar y prosperar.',
    heroButton: 'Empieza hoy →',
    trustBarLabel: 'Somos miembros de prestigiosas instituciones',
    trustBar: [
      { name: 'AEQ', label: 'Asociación Española de Quiropráctica' },
      { name: 'WFC', label: 'World Federation of Chiropractic' },
      { name: 'ECU', label: "European Chiropractors' Union" },
    ],
    stressFreeTitle: 'Imagina tu cuerpo libre de estrés...',
    stressFreeBody:
      'Un sistema nervioso optimizado no solo reduce el dolor, sino que eleva tu calidad de vida. En ColumnaQuiro, no tratamos síntomas; restauramos el equilibrio de tu organismo de manera integral.',
    stressFreeBullets: [
      'Mejor postura y movilidad articular',
      'Aumento de los niveles de energía diaria',
      'Reducción natural del estrés físico y emocional',
    ],
    methodologyTitle: 'Empieza por descubrir qué ocurre en tu cuerpo.',
    methodologyBody:
      'Nuestra metodología se basa en la precisión y el cuidado personalizado con un enfoque integral y adaptado a ti.',
    methodology: [
      {
        icon: '/assets/images/icon-metodo-evaluacion.svg',
        title: 'Evaluación Digital',
        text: 'Analizamos tu postura y columna mediante tecnología avanzada para identificar bloqueos nerviosos.',
      },
      {
        icon: '/assets/images/icon-metodo-ajuste.svg',
        title: 'Ajuste Manual',
        text: 'Técnicas manuales precisas para corregir subluxaciones y liberar la interferencia nerviosa.',
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
    exploreTitle: 'Te invitamos a explorar la salud de manera más holística y natural',
    exploreParagraphs: [
      'Descubre cómo la quiropráctica potencia el bienestar de tu columna vertebral y favorece la salud integral de tu organismo.',
      'La quiropráctica puede mejorar tu vida y salud. Puede ayudar a bebés, niños, mujeres embarazadas, personas con molestias en el cuello o la espalda por el trabajo, adultos mayores y deportistas.',
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
        text: 'Para mejorar el rendimiento de tu cuerpo, fijaremos una frecuencia de ajustes quiroprácticos adecuada a tus requisitos.',
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
        text: 'Cuidado personalizado y adaptado a cada paciente. 100% de éxito con los pacientes que cumplen el plan de cuidado.',
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
        a: 'Si, a diferencia de otros cuidados temporales, la quiropráctica no solo se enfoca en aliviar síntomas o dolores, sino que trabaja en prevenir problemas futuros.',
      },
      {
        q: '¿Cuántas sesiones necesitaré?',
        a: 'La cantidad de sesiones depende del problema en concreto y de cómo respondas al cuidado quiropráctico. Exponemos planes de cuidado adaptados a cada paciente. Algunos pacientes sienten alivio después de la primera sesión, mientras que otros pueden necesitar varias. Normalmente ya se nota una mejoría después de la primera o segunda sesión.',
      },
      {
        q: '¿La quiropráctica trata solo el dolor de espalda?',
        a: 'La quiropráctica ayuda con el dolor de espalda y otros problemas como dolores de cabeza, migrañas, problemas digestivos y estrés.',
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
        a: 'La quiropráctica es segura para la mayoría de las personas, al no ser un cuidado intrusivo. Antes de empezar el plan de cuidado, evaluamos a cada paciente de manera individual y personalizada para adaptar el plan a tus necesidades.',
      },
      {
        q: '¿Cuáles son los problemas de salud comunes que trata la quiropráctica?',
        a: 'La quiropráctica trata una amplia variedad de problemas: dolores en la espalda, cuello, cabeza, tobillos, brazos, codos, muñecas, costillas, cadera, piernas y rodillas. También puede ayudar con ciática, túnel carpiano, tortícolis, reumatismo, artritis, artrosis, calcificaciones, fibromialgia, escoliosis y lesiones deportivas.',
      },
      {
        q: '¿Qué es la quiropráctica y cómo puede beneficiar mi salud?',
        a: 'La quiropráctica es un enfoque de atención de la salud centrado en el sistema nervioso y la columna vertebral. Puede mejorar problemas como dolor de espalda, cuello, cabeza, fibromialgia y ciática, además de promover la salud general del cuerpo y el bienestar.',
      },
    ],
  },
  en: {
    eyebrow: 'Natural wellness',
    heroTitle: 'Your trusted chiropractic center in Valencia',
    heroSubtitle:
      'From pain to enhancing your performance naturally, without risks and in less than 3 months.',
    heroBody:
      'Improve your health and vitality with our chiropractic adjustments tailored to you at our chiropractic center in Valencia.',
    heroButton: 'Book your visit',
    trustBarLabel: 'We are members of',
    trustBar: [
      { name: 'AEQ', label: 'Spanish Chiropractic Association' },
      { name: 'WFC', label: 'World Federation of Chiropractic' },
      { name: 'ECU', label: "European Chiropractors' Union" },
    ],
    stressFreeTitle: 'Imagine your body free from stress...',
    stressFreeBody:
      "An optimized nervous system not only reduces pain but also elevates your quality of life. At ColumnaQuiro, we don't just treat symptoms; we holistically restore your body's balance.",
    stressFreeBullets: [
      'Improved posture and joint mobility',
      'Increased daily energy levels',
      'Natural reduction of physical and emotional stress',
    ],
    methodologyTitle: "Start by discovering what's going on in your body.",
    methodologyBody:
      'Our methodology is based on precision and personalized care, with a comprehensive approach tailored to you.',
    methodology: [
      {
        icon: '/assets/images/icon-metodo-evaluacion.svg',
        title: 'Digital Assessment',
        text: 'We analyze your posture and spine using advanced technology to identify nerve blockages.',
      },
      {
        icon: '/assets/images/icon-metodo-ajuste.svg',
        title: 'Manual Adjustment',
        text: 'Precise manual techniques to correct subluxations and release nerve interference.',
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
    exploreTitle: 'We invite you to explore health in a more holistic and natural way',
    exploreParagraphs: [
      "Discover how chiropractic enhances your spinal well-being and promotes your body's overall health.",
      'Chiropractic can improve your life and health. It can help babies, children, pregnant women, people with neck or back discomfort from work, seniors, and athletes.',
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
        text: "To improve your body's performance, we will establish a chiropractic adjustment frequency tailored to your needs.",
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
        text: '100% success rate with patients who follow the care plan.',
      },
    ],
    whyTitle: 'Why choose our Chiropractic Center?',
    whyBody:
      "We take the necessary time to adjust you correctly. Our rooms are private, meaning you won't share a treatment table with other patients, unlike some other centers.",
    whyBullets: ['Chiropractic adjustment on the first visit', 'Holistic approach'],
    faqTitle: 'Any questions?',
    faqs: [
      {
        q: 'Is chiropractic long-term care?',
        a: "Yes, unlike other temporary care, chiropractic doesn't just focus on relieving symptoms or pain, but it works on preventing future problems.",
      },
      {
        q: 'How many sessions will I need?',
        a: 'The number of sessions depends on the specific problem and how you respond to chiropractic care. We present care plans adapted to each patient. Some patients feel relief after the first session, while others may need several. You usually notice an improvement after the first or second session.',
      },
      {
        q: 'Does chiropractic treat only back pain?',
        a: 'Chiropractic helps with back pain and other problems such as headaches, migraines, digestive problems and stress.',
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
        a: 'Chiropractic is safe for most people, as it is not intrusive care. Before starting the care plan, we evaluate each patient individually to adapt the plan to your needs.',
      },
      {
        q: 'What are the common health problems that chiropractic treats?',
        a: 'Chiropractic treats a wide variety of problems, such as aches and pains in different parts of the body, posture problems, and various health conditions. Among the problems that chiropractic can treat are pain in the back, neck, head, ankles, arms, elbows, wrists, ribs, hips, legs and knees. It can also help with problems such as sciatica, carpal tunnel, torticollis, rheumatism, arthritis, osteoarthritis, joints, calcifications, fibromyalgia, scoliosis and sports injuries.',
      },
      {
        q: 'What is chiropractic and how can it benefit my health?',
        a: 'Chiropractic is an approach to health care focused on the nervous system and spine. Chiropractic can improve problems such as back, neck, head pain, fibromyalgia and sciatica, in addition to promoting overall body health and well-being.',
      },
    ],
  },
}

const c = computed(() => content[locale.value])

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
    {
      src: 'https://widgets.sociablekit.com/google-reviews/widget.js',
      defer: true,
    },
  ],
})
</script>

<template>
  <!-- Hero -->
  <section class="bg-cream">
    <div class="mx-auto grid max-w-6xl items-start gap-12 px-6 py-24 md:grid-cols-2">
      <div>
        <p class="text-sm font-medium text-gold-dark">{{ c.eyebrow }}</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight text-forest sm:text-5xl lg:text-6xl">
          {{ c.heroTitle }}
        </h1>
        <p v-if="c.heroSubtitle" class="mt-3 text-base font-medium text-forest/80">
          {{ c.heroSubtitle }}
        </p>
        <p class="mt-6 text-lg text-forest lg:text-xl">{{ c.heroBody }}</p>
        <BaseButton :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'" class="mt-8">{{
          c.heroButton
        }}</BaseButton>
      </div>
      <img src="/assets/images/home-hero.jpg" alt="chiropractic adjustment" class="w-full rounded-3xl" />
    </div>
  </section>

  <!-- Trust bar -->
  <section class="bg-beige px-6 py-20">
    <p class="text-center text-lg font-medium text-slate">{{ c.trustBarLabel }}</p>
    <div class="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-8 rounded-2xl bg-white p-8 shadow-sm">
      <div v-for="item in c.trustBar" :key="item.name" class="flex items-center gap-2 text-center">
        <p class="text-base font-bold text-forest">{{ item.name }}</p>
        <p class="text-sm font-semibold text-forest">{{ item.label }}</p>
      </div>
    </div>
  </section>

  <!-- Stress-free body -->
  <section class="bg-cream">
    <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <img
        src="/assets/images/home-ajuste.jpg"
        alt="chiropractic spinal adjustment"
        class="w-full rounded-3xl"
      />
      <div>
        <h2 class="text-3xl font-semibold text-forest">{{ c.stressFreeTitle }}</h2>
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
    <div class="mx-auto max-w-3xl">
      <h2 class="text-3xl font-semibold text-forest sm:text-4xl">{{ c.methodologyTitle }}</h2>
      <p class="mt-4 text-slate">{{ c.methodologyBody }}</p>
    </div>
    <div class="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
      <div
        v-for="(item, i) in c.methodology"
        :key="item.title"
        class="rounded-3xl bg-white p-10 shadow-sm"
      >
        <div
          class="flex h-16 w-16 items-center justify-center rounded-2xl"
          :class="[i === 0 ? 'bg-badge-mint' : i === 1 ? 'bg-badge-apricot' : 'bg-badge-teal']"
        >
          <img :src="item.icon" :alt="item.title" class="h-8 w-8" />
        </div>
        <h3 class="mt-4 text-xl font-bold text-forest">{{ item.title }}</h3>
        <p class="mt-2 text-sm text-slate">{{ item.text }}</p>
      </div>
    </div>
  </section>

  <!-- Reviews -->
  <section class="mx-auto max-w-5xl px-6 py-24 text-center">
    <h2 class="text-3xl font-semibold text-forest">{{ c.reviewsTitle }}</h2>
    <div
      class="sk-ww-google-reviews mx-auto mt-10"
      data-embed-id="236880"
      style="min-height: 480px"
    ></div>
  </section>

  <!-- Léa intro -->
  <section class="bg-forest">
    <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <div>
        <h2 class="text-3xl font-semibold text-white">{{ c.leaTitle }}</h2>
        <p v-for="(paragraph, i) in c.leaParagraphs" :key="i" class="mt-4 text-cream/80">
          {{ paragraph }}
        </p>
        <BaseButton
          variant="secondary"
          :to="locale === 'es' ? '/sobre-nosotros/equipo/lea-guido' : '/en/about-us/our-team/lea-guido'"
          class="mt-6"
          >{{ c.leaButton }}</BaseButton
        >
      </div>
      <img src="/assets/images/home-lea.jpg" alt="Léa Guido" class="w-full rounded-3xl" />
    </div>
  </section>

  <!-- Identificas -->
  <section class="bg-beige px-6 py-24">
    <h2 class="mx-auto max-w-2xl text-center text-3xl font-semibold text-forest">
      {{ c.identifyTitle }}
    </h2>
    <div class="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="card in c.identifyCards"
        :key="card.title"
        class="rounded-3xl bg-cream p-8 text-center shadow-sm"
      >
        <img :src="card.icon" :alt="card.title" class="mx-auto h-10 w-10" />
        <h3 class="mt-4 font-bold text-forest">{{ card.title }}</h3>
        <p class="mt-2 text-sm text-slate">{{ card.text }}</p>
      </div>
    </div>
  </section>

  <!-- Explorar salud holística -->
  <section class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
    <div class="relative">
      <img
        src="/assets/images/home-natasha.jpg"
        alt="chiropractor examining a vertebra"
        class="w-2/3 rounded-3xl"
      />
      <img
        src="/assets/images/home-lea-ajuste.jpg"
        alt="Léa performing a chiropractic adjustment"
        class="absolute -bottom-8 -right-4 w-2/3 rounded-3xl border-4 border-cream shadow-lg"
      />
    </div>
    <div>
      <h2 class="text-3xl font-semibold text-forest">{{ c.exploreTitle }}</h2>
      <p v-for="(paragraph, i) in c.exploreParagraphs" :key="i" class="mt-4 text-body/80">
        {{ paragraph }}
      </p>
      <BaseButton :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'" class="mt-6">{{
        c.exploreButton
      }}</BaseButton>
    </div>
  </section>

  <!-- 3-step process -->
  <section class="bg-forest px-6 py-24 text-cream">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-semibold text-white">{{ c.processTitle }}</h2>
      <p class="mt-2 text-cream/80">{{ c.processSubtitle }}</p>
    </div>
    <div class="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
      <div v-for="step in c.processSteps" :key="step.number" class="rounded-3xl bg-white/10 p-8">
        <p class="text-3xl font-bold text-gold">{{ step.number }}</p>
        <h3 class="mt-4 text-lg font-semibold text-white">{{ step.title }}</h3>
        <p class="mt-2 text-sm text-cream/80">{{ step.text }}</p>
      </div>
    </div>
    <div class="mt-12 text-center">
      <BaseButton :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'">{{
        c.processButton
      }}</BaseButton>
    </div>
  </section>

  <!-- Why choose us -->
  <section class="mx-auto max-w-6xl px-6 py-24">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="tile in c.whyChooseUs" :key="tile.title" class="rounded-3xl bg-white p-6 shadow-sm">
        <h3 class="font-semibold text-forest">{{ tile.title }}</h3>
        <p class="mt-2 text-sm text-body/70">{{ tile.text }}</p>
      </div>
    </div>

    <div class="mt-16 grid items-center gap-12 md:grid-cols-2">
      <div>
        <h2 class="text-3xl font-semibold text-forest">{{ c.whyTitle }}</h2>
        <p class="mt-4 text-body/80">{{ c.whyBody }}</p>
      </div>
      <ul class="space-y-3">
        <li v-for="bullet in c.whyBullets" :key="bullet" class="flex items-start gap-3">
          <img src="/assets/images/icon-bullet-check.svg" alt="" class="mt-1 h-5 w-5" />
          <span class="text-body/80">{{ bullet }}</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- FAQ -->
  <section class="mx-auto max-w-4xl px-6 py-24">
    <h2 class="text-center text-3xl font-semibold text-forest">{{ c.faqTitle }}</h2>
    <div class="mt-12 space-y-6">
      <details v-for="faq in c.faqs" :key="faq.q" class="rounded-2xl bg-white p-6 shadow-sm">
        <summary class="cursor-pointer font-semibold text-forest">{{ faq.q }}</summary>
        <p class="mt-3 text-sm text-body/70">{{ faq.a }}</p>
      </details>
    </div>
  </section>

  <CtaBanner />
</template>
