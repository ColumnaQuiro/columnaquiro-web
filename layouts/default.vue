<template>
  <div>
    <Html :lang="locale">
      <Head>
        <Link rel="canonical" :href="canonical" />
      </Head>
      <v-app>
        <cq-layout-navigation-bar />
        <DelayHydration>
          <v-main class="mt-18 mt-lg-0">
            <slot />
          </v-main>
        </DelayHydration>
        <cq-layout-footer-container />
        <client-only>
          <vue-cookie-comply
            :preferences="preferences"
            :preferences-label="t('cookiesConsent.actions.configure')"
            :accept-all-label="t('cookiesConsent.actions.accept')"
            @on-accept-all-cookies="onAccept"
            @on-save-cookie-preferences="onSavePreferences"
          >
            <template #header>
              <div class="text-base" v-html="t('cookiesConsent.description')" />
            </template>
            <template #modal-header>
              <h3>{{ t('cookiesConsent.preferences.title') }}</h3>
            </template>
          </vue-cookie-comply>
        </client-only>
      </v-app>
    </Html>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useGtm } from '@gtm-support/vue-gtm'
import { useSeoMeta } from '@unhead/vue'
import { STATICS_CDN } from '~/constants/urls'

const { fullPath } = useRoute()
const gtm = useGtm()
const { t, locale } = useI18n({ useScope: 'local', inheritLocale: true })
const canonical = `https://columnaquiro.com${fullPath}`
const preferences = [
  {
    description: t('cookiesConsent.preferences.description')
  },
  {
    title: t('cookiesConsent.preferences.default.title'),
    description: t('cookiesConsent.preferences.default.description'),
    items: [
      { label: 'Activar', value: 'default', isEnable: true, isRequired: true }
    ]
  },
  {
    title: t('cookiesConsent.preferences.googleAnalytics.title'),
    description: t('cookiesConsent.preferences.googleAnalytics.description'),
    items: [
      { label: 'Activar', value: 'ga', isEnable: true, isRequired: false }
    ]
  }
]

const onAccept = () => {
  gtm?.enable(true)
}

const onSavePreferences = (preferences: string[]) => {
  if (preferences.includes('ga')) {
    gtm?.enable(true)
  }
}

useSeoMeta({
  ogUrl: canonical,
  ogType: 'website',
  ogSiteName: '',
  ogImage: `${STATICS_CDN}website/seo/og-image.png`,
  twitterCard: 'summary_large_image'
})

</script>
<style lang="scss">
.cookie-comply {
  position: fixed !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  border-radius: 0 !important;

  &__back-arrow {
    top: 29px;
  }

  &__modal {
    position: fixed !important;

    &-header {
      text-align: center;
      padding-bottom: 8px;
    }

    &-switches {
      padding: 8px 0;
      margin-bottom: 8px;
    }
  }
  &__button {
    letter-spacing: 0.25px !important;

    &-accept {
      background-color: #8D5B4C;
    }
  }
}
</style>
<i18n>
{
  "es": {
    "cookiesConsent": {
      "description": "Este sitio web utiliza cookies propias y de terceros para mantener la sesi??n, ofrecerle una mejor experiencia de usuario y obtener datos estad??sticos de navegaci??n de los usuarios. Para m??s informaci??n vea la <a class='text-black' href='/politica-de-cookies'>Pol??tica de cookies.</a>",
      "actions": {
        "accept": "Aceptar las cookies",
        "configure": "Personalizar las cookies"
      },
      "preferences": {
        "title": "Gesti??n de cookies",
        "description": "Este sitio web utiliza cookies propias y de terceros para mantener la sesi??n, ofrecerle una mejor experiencia de usuario y obtener datos estad??sticos de navegaci??n de los usuarios. Para m??s informaci??n vea la Pol??tica de cookies.",
        "save": "Aceptar selecci??n",
        "default": {
          "title": "Cookies para el funcionamiento de la web",
          "description": "Estas cookies son esenciales para el correcto funcionamiento del sitio web, sin estas cookies el sitio web puede no funcionar correctamente"
        },
        "googleAnalytics": {
          "title": "Cookies de Google Analytics",
          "description": "Se utilizan para generar un identificador de usuario ??nico, utilizado para hacer recuento de cu??ntas veces visita el sitio un usuario, as?? como la fecha de la primera y la ??ltima vez que visit?? la web. Registran la fecha y hora de acceso a cualquiera de las p??ginas del portal. Comprueban la necesidad de mantener la sesi??n de un usuario abierta o crear una nueva. Identifican la sesi??n del usuario, para recoger la ubicaci??n geogr??fica aproximada del ordenador que accede al portal."
        }
      }
    }
  }
}
</i18n>
