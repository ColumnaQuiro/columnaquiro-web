<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraphWithImage
      :text="t('description')"
      :image="`${STATICS_CDN}website/home/quiro-intro.webp`"
      :image-width="240"
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
    "description": "La quiropráctica es una profesión manual de salud  que se centra en mejorar la funcionalidad del sistema nervioso mediante un enfoque integral y holístico. El sistema nervioso es esencial para el desarrollo y el funcionamiento de otros sistemas como el circulatorio, respiratorio, cardiovascular, locomotor, digestivo, urinario, endocrino, reproductor y linfático. La columna vertebral protege la médula espinal y el cráneo protege el cerebro, que es el encargado de enviar información a todo el cuerpo a través del sistema nervioso periférico.<br><br>Esta conexión entre el cerebro y el resto del cuerpo es crucial para regular el estrés, el dolor y otros síntomas que puedan aparecer en otros sistemas. A través de ajustes quiroprácticos, se estimulan los receptores nerviosos en el cuerpo, principalmente en la columna vertebral, para mantener una buena comunicación entre el sistema nervioso central (cerebro y columna vertebral) y el resto del cuerpo."
  }
}
</i18n>
