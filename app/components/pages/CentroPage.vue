<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import BaseButton from '@/components/ui/BaseButton.vue'
import CtaBanner from '@/components/ui/CtaBanner.vue'

const { locale } = useAppI18n()

const seoText = {
  es: {
    title: 'Nuestro centro | ColumnaQuiro',
    description:
      'Descubre el interior de nuestro centro quiropráctico en Valencia: sala de espera, sala de primera visita, sala de ajustes y panel de testimonios.',
  },
  en: {
    title: 'Our center | ColumnaQuiro',
    description:
      'Discover inside our chiropractic center in Valencia: the waiting room, first-visit room, adjustment room, and testimonial panel.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

const content = {
  es: {
    eyebrow: 'Descubre nuestro centro quiropráctico',
    title: 'Visita el interior de nuestro centro',
    intro:
      'En nuestro centro, entendemos que cada persona es única, y tus necesidades de salud también lo son. Estamos aquí para guiarte en tu viaje hacia el bienestar y ayudarte a alcanzar tu máximo potencial de salud. Si estás buscando una solución natural y efectiva para tus problemas de salud, ¡has venido al lugar correcto!',
    button: 'Reserva tu visita',
    rooms: [
      {
        heading: 'Sala de espera',
        image: '/assets/images/centro-titulos.webp',
        paragraphs: [
          'Bienvenido a nuestro tranquilo oasis en la sala de espera. Nuestra amable secretaria está siempre dispuesta a charlar contigo y hacer que te sientas como en casa.',
          'Puedes disfrutar de un refrescante vaso de agua y sumergirte en nuestra selección de libros de salud mientras esperas tu consulta. Aquí, tu bienestar es nuestra prioridad absoluta.',
          'Estamos comprometidos en hacer que tu experiencia sea lo más cómoda y relajante posible.',
          '¡Gracias por confiar en nosotros para cuidar de ti!',
        ],
      },
      {
        heading: 'Sala de primera visita',
        image: '/assets/images/centro-sala-primera-visita.webp',
        paragraphs: [
          'En nuestra sala de primera visita, tu privacidad y comodidad son nuestra prioridad principal.',
          'Aquí, dedicamos el tiempo necesario para realizar una evaluación quiropráctica exhaustiva y personalizada, comprendiendo a fondo tus necesidades individuales.',
          'Este ambiente está cuidadosamente diseñado para asegurar tu tranquilidad y confidencialidad mientras juntos trazamos el camino hacia un bienestar óptimo.',
          'En cada paso, tu salud y satisfacción son nuestra mayor preocupación.',
        ],
      },
      {
        heading: 'Sala de ajuste',
        image: '/assets/images/centro-sala-ajustes.webp',
        paragraphs: [
          'Bienvenido a nuestra sala de ajuste, donde tu bienestar cobra vida.',
          'En este espacio, nuestros quiroprácticos expertos se dedican a proporcionarte una atención personalizada y altamente efectiva. Es el lugar donde aliviamos tus molestias y trabajamos incansablemente para mejorar tu calidad de vida.',
          'Aquí, en nuestro oasis de cuidado, te damos la bienvenida a tu camino hacia la salud. Estamos comprometidos en guiarte hacia una vida más saludable y libre de molestias.',
          'Tu bienestar es nuestra prioridad, y estamos aquí para acompañarte en cada paso del camino hacia una mejor calidad de vida.',
        ],
      },
      {
        heading: 'Panel de testimonios',
        image: '/assets/images/centro-testimonios.webp',
        paragraphs: [
          'En este panel podrás leer algunos de los testimonios de nuestros pacientes.',
          'Nos alegra saber que nuestros servicios están marcando una diferencia en la vida de las personas. Cada testimonio refleja el compromiso y la dedicación con los que trabajamos día a día para ofrecer la mejor atención.',
          'Creemos que escuchar las experiencias de quienes han confiado en nosotros puede ser de gran ayuda para quienes buscan un servicio de calidad y calidez.',
          'Agradecemos a cada paciente que ha compartido su historia y nos motiva a seguir mejorando.',
          '¡Esperamos que estos testimonios sean de inspiración y confianza para ti!',
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Discover our chiropractic center',
    title: 'Visit the inside of our clinic',
    intro:
      "At our center, we understand that each person is unique, and so are your health needs. We're here to guide you on your journey to wellness and help you achieve your maximum health potential. If you're looking for a natural and effective solution to your health problems, you've come to the right place!",
    button: 'Book your visit',
    rooms: [
      {
        heading: 'Waiting room',
        image: '/assets/images/centro-titulos.webp',
        paragraphs: [
          "Welcome to our tranquil oasis in the waiting room. Our friendly secretary is always ready to chat with you and make you feel at home.",
          'You can enjoy a refreshing glass of water and immerse yourself in our selection of health books while you wait for your appointment. Here, your well-being is our top priority.',
          "We're committed to making your experience as comfortable and relaxing as possible.",
          'Thank you for trusting us to take care of you!',
        ],
      },
      {
        heading: 'First-visit room',
        image: '/assets/images/centro-sala-primera-visita.webp',
        paragraphs: [
          'In our first-visit room, your privacy and comfort are our top priority.',
          'Here, we take the time needed to carry out a thorough and personalized chiropractic evaluation, fully understanding your individual needs.',
          'This environment is carefully designed to ensure your peace of mind and confidentiality as we chart the path to optimal well-being together.',
          'At every step, your health and satisfaction are our greatest concern.',
        ],
      },
      {
        heading: 'Adjustment room',
        image: '/assets/images/centro-sala-ajustes.webp',
        paragraphs: [
          'Welcome to our adjustment room, where your well-being comes to life.',
          "In this space, our expert chiropractors are dedicated to providing you with personalized, highly effective care. It's where we relieve your discomfort and work tirelessly to improve your quality of life.",
          "Here, in our oasis of care, we welcome you to your path to health. We're committed to guiding you toward a healthier, hassle-free life.",
          "Your well-being is our priority, and we're here to walk with you every step of the way to a better quality of life.",
        ],
      },
      {
        heading: 'Testimonial panel',
        image: '/assets/images/centro-testimonios.webp',
        paragraphs: [
          'In this panel, you can read some of the testimonials from our patients.',
          "We're glad to know our services are making a difference in people's lives. Each testimonial reflects the commitment and dedication we bring to providing the best care every day.",
          'We believe that hearing the experiences of those who have trusted us can be of great help to those looking for quality, warm service.',
          'We thank every patient who has shared their story and motivated us to keep improving.',
          'We hope these testimonials inspire confidence in you!',
        ],
      },
    ],
  },
}

const c = computed(() => content[locale.value])
</script>

<template>
  <section class="mx-auto max-w-5xl px-6 py-24 text-center">
    <p class="text-sm font-semibold uppercase tracking-wide text-gold-dark">{{ c.eyebrow }}</p>
    <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-semibold text-forest sm:text-5xl">
      {{ c.title }}
    </h1>
    <p class="mx-auto mt-6 max-w-2xl text-lg text-body/80">{{ c.intro }}</p>
    <BaseButton :to="locale === 'es' ? '/reserva-cita' : '/en/book-appointment'" class="mt-8">{{
      c.button
    }}</BaseButton>
  </section>

  <img
    src="/assets/images/centro-sala-ajuste-2.webp"
    alt="chiropractic adjustment room"
    class="mx-auto max-w-5xl rounded-3xl px-6"
  />

  <section class="mx-auto max-w-5xl space-y-20 px-6 py-24">
    <div
      v-for="(room, index) in c.rooms"
      :key="room.heading"
      class="grid items-center gap-10 md:grid-cols-2"
    >
      <img
        :src="room.image"
        :alt="room.heading"
        class="aspect-[4/3] w-full rounded-3xl object-cover"
        :class="{ 'md:order-2': index % 2 === 1 }"
      />
      <div>
        <h2 class="text-3xl font-semibold text-forest">{{ room.heading }}</h2>
        <p v-for="(paragraph, i) in room.paragraphs" :key="i" class="mt-4 text-body/80">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>

  <CtaBanner />
</template>
