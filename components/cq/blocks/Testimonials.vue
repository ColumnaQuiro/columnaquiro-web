<template>
  <cq-layout-section>
    <cq-fonts-h3>
      {{ t('title') }}
    </cq-fonts-h3>
    <carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
      <slide v-for="item in items" :key="rt(item.author)">
        <v-card
          flat
          color="quaternary"
          class="pa-4"
        >
          <v-card-text>
            <div class="text-body-1">
              {{ rt(item.description) }}
            </div>
            <div class="text-caption text--secondary">
              {{ rt(item.author) }}
            </div>
          </v-card-text>
        </v-card>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const { t, tm, rt } = useI18n({ useScope: 'local', inheritLocale: true })
const items = tm('items')
const carouselSettings = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 2000,
  transition: 1000
}

const carouselBreakpoints = {
  800: {
    itemsToShow: 2
  },
  1280: {
    itemsToShow: 3
  }
}
</script>
<style lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  background: rgb(var(--v-theme-quaternary));
  color: var(--v-theme-blackBranded);
  border-radius: 8px;
}

.carousel__slide {
  padding: 10px;
}

</style>
<i18n>
{
  "es": {
    "title": "Vuestros testimonios nos ayudan a seguir mejorando",
    "items": [
      {
        "author": "Paqui Costea",
        "description": "Recomiendo encarecidamente a este gran profesional! Para mi y mi familia ha sido un antes y después en nuestra salud desde que empezamos con nuestro tratamiento con él! Es el mejor quiropráctico y tratamiento de recuperación y rehabilitación que he tenido hasta ahora! GRACIAS!"
      },
      {
        "author": "Paqui Costea",
        "description": "Recomiendo encarecidamente a este gran profesional! Para mi y mi familia ha sido un antes y después en nuestra salud desde que empezamos con nuestro tratamiento con él! Es el mejor quiropráctico y tratamiento de recuperación y rehabilitación que he tenido hasta ahora! GRACIAS!"
      },
      {
        "author": "Paqui Costea",
        "description": "Recomiendo encarecidamente a este gran profesional! Para mi y mi familia ha sido un antes y después en nuestra salud desde que empezamos con nuestro tratamiento con él! Es el mejor quiropráctico y tratamiento de recuperación y rehabilitación que he tenido hasta ahora! GRACIAS!"
      },
      {
        "author": "Paqui Costea",
        "description": "Recomiendo encarecidamente a este gran profesional! Para mi y mi familia ha sido un antes y después en nuestra salud desde que empezamos con nuestro tratamiento con él! Es el mejor quiropráctico y tratamiento de recuperación y rehabilitación que he tenido hasta ahora! GRACIAS!"
      },
      {
        "author": "Paqui Costea",
        "description": "Recomiendo encarecidamente a este gran profesional! Para mi y mi familia ha sido un antes y después en nuestra salud desde que empezamos con nuestro tratamiento con él! Es el mejor quiropráctico y tratamiento de recuperación y rehabilitación que he tenido hasta ahora! GRACIAS!"
      }
    ]
  }
}
</i18n>
