<template>
  <cq-layout-section
    id="mission"
    class="bg-brand-light-quaternary lg:pt-16 md:pt-10 pt-4"
    shape="shape-tertiary-light-right"
    :shape-width="200"
    shape-position="bottom-right"
    remove-inner-space
  >
    <h1 class="section-title">
      {{ t('home.mission.title') }}
    </h1>
    <cq-blocks-sections-paragraph-with-image
      :text="t('home.mission.description')"
      :image="`${STATICS_CDN}website/home/intro.webp`"
      :image-width="350"
      image-alt="Lea Guido"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
</script>
