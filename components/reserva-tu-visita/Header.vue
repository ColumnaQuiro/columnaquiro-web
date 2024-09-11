<template>
  <cq-layout-section shape="shape-secondary-light-left" :shape-width="80" shape-position="bottom-left">
    <div class="text-center">
      <div class="pb-8" @click="onTelClicked" v-html="t('bookVisit.header.contact.tel')" />
      <div class="pb-4">
        {{ t('bookVisit.header.contact.whatsapp') }}
      </div>
      <div class="flex justify-center">
        <a :href="WHATSAPP_URL" target="_blank" @click="onWhatsappClicked">
          <NuxtImg
            src="icons/icon__whatsapp.webp"
            provider="s3"
            width="60"
            alt="whatsapp"
          />
        </a>
      </div>
      <cq-layout-footer-timetable class="p-4 mt-8 bg-luxury-grey rounded-xl" />
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { WHATSAPP_URL } from '~/constants/urls'

const { t } = useI18n()

const onTelClicked = () => {
  useTrackEvent('contact', {
    method: 'Telephone'
  })
}

const onWhatsappClicked = () => {
  useTrackEvent('contact', {
    method: 'Whatsapp'
  })
}
</script>
