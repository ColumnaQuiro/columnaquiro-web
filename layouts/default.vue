<template>
  <div>
    <Html :lang="locale">
      <cq-layout-navigation-bar />
      <main class="pt-14 lg:pt-16">
        <slot />
      </main>
      <lazy-cq-layout-footer-container />
      <client-only>
        <vue-cookie-comply
          :preferences="preferences"
          :preferences-label="t('general.cookiesConsent.actions.configure')"
          :accept-all-label="t('general.cookiesConsent.actions.accept')"
          @on-accept-all-cookies="onAccept"
          @on-save-cookie-preferences="onSavePreferences"
        >
          <template #header>
            <div class="text-base" v-html="t('general.cookiesConsent.description')" />
          </template>
          <template #modal-header>
            <h3>{{ t('general.cookiesConsent.preferences.title') }}</h3>
          </template>
        </vue-cookie-comply>
      </client-only>
    </Html>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSeoMeta } from '@unhead/vue'
import { STATICS_CDN } from '~/constants/urls'

const { t, locale } = useI18n()
const { grantConsent } = useGtag()

const preferences = [
  {
    description: t('general.cookiesConsent.preferences.description')
  },
  {
    title: t('general.cookiesConsent.preferences.default.title'),
    description: t('general.cookiesConsent.preferences.default.description'),
    items: [
      { label: 'Activar', value: 'default', isEnable: true, isRequired: true }
    ]
  },
  {
    title: t('general.cookiesConsent.preferences.googleAnalytics.title'),
    description: t('general.cookiesConsent.preferences.googleAnalytics.description'),
    items: [
      { label: 'Activar', value: 'ga', isEnable: true, isRequired: false }
    ]
  }
]

const onAccept = () => {
  grantConsent('G-7RZ1YECNKZ')
}

const onSavePreferences = (preferences: string[]) => {
  if (preferences.includes('ga')) {
    grantConsent('G-7RZ1YECNKZ')
  }
}
useSeoMeta({
  ogType: 'website',
  ogSiteName: '',
  ogImage: `${STATICS_CDN}website/seo/og-image.png`,
  twitterCard: 'summary_large_image'
})

</script>
<style lang="scss">
.cookie-comply {
  position: fixed !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  border-radius: 0 !important;

  &__back-arrow {
    top: 29px;
  }

  &__modal {
    position: fixed !important;

    &-header {
      text-align: center;
      padding-bottom: 8px;
    }

    &-switches {
      padding: 8px 0;
      margin-bottom: 8px;
    }
  }
  &__button {
    letter-spacing: 0.25px !important;

    &-accept {
      background-color: #8D5B4C;
    }
  }
}
</style>
