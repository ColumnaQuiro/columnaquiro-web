<template>
  <div class="text-md-start text-center">
    <v-img :src="`${STATICS_CDN}logo/logo-color.webp`" :width="100" alt="ColumnaQuiro" class="mx-md-0 mx-auto" />
    <div class="text-h6 pt-4">
      {{ t('details.title') }}
    </div>
    <div class="text-body-1 pb-2">
      {{ t('details.street') }}
    </div>
    <div>
      <nuxt-link :href="`mailto:${t('details.email')}`" class="text-body-1 pb-2 text-black">
        {{ t('details.email') }}
      </nuxt-link>
    </div>
    <div>
      <nuxt-link :href="`tel:${t('details.phone')}`" class="text-body-1 pb-2 text-black">
        {{ t('details.phone') }}
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {STATICS_CDN} from "~/constants/urls";

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
