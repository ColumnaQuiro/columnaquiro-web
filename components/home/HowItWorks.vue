<template>
  <cq-layout-section class="how-it-works">
    <div class="section-title text-center">
      {{ t('title') }}
    </div>
    <div class="text-lg">
      {{ t('description') }}
    </div>
    <client-only>
      <v-timeline
        align="start"
        class="pt-8"
        :direction="mdAndUp ? 'vertical' : 'vertical'"
        :density="mdAndUp ? 'default' : 'compact'"
      >
        <v-timeline-item
          v-for="item in items"
          :key="rt(item.title)"
          :dot-color="rt(item.color)"
          :icon="rt(item.icon)"
        >
          <v-card flat :color="rt(item.color)">
            <v-card-title :class="['text-lg', `bg-${item.color}`]">
              {{ rt(item.title) }}
            </v-card-title>
            <v-card-text>
              <div class="text-base" v-html="rt(item.description)" />
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </client-only>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const { tm, rt, t } = useI18n({ useScope: 'local', inheritLocale: true })
const items = tm('items')
</script>
<style lang="scss">
.how-it-works {
  li {
    margin-left: 16px !important;
  }
}
</style>
<i18n>
{
  "es": {
    "title": "¿Cuántas sesiones tengo que hacer?",
    "description": "Al igual que cuando vamos al gym no sirve con ir solo un día, los ajustes quiropracticos funcionan de la misma manera. Tendremos que buscar nuestra rutina para que los efectos se mantegan a lo largo del tiempo. Al principio puede ser que necesitemos más sesiones, pero una vez el cuerpo se adapta bastará con una o dos sesiones al mes.",
    "items": [
      {
        "color": "primary",
        "icon": "mdi-calendar",
        "title": "Reserva tu primera cita",
        "description": "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
      },
      {
        "color": "tertiary",
        "icon": "mdi-magnify",
        "title": "Primera visita",
        "description": "<ul class='list-disc'>Te contamos lo que haremos en tu primera visita: <li> Rellenar el formulario de primera visita en la web </li> <li>historia clinica de salud</li> <li><ul>Pruebas para ver como funciona  tu sistema nervioso:<li>postura</li><li>pruebas neurológicas</li><li>patron de marcha</li></ul></li></ul>"
      },
      {
        "color": "quaternary",
        "icon": "mdi-file-document-check-outline",
        "title": "Segunda visita => Informe",
        "description": "<ul class='list-disc'><li>Te entregamos tu informe quiropractico con los resultados de las pruebas de la 1a visita</li><li>plan de cuidado recomendado </li></ul>"
      },
      {
        "color": "secondary",
        "icon": "mdi-hand-heart-outline",
        "title": "Plan de cuidado",
        "description": "Estableceremos un plan de cuidado recomendado a tus necesidades con una frecuencia de ajustes quiroprácticos"
      },
      {
        "color": "whiteBranded",
        "icon": "mdi-hand-heart-outline",
        "title": "Revision",
        "description": "<ul><li>Reevaluacion</li><li>Repetir las pruebas de la primera visita</li></ul>"
      },
      {
        "color": "tertiary",
        "icon": "mdi-hand-heart-outline",
        "title": "Mantenimiento",
        "description": ""
      }
    ]
  }
}
</i18n>
