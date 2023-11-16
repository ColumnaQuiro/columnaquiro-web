<template>
  <cq-layout-section class="science">
    <h2 class="section-title">
      {{ t('home.science.title') }}
    </h2>
    <div class="text-base" v-html="t('home.science.body')" />
    <h3 class="text-xl md:text-2xl lg:text-3xl pt-8">
      {{ t('home.science.graph.title') }}
    </h3>
    <div
      v-for="bar in bars"
      :key="rt(bar.time)"
      class="pt-4"
    >
      <div class="flex flex-col md:flex-row gap-2">
        <div>
          <v-progress-linear
            :model-value="rt(bar.percentage)"
            :height="25"
            role="progressbar"
            aria-label="progress"
            rounded
            class="science__progress-bar"
          >
            <div class="text-white pt-1 md:pt-0">
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
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Bar {
  percentage: number
  time: string
}

const { t, tm, rt } = useI18n()
const bars: Bar[] = tm('home.science.graph.bars')
</script>
<style lang="scss" scoped>
.science {
  &__progress-bar {
    @apply md:w-96 w-full;
  }
}
</style>
