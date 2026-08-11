<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import LegalSection from '@/components/ui/LegalSection.vue'
import type { LegalPart } from '@/components/ui/LegalSection.vue'

const { locale } = useAppI18n()

interface Section {
  heading: string
  parts: LegalPart[]
}

const content: Record<'es' | 'en', { title: string; intro: string; sections: Section[]; seoDescription: string }> = {
  es: {
    title: 'Política de Privacidad',
    intro:
      'En cumplimiento de lo dispuesto en el Reglamento General de Protección de Datos 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD) de 5 diciembre de 2018, informamos:',
    sections: [
      {
        heading: '1. RESPONSABLE DEL TRATAMIENTO',
        parts: [
          {
            type: 'list',
            items: [
              'Identidad: COLUMNAQUIRO S.L. con NIF B16365504 en adelante “el Titular”',
              'Dirección: Calle dels vivons, 29 - 0 iz, 46006, Valencia',
              'Teléfono: 744735363',
              'Email de contacto: hola@columnaquiro.com',
            ],
          },
        ],
      },
      {
        heading: '2. FINALIDAD DEL TRATAMIENTO DE LOS DATOS',
        parts: [
          { type: 'p', text: 'Le informamos que los datos que nos facilite se tratarán con la finalidad:' },
          {
            type: 'list',
            items: [
              'Gestionar los servicios proporcionados a través del presente Portal Internet.',
              'Mantenerles informados sobre las actividades, productos y servicios de ColumnaQuiro.',
              'Desarrollo, cumplimiento y ejecución del contrato de compraventa o prestación de servicios y consultas relacionadas con el pedido del servicio solicitado a través de la WEB.',
              'Atención al cliente.',
            ],
          },
          {
            type: 'p',
            text: 'Asimismo, de conformidad con lo previsto en el RGPD se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.',
          },
          {
            type: 'p',
            text: 'La información personal no podrá ser utilizada para otros fines que los relacionados con los servicios contratados o productos adquiridos. No se tomarán decisiones automatizadas en base a dicho perfil.',
          },
        ],
      },
      {
        heading: '3. LEGITIMACIÓN PARA EL TRATAMIENTO DE DATOS',
        parts: [
          { type: 'p', text: 'La legitimación para el tratamiento de sus datos se basa en:' },
          {
            type: 'list',
            items: [
              'El consentimiento otorgado por el Usuario mediante la aceptación de la presente Política y la casilla correspondiente.',
              'Interés legítimo para atender las solicitudes o consultas que se planteen a través de los distintos medios de contacto.',
              'El Usuario ha aportado sus datos personales en el marco de una relación contractual o precontractual para la atención de su solicitud y/o consulta y por tanto su tratamiento es necesario para el mantenimiento de dicha relación.',
              'Las obligaciones legales aplicables al Titular que requieren del tratamiento de los datos personales de acuerdo con los servicios prestados o aquellas relacionadas con cuestiones tributarias.',
            ],
          },
          {
            type: 'p',
            text: 'El Usuario podrá, en cualquier momento, revocar su consentimiento para el tratamiento de sus datos personales. En ningún caso la retirada de estos consentimientos condiciona la prestación del servicio, y/o la ejecución de contratos con el Titular.',
          },
        ],
      },
      {
        heading: '4. DATOS PERSONALES QUE SE TRATAN Y PROCEDENCIA',
        parts: [
          {
            type: 'p',
            text: 'Los datos personales que tratamos son de carácter identificativo y han sido facilitados por el propio Usuario mediante la cumplimentación del formulario de contacto, el envío de correos electrónicos o uso de las funcionalidades ofrecidas en el sitio web.',
          },
          {
            type: 'p',
            text: 'El uso de los apartados de contacto, cumplimentación de formularios y/o funcionalidades ofrecidas en el Portal es voluntario. No obstante, la cumplimentación de determinados campos del formulario o su facilitación mediante el uso de otras funcionalidades resultan necesarios para atender y gestionar correctamente su solicitud, por lo que la negativa del Usuario a facilitar la información requerida impedirá a Titular atenderla y gestionarla correctamente.',
          },
          {
            type: 'p',
            text: 'El Usuario garantiza que los datos que nos facilita son veraces, exactos y completos. Se cancelarán, borrarán o bloquearán los datos cuando resulten inexactos, incompletos o hayan dejado de ser necesarios o pertinentes para su finalidad conforme a la legislación vigente. Si los datos personales aportados son de un tercero, el Usuario garantiza que le ha informado de la Política de Privacidad y ha obtenido su autorización para facilitar sus datos con las finalidades antes señaladas. Igualmente garantiza que los datos aportados son exactos y actualizados, siendo responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia del incumplimiento de tal obligación.',
          },
        ],
      },
      {
        heading: '5. PROTECCIÓN DE DATOS DE MENORES',
        parts: [
          {
            type: 'p',
            text: 'Según lo establecido en el RGPD y en la LOPDGDD sólo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita. Sólo podrán aportar datos personales en este sitio web las personas mayores de 14 años. En caso de menores de 14 años, será condición obligatoria el consentimiento de sus padres o tutores para poder tratar sus datos personales.',
          },
        ],
      },
      {
        heading: '6. PLAZOS DE CONSERVACIÓN DE LOS DATOS PERSONALES',
        parts: [
          {
            type: 'p',
            text: 'Los datos personales proporcionados por el Usuario se conservarán mientras permanezca dado de alta en el servicio, mientras se mantenga la relación negocial, mientras el Usuario no solicite su supresión, o durante el plazo legal establecido. Así mismo podrán conservarse cuando sean necesarios para el cumplimiento de una obligación legal o para la formulación, el ejercicio y la defensa de reclamaciones.',
          },
          {
            type: 'p',
            text: 'Si el Usuario retira su consentimiento o ejercita los derechos de oposición o supresión, sus datos se conservarán bloqueados a disposición de la Administración de Justicia durante los plazos establecidos legalmente para atender a las posibles responsabilidades nacidas del tratamiento de los datos personales.',
          },
        ],
      },
      {
        heading: '7. SECRETO Y SEGURIDAD DE LOS DATOS PERSONALES',
        parts: [
          {
            type: 'p',
            text: 'Titular se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.',
          },
          {
            type: 'p',
            text: 'Los datos personales serán tratados como confidenciales por el Titular, quien se compromete a informar y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.',
          },
        ],
      },
      {
        heading: '8. CESIONES Y DESTINATARIOS DE LOS DATOS PERSONALES',
        parts: [
          {
            type: 'p',
            text: 'Sus datos personales serán comunicados en los casos legalmente previstos, por ejemplo, a Administraciones Públicas para el cumplimiento de obligaciones directamente exigibles al Titular o cuando resulte necesario para cumplir con las finalidades del tratamiento indicadas anteriormente o para prestar servicios estrictamente necesarios para el desarrollo de la actividad.',
          },
        ],
      },
      {
        heading: '9. DERECHOS DE LOS USUARIOS',
        parts: [
          { type: 'p', text: '¿Cuáles son sus derechos cuando nos facilita sus datos?' },
          {
            type: 'list',
            items: [
              'El Usuario tiene derecho a obtener confirmación sobre si estamos tratando datos personales que les conciernan, o no.',
              'El Usuario tiene derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.',
              'En determinadas circunstancias, el Usuario podrá solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.',
              'En determinadas circunstancias y por motivos relacionados con su situación particular, el Usuario podrá oponerse al tratamiento de sus datos, por lo que el responsable del tratamiento dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.',
              'En aquellos supuestos en los que legalmente proceda, tendrá el derecho a la portabilidad de los datos, lo que implica que tiene derecho a recibir los datos personales relativos a su persona que estemos tratando y almacenarlos en un dispositivo propio.',
            ],
          },
          {
            type: 'p',
            text: 'Puede ejercitar ante el Titular, en caso de que resulten de aplicación, los derechos de acceso, rectificación, oposición, supresión, limitación del tratamiento, portabilidad y a oponerse a ser objeto de decisiones individuales automatizadas mediante comunicación escrita acompañada de fotocopia del D.N.I. para acreditar su identidad, con la referencia “Derechos RGPD” dirigida a la dirección: Calle dels vivons, 29 - 0 iz, 46006, Valencia o a la dirección de correo electrónico: hola@columnaquiro.com.',
          },
          {
            type: 'p',
            text: 'Igualmente, le informamos que puede dirigir cualquier tipo de reclamación en materia de protección de datos personales a la Agencia Española de Protección de Datos <a href="https://www.agpd.es" class="underline" target="_blank" rel="noopener">www.agpd.es</a>, Autoridad de Control de España.',
          },
        ],
      },
    ],
    seoDescription: 'Política de privacidad de ColumnaQuiro, Centro Quiropráctico en Valencia.',
  },
  en: {
    title: 'Privacy Policy',
    intro:
      'In compliance with the provisions of the General Data Protection Regulation 2016/679 (RGPD) and the Organic Law 3/2018 on Data Protection and Guarantee of Digital Rights (LOPDGDD) of December 5, 2018, we inform:',
    sections: [
      {
        heading: '1. RESPONSIBLE FOR THE TREATMENT',
        parts: [
          {
            type: 'list',
            items: [
              'Identity: COLUMNAQUIRO S.L. with NIF B16365504 hereinafter “the Owner”',
              'Address: Calle dels vivons, 29 - 0 iz, 46006, Valencia',
              'Telephone: 744735363',
              'Contact email: hola@columnaquiro.com',
            ],
          },
        ],
      },
      {
        heading: '2. PURPOSE OF DATA PROCESSING',
        parts: [
          { type: 'p', text: 'We inform you that the data you provide us will be processed for the purpose:' },
          {
            type: 'list',
            items: [
              'Manage the services provided through this Internet Portal.',
              "Keep them informed about ColumnaQuiro's activities, products and services.",
              'Development, compliance and execution of the contract for the sale or provision of services and inquiries related to the order of the service requested through the WEB.',
              'Customer support.',
            ],
          },
          {
            type: 'p',
            text: 'In addition, in accordance with the provisions of the RGPD, a record of processing activities is kept that specifies, according to their purposes, the processing activities carried out and the other circumstances established in the RGPD.',
          },
          {
            type: 'p',
            text: 'Personal information may not be used for purposes other than those related to the contracted services or products purchased. No automated decisions will be made based on that profile.',
          },
        ],
      },
      {
        heading: '3. LEGITIMACY FOR DATA PROCESSING',
        parts: [
          { type: 'p', text: 'The legitimacy for the processing of your data is based on:' },
          {
            type: 'list',
            items: [
              'The consent granted by the User through the acceptance of this Policy and the corresponding box.',
              'Legitimate interest to respond to requests or queries that arise through the different means of contact.',
              'The User has provided their personal data within the framework of a contractual or pre-contractual relationship to respond to their request and/or query and therefore their processing is necessary for the maintenance of that relationship.',
              'The legal obligations applicable to the Data Controller that require the processing of personal data in accordance with the services provided or those related to tax issues.',
            ],
          },
          {
            type: 'p',
            text: 'The User may, at any time, revoke their consent to the processing of their personal data. Under no circumstances does the withdrawal of these consents condition the provision of the service, and/or the execution of contracts with the Owner.',
          },
        ],
      },
      {
        heading: '4. PERSONAL DATA BEING PROCESSED AND ORIGIN',
        parts: [
          {
            type: 'p',
            text: 'The personal data we process are of an identifying nature and have been provided by the User himself by filling out the contact form, sending emails or using the features offered on the website.',
          },
          {
            type: 'p',
            text: "The use of the contact sections, filling out forms and/or functionalities offered on the Portal is voluntary. However, filling in certain fields of the form or providing them through the use of other functions are necessary to respond to and manage your request correctly, so the User's refusal to provide the required information will prevent the Owner from responding to and managing it properly.",
          },
          {
            type: 'p',
            text: 'The User guarantees that the data provided to us is true, accurate and complete. Data will be canceled, deleted or blocked when they are inaccurate, incomplete or are no longer necessary or relevant for their purpose in accordance with current legislation. If the personal data provided is that of a third party, the User guarantees that they have informed them of the Privacy Policy and have obtained their authorization to provide their data for the purposes indicated above. It also guarantees that the data provided is accurate and up to date, and is responsible for any direct or indirect damage or loss that may arise as a result of the breach of this obligation.',
          },
        ],
      },
      {
        heading: "5. PROTECTION OF CHILDREN'S DATA",
        parts: [
          {
            type: 'p',
            text: 'As established in the RGPD and the LOPDGDD, only those over 14 years of age can grant their consent for the processing of their personal data lawfully. Only people over 14 years of age may provide personal data on this website. In the case of children under 14 years of age, the consent of their parents or guardians will be mandatory in order to process their personal data.',
          },
        ],
      },
      {
        heading: '6. PERSONAL DATA RETENTION PERIODS',
        parts: [
          {
            type: 'p',
            text: 'The personal data provided by the User will be kept as long as you are registered with the service, while the business relationship is maintained, as long as the User does not request its deletion, or for the established legal period. They may also be kept when necessary for the fulfillment of a legal obligation or for the formulation, exercise and defense of claims.',
          },
          {
            type: 'p',
            text: 'If the User withdraws their consent or exercises their rights of opposition or deletion, their data will be kept blocked at the disposal of the Administration of Justice for the legally established periods to meet the possible responsibilities arising from the processing of personal data.',
          },
        ],
      },
      {
        heading: '7. SECRECY AND SECURITY OF PERSONAL DATA',
        parts: [
          {
            type: 'p',
            text: 'The owner undertakes to adopt the necessary technical and organizational measures, according to the level of security appropriate to the risk of the data collected, so as to guarantee the security of personal data and to avoid the accidental or illegal destruction, loss or alteration of personal data transmitted, stored or otherwise processed, or unauthorized communication or access to such data.',
          },
          {
            type: 'p',
            text: 'Personal data will be treated as confidential by the Data Controller, who undertakes to inform and to guarantee by means of a legal or contractual obligation that such confidentiality is respected by its employees, associates, and any person to whom the information is accessible.',
          },
        ],
      },
      {
        heading: '8. TRANSFERS AND RECIPIENTS OF PERSONAL DATA',
        parts: [
          {
            type: 'p',
            text: 'Your personal data will be communicated in the legally established cases, for example, to Public Administrations for the fulfillment of obligations directly required of the Data Controller or when necessary to fulfill the purposes of the processing indicated above or to provide services strictly necessary for the development of the activity.',
          },
        ],
      },
      {
        heading: '9. USER RIGHTS',
        parts: [
          { type: 'p', text: 'What are your rights when you provide us with your data?' },
          {
            type: 'list',
            items: [
              'The User has the right to obtain confirmation as to whether we are processing personal data that concerns them, or not.',
              'The User has the right to access their personal data, as well as to request the rectification of inaccurate data or, where appropriate, request their deletion when, among other reasons, the data are no longer necessary for the purposes for which they were collected.',
              'Under certain circumstances, the User may request the limitation of the processing of their data, in which case we will only keep them for the exercise or defense of claims.',
              'Under certain circumstances and for reasons related to their particular situation, the User may object to the processing of their data, so the data controller will stop processing the data, except for compelling legitimate reasons, or the exercise or defense of possible claims.',
              'In those cases where legally appropriate, you will have the right to data portability, which implies that you have the right to receive the personal data relating to your person that we are processing and store them on your own device.',
            ],
          },
          {
            type: 'p',
            text: 'You can exercise before the Data Controller, if applicable, your rights of access, rectification, opposition, deletion, limitation of processing, portability and to object to being the subject of automated individual decisions by means of written communication accompanied by a photocopy of your ID to prove your identity, with the reference “RGPD Rights” addressed to the address: Calle dels vivons, 29 - 0 iz, 46006, Valencia or to the email address: hola@columnaquiro.com.',
          },
          {
            type: 'p',
            text: 'We also inform you that you can address any type of complaint regarding the protection of personal data to the Spanish Data Protection Agency <a href="https://www.agpd.es" class="underline" target="_blank" rel="noopener">www.agpd.es</a>, the Spanish Control Authority.',
          },
        ],
      },
    ],
    seoDescription: 'Privacy policy for ColumnaQuiro, Chiropractic Center in Valencia.',
  },
}

const c = computed(() => content[locale.value])

useSeo({
  title: computed(() => `${c.value.title} | ColumnaQuiro`),
  description: computed(() => c.value.seoDescription),
})
</script>

<template>
  <section class="mx-auto max-w-3xl space-y-10 px-6 py-24">
    <div>
      <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>
      <p class="mt-4 text-body/80">{{ c.intro }}</p>
    </div>
    <LegalSection
      v-for="section in c.sections"
      :key="section.heading"
      :heading="section.heading"
      :parts="section.parts"
    />
  </section>
</template>
