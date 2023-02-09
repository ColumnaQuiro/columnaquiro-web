<template>
  <v-app-bar class="navigation-bar" flat>
    <v-container class="d-flex align-center">
      <div>
        <v-img src="https://dummyimage.com/80/8d5b4c/ffffff" :width="50" alt="ColumnaQuiro" />
      </div>
      <v-spacer />
      <nav>
        <cq-components-button
          v-for="item in items"
          :key="rt(item.text)"
          :to="rt(item.to)"
          class="mr-4"
        >
          {{ rt(item.text) }}
        </cq-components-button>
      </nav>
    </v-container>
  </v-app-bar>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { tm, rt } = useI18n({ useScope: 'local', inheritLocale: true })

const items = tm('navigationBar.links')
</script>
<style lang="scss" scoped>
.navigation-bar {
  -webkit-box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47);
  -moz-box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47);
  box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47);
}
</style>
<i18n>
{
  "es": {
    "navigationBar": {
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
}

</i18n>
