<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import LegalSection from '@/components/ui/LegalSection.vue'
import type { LegalPart } from '@/components/ui/LegalSection.vue'

const { locale } = useAppI18n()

interface Section {
  heading: string
  parts: LegalPart[]
}

const content: Record<'es' | 'en', { title: string; sections: Section[]; seoDescription: string }> = {
  es: {
    title: 'Política de Cookies',
    sections: [
      {
        heading: '¿QUÉ SON LAS COOKIES?',
        parts: [
          {
            type: 'p',
            text: 'Las Cookies son archivos de datos que se almacenan en su navegador y en su equipo cuando visita cualquier página web. Las cookies pueden tener diversas utilidades como, por ejemplo, reconocer al usuario, almacenamiento y recuperación de información sobre los hábitos de navegación de un usuario o personalizar la forma en que se muestra el contenido.',
          },
        ],
      },
      {
        heading: '¿QUÉ INFORMACIÓN ALMACENAN LAS COOKIES?',
        parts: [
          {
            type: 'p',
            text: 'Las cookies almacenan información de carácter técnico, preferencias personales, personalización de contenidos. Las cookies normalmente no contienen ninguna información personal.',
          },
          {
            type: 'p',
            text: 'Toda la información personal que puedan contener es únicamente la que el usuario haya introducido en un formulario del sitio. La mayor parte del tiempo, cuando una cookie contiene información personal, ésta está codificada de forma que es ilegible para cualquier tercera parte que pudiera tener acceso a su archivo de cookies.',
          },
        ],
      },
      {
        heading: '¿QUÉ TIPO DE COOKIES EXISTEN?',
        parts: [
          {
            type: 'list',
            items: [
              'Cookies propias: se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.',
              'Cookies de terceros: se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.',
            ],
          },
          { type: 'p', text: 'Según el plazo de tiempo que permanecen almacenadas en el navegador del usuario:' },
          {
            type: 'list',
            items: [
              'Cookies de sesión: recaban y almacenan datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión.',
              'Cookies persistentes: Los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.',
            ],
          },
          { type: 'p', text: 'Según la finalidad para la que se traten los datos obtenidos:' },
          {
            type: 'list',
            items: [
              'Cookies técnicas: permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.',
              'Cookies de personalización: permiten al usuario acceder al servicio con algunas características predefinidas como el idioma, el tipo de navegador o la configuración regional.',
              'Cookies de análisis: permiten el seguimiento y análisis del comportamiento de los usuarios en los sitios web.',
              'Cookies publicitarias: permiten la gestión eficaz de los espacios publicitarios.',
              'Cookies de publicidad comportamental: almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación.',
              'Cookies de redes sociales externas: se utilizan para que los visitantes puedan interactuar con el contenido de diferentes plataformas sociales.',
            ],
          },
        ],
      },
      {
        heading: '¿QUÉ COOKIES SE UTILIZAN EN LA PÁGINA WEB?',
        parts: [
          {
            type: 'list',
            items: [
              'Cookies de Google Analytics: Se utilizan para generar un identificador de usuario único, utilizado para hacer recuento de cuántas veces visita el sitio un usuario, así como la fecha de la primera y la última vez que visitó la web. Registran la fecha y hora de acceso a cualquiera de las páginas del portal. Comprueban la necesidad de mantener la sesión de un usuario abierta o crear una nueva. Identifican la sesión del usuario, para recoger la ubicación geográfica aproximada del ordenador que accede al portal.',
            ],
          },
        ],
      },
    ],
    seoDescription: 'Política de cookies de ColumnaQuiro, Centro Quiropráctico en Valencia.',
  },
  en: {
    title: 'Cookie Policy',
    sections: [
      {
        heading: 'WHAT ARE COOKIES?',
        parts: [
          {
            type: 'p',
            text: "Cookies are data files that are stored in your browser and on your computer when you visit any web page. Cookies can have various uses, such as recognizing the user, storing and retrieving information about a user's browsing habits, or customizing the way in which content is displayed.",
          },
        ],
      },
      {
        heading: 'WHAT INFORMATION DO COOKIES STORE?',
        parts: [
          {
            type: 'p',
            text: 'Cookies store technical information, personal preferences, personalization of content. Cookies do not normally contain any personal information.',
          },
          {
            type: 'p',
            text: 'All the personal information they may contain is only that which the user has entered in a form on the site. Most of the time, when a cookie contains personal information, it is encoded in such a way that it is unreadable to any third party that might have access to your cookie file.',
          },
        ],
      },
      {
        heading: 'WHAT TYPES OF COOKIES ARE THERE?',
        parts: [
          {
            type: 'list',
            items: [
              "Own cookies: are sent to the user's terminal equipment from a computer or domain managed by the publisher itself and from which the service requested by the user is provided.",
              "Third-party cookies: are sent to the user's terminal equipment from a computer or domain that is not managed by the publisher, but by another entity that processes the data obtained through cookies.",
            ],
          },
          { type: 'p', text: "Depending on the length of time they remain stored in the user's browser:" },
          {
            type: 'list',
            items: [
              'Session cookies: they collect and store data while the user accesses a web page. They are usually used to store information that is only interesting to keep for the provision of the service requested by the user on a single occasion.',
              'Persistent cookies: The data is still stored in the terminal and can be accessed and processed for a period defined by the person responsible for the cookie, which can range from a few minutes to several years.',
            ],
          },
          { type: 'p', text: 'Depending on the purpose for which the data obtained are processed:' },
          {
            type: 'list',
            items: [
              'Technical cookies: they allow the user to navigate through a web page, platform or application and to use the different options or services that exist there.',
              'Personalization cookies: they allow the user to access the service with some predefined characteristics such as language, browser type or regional configuration.',
              'Analysis cookies: they allow the monitoring and analysis of user behavior on websites.',
              'Advertising cookies: they allow the effective management of advertising spaces.',
              'Behavioral advertising cookies: they store information on user behavior obtained through the continuous observation of their browsing habits.',
              'Cookies from external social networks: they are used so that visitors can interact with the content of different social platforms.',
            ],
          },
        ],
      },
      {
        heading: 'WHAT COOKIES ARE USED ON THE WEBSITE?',
        parts: [
          {
            type: 'list',
            items: [
              'Google Analytics cookies: They are used to generate a unique user identifier, used to count how many times a user visits the site, as well as the date of the first and last time they visited the website. They record the date and time of access to any of the pages of the portal. They check the need to keep a user\'s session open or create a new one. They identify the user\'s session, to collect the approximate geographical location of the computer accessing the portal.',
            ],
          },
        ],
      },
    ],
    seoDescription: 'Cookie policy for ColumnaQuiro, Chiropractic Center in Valencia.',
  },
}

const c = computed(() => content[locale.value])

useSeo({
  title: computed(() => `${c.value.title} | ColumnaQuiro`),
  description: computed(() => c.value.seoDescription),
})
</script>

<template>
  <section class="mx-auto max-w-3xl space-y-10 px-6 py-24">
    <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>
    <LegalSection
      v-for="section in c.sections"
      :key="section.heading"
      :heading="section.heading"
      :parts="section.parts"
    />
  </section>
</template>
