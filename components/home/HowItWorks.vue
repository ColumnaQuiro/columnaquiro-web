<template>
  <cq-layout-section>
    <cq-fonts-h3>
      {{ t('title') }}
    </cq-fonts-h3>
    <div class="text-h6">
      {{ t('description') }}
    </div>
    <client-only>
      <v-timeline
        align="start"
        class="pt-8"
        :direction="mdAndUp ? 'horizontal' : 'vertical'"
        :density="mdAndUp ? 'default' : 'compact'"
      >
        <v-timeline-item
          v-for="item in items"
          :key="rt(item.title)"
          :dot-color="rt(item.color)"
          :icon="rt(item.icon)"
        >
          <v-card flat :color="rt(item.color)">
            <v-card-title :class="['text-h6', `bg-${item.color}`]">
              {{ rt(item.title) }}
            </v-card-title>
            <v-card-text>
              <div class="text-body-1">
                {{ rt(item.description) }}
              </div>
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
<i18n>
{
  "es": {
    "title": "¿Cuántas sesiones tengo que hacer?",
    "description": "Al igual que cuando vamos al gym no sirve con ir solo un día, los ajustes quiropracticos funcionan de la misma manera. Tendremos que buscar nuestra rutina para que los efectos se mantegan a lo largo del tiempo. Al principio puede ser que necesitemos más sesiones, pero una vez el cuerpo se adapta bastará con una o dos sesiones al mes.",
    "items": [
      {
        "color": "primary",
        "icon": "mdi-calendar",
        "title": "Primera cita",
        "description": "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
      },
      {
        "color": "tertiary",
        "icon": "mdi-magnify",
        "title": "Segunda cita",
        "description": "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
      },
      {
        "color": "quaternary",
        "icon": "mdi-file-document-check-outline",
        "title": "Seguimiento",
        "description": "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
      },
      {
        "color": "secondary",
        "icon": "mdi-hand-heart-outline",
        "title": "Mantenimiento",
        "description": "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
      }
    ]
  }
}
</i18n>
