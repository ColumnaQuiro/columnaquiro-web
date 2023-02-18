<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('title') }}
    </h2>
    <div>
      {{ t('subtitle') }}
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 text-center">
      <div v-for="item in items" :key="rt(item.icon)">
        <v-img
          :src="`${STATICS_CDN}icons/icon-${rt(item.icon)}.webp`"
          :alt="rt(item.title)"
          width="80"
          class="mx-auto"
        />
        <div class="text-xl pt-4">
          {{ rt(item.title) }}
        </div>
        <div class="pt-2">
          {{ rt(item.body ) }}
        </div>
      </div>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

interface Item {
  icon: string
  title: string
  body: string
}
const { t, tm, rt } = useI18n({ useScope: 'local', inheritLocale: true })
const items: Item[] = tm('items')
</script>

<style scoped>

</style>
<i18n>
{
  "es": {
    "title": "Las subluxaciones y la Quiropráctica",
    "subtitle": "Nuestro cuerpo se adapta constantemente a varios tipos de estrés a diario para mantenernos en un estado óptimo. Hay 3 tipos de estrés principales en los cuales nos enfrentamos:",
    "items": [
      {
        "icon": "sad",
        "title": "Estrés físico",
        "body": "Debido a accidentes, golpes, caídas, levantar peso incorrectamente, malas posturas e incluso por el parto."
      },
      {
        "icon": "emotional-stress",
        "title": "Estrés emocional",
        "body": "Causado por las relaciones humanas, nerviosismo crónico, preocupaciones económicas, el empleo…"
      },
      {
        "icon": "quimical",
        "title": "Estrés químico",
        "body": "En nuestro estilo de vida moderno encontramos gran cantidad de toxinas: fertilizantes, conservantes, contaminación ambiental, productos de limpieza,…"
      }
    ]
  }
}
</i18n>
