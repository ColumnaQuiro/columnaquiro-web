<template>
  <cq-layout-section>
    <div class="relative bg-luxury-blue rounded-2xl xl:grid pt-4 px-4 lg:pt-8 lg:px-8 xl:grid-cols-3 xl:pt-10 xl:pb-10 xl:px-0 xl:pr-10">
      <div class="xl:col-start-2 xl:col-span-2">
        <h2 class="text-center section-title text-white pb-6 xl:text-start">
          {{ t('home.lea.title') }}
        </h2>
        <div class="text-base text-white text-center pb-6 xl:text-start" v-html="t('home.lea.body')" />
        <div class="text-center xl:text-start">
          <cq-components-button :to="localePath('/sobre-nosotros/equipo')" class="mx-auto" color="tertiary">
            {{ t('home.lea.button') }}
          </cq-components-button>
        </div>
      </div>
      <NuxtImg
        src="website/home/lea-guido.webp"
        provider="cloudinary"
        class="mx-auto mt-6 xl:mt-0 xl:absolute xl:bottom-0 xl:-left-14"
        :width="480"
        alt="Lea Guido"
      />
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const localePath = useLocalePath()
const { t } = useI18n()
</script>

<style scoped>

</style>
