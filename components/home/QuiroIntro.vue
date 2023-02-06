<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraphWithImage
      :text="t('description')"
      :image="`${STATICS_CDN}website/home/quiro-intro.webp`"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })
</script>
<i18n>
{
  "es": {
    "description": "La Quiropráctica es una práctica manual que trabaja para optimizar la función del sistema nervioso. La columna vertebral y el cráneo protegen el sistema nervioso central, que controla todos los otros sistemas corporales. La comunicación entre el cerebro y el cuerpo es crucial para la regulación del dolor, el estrés y otros síntomas. Los ajustes quiroprácticos estimulan receptores nerviosos, especialmente en la columna vertebral, para mantener una buena conexión entre el cerebro, la columna vertebral y el cuerpo en general."
  }
}
</i18n>
