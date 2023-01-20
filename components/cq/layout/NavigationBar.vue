<template>
  <v-app-bar class="navigation-bar" :height="mdAndUp ? 64 : 'auto'" flat>
    <div class="w-100">
      <v-container class="d-flex align-center">
        <nuxt-link to="/">
          <v-img src="https://dummyimage.com/80/8d5b4c/ffffff" :width="50" alt="ColumnaQuiro" />
        </nuxt-link>
        <v-spacer />
        <nav class="d-none d-md-flex">
          <cq-components-button
            v-for="link in links"
            :key="rt(link.text)"
            :to="rt(link.to)"
            class="mr-4"
          >
            {{ rt(link.text) }}
          </cq-components-button>
        </nav>
        <cq-components-button
          icon
          color="primary"
          class="d-md-none"
          @click="toggleBurgerMenu"
        >
          <v-icon>mdi-menu</v-icon>
        </cq-components-button>
      </v-container>
      <v-expand-transition>
        <nav v-if="showBurgerMenu" class="d-md-none d-flex flex-column">
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
        "text": "Contacto",
        "to": "/"
      },
      {
        "text": "Contacto2",
        "to": "/"
      },
      {
        "text": "Blog",
        "to": "/"
      },
      {
        "text": "Pide Tu Cita",
        "to": "/"
      }
    ]
  }
}
</i18n>
