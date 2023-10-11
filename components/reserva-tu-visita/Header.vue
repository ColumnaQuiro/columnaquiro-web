<template>
  <cq-layout-section>
    <h1 class="section-title">
      {{ t('reservaVisita.header.title') }}
    </h1>
    <div class="text-lg pt-4 text-center text-md-start">
      {{ t('reservaVisita.header.subtitle') }}
    </div>
    <div>
      <div class="pt-12">
        <h2 class="text-lg font-medium text-center text-md-start">
          {{ t('reservaVisita.header.steps.title') }}
        </h2>
        <div class="grid grid-cols-3">
          <div class="col-span-2">
            <ol class="pt-3 list-decimal">
              <li v-for="step in steps" :key="step" class="text-base" v-html="rt(step)" />
            </ol>
          </div>
        </div>
      </div>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

const steps = tm('reservaVisita.header.steps.items')
</script>

<style scoped>

</style>
