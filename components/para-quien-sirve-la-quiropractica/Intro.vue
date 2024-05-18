<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraphWithImage
      :text="t(`chiropracticForWhom.types.intro.description.${personType}`)"
      :image="`website/para-todos/${personType}.webp`"
      :image-width="400"
      :image-alt="t(`chiropracticForWhom.types.intro.title.${personType}`)"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  personType: string | string []
}

defineProps<Props>()

const { t } = useI18n()
</script>
