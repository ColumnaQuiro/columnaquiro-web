<template>
  <cq-layout-section
    class="bg-brand-light-secondary"
    shape="shape-tertiary-light-right"
    :shape-width="300"
    shape-position="bottom-right"
  >
    <v-row no-gutters justify="center">
      <v-col cols="12" lg="8" md="10">
        <h2 class="section-title">
          {{ t('home.toWho.title') }}
        </h2>
        <div class="text-base text-center">
          {{ t('home.toWho.description') }}
        </div>
      </v-col>
    </v-row>
    <cq-blocks-to-who />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
