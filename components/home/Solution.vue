<template>
  <div class="relative bg-luxury-grey">
    <cq-layout-section>
      <h2 class="section-title text-white border-b-white border-b mb-6 lg:ml-48 lg:mb-12">
        {{ t('home.solution.title') }}
      </h2>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        <p class="text-base lg:col-start-2" v-html="t('home.solution.bodyLeft')" />
        <p v-html="t('home.solution.bodyRight')" />
      </div>
      <NuxtImg
        src="website/home/mujer-espaldas.webp"
        provider="cloudinary"
        class="hidden lg:block lg:absolute bottom-0 lg:-left-14"
        :width="400"
        alt=""
      />
    </cq-layout-section>
    <NuxtImg
      src="website/home/mujer-espaldas.webp"
      provider="cloudinary"
      class="mx-auto lg:hidden "
      :width="400"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>

</style>
