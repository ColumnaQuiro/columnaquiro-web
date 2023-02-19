<template>
  <div class="bg-brand-tertiary">
    <cq-layout-section>
      <h2 class="section-title">
        {{ t('title') }}
      </h2>
      <div class="text-base" v-html="t('body')" />
      <h3 class="text-3xl pt-8">
        {{ t('graph.title') }}
      </h3>
      <div
        v-for="bar in bars"
        :key="rt(bar.time)"
        class="pt-4"
      >
        <div class="flex gap-2">
          <div>
            <v-progress-linear
              :model-value="rt(bar.percentage)"
              :height="25"
              role="progressbar"
              aria-label="progress"
              rounded
              class="!w-96"
            >
              <div class="text-white">
                {{ rt(bar.percentage) }}%
              </div>
            </v-progress-linear>
          </div>
          <div>
            {{ rt(bar.time) }}
          </div>
        </div>
      </div>
    </cq-layout-section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Bar {
  percentage: number
  time: string
}

const { t, tm, rt } = useI18n({ inheritLocale: true, useScope: 'local' })
const bars: Bar[] = tm('graph.bars')
</script>

<style scoped>

</style>
<i18n>
{
  "es": {
    "title": "La Quiropráctica bajo la ciencia",
    "body": "“Un estudio de 2.818 pacientes que recibieron tratamiento quiropráctico en los Estados Unidos y en todo el mundo, demostró que el cuidado quiropráctico está asociado con una mejora profunda y estadísticamente significativa en las áreas del bienestar. Los pacientes informan cambios en: bienestar físico, disminución del nivel de estrés percibido, disfrute de la vida, cambios en el estilo de vida, bienestar emocional, psicológico y calidad de vida.”<br><br>Blanks, RH; Boone, WR; Schmidt, S; Dobson, M; Network Care: A retrospective outcomes assessment. 1996 Dobson, M; Boone WR; Blanks, RH; Women and Alternative Health Care: A retrospective study of recipients of Network Care. 1996",
    "graph": {
      "title": "Se ha demostrado que con los ajustes quiroprácticos se mejora un:",
      "bars": [
        {
          "percentage": 65,
          "time": "en 1-3 meses (recuperación)"
        },
        {
          "percentage": 74,
          "time": "en 3-12 meses (recuperación)"
        },
        {
          "percentage": 84,
          "time": "en 13-36 meses (mejora)"
        },
        {
          "percentage": 95,
          "time": "en +36 meses (optimización)"
        }
      ]
    }
  }
}
</i18n>
