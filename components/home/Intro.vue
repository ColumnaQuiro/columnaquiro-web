<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraph-with-image
      image="website/home/header-intro"
      mobile-image-position="first"
      provider="cloudinary"
      :image-width="500"
    >
      <template #text>
        <div class="flex pb-2 md:pb-4 lg:pb-8">
          <div>
            <NuxtImg
              src="website/icons/wellness.svg"
              provider="cloudinary"
              :width="31"
              :alt="t('home.intro.titleImageAlt')"
            />
          </div>
          <h1 class="text-xs md:text-sm uppercase ml-3 md:ml-4">
            {{ t('home.intro.title') }}
          </h1>
        </div>
        <h2 class="section-title">
          {{ t('home.intro.subtitle') }}
        </h2>
        <h3 class="text-base md:text-xl font-medium pb-10">
          {{ t('home.intro.description') }}
        </h3>
        <cq-components-button
          :to="localePath('/reserva-cita')"
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
