export interface SymptomCard {
  label: string
  image: string
}

export interface CategoryContent {
  title: string
  intro: string[]
  list?: { lead: string; text: string }[]
  extra?: string[]
  symptoms: SymptomCard[]
}

export interface CategoryPage {
  slugEs: string
  slugEn: string
  heroImage: string
  es: CategoryContent
  en: CategoryContent
}

export const categoryPages: CategoryPage[] = [
  {
    slugEs: 'trabajadores',
    slugEn: 'workers',
    heroImage: '/assets/images/category-trabajadores.webp',
    es: {
      title: 'Trabajadores',
      intro: [
        'El dolor en la columna, ya sea dolor de espalda o lumbar, es la principal causa de ausencia y baja entre los trabajadores. De estos, más de un 70% han ido al médico por problemas musculoesqueléticos.',
        'A la larga, un dolor de espalda no tratado puede llevar a enfermedades crónicas, lo que reduce el rendimiento y eficacia en el trabajo, dando como resultado problemas de ánimo, estrés y más dolencias.',
        'En ColumnaQuiro, atendemos a muchas personas con dolencias en la espalda, en las cervicales y los hombros ya sea debido a una mala postura, a largas horas de trabajo, al estrés laboral, pequeños accidentes o levantamiento de peso o maquinaria.',
      ],
      symptoms: [
        { label: 'Dolor de espalda', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Lumbalgia', image: '/assets/images/symptom-lower-back-pain.avif' },
        { label: 'Hernia discal', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Escoliosis', image: '/assets/images/symptom-scoliosis.avif' },
        { label: 'Dolor de cabeza', image: '/assets/images/symptom-head-pain.avif' },
        { label: 'Túnel carpiano', image: '/assets/images/symptom-tunel-carpiano.avif' },
        { label: 'Estrés y depresión', image: '/assets/images/symptom-stress.avif' },
        { label: 'Dolor de cuello', image: '/assets/images/symptom-neck-pain.avif' },
      ],
    },
    en: {
      title: 'Workers',
      intro: [
        'Back or lower-back pain is the leading cause of absence among workers. More than 70% of them have seen a doctor for a musculoskeletal problem.',
        'Left untreated, back pain can turn into a chronic condition, reducing performance and effectiveness at work and leading to mood problems, stress, and further ailments.',
        'At ColumnaQuiro, we treat many people with back, neck, and shoulder ailments caused by poor posture, long working hours, work-related stress, minor accidents, or heavy lifting.',
      ],
      symptoms: [
        { label: 'Back pain', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Lower back pain', image: '/assets/images/symptom-lower-back-pain.avif' },
        { label: 'Herniated disc', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Scoliosis', image: '/assets/images/symptom-scoliosis.avif' },
        { label: 'Headache', image: '/assets/images/symptom-head-pain.avif' },
        { label: 'Carpal tunnel', image: '/assets/images/symptom-tunel-carpiano.avif' },
        { label: 'Stress and depression', image: '/assets/images/symptom-stress.avif' },
        { label: 'Neck pain', image: '/assets/images/symptom-neck-pain.avif' },
      ],
    },
  },
  {
    slugEs: 'bebes-y-ninos',
    slugEn: 'kids',
    heroImage: '/assets/images/category-ninos.webp',
    es: {
      title: 'Bebés y niños',
      intro: [
        'Durante el nacimiento, el bebé experimenta estrés, desde su descenso en el canal de parto hasta su salida al mundo externo desconocido. Durante este proceso, el bebé puede quedarse atrapado en una posición o encontrar obstáculos que dificulten su salida. Esto se puede reflejar en la forma poco común de su cabeza al nacer o en un lado preferido para mamar durante la lactancia. Estos esfuerzos pueden causar disfunciones en su sistema nervioso.',
        'Desde su nacimiento hasta su desarrollo, el bebé debe pasar por diferentes etapas en un orden específico. Estas etapas son sinónimo de un buen desarrollo sensorial y motor: el desarrollo motor le permitirá tener una musculatura adecuada y una coordinación corporal, mientras que el desarrollo sensorial le permitirá desarrollar todos sus sentidos (visión, olfato, tacto, etc.).',
        'Un sistema nervioso que funcione al 100% ayudará al bebé a superar estas etapas, mejorando su coordinación, equilibrio y todos sus sentidos.',
      ],
      symptoms: [
        { label: 'Escoliosis', image: '/assets/images/symptom-scoliosis.avif' },
        { label: 'Reflujo', image: '/assets/images/symptom-reflux.avif' },
        { label: 'Braquicefalia', image: '/assets/images/symptom-brachycephaly.avif' },
        { label: 'Cólicos', image: '/assets/images/symptom-colic.avif' },
        { label: 'Estreñimiento', image: '/assets/images/symptom-constipated.avif' },
      ],
    },
    en: {
      title: 'Babies and children',
      intro: [
        "During birth, a baby experiences stress, from its descent through the birth canal to its arrival in the unknown outside world. In this process, the baby can get stuck in a position or run into obstacles that make it harder to be born. This can show up later as an unusual head shape or a preferred side for breastfeeding, and these strains can cause dysfunction in their nervous system.",
        "From birth through development, a baby needs to move through different stages in a specific order. These stages go hand in hand with healthy sensory and motor development: motor development builds the right muscle tone and body coordination, while sensory development builds all of their senses (sight, smell, touch, and so on).",
        "A nervous system working at 100% helps the baby move through these stages, improving their coordination, balance, and all of their senses.",
      ],
      symptoms: [
        { label: 'Scoliosis', image: '/assets/images/symptom-scoliosis.avif' },
        { label: 'Reflux', image: '/assets/images/symptom-reflux.avif' },
        { label: 'Brachycephaly', image: '/assets/images/symptom-brachycephaly.avif' },
        { label: 'Colic', image: '/assets/images/symptom-colic.avif' },
        { label: 'Constipation', image: '/assets/images/symptom-constipated.avif' },
      ],
    },
  },
  {
    slugEs: 'embarazadas',
    slugEn: 'pregnant-women',
    heroImage: '/assets/images/category-embarazadas.webp',
    es: {
      title: 'Embarazadas',
      intro: ['Es importante preparar el cuerpo para los cambios que se producirán durante el embarazo:'],
      list: [
        {
          lead: 'Cambios físicos:',
          text: 'la alteración del centro de gravedad afecta la postura y la tensión muscular. Puede dar lugar a dolores de espalda y lumbares, dolencias muy comunes durante el embarazo.',
        },
        {
          lead: 'Cambios químicos:',
          text: 'los cambios hormonales aumentan la laxidad de los ligamentos y las articulaciones.',
        },
        {
          lead: 'Cambios emocionales:',
          text: 'ser madre es un paso importante que puede generar estrés y preguntas para la futura madre.',
        },
      ],
      extra: [
        'Estos cambios pueden interferir en el sistema nervioso, que controla todos los demás sistemas del cuerpo, como los músculos y ligamentos del suelo pélvico, la articulación sacroilíaca y el coxis.',
        'En ColumnaQuiro ayudamos a alinear la pelvis y la columna vertebral para que el bebé tenga suficiente espacio y la madre pueda vivir un embarazo más llevadero.',
        'Estamos certificados en la técnica Webster, una técnica quiropráctica que se centra en el análisis y la alineación de la pelvis y sus músculos y ligamentos para optimizar la función pélvica de la madre durante el embarazo y el parto, reduciendo la necesidad de medicamentos o intervenciones quirúrgicas. Además disponemos de un cojín especial para embarazadas, para que puedas tener ayuda <a href="/blog/cuanto-cuesta-un-quiropractico" class="font-semibold text-gold-dark underline">quiropráctica</a> sin interrupciones durante todo el embarazo. Por último, los ajustes quiroprácticos durante el embarazo son suaves y seguros.',
        'El parto es un evento que genera estrés a nivel físico, químico y emocional. A nivel físico, implica horas de contracciones y esfuerzo en la salida del bebé. Químicamente, se producen cambios hormonales, como el aumento de la leche. Emocionalmente, implica la llegada del bebé, la adaptación a la maternidad y el posparto.',
        'En ColumnaQuiro podemos contribuir significativamente a una recuperación del postparto más efectiva, optimizando el funcionamiento del cuerpo y permitiéndote disfrutar plenamente de este nuevo y emocionante capítulo en tu vida.',
      ],
      symptoms: [
        { label: 'Ciática', image: '/assets/images/symptom-sciatica.avif' },
        { label: 'Fibromialgia', image: '/assets/images/symptom-fibromyalgia.avif' },
        { label: 'Dolor de espalda', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Lumbalgia', image: '/assets/images/symptom-lower-back-pain.avif' },
      ],
    },
    en: {
      title: 'Pregnant women',
      intro: ["It's important to prepare your body for the changes that pregnancy brings:"],
      list: [
        {
          lead: 'Physical changes:',
          text: 'the shift in your center of gravity affects posture and muscle tension, which can lead to back and lower-back pain — very common complaints during pregnancy.',
        },
        {
          lead: 'Chemical changes:',
          text: 'hormonal changes increase the laxity of ligaments and joints.',
        },
        {
          lead: 'Emotional changes:',
          text: 'becoming a mother is a major step that can bring stress and questions for the mother-to-be.',
        },
      ],
      extra: [
        'These changes can interfere with the nervous system, which controls every other system in the body, including the muscles and ligaments of the pelvic floor, the sacroiliac joint, and the tailbone.',
        'At ColumnaQuiro we help align the pelvis and spine so the baby has enough room and the mother can have a more comfortable pregnancy.',
        'We are certified in the Webster technique, a chiropractic technique focused on analyzing and aligning the pelvis and its muscles and ligaments to optimize pelvic function during pregnancy and delivery, reducing the need for medication or surgical intervention. We also have a special cushion for pregnant patients, so you can receive uninterrupted chiropractic care throughout your pregnancy. Finally, chiropractic adjustments during pregnancy are gentle and safe.',
        "Childbirth is an event that creates physical, chemical, and emotional stress. Physically, it involves hours of contractions and effort delivering the baby. Chemically, hormonal changes occur, such as increased milk production. Emotionally, it involves the baby's arrival, adapting to motherhood, and the postpartum period.",
        'At ColumnaQuiro we can meaningfully contribute to a more effective postpartum recovery, optimizing how your body functions and letting you fully enjoy this new and exciting chapter of your life.',
      ],
      symptoms: [
        { label: 'Sciatica', image: '/assets/images/symptom-sciatica.avif' },
        { label: 'Fibromyalgia', image: '/assets/images/symptom-fibromyalgia.avif' },
        { label: 'Back pain', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Lower back pain', image: '/assets/images/symptom-lower-back-pain.avif' },
      ],
    },
  },
  {
    slugEs: 'deportistas',
    slugEn: 'athletes',
    heroImage: '/assets/images/category-deportistas.webp',
    es: {
      title: 'Deportistas',
      intro: [
        'Cuando hablamos de deportistas, es común pensar en posibles lesiones o síntomas relacionados con sus actividades, pero rara vez consideramos cómo la quiropráctica puede influir en su rendimiento deportivo. Sin embargo, esta disciplina ha sido adoptada por muchos atletas profesionales y es reconocida como una forma complementaria de atención médica en el ámbito deportivo.',
        'En países con una quiropráctica más desarrollada, es habitual que atletas de alto nivel reciban ajustes quiroprácticos con frecuencia. En América, por ejemplo, el fútbol americano es uno de los deportes donde la quiropráctica tiene mayor presencia, ayudando a los jugadores a competir sin dolores ni molestias.',
        'El cuidado quiropráctico deportivo ayuda al cuerpo a recuperarse de lesiones más rápidamente, previene nuevas lesiones y optimiza las diferentes funciones fisiológicas del cuerpo. Por eso, cada vez más atletas profesionales de todos los deportes recurren a la atención <a href="/blog/cuanto-cuesta-un-quiropractico" class="font-semibold text-gold-dark underline">quiropráctica</a> para mantenerse en óptimas condiciones físicas y realizar sus actividades al más alto nivel.',
        'En nuestro centro quiropráctico los deportistas usan nuestro servicio por cuatro razones:',
      ],
      list: [
        {
          lead: 'Quieren mejorar su rendimiento:',
          text: 'a través de los ajustes quiroprácticos se optimiza el funcionamiento de la columna vertebral, lo que conlleva a un mejor rendimiento y recuperación.',
        },
        {
          lead: 'Quieren prevenir las lesiones:',
          text: 'si su cuerpo funciona óptimamente, sus músculos trabajan mejor y por lo tanto se reduce de manera significativa la aparición de las lesiones.',
        },
        {
          lead: 'Quieren recuperarse de lesiones:',
          text: 'en general son deportistas que han sufrido una o varias lesiones y que se han recuperado parcialmente.',
        },
        {
          lead: 'Recuperación post-entrenamiento:',
          text: 'a través de la quiropráctica se mejora el sistema nervioso, lo que ayuda a tener una mejor recuperación después del entrenamiento.',
        },
      ],
      symptoms: [
        { label: 'Hernia discal', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Bajo rendimiento', image: '/assets/images/symptom-low-performance.avif' },
      ],
    },
    en: {
      title: 'Athletes',
      intro: [
        "When we talk about athletes, it's common to think about possible injuries or activity-related symptoms, but we rarely consider how chiropractic care can influence athletic performance. Even so, this discipline has been adopted by many professional athletes and is recognized as a complementary form of care in the world of sports.",
        'In countries where chiropractic is more established, it is common for elite athletes to receive frequent chiropractic adjustments. In the US, for example, American football is one of the sports where chiropractic has the strongest presence, helping players compete without pain or discomfort.',
        'Sports chiropractic care helps the body recover from injuries faster, prevents new injuries, and optimizes the body\'s various physiological functions. That\'s why more and more professional athletes across every sport turn to chiropractic care to stay in peak physical condition and perform at the highest level.',
        'At our clinic, athletes use our service for four reasons:',
      ],
      list: [
        {
          lead: 'They want to improve their performance:',
          text: 'chiropractic adjustments optimize how the spine functions, leading to better performance and recovery.',
        },
        {
          lead: 'They want to prevent injuries:',
          text: 'when the body functions optimally, muscles work better, significantly reducing the likelihood of injury.',
        },
        {
          lead: 'They want to recover from injuries:',
          text: 'generally athletes who have suffered one or more injuries and have only partially recovered.',
        },
        {
          lead: 'Post-training recovery:',
          text: 'chiropractic care improves nervous system function, helping the body recover better after training.',
        },
      ],
      symptoms: [
        { label: 'Herniated disc', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Low performance', image: '/assets/images/symptom-low-performance.avif' },
      ],
    },
  },
  {
    slugEs: 'personas-mayores',
    slugEn: 'elder-people',
    heroImage: '/assets/images/category-tercera-edad.webp',
    es: {
      title: 'Personas mayores',
      intro: [
        'En nuestra sociedad, aunque es común, no es normal que la tercera edad se asocie con debilidad, lentitud, enfermedad y dependencia. Es importante tener en cuenta que con el envejecimiento, nuestro cuerpo experimenta cambios, como la pérdida de calidad en huesos, colágeno y fibras musculares, lo que puede afectar nuestra calidad de vida.',
        'Sin embargo, esta etapa es tan importante como cualquier otra, y es esencial cuidar nuestro cuerpo para disfrutar al máximo de la vida. Las enfermedades osteoarticulares son la causa más común de discapacidad en personas de edad avanzada, lo que compromete seriamente la calidad de vida. La aparición de trastornos musculoesqueléticos aumenta significativamente con la edad y, si no se tratan, pueden reducir considerablemente el bienestar y la salud.',
        'En ColumnaQuiro, mediante la <a href="/blog/cuanto-cuesta-un-quiropractico" class="font-semibold text-gold-dark underline">quiropráctica</a> ayudamos a mejorar la movilidad, el equilibrio y el estilo de vida de manera holística en la tercera edad, fomentando un estilo de vida activo y saludable. Al restaurar la función adecuada de la columna vertebral, podemos abordar los problemas asociados con las personas mayores de 65 años.',
        'Muchos pacientes mayores nos informan de que experimentan menos síntomas de sus enfermedades crónicas después de recibir ajustes quiroprácticos adaptados para su situación específica, lo que contribuye a mejorar su calidad de vida de manera significativa.',
      ],
      symptoms: [
        { label: 'Artrosis', image: '/assets/images/symptom-osteoarthritis.avif' },
        { label: 'Dolor de espalda', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Dolor de cuello', image: '/assets/images/symptom-neck-pain.avif' },
        { label: 'Hernia discal', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Escoliosis', image: '/assets/images/symptom-scoliosis.avif' },
      ],
    },
    en: {
      title: 'Elderly people',
      intro: [
        "In our society, while common, it isn't actually normal for old age to be linked to weakness, slowness, illness, and dependence. It's worth remembering that as we age, our bodies go through changes — like reduced quality in bone, collagen, and muscle fibers — that can affect our quality of life.",
        "Even so, this stage of life matters just as much as any other, and taking care of our bodies is essential to making the most of it. Osteoarticular conditions are the leading cause of disability in older adults, seriously compromising quality of life. Musculoskeletal disorders become significantly more common with age and, left untreated, can meaningfully reduce well-being and health.",
        'At ColumnaQuiro, chiropractic care helps holistically improve mobility, balance, and lifestyle in older adults, encouraging an active and healthy way of life. By restoring proper spinal function, we can address issues associated with people over 65.',
        'Many of our older patients tell us they experience fewer symptoms from their chronic conditions after receiving chiropractic adjustments tailored to their specific situation, meaningfully improving their quality of life.',
      ],
      symptoms: [
        { label: 'Osteoarthritis', image: '/assets/images/symptom-osteoarthritis.avif' },
        { label: 'Back pain', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Neck pain', image: '/assets/images/symptom-neck-pain.avif' },
        { label: 'Herniated disc', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Scoliosis', image: '/assets/images/symptom-scoliosis.avif' },
      ],
    },
  },
  {
    slugEs: 'discapacidades-motoras-intelectuales',
    slugEn: 'disabled-people',
    heroImage: '/assets/images/category-discapacidades.webp',
    es: {
      title: 'Discapacidades motoras o intelectuales',
      intro: [
        'Las personas con discapacidades motoras o intelectuales a menudo tienen acceso limitado a terapias. La <a href="/blog/cuanto-cuesta-un-quiropractico" class="font-semibold text-gold-dark underline">quiropráctica</a>, al trabajar de manera holística en el cuerpo entero, puede mejorar la sensación corporal, movilidad, funcionalidad, equilibrio y coordinación.',
        'Además, numerosos estudios sobre la quiropráctica y el cerebro han demostrado su potencial para producir cambios en la plasticidad cerebral. En particular, los ajustes quiroprácticos pueden equilibrar diferentes áreas del cerebro y mejorar el desarrollo en personas con trastornos neuroconductuales.',
      ],
      symptoms: [
        { label: 'Espectro autístico', image: '/assets/images/symptom-autism.avif' },
        { label: 'Dislexia', image: '/assets/images/symptom-dyslexia.avif' },
        { label: 'Retraso motor', image: '/assets/images/symptom-intellectual-disability.avif' },
        { label: 'Déficit de atención', image: '/assets/images/symptom-attention-deficit.avif' },
      ],
    },
    en: {
      title: 'Motor or intellectual disabilities',
      intro: [
        'People with motor or intellectual disabilities often have limited access to therapies. Because chiropractic care works holistically on the whole body, it can improve body awareness, mobility, functionality, balance, and coordination.',
        'In addition, numerous studies on chiropractic and the brain have shown its potential to produce changes in brain plasticity. In particular, chiropractic adjustments can help balance different areas of the brain and support development in people with neurobehavioral disorders.',
      ],
      symptoms: [
        { label: 'Autism spectrum', image: '/assets/images/symptom-autism.avif' },
        { label: 'Dyslexia', image: '/assets/images/symptom-dyslexia.avif' },
        { label: 'Motor delay', image: '/assets/images/symptom-intellectual-disability.avif' },
        { label: 'Attention deficit', image: '/assets/images/symptom-attention-deficit.avif' },
      ],
    },
  },
]

export function findCategoryPage(slug: string): CategoryPage | undefined {
  return categoryPages.find((page) => page.slugEs === slug || page.slugEn === slug)
}
