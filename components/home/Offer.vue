<template>
  <cq-layout-section id="oferta" class="bg-brand-light-quaternary">
    <cq-blocks-sections-paragraph-with-image
      image="website/home/oferta-primer-ajuste-quiropractico.webp"
      :image-width="400"
      image-alt="Lea Guido"
      image-position="left"
    >
      <template #text>
        <div class="flex flex-col justify-center h-full">
          <h3 class="section-title pb-8 text-center md:text-start">
            {{ t('home.offer.title') }}
          </h3>
          <div class="text-base text-center md:text-start" v-html="t('home.offer.description')" />
          <div class="text-center pt-8">
            <cq-components-button :to="localePath('/reserva-cita')" color="secondary">
              <v-icon :icon="mdiCalendar" class="mr-2" />
              {{ t('home.offer.button') }}
            </cq-components-button>
          </div>
        </div>
      </template>
    </cq-blocks-sections-paragraph-with-image>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { mdiCalendar } from '@mdi/js'

const { t } = useI18n()
const localePath = useLocalePath()
</script>
