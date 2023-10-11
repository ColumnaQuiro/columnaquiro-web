<template>
  <cq-layout-section>
    <h1 class="section-title">
      {{ t(`paraQuienSirveLaQuiropractica.types.intro.title.${personType}`) }}
    </h1>
    <cq-blocks-sections-paragraphWithImage
      :text="t(`paraQuienSirveLaQuiropractica.types.intro.description.${personType}`)"
      :image="`${STATICS_CDN}website/para-todos/${personType}.webp`"
      :image-width="400"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

interface Props {
  personType: string | string []
}

defineProps<Props>()

const { t } = useI18n()
</script>
