<template>
  <div class="text-center md:text-start">
    <NuxtImg :src="`${STATICS_CDN}logo/logo-color.webp`" :width="100" alt="ColumnaQuiro" class="md:mx-0 mx-auto" loading="lazy" />
    <h3 class="text-lg font-medium py-4">
      {{ t('general.layout.footer.details.title') }}
    </h3>
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
      <cq-components-button
        icon
        :href="INSTAGRAM_URL"
        size="small"
        variant="tonal"
        aria-label="Instagram"
        color="#fbad50"
        @click="onSocialIconClicked('instagram')"
      >
        <v-icon>mdi-instagram</v-icon>
      </cq-components-button>
      <cq-components-button
        class="ml-3"
        icon
        :href="FACEBOOK_URL"
        size="small"
        variant="tonal"
        aria-label="Facebook"
        color="#1877F2"
        @click="onSocialIconClicked('facebook')"
      >
        <v-icon>mdi-facebook</v-icon>
      </cq-components-button>
      <cq-components-button
        class="ml-3"
        icon
        :href="WHATSAPP_URL"
        size="small"
        variant="tonal"
        aria-label="Whatsapp"
        color="#25D366"
        @click="onSocialIconClicked('whatsapp')"
      >
        <v-icon>mdi-whatsapp</v-icon>
      </cq-components-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { FACEBOOK_URL, GOOGLE_MAPS_LOCAL_DIRECTION, INSTAGRAM_URL, STATICS_CDN, WHATSAPP_URL } from '~/constants/urls'

const { t } = useI18n()
type SocialApps = 'whatsapp' | 'facebook' | 'instagram'
const onSocialIconClicked = (icon: SocialApps) => {
  useTrackEvent('social-app', {
    app: icon
  })
}
</script>
