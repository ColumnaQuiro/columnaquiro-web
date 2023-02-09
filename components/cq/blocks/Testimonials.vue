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
          class="pa-3 h-100"
        >
          <v-card-text class="d-flex flex-column justify-center h-100">
            <div class="text-body-1 pb-2">
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
        "author": "Yaneth",
        "description": "La verdad que me ha cambiado la vida y mi diario vivir;  en cuanto escuche de este tipo de tto.  quize probarlo y la verdad no me arrepiento en lo absoluto, por que el seguimiento que me hace la dra.  Lea es fantástico, pocas personas se preocupan por la evolución  después del tratamiento... mil y mil gracias eres la mejor 👌👌👌😘"
      },
      {
        "author": "Jose Maria",
        "description": "Que decir, llegué con las lumbares destruidas, casi sin poder moverme, y lleno de pastillas que me había dado el CAP. Lea sabe muy bien lo que hace, me dejó como nuevo. Súper recomendables."
      },
      {
        "author": "Nazareth",
        "description": "Estoy muy contenta con los resultados. La doctora Lea es muy amable, te aconseja y los resultados son muy buenos.  Desde que voy al centro estoy mucho mejor y mi calidad de vida a mejorado mucho. Lo recomiendo 100%."
      },
      {
        "author": "Laura",
        "description": "Fa uns messos que hi vaig i m’ha ajudat molt amb el dolor i la tensió de diferents parts del cos. També noto una correcció important en la meva postura corporal i el tractament ha afectat positivament en la meva salut i benestar. L’ambient de la consulta és molt relaxant i agradable"
      },
      {
        "author": "Elisabeth",
        "description": "Vaig començar a tractar-me amb la Dra. Lea fa uns mesos, i estic molt contenta, els mals d'esquena gairebé han desaparescut, dormo millor, he guanyat en qualitat de vida. Recomano a la Dra. Lea al 100%."
      },
      {
        "author": "Karen",
        "description": "Estoy muy contenta con el servicio de Quirovida y con la Dra. Lea. Son un gran equipo que cuando entras te sientes cómo en casa. El tratamiento propuesto por la Dra. Lea me está ayudando mucho con mi problema de cervicales y espalda. Y que decir de ella es muy amable y siempre muy profesional. Estoy muy agradecida. Recomiendo sin duda a éste centro y sus profesionales."
      },
      {
        "author": "Sandra",
        "description": "Molt contenta amb el tractament que he rebut de la dra. Léa Guido. Hi vaig arribar gairebé per casualitat i estic encantada! No només ha desaparegut el dolor cervical, també m’ha ajudat molt a nivell emocional.La recomano totalment."
      },
      {
        "author": "Marc",
        "description": "Léa es una súper profesional!!Se nota la experiencia y en pocas sesiones he notado mucha mejoría en general. Muy recomendable."
      },
      {
        "author": "Javier",
        "description": "A los que padezcais problemas de espalda, al final de cada sesión y, desde la primera, todas las vértebras quedan en su sitio y, desparecen los desagradables dolores radiculares. La quiropŕactica Lea tiene manos mágicas."
      },
      {
        "author": "Cristian",
        "description": "Una experiencia  transformadora con la dra Lea  , un trato humano excelente ,lo recomiendo a todas las personas con síntomas o sin síntomas , merece la pena cuidar nuestro cuerpo - habitamos en el -"
      }
    ]
  }
}
</i18n>
