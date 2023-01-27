<template>
  <v-app>
    <cq-layout-navigation-bar />
    <v-main>
      <NuxtPage />
    </v-main>
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
          <div class="text-body-1" v-html="t('cookiesConsent.description')" />
        </template>
        <template #modal-header>
          <h3>{{ t('cookiesConsent.preferences.title') }}</h3>
        </template>
        <template #modal-footer>
          <footer>
            <button class="cookie-comply__button">
              {{ t('cookiesConsent.preferences.save') }}
            </button>
          </footer>
        </template>
      </vue-cookie-comply>
    </client-only>
  </v-app>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })
const preferences = [
  {
    description: t('cookiesConsent.preferences.description')
  },
  {
    title: t('cookiesConsent.preferences.default.title'),
    description: t('cookiesConsent.preferences.default.description'),
    items: [
      { label: 'Activar', value: 'defaul', isEnabled: true, isRequired: true }
    ]
  },
  {
    title: t('cookiesConsent.preferences.googleAnalytics.title'),
    description: t('cookiesConsent.preferences.googleAnalytics.description'),
    items: [
      { label: 'Activar', value: 'ga' }
    ]
  }
]

const onAccept = () => {
  console.log('accepted')
}

const onSavePreferences = () => {
  console.log('on save preferences')
}
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
      "description": "Este sitio web utiliza cookies propias y de terceros para mantener la sesión, ofrecerle una mejor experiencia de usuario y obtener datos estadísticos de navegación de los usuarios. Para más información vea la <a class='text-black' href='/politica-de-cookies'>Política de cookies.</a>",
      "actions": {
        "accept": "Aceptar las cookies",
        "configure": "Personalizar las cookies"
      },
      "preferences": {
        "title": "Gestión de cookies",
        "description": "Este sitio web utiliza cookies propias y de terceros para mantener la sesión, ofrecerle una mejor experiencia de usuario y obtener datos estadísticos de navegación de los usuarios. Para más información vea la Política de cookies.",
        "save": "Aceptar selección",
        "default": {
          "title": "Cookies para el funcionamiento de la web",
          "description": "Estas cookies son esenciales para el correcto funcionamiento del sitio web, sin estas cookies el sitio web puede no funcionar correctamente"
        },
        "googleAnalytics": {
          "title": "Cookies de Google Analytics",
          "description": "Se utilizan para generar un identificador de usuario único, utilizado para hacer recuento de cuántas veces visita el sitio un usuario, así como la fecha de la primera y la última vez que visitó la web. Registran la fecha y hora de acceso a cualquiera de las páginas del portal. Comprueban la necesidad de mantener la sesión de un usuario abierta o crear una nueva. Identifican la sesión del usuario, para recoger la ubicación geográfica aproximada del ordenador que accede al portal."
        }
      }
    }
  }
}
</i18n>
