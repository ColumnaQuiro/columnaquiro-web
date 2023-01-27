<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraphWithImage
      :text="t('description')"
      image="https://dummyimage.com/80/8d5b4c/ffffff"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local', inheritLocale: true })
</script>
<i18n>
{
  "es": {
    "description": "La Quiropráctica es una profesión manual de salud que trabaja de manera integral y holística con tu sistema nervioso para que funciona a su plena capacidad. El sistema nervioso es el primer sistema que se desarolla durante la gestacion y que permite desarollar todos los otros sitemas : sistema circulatorio, respiratorio, cardiovascular, locomotor, digestivo, urinario, endocrino , repoductor , linfatico. Por su importancia , el sistema nervioso central es el unico que esta protegido : por tu columna vertebral ( protege tu medulla spinal) y tu craneo ( protege du cerebro).El cerebro es el jefe de tu cuerpo y manda informaciones a todo tu cuerpo y a estos siistemas a traves del sistema nervioso pereferico : tus nervios. Esta conexion entre tu cerebro y el resto de tu cuerpo es vital en la regulacion del estres, dolor y otros tipos de sintomas que aparecen entre los otros sistemas. A traves de ajustes quiropracticos, estumilamos receptores nerviososo en tu cuerpo , principalmente en tu colomuna vertebral para mantener una buena conexion entre du sistema nervioso central : cerebro y columna vertebral y tu cuerpo entero."
  }
}
</i18n>
