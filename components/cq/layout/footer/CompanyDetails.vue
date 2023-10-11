<template>
  <div class="text-center md:text-start">
    <img :src="`${STATICS_CDN}logo/logo-color.webp`" :width="100" alt="ColumnaQuiro" class="md:mx-0 mx-auto" loading="lazy">
    <div class="text-lg pt-4">
      {{ t('general.layout.footer.details.title') }}
    </div>
    <div class="text-base pb-2">
      {{ t('general.layout.footer.details.street') }}
    </div>
    <div>
      <nuxt-link :href="`mailto:${t('general.layout.footer.details.email')}`" class="text-base pb-2 text-brand-black no-underline">
        {{ t('general.layout.footer.details.email') }}
      </nuxt-link>
    </div>
    <div>
      <nuxt-link :href="`tel:${t('general.layout.footer.details.phone')}`" class="text-base pb-2 text-brand-black no-underline">
        {{ t('general.layout.footer.details.phone') }}
      </nuxt-link>
    </div>
    <div class="flex pt-4">
      <cq-components-button icon :href="INSTAGRAM_URL" size="x-small" variant="tonal" aria-label="Instagram">
        <v-icon>mdi-instagram</v-icon>
      </cq-components-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { INSTAGRAM_URL, STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()

</script>
