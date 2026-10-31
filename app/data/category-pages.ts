export interface SymptomCard {
  label: string
  image: string
}

export interface CategoryContent {
  title: string
  // intro[0] doubles as the page's meta description and hero text, so it is
  // kept to one sentence under ~155 characters.
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

// Rewritten in Oct 2026 to claim only what the evidence supports: help with
// musculoskeletal pain, with each group's limits stated plainly (no nervous
// system "working at 100%", no performance gains, no effect on neurodevelopmental
// conditions). The "associated symptoms" cards list only what we actually treat.
export const categoryPages: CategoryPage[] = [
  {
    slugEs: 'trabajadores',
    slugEn: 'workers',
    heroImage: '/assets/images/category-trabajadores.webp',
    es: {
      title: 'Trabajadores',
      intro: [
        'El dolor de espalda y de cuello es una de las causas más frecuentes de baja laboral. Te ayudamos a aliviarlo y a que no vuelva.',
        'Pasar muchas horas en la misma postura, levantar peso o el estrés del trabajo cargan la espalda, el cuello y los hombros. Cuanto antes se aborda el dolor, más fácil es que no se vuelva persistente.',
        'En ColumnaQuiro atendemos a muchas personas con dolor de espalda, cervicales y hombros por una mala postura, jornadas largas, estrés, pequeños accidentes o por levantar peso o maquinaria. Además del tratamiento, te damos pautas para tu puesto de trabajo y ejercicios cortos para hacer durante la jornada.',
      ],
      symptoms: [
        { label: 'Dolor de espalda', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Lumbalgia', image: '/assets/images/symptom-lower-back-pain.avif' },
        { label: 'Hernia discal', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Dolor de cabeza', image: '/assets/images/symptom-head-pain.avif' },
        { label: 'Túnel carpiano', image: '/assets/images/symptom-tunel-carpiano.avif' },
        { label: 'Dolor de cuello', image: '/assets/images/symptom-neck-pain.avif' },
      ],
    },
    en: {
      title: 'Workers',
      intro: [
        'Back and neck pain are among the most common reasons for sick leave. We help ease the pain and keep it from coming back.',
        'Long hours in the same position, lifting, and work stress all load your back, neck and shoulders. The sooner pain is dealt with, the less likely it is to become persistent.',
        'At ColumnaQuiro we see many people with back, neck and shoulder pain from poor posture, long hours, stress, minor accidents or heavy lifting. Alongside treatment, we give you advice for your workstation and short exercises to do during the day.',
      ],
      symptoms: [
        { label: 'Back pain', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Lower back pain', image: '/assets/images/symptom-lower-back-pain.avif' },
        { label: 'Herniated disc', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Headache', image: '/assets/images/symptom-head-pain.avif' },
        { label: 'Carpal tunnel', image: '/assets/images/symptom-tunel-carpiano.avif' },
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
        'Revisamos con técnicas muy suaves la postura y el movimiento de bebés y niños, siempre como complemento al seguimiento de su pediatra.',
        'En bebés nos consultan sobre todo por una preferencia marcada a girar la cabeza o a mamar de un lado, o por un aplanamiento de la cabeza. Revisamos con mucha suavidad la movilidad de su cuello y te damos pautas de posición y de tiempo boca abajo supervisado, que son la base del tratamiento.',
        'En niños y adolescentes vemos dolor de espalda, molestias por la mochila o el deporte y escoliosis, que vigilamos junto con su pediatra o traumatólogo.',
        'La quiropráctica no trata los cólicos, el reflujo ni el estreñimiento. Si tu bebé llora mucho, regurgita a menudo o no gana peso, la primera consulta es su pediatra.',
      ],
      symptoms: [
        { label: 'Braquicefalia', image: '/assets/images/symptom-brachycephaly.avif' },
        { label: 'Escoliosis', image: '/assets/images/symptom-scoliosis.avif' },
        { label: 'Dolor de espalda', image: '/assets/images/symptom-back-pain.avif' },
      ],
    },
    en: {
      title: 'Babies and children',
      intro: [
        'We gently check the posture and movement of babies and children, always as a complement to their paediatrician.',
        "Parents mostly bring babies who strongly prefer turning their head or feeding on one side, or who have a flattened head. We very gently check how their neck moves and give you advice on positioning and supervised tummy time, which are the core of treatment.",
        'In children and teenagers we see back pain, aches from school bags or sport, and scoliosis, which we monitor together with their paediatrician or orthopaedic specialist.',
        "Chiropractic does not treat colic, reflux or constipation. If your baby cries a lot, spits up often or isn't gaining weight, see their paediatrician first.",
      ],
      symptoms: [
        { label: 'Brachycephaly', image: '/assets/images/symptom-brachycephaly.avif' },
        { label: 'Scoliosis', image: '/assets/images/symptom-scoliosis.avif' },
        { label: 'Back pain', image: '/assets/images/symptom-back-pain.avif' },
      ],
    },
  },
  {
    slugEs: 'embarazadas',
    slugEn: 'pregnant-women',
    heroImage: '/assets/images/category-embarazadas.webp',
    es: {
      title: 'Embarazadas',
      intro: [
        'Dolor lumbar, pélvico o ciático durante el embarazo y el posparto, tratado con técnicas suaves y posiciones adaptadas a cada trimestre.',
        'Durante el embarazo el cuerpo cambia en poco tiempo:',
      ],
      list: [
        {
          lead: 'Cambios físicos:',
          text: 'el centro de gravedad se desplaza, lo que cambia la postura y aumenta la tensión muscular. Por eso el dolor de espalda y lumbar es tan frecuente.',
        },
        {
          lead: 'Cambios hormonales:',
          text: 'las hormonas del embarazo aumentan la laxitud de los ligamentos y las articulaciones, sobre todo en la pelvis.',
        },
        {
          lead: 'Cambios emocionales:',
          text: 'ser madre es un paso importante que puede traer estrés y muchas preguntas.',
        },
      ],
      extra: [
        'Por eso son tan habituales el dolor lumbar, el dolor en la articulación sacroilíaca o en el pubis y la <a href="/blog/ciatica-en-el-embarazo/" class="font-semibold text-gold-dark underline">ciática durante el embarazo</a>.',
        'En ColumnaQuiro trabajamos la movilidad de la pelvis y la columna con técnicas suaves para aliviar estas molestias y que vivas el embarazo con más comodidad.',
        'Estamos certificadas en la <a href="/blog/tecnica-webster-optimizando-la-alineacion-pelvica-durante-el-embarazo/" class="font-semibold text-gold-dark underline">técnica Webster</a>, que se centra en la pelvis y sus músculos y ligamentos. Tenemos un cojín especial para embarazadas para que puedas tumbarte boca abajo con comodidad durante todo el embarazo, adaptamos la técnica a cada trimestre y evitamos cualquier presión sobre el abdomen.',
        'Antes de empezar, cuéntanos cómo va tu seguimiento con la matrona o el ginecólogo. Si tienes sangrado, contracciones, dolor de cabeza intenso o hinchazón repentina, acude a urgencias o a tu matrona.',
        'Después del parto el cuerpo necesita tiempo para recuperarse, y es habitual el dolor de espalda y cuello por la lactancia, por cargar al bebé y por dormir poco. En el posparto te ayudamos con ese dolor y te damos pautas de postura para la lactancia y para cargar al bebé.',
      ],
      symptoms: [
        { label: 'Ciática', image: '/assets/images/symptom-sciatica.avif' },
        { label: 'Dolor de espalda', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Lumbalgia', image: '/assets/images/symptom-lower-back-pain.avif' },
      ],
    },
    en: {
      title: 'Pregnant women',
      intro: [
        'Lower back, pelvic or sciatic pain during pregnancy and after birth, treated with gentle techniques and positions adapted to each trimester.',
        'During pregnancy your body changes quickly:',
      ],
      list: [
        {
          lead: 'Physical changes:',
          text: 'your centre of gravity shifts, which changes your posture and increases muscle tension. That is why back and lower-back pain are so common.',
        },
        {
          lead: 'Hormonal changes:',
          text: 'pregnancy hormones make ligaments and joints looser, especially in the pelvis.',
        },
        {
          lead: 'Emotional changes:',
          text: 'becoming a mother is a big step that can bring stress and lots of questions.',
        },
      ],
      extra: [
        'That is why lower back pain, pain in the sacroiliac joint or pubic bone, and <a href="/en/blog/sciatica-in-pregnancy/" class="font-semibold text-gold-dark underline">sciatica in pregnancy</a> are so common.',
        'At ColumnaQuiro we work on the mobility of your pelvis and spine with gentle techniques to ease this pain and make your pregnancy more comfortable.',
        'We are certified in the <a href="/en/blog/webster-technique/" class="font-semibold text-gold-dark underline">Webster technique</a>, which focuses on the pelvis and its muscles and ligaments. We have a special pregnancy cushion so you can lie face down comfortably throughout your pregnancy, we adapt the technique to each trimester, and we never put pressure on your bump.',
        'Before we start, tell us how your check-ups with your midwife or obstetrician are going. If you have bleeding, contractions, a severe headache or sudden swelling, go to A&E or call your midwife.',
        'After birth your body needs time to recover, and back and neck pain from breastfeeding, carrying your baby and short sleep are common. After birth we help with that pain and give you posture tips for feeding and carrying your baby.',
      ],
      symptoms: [
        { label: 'Sciatica', image: '/assets/images/symptom-sciatica.avif' },
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
        'Molestias de espalda, cadera o cuello que te frenan al entrenar, y una vuelta progresiva al deporte después de una lesión.',
        'En países donde la quiropráctica está más asentada es habitual verla en clubes y equipos, como parte de un equipo de salud con fisioterapeutas y médicos del deporte.',
        'Donde tiene respaldo científico es en el dolor de espalda y cuello. No hay pruebas sólidas de que los ajustes aumenten la fuerza o el rendimiento, así que no te lo vamos a prometer.',
        'En nuestro centro los deportistas vienen por tres motivos:',
      ],
      list: [
        {
          lead: 'Dolor que limita el entrenamiento:',
          text: 'molestias de espalda, cadera o cuello que aparecen con la carga y no terminan de irse.',
        },
        {
          lead: 'Vuelta tras una lesión:',
          text: 'deportistas que se han recuperado solo en parte y quieren volver poco a poco, con ejercicios para casa.',
        },
        {
          lead: 'Preparar un objetivo:',
          text: 'revisar la movilidad y la carga antes de una carrera como el <a href="/blog/preparacion-quiropractica-para-la-maraton-de-valencia/" class="font-semibold text-gold-dark underline">Maratón de Valencia</a>.',
        },
      ],
      symptoms: [
        { label: 'Hernia discal', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Lesiones deportivas', image: '/assets/images/symptom-low-performance.avif' },
        { label: 'Lumbalgia', image: '/assets/images/symptom-lower-back-pain.avif' },
      ],
    },
    en: {
      title: 'Athletes',
      intro: [
        'Back, hip or neck pain that holds back your training, and a gradual return to sport after an injury.',
        'In countries where chiropractic is more established it is common in clubs and teams, as part of a health team with physiotherapists and sports doctors.',
        'Where it has scientific support is back and neck pain. There is no solid evidence that adjustments increase strength or performance, so we will not promise you that.',
        'Athletes come to us for three reasons:',
      ],
      list: [
        {
          lead: 'Pain that limits training:',
          text: 'back, hip or neck pain that shows up with load and never quite goes away.',
        },
        {
          lead: 'Returning after an injury:',
          text: 'athletes who have only partly recovered and want to build back up gradually, with exercises for home.',
        },
        {
          lead: 'Preparing for a goal:',
          text: 'checking mobility and load before a race such as the Valencia Marathon.',
        },
      ],
      symptoms: [
        { label: 'Herniated disc', image: '/assets/images/symptom-herniated-disc.avif' },
        { label: 'Sports injuries', image: '/assets/images/symptom-low-performance.avif' },
        { label: 'Lower back pain', image: '/assets/images/symptom-lower-back-pain.avif' },
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
        'Te ayudamos con la rigidez y el dolor articular que llegan con la edad, con técnicas suaves y en coordinación con tu médico.',
        'Con los años cambian los huesos, los cartílagos y los músculos, y es frecuente que aparezcan la artrosis y el dolor de espalda. No es algo que haya que aceptar sin más: mantenerse activo es una de las mejores formas de cuidarse.',
        'En ColumnaQuiro adaptamos la técnica a cada persona: movilizaciones suaves, ninguna maniobra de fuerza cuando hay osteoporosis, y ejercicios sencillos de movilidad y equilibrio para casa.',
        'Antes de empezar revisamos tu historial y tu medicación, y te derivamos a tu médico si algo lo requiere.',
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
        'We help with the joint stiffness and pain that come with age, using gentle techniques and working with your doctor.',
        "As we age our bones, cartilage and muscles change, and osteoarthritis and back pain become common. It isn't something you just have to accept: staying active is one of the best ways to look after yourself.",
        'At ColumnaQuiro we adapt the technique to each person: gentle mobilisation, no forceful techniques where there is osteoporosis, and simple mobility and balance exercises for home.',
        'Before we start we go through your medical history and medication, and refer you to your doctor if anything needs it.',
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
        'Atendemos el dolor y la rigidez de espalda o cuello en personas con discapacidad motora o intelectual, con un trato adaptado a cada persona.',
        'Las personas con discapacidad tienen a menudo más dolor musculoesquelético y menos acceso a terapias. Adaptamos el tiempo, la postura y la técnica a cada paciente, y contamos con la familia o los cuidadores.',
        'La quiropráctica no trata el autismo, el TDAH, la dislexia ni el retraso motor. Su diagnóstico y tratamiento corresponden al pediatra, al neurólogo y a los equipos de atención temprana, con los que nos coordinamos cuando hace falta.',
      ],
      symptoms: [
        { label: 'Dolor de espalda', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Dolor de cuello', image: '/assets/images/symptom-neck-pain.avif' },
        { label: 'Escoliosis', image: '/assets/images/symptom-scoliosis.avif' },
      ],
    },
    en: {
      title: 'Motor or intellectual disabilities',
      intro: [
        'We treat back and neck pain and stiffness in people with motor or intellectual disabilities, with care adapted to each person.',
        'People with disabilities often have more musculoskeletal pain and less access to therapy. We adapt the timing, position and technique to each patient, and involve family members or carers.',
        "Chiropractic does not treat autism, ADHD, dyslexia or motor delay. Their diagnosis and treatment belong to the paediatrician, neurologist and early-intervention teams, and we work with them when needed.",
      ],
      symptoms: [
        { label: 'Back pain', image: '/assets/images/symptom-back-pain.avif' },
        { label: 'Neck pain', image: '/assets/images/symptom-neck-pain.avif' },
        { label: 'Scoliosis', image: '/assets/images/symptom-scoliosis.avif' },
      ],
    },
  },
]

export function findCategoryPage(slug: string): CategoryPage | undefined {
  return categoryPages.find((page) => page.slugEs === slug || page.slugEn === slug)
}
