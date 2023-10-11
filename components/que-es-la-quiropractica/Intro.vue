<template>
  <cq-layout-section>
    <h1 class="section-title">
      {{ t('queEsLaQuiropractica.intro.title') }}
    </h1>
    <cq-blocks-sections-paragraphWithImage
      :text="t('queEsLaQuiropractica.intro.description')"
      :image="`${STATICS_CDN}website/home/quiro-intro.webp`"
      :image-width="240"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n()
</script>
