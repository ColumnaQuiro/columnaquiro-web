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

interface Testimonial {
  author: string
  description: string
}

const { t } = useI18n()

</script>
<style lang="scss">
.sk_reviews_grid {
  @apply md:h-[600px] #{!important};
}

.sk-ww-google-reviews-review-text {
  @apply h-[115px] md:h-[150px] #{!important};
}

.sk_reviews_grid-content {
  @apply md:h-[250px] #{!important};
}
</style>
