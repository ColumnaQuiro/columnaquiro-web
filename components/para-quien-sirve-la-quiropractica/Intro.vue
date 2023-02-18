<template>
  <cq-layout-section>
    <h1 class="section-title">{{ t(`title.${personType}`)}}</h1>
    <cq-blocks-sections-paragraphWithImage
      :text="t(`description.${personType}`)"
      image="https://dummyimage.com/80/8d5b4c/ffffff"
    />
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  personType: string | string []
}

defineProps<Props>()

const { t } = useI18n({ useScope: 'local', inheritLocale: true })
</script>
<i18n>
{
  "es": {
    "title": {
      "disabled": "Discapacidades motoras o intelectuales",
      "kids": "Bebes / Niños",
      "elder": "Personas mayores",
      "pregnant": "Embarazadas",
      "workers": "Trabajadores",
      "sport": "Deportistas"
    },
    "description": {
      "disabled": "Las personas con discapacidades motoras o intelectuales a menudo tienen acceso limitado a terapias. La quiropráctica, al trabajar de manera holística en el cuerpo entero, puede mejorar la sensación corporal, movilidad, funcionalidad, equilibrio y coordinación. Además, numerosos estudios sobre la quiropráctica y el cerebro han demostrado su potencial para producir cambios en la plasticidad cerebral. En particular, los ajustes quiroprácticos pueden equilibrar diferentes áreas del cerebro y mejorar el desarrollo en personas con trastornos neuroconductuales.",
      "kids": "Durante el nacimiento, el bebé experimenta estrés, desde su descenso en el canal de parto hasta su salida al mundo externo desconocido. Durante este proceso, el bebé puede quedarse atrapado en una posición o encontrar obstáculos que dificulten su salida. Esto se puede reflejar en la forma poco común de su cabeza al nacer o en un lado preferido para mamar durante la lactancia. Estos esfuerzos pueden causar disfunciones en su sistema nervioso.<br><br>Desde su nacimiento hasta su desarrollo, el bebé debe pasar por diferentes etapas en un orden específico. Estas etapas son sinónimo de un buen desarrollo sensorial y motor: el desarrollo motor le permitirá tener una musculatura adecuada y una coordinación corporal, mientras que el desarrollo sensorial le permitirá desarrollar todos sus sentidos (visión, olfato, tacto, etc.).<br><br>Un sistema nervioso que funcione al 100% ayudará al bebé a superar estas etapas, mejorando su coordinación, equilibrio y todos sus sentidos.",
      "elder": "En nuestra sociedad, aunque es común, no es normal que la tercera edad se asocie con debilidad, lentitud, enfermedad y dependencia. Es importante tener en cuenta que con la edad, nuestro cuerpo experimenta cambios, como la pérdida de calidad en huesos, colágeno y fibras musculares, y que nuestra calidad de vida puede verse afectada. Sin embargo, esta etapa es tan importante como cualquier otra y es esencial cuidar nuestro cuerpo para disfrutar al máximo de la vida. La quiropráctica puede ayudarte a mejorar tu movilidad, equilibrio y estilo de vida de manera holística y vitalista, fomentando un estilo de vida activo y saludable.",
      "pregnant": "<h2 class='text-lg'>Antes y durante el embarazo</h2>Es importante preparar el cuerpo para los cambios que se producirán durante el embarazo:<ul class='list-disc'><li>Cambios físicos: la alteración del centro de gravedad afecta la postura y la tensión muscular.</li><li>Cambios químicos: los cambios hormonales aumentan la laxitud de los ligamentos y las articulaciones.</li><li>Cambios emocionales: ser madre es un paso importante que puede generar estrés y preguntas para la futura madre.</li></ul><br>Estos cambios pueden interferir en el sistema nervioso, que controla todos los demás sistemas del cuerpo, incluidos los músculos, ligamentos y articulaciones, como los músculos y ligamentos del suelo pélvico, la articulación sacroilíaca y el coxis. La quiropráctica puede ayudar a alinear la pelvis y la columna vertebral para que el bebé tenga suficiente espacio y la madre pueda vivir un embarazo más efectivo. Por lo tanto, entendemos que la salud de una mujer embarazada es muy importante para ella y para el bebé.<br><br>Estamos certificados en la técnica Webster, una técnica quiropráctica que se centra en el análisis y la alineación de la pelvis y sus músculos y ligamentos para optimizar la función pélvica de la madre durante el embarazo y el parto, reduciendo la necesidad de medicamentos o intervenciones quirúrgicas durante el parto.<br><br><h2 class='text-lg'>Después del parto</h2>El parto es un evento estresante a nivel físico (horas de contracciones, salida del bebé), químico (cambios hormonales con aumento de la leche) y emocional (llegada del bebé, ser madre, posparto). La quiropráctica puede ayudar a mejorar la recuperación postparto, permitiendo que el cuerpo funcione mejor para que puedas disfrutar al máximo de este nuevo capítulo en tu vida.",
      "workers": "La quiropractica y su impacto en el cerebro han sido objeto de numerosos estudios, demostrando la capacidad de los ajustes para influir en la plasticidad cerebral. En concreto, los ajustes quiropácticos aumentan la actividad en la corteza prefrontal.<br><br>La corteza prefrontal está involucrada en cuatro aspectos clave: toma de decisiones, cognición (procesamiento de información), comportamiento social y expresión de la personalidad. Estos aspectos, mejorados por los ajustes quiropácticos, contribuyen a un mejor rendimiento laboral, incluyendo: mayor eficiencia, tiempo de reacción más rápido, desempeño social óptimo y un nivel de estrés reducido.<br><br>A largo plazo, la quiropractica en el entorno laboral trae consigo una serie de beneficensos en las ausencias por motivos de salud, como la depresión, dolor de espalda y dolor de cabeza. Además, mejora la retención de personal al permitir que los trabajadores manejen mejor el estrés y otros síntomas, y conduce a un mejor rendimiento laboral en general.",
      "sport": "Cuando se trata de deportistas regulares o de élite, a menudo pensamos en posibles lesiones o síntomas relacionados con sus actividades, pero no en su rendimiento deportivo. La quiropráctica ha sido utilizada por muchos atletas profesionales y es reconocida como una forma complementaria de atención médica para los atletas. Por ejemplo, Usain Bolt se ha ajustado antes de sus competiciones.<br><br>A pesar de ser poco conocida en el mundo del deporte, la quiropráctica ha sido objeto de muchos estudios que han demostrado que los ajustes regulares pueden mejorar:<ul class='list-disc'><li>La fuerza</li><li>El tiempo de reacción</li><li>La movilidad</li><li>El equilibrio</li><li>La recuperación post-entrenamiento</li></ul><br>Estos parámetros son cruciales para aumentar las habilidades atléticas."
    }
  }
}
</i18n>
