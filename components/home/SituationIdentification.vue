<template>
  <cq-layout-section>
    <h2 class="section-title text-center">
      {{ t('home.situationIdentification.title') }}
    </h2>
    <div class="flex flex-col lg:flex-row gap-5">
      <div v-for="item in items" :key="item" class="pt-6 border-t-2 border-luxury-green">
        {{ rt(item) }}
      </div>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
const items: string[] = tm('home.situationIdentification.items')
</script>

<style scoped>

</style>
