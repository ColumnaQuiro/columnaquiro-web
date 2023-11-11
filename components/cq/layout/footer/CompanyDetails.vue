<template>
  <div class="text-center md:text-start">
    <NuxtImg :src="`${STATICS_CDN}logo/logo-color.webp`" :width="100" alt="ColumnaQuiro" class="md:mx-0 mx-auto" loading="lazy" />
    <div class="text-lg py-4">
      {{ t('general.layout.footer.details.title') }}
    </div>
    <a class="text-base" :href="GOOGLE_MAPS_LOCAL_DIRECTION" target="_blank">
      {{ t('general.layout.footer.details.street') }}
    </a>
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
    <div class="flex justify-center md:justify-start pt-4">
      <cq-components-button icon :href="INSTAGRAM_URL" size="small" variant="tonal" aria-label="Instagram">
        <v-icon>mdi-instagram</v-icon>
      </cq-components-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { GOOGLE_MAPS_LOCAL_DIRECTION, INSTAGRAM_URL, STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()

</script>
