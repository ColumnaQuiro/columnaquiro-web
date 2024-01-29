<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraph-with-image
      image="website/home/quiropractica-es-para-ti.webp"
      :image-width="500"
      image-alt="Lea Guido"
    >
      <template #text>
        <div class="flex flex-col justify-center h-full">
          <h3 class="text-lg font-medium pb-8 text-center md:text-start">
            {{ t('home.mission.title') }}
          </h3>
          <div class="text-base text-center md:text-start" v-html="t('home.mission.description')" />
          <div class="pt-4">
            <cq-components-button color="tertiary" :to="localePath('/como-funciona')" variant="tonal">
              {{ t('general.button.knowMore') }}
            </cq-components-button>
          </div>
        </div>
      </template>
    </cq-blocks-sections-paragraph-with-image>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
</script>
