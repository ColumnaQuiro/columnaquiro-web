<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraph-with-image
      image="website/home/lea-columnaquiro-columna"
      provider="cloudinary"
      :image-width="450"
    >
      <template #text>
        <h1 class="section-title mb-0">
          {{ t('home.intro.title') }}
        </h1>
        <div class="pb-4">
          {{ t('home.intro.description') }}
        </div>
        <cq-components-button
          :to="localePath('/reserva-cita-centro-quiropractico-valencia')"
          variant="flat"
          color="tertiary"
        >
          {{ t('home.intro.button') }}
        </cq-components-button>
      </template>
    </cq-blocks-sections-paragraph-with-image>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
</script>
