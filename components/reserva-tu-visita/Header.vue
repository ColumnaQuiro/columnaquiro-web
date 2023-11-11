<template>
  <cq-layout-section>
    <div class="text-center">
      <div class="pb-8" @click="onTelClicked" v-html="t('reservaVisita.header.contact.tel')" />
      <div class="pb-4">
        {{ t('reservaVisita.header.contact.whatsapp') }}
      </div>
      <div class="flex justify-center">
        <a href="https://api.whatsapp.com/send?phone=34744735363" target="_blank" @click="onWhatsappClicked">
          <NuxtImg :src="`${STATICS_CDN}icons/icon__whatsapp.webp`" width="60" alt="whatsapp" />
        </a>
      </div>
      <cq-layout-footer-timetable class="mt-8" />
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

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
