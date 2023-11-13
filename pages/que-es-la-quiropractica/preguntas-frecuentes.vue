<template>
  <cq-layout-section>
    <div v-for="section in sections" :key="section.title" class="mb-14">
      <h2 class="text-3xl pb-3">
        {{ rt(section.title) }}
      </h2>
      <div class="text-base pb-6">
        {{ rt(section.body) }}
      </div>
      <div>
        <cq-components-expansion-panel
          v-for="faq in section.faqs"
          :key="faq.title"
          :title="rt(faq.title)"
          :answer="rt(faq.body)"
          class="mb-3"
        />
      </div>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

interface FAQ {
  title: string
  body: string
}

interface Section {
  title: string
  body: string
  faqs: FAQ[]
}

const { t, tm, rt } = useI18n()
const sections: Section[] = tm('faqs.sections')
const useSeo = useSEO()

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('faqs.seo.title'), t('faqs.seo.description'))
useSeo.setSchemaOrgTag({
  type: 'FAQPage',
  customProps: {
    mainEntity: [{
      '@type': 'Question',
      name: '¿Cuánto tiempo tomará ver resultados y mejoras en mi salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La percepción de los cambios puede variar en cada persona, ya que cada cuerpo tiene su propia capacidad de expresión y recuperación. Como quiroprácticos, nuestro objetivo es establecer un plan de cuidado adecuado a las necesidades individuales de cada paciente, lo cual incluye analizar diferentes pruebas durante la primera visita. Durante esta visita, dedicamos tiempo para hablar y realizar pruebas que nos permitan definir tu estado de salud.<br><br>Es importante tener en cuenta que algunos síntomas o condiciones pueden mejorar después de unas pocas sesiones, mientras que otras condiciones más crónicas pueden requerir más tiempo para mejorar. Cada persona es única y responde de manera diferente al tratamiento quiropráctico.<br><br>A lo largo del proceso, solicitaremos tu colaboración en tu propia salud. Te recomendamos seguir el plan de cuidado recomendado para obtener resultados excelentes y duraderos. También realizaremos revisiones regulares para monitorear tu progreso y ajustaremos el plan de cuidado a medida que avanzamos, para asegurarnos de que estés sintiéndote lo mejor posible y experimentando una mejora en tu salud.<br><br>Recuerda que cada caso es individual y los resultados pueden variar. Nuestro compromiso es brindarte la mejor atención y trabajar en conjunto para ayudarte a alcanzar tus objetivos de salud. Si tienes alguna pregunta o inquietud sobre tu progreso durante el tratamiento quiropráctico, no dudes en comunicarte con nuestro equipo. Estamos aquí para apoyarte en tu camino hacia una mejor salud.'
      }
    }, {
      '@type': 'Question',
      name: '¿Es seguro acudir al quiropráctico durante el embarazo y para niños?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, es seguro acudir al quiropráctico durante el embarazo y para niños. En nuestro centro, contamos con formación y cursos especializados en pediatría para poder atender a los niños, así como certificación en la técnica de Webster para mujeres embarazadas.<br><br>Cada técnica de ajuste que aplicamos es extremadamente suave y se adapta a la columna vertebral de personas de diferentes edades, incluyendo niños. Además, tenemos en cuenta los cambios que ocurren en el cuerpo durante el embarazo, garantizando un enfoque seguro y adaptado a las necesidades de las mujeres embarazadas.<br><br>Muchos padres deciden llevar a sus hijos al quiropráctico para corregir cualquier disfunción de espalda o cráneo y mejorar la salud general. Es importante destacar que identificar y abordar estas disfunciones a una edad temprana puede contribuir al correcto desarrollo del niño en las etapas posteriores de su vida.<br><br>En el caso del embarazo, el seguimiento quiropráctico puede brindar muchos beneficios en la preparación del parto y en el buen desarrollo del embarazo, ayudando a mantener una buena salud y reducir la presencia de disfunciones en la madre.<br><br>Si tienes más preguntas o deseas obtener más información sobre la quiropráctica durante el embarazo o para niños, te invitamos a que consultes con nuestro equipo de quiroprácticos. Estamos aquí para brindarte la atención y el cuidado adecuados durante estas etapas especiales de la vida.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Los ajustes quiroprácticos son dolorosos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, los ajustes quiroprácticos no son dolorosos. De hecho, la mayoría de las personas experimentan una sensación de relajación y reducción de la tensión después de los ajustes quiroprácticos.<br><br>Los ajustes quiroprácticos se centran principalmente en la columna vertebral y se realizan mediante impulsos de alta velocidad y baja amplitud que estimulan los receptores nerviosos del cuerpo. Estos ajustes están diseñados para restaurar el equilibrio y la alineación adecuada de la columna vertebral, lo que puede aliviar la presión y las interferencias nerviosas.<br><br>Durante el ajuste, es posible que escuches un sonido similar a un chasquido. Este sonido se debe a la liberación de gases en las articulaciones, como resultado del cambio de presión durante el ajuste. Es importante tener en cuenta que este sonido no es indicativo de dolor ni de ningún daño en las articulaciones.<br><br>Cada persona puede experimentar las sensaciones de los ajustes quiroprácticos de manera diferente. Algunos pueden percibir una sensación de alivio inmediato, mientras que otros pueden experimentar una leve sensación de presión o estiramiento. En general, la mayoría de las personas encuentran los ajustes quiroprácticos cómodos y beneficiosos para su bienestar general.<br><br>Es importante comunicarse abiertamente con tu quiropráctico/a y expresar cualquier inquietud o sensibilidad que puedas tener. Ellos están capacitados para adaptar los ajustes según las necesidades y preferencias individuales, asegurando una experiencia cómoda y segura.<br><br>Recuerda que la quiropráctica es una práctica segura y efectiva para mejorar la salud y el funcionamiento del sistema nervioso, sin causar dolor innecesario. Si tienes alguna pregunta adicional o deseas saber más sobre los ajustes quiroprácticos, no dudes en consultar a tu quiropráctico/a.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Qué es la quiropráctica y por qué debería considerar el mantenimiento quiropráctico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La quiropráctica es una profesión de la salud que se enfoca en promover el buen funcionamiento del sistema nervioso y del cuerpo en su totalidad. Su objetivo no es solo aliviar síntomas, sino lograr un cuerpo sano y libre de interferencias nerviosas. Se recomienda seguir el mantenimiento quiropráctico para mantener y mejorar la salud actual, así como prevenir recaídas y factores estresantes que puedan afectar el sistema nervioso y el cuerpo en general. Al recibir tratamientos quiroprácticos regulares, se busca mantener la alineación adecuada de la columna vertebral y fortalecer el cuerpo para prevenir complicaciones futuras.'
      }
    }]
  }
})
</script>
