<template>
  <div>
    <cq-layout-navigation-bar />
    <div v-if="isIndex">
      <NuxtImg
        class="degradade-yellow"
        :width="400"
        src="website/home/degradado-amarillo.webp"
        provider="cloudinary"
        alt="degradado"
      />
      <NuxtImg
        v-if="isIndex"
        class="degradade-green"
        :width="400"
        src="website/home/degradado-verde.webp"
        provider="cloudinary"
        alt="degradado"
      />
    </div>
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
    <cq-components-whatsapp-widget />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSeoMeta } from '@unhead/vue'
import { onMounted } from 'vue'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
const { grantConsent } = useGtag()
const { path } = useRoute()

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

const isIndex = computed(() => path === '/')

const onAccept = () => {
  grantConsent('G-7RZ1YECNKZ')
}

const onSavePreferences = (preferences: string[]) => {
  if (preferences.includes('ga') || preferences.includes('all')) {
    grantConsent('G-7RZ1YECNKZ')
  }
}
useSeoMeta({
  ogType: 'website',
  ogSiteName: '',
  ogImage: `${STATICS_CDN}website/seo/og-image.png`,
  twitterCard: 'summary_large_image'
})

onMounted(() => {
  const cookieComplyAcceptance = localStorage.getItem('cookie-comply')
  const hasCookieComplyAllAccepted = cookieComplyAcceptance && cookieComplyAcceptance === 'all'
  const hasGAComplyAccepted = cookieComplyAcceptance && cookieComplyAcceptance === 'ga'
  if (hasCookieComplyAllAccepted) {
    grantConsent('G-7RZ1YECNKZ')
  } else if (hasGAComplyAccepted) {
    grantConsent('G-7RZ1YECNKZ')
  }
})
</script>
<style lang="scss">
.cookie-comply {
  position: fixed !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  @apply z-20;

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
<style lang="scss" scoped>
.degradade-yellow {
  @apply hidden md:block absolute top-16 right-0;
}

.degradade-green {
  @apply hidden md:block absolute inset-y-1/4 left-0;
}
</style>
