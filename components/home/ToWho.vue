<template>
  <cq-layout-section>
    <v-row no-gutters justify="center">
      <v-col cols="12" lg="8" md="10">
        <h2 class="section-title text-center">
          {{ t('title') }}
        </h2>
        <div class="text-base text-center">
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
          <v-card-title class="!flex justify-center bg-brand-white py-3">
            <v-avatar size="large">
              <v-img :src="`${STATICS_CDN}website/home/${rt(item.key)}.webp`" width="100%" class="mx-auto" cover />
            </v-avatar>
          </v-card-title>
          <v-card-text class="pa-4 !pt-4">
            <div class="text-lg font-medium text-center pb-4">
              {{ rt(item.title) }}
            </div>
            <div class="text-base text-center">
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
    "description": "La quiropráctica es para todas las edades, desde los niños hasta los adultos mayores y pasando por todas las etapas de vida. Aquí, nos encanta atender a todos los miembros de la familia.",
    "items": [
      {
        "key": "workers",
        "title": "Trabajadores",
        "description": "Aumenta la actividad de tu corteza prefrontal y mejora tu rendimiento laboral a corto o largo plazo , reduciendo el estres y la ausencia por motivos de salud."
      },
      {
        "key": "kids",
        "title": "Niños",
        "description": "El desarrollo de un niño  incluye diferentes  etapas sensoriales y motoras y un sistema nervioso saludable es vital  en su superación y mejora de su coordinación y sentidos."
      },
      {
        "key": "pregnant",
        "title": "Embarazadas",
        "description": "Prepara tu  cuerpo para los cambios del embarazo y mejorar tu  recuperación postparto, optimizando la función del sistema nervioso y la salud en esta nueva etapa de vida."
      },
      {
        "key": "sport",
        "title": "Deportistas",
        "description": "Optimiza tu rendimiento fisico y tu recuperación post-entrenamiento."
      },
      {
        "key": "elder",
        "title": "Tercera edad",
        "description": "Cuida tu  cuerpo para disfrutar al máximo de la vida y mejora tu  movilidad, equilibrio y estilo de vida de manera holística y vitalista."
      },
      {
        "key": "disabled",
        "title": "Discapacidades motoras o intelectuales",
        "description": "Mejora la movilidad, equilibrio, sensacion corporal y tu funcionamento general para fortalecer tu desarollo y tu independencia."
      }
    ]
  }
}
</i18n>
