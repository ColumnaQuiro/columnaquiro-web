<template>
  <cq-layout-section shape="shape-tertiary-light-right" shape-position="bottom-right" :shape-width="400">
    <div class="text-base pb-4" v-html="t('howItWorks.firstVisit.description')" />
    <div class="grid gap-5 grid-cols-2">
      <cq-components-bullet-item-list v-for="(step, i) in steps" :key="i" :index="i + 1">
        <div class="text-sm font-semibold">
          {{ rt(step.text) }}
        </div>
      </cq-components-bullet-item-list>
    </div>
    <div class="text-base pb-4 pt-6" v-html="t('howItWorks.firstVisit.footer')" />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Step {
  text: string
}

const { t, tm, rt } = useI18n()
const steps: Step[] = tm('howItWorks.firstVisit.steps')
</script>
