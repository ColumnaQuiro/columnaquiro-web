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
        cols="6"
        lg="4"
      >
        <v-card
          flat
          :to="`para-quien-sirve-la-quiropractica/${item.key}`"
          color="whiteBranded"
          class="pa-4"
        >
          <v-card-title>
            <v-img src="https://dummyimage.com/80/8d5b4c/ffffff" width="80" class="mx-auto" />
          </v-card-title>
          <v-card-text class="pt-4">
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
        "key": "adults",
        "title": "Adultos",
        "description": "Work faster and smarter by integrating directly with Notion, right in the app."
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
        "key": "adolescent",
        "title": "Adolescentes",
        "description": "Work faster and smarter by integrating directly with Notion, right in the app."
      }
    ]
  }
}
</i18n>
