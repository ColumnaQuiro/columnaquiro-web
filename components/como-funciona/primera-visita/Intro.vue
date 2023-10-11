<template>
  <cq-layout-section shape="shape-tertiary-light-right" shape-position="bottom-right" :shape-width="400">
    <h1 class="section-title">
      {{ t('comoFunciona.primeraVisita.title') }}
    </h1>
    <div class="text-base pb-4" v-html="t('comoFunciona.primeraVisita.description')" />
    <div class="grid gap-5 grid-cols-2">
      <cq-components-bullet-item-list v-for="(step, i) in steps" :key="step" :index="++i">
        <div class="text-sm font-semibold">
          {{ rt(step.text) }}
        </div>
      </cq-components-bullet-item-list>
    </div>
    <div class="text-base pb-4 pt-6" v-html="t('comoFunciona.primeraVisita.footer')" />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
const steps = tm('comoFunciona.primeraVisita.steps')
</script>
