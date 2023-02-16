<template>
  <v-app-bar class="navigation-bar !overflow-visible" :height="mdAndUp ? 64 : 'auto'" flat>
    <div class="w-full">
      <div class="container flex flex-wrap items-center">
        <nuxt-link to="/">
          <v-img :src="`${STATICS_CDN}logo/logo-color.webp`" :width="100" alt="ColumnaQuiro" />
        </nuxt-link>
        <div class="flex-grow" />
        <nav class="hidden md:flex h-fit">
          <cq-components-sub-menu-item
            v-for="link in links"
            :key="rt(link.text)"
            :text="rt(link.text)"
            :to="link.to ? rt(link.to) : undefined"
            :sub-menu="link.subMenu"
          />
          <cq-components-button :to="t('appointmentButton.to')" variant="elevated">
            {{ t('appointmentButton.text') }}
          </cq-components-button>
        </nav>
        <div class="md:hidden">
          <cq-components-button
            icon
            variant="plain"
            color="#000000"
            class="md:hidden"
            @click="toggleBurgerMenu"
          >
            <v-icon>mdi-menu</v-icon>
          </cq-components-button>
        </div>
      </div>
      <v-expand-transition>
        <nav v-if="showBurgerMenu" class="md:hidden flex flex-col">
          <cq-components-sub-menu-item
            v-for="link in links"
            :key="rt(link.text)"
            :text="rt(link.text)"
            :to="link.to ? rt(link.to) : undefined"
            :sub-menu="link.subMenu"
          />
          <cq-components-button :to="t('appointmentButton.to')" block variant="elevated">
            {{ t('appointmentButton.text') }}
          </cq-components-button>
        </nav>
      </v-expand-transition>
    </div>
  </v-app-bar>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Ref } from 'vue'
import { useDisplay } from 'vuetify'
import { STATICS_CDN } from '~/constants/urls'
import { Link } from '~/types/Link'

const { mdAndUp } = useDisplay()
const { t, rt, tm } = useI18n({ useScope: 'local', inheritLocale: true })
const links: Link[] = tm('links')

const showBurgerMenu: Ref<boolean> = ref(false)

const toggleBurgerMenu = () => { showBurgerMenu.value = !showBurgerMenu.value }
</script>
<style lang="scss">
.navigation-bar {
  -webkit-box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47) !important;
  -moz-box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47) !important;
  box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47) !important;
}
</style>
<i18n>
{
  "es": {
    "links": [
      {
        "text": "Quiropráctica",
        "subMenu": [
          {
            "text": "¿Qué es?",
            "to": "/que-es-la-quiropractica"
          },
          {
            "text": "¿Es para mí?",
            "to": "/para-quien-sirve-la-quiropractica"
          },
          {
            "text": "Preguntas Frecuentes",
            "to": "/que-es-la-quiropractica/preguntas-frecuentes"
          }
        ]
      },
      {
        "text": "Servicios",
        "subMenu": [
          {
            "text": "¿Cómo funciona?",
            "to": "/servicios-quiropractica"
          },
          {
            "text": "Primera visita",
            "to": "/servicios-quiropractica/primera-visita"
          }
        ]
      },
      {
        "text": "Sobre nosotros",
        "subMenu": [
          {
            "text": "Nuestro equipo",
            "to": "/sobre-nosotros/equipo"
          },
          {
            "text": "Nuestro centro",
            "to": "/sobre-nosotros/centro-quiropractico-valencia"
          },
          {
            "text": "Contacto",
            "to": "/sobre-nosotros/contacto"
          }
        ]
      }
    ],
    "appointmentButton": {
      "text": "Pide Tu Cita",
      "to": "/reserva-cita-centro-quiropractico-valencia"
    }
  }
}
</i18n>
