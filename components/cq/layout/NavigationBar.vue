<template>
  <v-app-bar class="navigation-bar" :height="mdAndUp ? 64 : 'auto'" flat>
    <div class="w-full">
      <div class="container flex flex-wrap items-center">
        <nuxt-link to="/">
          <v-img :src="`${STATICS_CDN}logo/logo-color.webp`" :width="100" alt="ColumnaQuiro" />
        </nuxt-link>
        <div class="flex-grow" />
        <nav class="hidden md:flex h-fit">
          <cq-components-button
            v-for="link in links"
            :key="rt(link.text)"
            :to="rt(link.to)"
            variant="text"
            class="mr-4"
          >
            {{ rt(link.text) }}
          </cq-components-button>
        </nav>
        <div class="md:hidden">
          <cq-components-button
            icon
            color="primary"
            class="md:hidden"
            @click="toggleBurgerMenu"
          >
            <v-icon>mdi-menu</v-icon>
          </cq-components-button>
        </div>
      </div>
      <v-expand-transition>
        <nav v-if="showBurgerMenu" class="md:hidden flex flex-col">
          <cq-components-button
            v-for="link in links"
            :key="rt(link.text)"
            :to="rt(link.to)"
            class="mb-2 mx-4"
          >
            {{ rt(link.text) }}
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

const { mdAndUp } = useDisplay()
const { rt, tm } = useI18n({ useScope: 'local', inheritLocale: true })
const links = tm('links')

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
        "text": "Pide Tu Cita",
        "to": "/reserva-tu-visita"
      }
    ]
  }
}
</i18n>
