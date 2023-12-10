<template>
  <cq-layout-section class="bg-light-grey">
    <h2 class="section-title">
      {{ t('general.testimonials.title') }}
    </h2>
    <div class="sk-ww-google-reviews" data-embed-id="236880" />
    <div class="text-center pt-10">
      <cq-components-button :href="COLUMNAQUIRO_GOOGLE_REVIEWS" color="secondary" size="x-large">
        {{ t('general.testimonials.button') }}
      </cq-components-button>
    </div>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { COLUMNAQUIRO_GOOGLE_REVIEWS } from '~/constants/urls'

const { t } = useI18n()
</script>
