<template>
  <cq-layout-section>
    <v-row no-gutters justify="center">
      <v-col cols="12" lg="8" md="10">
        <cq-fonts-h3>
          {{ t('title') }}
        </cq-fonts-h3>
        <div class="text-h6 text-center">
          {{ t('description') }}
        </div>
      </v-col>
    </v-row>
    <v-row class="pt-10">
      <v-col
        v-for="item in items"
        :key="rt(item.key)"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          flat
          :to="`para-quien-sirve-la-quiropractica/${keyToTypeOfPerson.get(rt(item.key))}`"
          class="pa-2"
        >
          <v-card-title class="d-flex justify-center bg-whiteBranded py-3">
            <v-avatar size="large">
              <v-img :src="`${STATICS_CDN}website/home/${rt(item.key)}.webp`" width="100%" class="mx-auto" cover />
            </v-avatar>
          </v-card-title>
          <v-card-text class="pa-4 pt-4">
            <div class="text-h6 text-center pb-4">
              {{ rt(item.title) }}
            </div>
            <div class="text-body-1 text-center">
              {{ rt(item.description) }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { keyToTypeOfPerson } from '~/constants/typeOfPersonMapping'
import { STATICS_CDN } from '~/constants/urls'
const { tm, t, rt } = useI18n({ useScope: 'local', inheritLocale: true })
const items = tm('items')
</script>
<i18n>
{
  "es": {
    "title": "La Quiropráctica es para tí",
    "description": "La quiropráctica está pensada para todo el mundo desde los más pequeños hasta los más mayores. No hay una edad ni un estado físico en el cuál la quiropráctica no te aporte beneficios.",
    "items": [
      {
        "key": "workers",
        "title": "Trabajadores",
        "description": "Aumenta la actividad de tu  corteza prefrontal y mejora tu rendimiento laboral a corto y largo plazo, reduciendo el estrés y la ausencia por motivos de salud."
      },
      {
        "key": "kids",
        "title": "Niños",
        "description": "Work faster and smarter by integrating directly with Notion, right in the app."
      },
      {
        "key": "pregnant",
        "title": "Embarazadas",
        "description": "Work faster and smarter by integrating directly with Notion, right in the app."
      },
      {
        "key": "sport",
        "title": "Deportistas",
        "description": "Work faster and smarter by integrating directly with Notion, right in the app."
      },
      {
        "key": "elder",
        "title": "Tercera edad",
        "description": "Work faster and smarter by integrating directly with Notion, right in the app."
      },
      {
        "key": "disabled",
        "title": "Discapacidades motoras o intelectuales",
        "description": "Work faster and smarter by integrating directly with Notion, right in the app."
      }
    ]
  }
}
</i18n>
