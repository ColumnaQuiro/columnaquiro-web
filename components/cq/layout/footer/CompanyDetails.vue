<template>
  <div class="text-center md:text-start">
    <v-img :src="`${STATICS_CDN}logo/logo-color.webp`" :width="100" alt="ColumnaQuiro" class="md:mx-0 mx-auto" />
    <div class="text-lg pt-4">
      {{ t('details.title') }}
    </div>
    <div class="text-base pb-2">
      {{ t('details.street') }}
    </div>
    <div>
      <nuxt-link :href="`mailto:${t('details.email')}`" class="text-base pb-2 text-brand-black no-underline">
        {{ t('details.email') }}
      </nuxt-link>
    </div>
    <div>
      <nuxt-link :href="`tel:${t('details.phone')}`" class="text-base pb-2 text-brand-black no-underline">
        {{ t('details.phone') }}
      </nuxt-link>
    </div>
    <div class="flex pt-4">
      <cq-components-button icon :href="INSTAGRAM_URL" size="x-small" variant="tonal">
        <v-icon>mdi-instagram</v-icon>
      </cq-components-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { INSTAGRAM_URL, STATICS_CDN } from '~/constants/urls'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })

</script>
<i18n>
{
  "es": {
    "details": {
      "title": "Centro Quiropráctico",
      "street": "Ronda Sant Pere 40, Principal 1ª, 08010 Barcelona",
      "email": "hola{'@'}columnaquiro.com",
      "phone": "+34 645967420"
    }
  }
}
</i18n>
