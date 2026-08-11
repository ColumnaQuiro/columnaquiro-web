export interface FaqItem {
  q: string
  a: string
}

export interface FaqGroup {
  title: string
  subtitle: string
  items: FaqItem[]
}

export const faqGroups: Record<'es' | 'en', FaqGroup[]> = {
  es: [
    {
      title: 'La Quiropráctica',
      subtitle: 'Las dudas más frecuentes sobre la quiropráctica y su práctica',
      items: [
        {
          q: '¿Cuál es tu formación y experiencia como quiropráctico/a?',
          a: 'Soy diplomada del Barcelona College of Chiropractic en 2021 después de completar una carrera de 6 años. Inicié mis dos primeros años de estudio en IFEC en Francia y luego decidí trasladarme a España. Durante mi formación, también tuve la oportunidad de trabajar como profesora de técnicas y supervisora de clínica en el Barcelona College of Chiropractic. Después de obtener mi diploma, trabajé en una consulta quiropráctica en Barcelona, donde pude aplicar mis conocimientos y habilidades en el cuidado quiropráctico. Además, he asistido a numerosos seminarios y cursos de quiroprácticos tanto durante mis estudios como después de graduarme, combinando técnicas como SOT (Sacro Occipital Technique), Kinesiología Aplicada, Gonstead, TBM (Total Body Modification), Técnica Toggle Recoil-Hole in One y Técnica Webster, adaptándolas según las necesidades individuales de cada paciente.',
        },
        {
          q: '¿Qué tipos de estrés afectan a nuestro cuerpo y cómo nos adaptamos a ellos?',
          a: 'Nuestro cuerpo constantemente se enfrenta a tres tipos principales de estrés: físico (accidentes, golpes, caídas, malas posturas, parto, deporte de élite), químico (alimentos procesados, contaminación ambiental, productos de belleza y limpieza) y emocional (relaciones humanas, preocupaciones económicas, trabajo, familia). La quiropráctica puede ayudar al cuerpo a adaptarse y recuperarse de estos tipos de estrés al mejorar la función del sistema nervioso y promover el equilibrio y la salud en general.',
        },
        {
          q: '¿Qué reconocimiento tiene la quiropráctica y su desarrollo en España?',
          a: 'La quiropráctica es reconocida por la Organización Mundial de la Salud (OMS) como una profesión de la salud a nivel mundial. En España, la quiropráctica está experimentando un crecimiento gradual con el apoyo de la Asociación Española de Quiropráctica (AEQ), la única entidad que garantiza los diplomas de quiroprácticos y regula la profesión en el país.',
        },
        {
          q: '¿Qué es la quiropráctica y por qué debería considerar el mantenimiento quiropráctico?',
          a: 'La quiropráctica es una profesión de la salud que se enfoca en promover el buen funcionamiento del sistema nervioso y del cuerpo en su totalidad. Se recomienda seguir el mantenimiento quiropráctico para mantener y mejorar la salud actual, así como prevenir recaídas y factores estresantes que puedan afectar el sistema nervioso.',
        },
        {
          q: 'Importancia de la atención quiropráctica preventiva para mantener la salud',
          a: 'El dolor es una señal de alarma que el cuerpo emite cuando algo no funciona correctamente, pero nuestro cuerpo puede experimentar disfunciones durante años sin que nos demos cuenta. La atención quiropráctica preventiva permite abordar los desequilibrios del cuerpo antes de que se manifiesten como dolor o síntomas evidentes, promoviendo la función óptima del cuerpo y mejorando la calidad de vida en general.',
        },
        {
          q: 'Requisitos y proceso de formación para convertirse en quiropráctico',
          a: 'Para convertirse en quiropráctico se requiere un título universitario en Quiropráctica y un Doctorado en Quiropráctica, tras un programa de entre 5 y 7 años reconocido por el Consejo Europeo de Educación Quiropráctica (ECCE). Los dos últimos años están dedicados a la práctica clínica supervisada, atendiendo a pacientes de diversas edades y perfiles.',
        },
      ],
    },
    {
      title: 'Los ajustes quiroprácticos',
      subtitle: 'Las dudas más frecuentes sobre los ajustes quiroprácticos',
      items: [
        {
          q: "¿Qué produce el sonido de 'crack' durante los ajustes quiroprácticos?",
          a: "El sonido de 'crack' no es el resultado de los huesos rompiéndose, sino del fenómeno de cavitación: el líquido sinovial de las articulaciones libera gases (nitrógeno, oxígeno y dióxido de carbono) al ser sometido a presión. Este sonido no indica necesariamente que el ajuste haya sido exitoso, es simplemente una consecuencia natural del proceso.",
        },
        {
          q: '¿Los ajustes quiroprácticos son dolorosos?',
          a: 'No. La mayoría de las personas experimentan relajación y reducción de la tensión después de los ajustes. Se realizan mediante impulsos de alta velocidad y baja amplitud que restauran el equilibrio de la columna sin causar dolor innecesario.',
        },
        {
          q: '¿Qué reacciones puedo experimentar después de recibir un ajuste quiropráctico?',
          a: 'Es posible sentir alivio inmediato en las tensiones del cuerpo, no notar cambios inmediatos (algo normal, ya que el proceso puede tardar en manifestarse), o experimentar fatiga y molestias temporales durante las primeras 24 horas, señal de que tu cuerpo se está ajustando.',
        },
        {
          q: '¿Es seguro acudir al quiropráctico durante el embarazo y para niños?',
          a: 'Sí. Contamos con formación especializada en pediatría y certificación en la técnica Webster para embarazadas. Cada técnica de ajuste es extremadamente suave y se adapta a la columna vertebral según la edad y las necesidades de cada paciente.',
        },
        {
          q: '¿Cuánto tiempo tomará ver resultados y mejoras en mi salud?',
          a: 'Depende de cada persona: algunos síntomas mejoran tras pocas sesiones, mientras que condiciones más crónicas requieren más tiempo. Realizamos revisiones regulares para monitorear tu progreso y ajustar el plan de cuidado según sea necesario.',
        },
      ],
    },
    {
      title: 'Nuestro servicio quiropráctico',
      subtitle:
        'Las dudas más frecuentes sobre los servicios que ofrecemos en nuestro centro Quiropráctico en Valencia',
      items: [
        {
          q: '¿Puedo llevar a mi hijo/a a la consulta quiropráctica?',
          a: '¡Absolutamente! Damos la bienvenida a toda la familia y hemos diseñado una sala de espera equipada con juegos para que los más pequeños se diviertan mientras esperan su turno.',
        },
        {
          q: '¿Cuánto tiempo durará mi primera visita y los ajustes regulares?',
          a: 'La primera visita dura aproximadamente 60 minutos, tiempo dedicado a recopilar tu historial y realizar las pruebas necesarias. Los ajustes regulares suelen durar entre 15 y 20 minutos, siempre en una sala cerrada dedicada solo a ti.',
        },
      ],
    },
  ],
  en: [
    {
      title: 'Chiropractic',
      subtitle: 'The most common questions about chiropractic and its practice',
      items: [
        {
          q: 'What is your background and experience as a chiropractor?',
          a: 'I am a graduate of the Barcelona College of Chiropractic in 2021 after completing a 6-year career. I started my first two years of studying at IFEC in France and then decided to move to Spain. During my training, I also had the opportunity to work as a technique teacher and clinical supervisor at the Barcelona College of Chiropractic. After obtaining my diploma, I worked in a chiropractic practice in Barcelona, where I was able to apply my knowledge and skills in chiropractic care. In addition, I have attended numerous chiropractic seminars and courses both during my studies and after graduating, combining techniques such as SOT (Sacro Occipital Technique), Applied Kinesiology, Gonstead, TBM (Total Body Modification), the Toggle Recoil-Hole in One technique, and the Webster technique, adapting them to each patient\'s individual needs.',
        },
        {
          q: 'What types of stress affect our bodies and how do we adapt to them?',
          a: 'Our bodies constantly face three main types of stress: physical (accidents, blows, falls, poor posture, childbirth, elite sports), chemical (processed foods, environmental pollution, beauty and cleaning products), and emotional (relationships, financial worries, work, family). Chiropractic care can help the body adapt to and recover from these types of stress by improving nervous system function and promoting overall balance and health.',
        },
        {
          q: 'What recognition does chiropractic have and how is it developing in Spain?',
          a: 'Chiropractic is recognized by the World Health Organization (WHO) as a health profession worldwide. In Spain, chiropractic is experiencing gradual growth with the support of the Spanish Chiropractic Association (AEQ), the only body that certifies chiropractic diplomas and regulates the profession in the country.',
        },
        {
          q: 'What is chiropractic and why should I consider chiropractic maintenance?',
          a: 'Chiropractic is a health profession focused on promoting the proper functioning of the nervous system and the body as a whole. Chiropractic maintenance is recommended to maintain and improve your current health, and to prevent relapses and stressors that could affect the nervous system.',
        },
        {
          q: 'The importance of preventive chiropractic care for maintaining health',
          a: 'Pain is an alarm signal the body sends when something isn\'t working properly, but our bodies can experience dysfunction for years without us noticing. Preventive chiropractic care lets us address imbalances in the body before they show up as pain or obvious symptoms, promoting optimal body function and improving overall quality of life.',
        },
        {
          q: 'Requirements and training process to become a chiropractor',
          a: 'Becoming a chiropractor requires a university degree in Chiropractic and a Doctorate in Chiropractic, following a program lasting between 5 and 7 years recognized by the European Council on Chiropractic Education (ECCE). The last two years are dedicated to supervised clinical practice, treating patients of various ages and profiles.',
        },
      ],
    },
    {
      title: 'Chiropractic adjustments',
      subtitle: 'The most common questions about chiropractic adjustments',
      items: [
        {
          q: "What causes the 'crack' sound during chiropractic adjustments?",
          a: "The 'crack' sound is not the result of bones breaking, but of cavitation: the synovial fluid in the joints releases gases (nitrogen, oxygen, and carbon dioxide) when put under pressure. This sound doesn't necessarily mean the adjustment was successful — it's simply a natural consequence of the process.",
        },
        {
          q: 'Are chiropractic adjustments painful?',
          a: 'No. Most people experience relaxation and reduced tension after adjustments. They use high-velocity, low-amplitude impulses that restore balance to the spine without causing unnecessary pain.',
        },
        {
          q: 'What reactions might I experience after a chiropractic adjustment?',
          a: "You might feel immediate relief from body tension, notice no immediate change (which is normal, since results can take time to show), or experience temporary fatigue and discomfort during the first 24 hours — a sign that your body is adjusting.",
        },
        {
          q: 'Is it safe to see a chiropractor during pregnancy and for children?',
          a: 'Yes. We have specialized training in pediatrics and certification in the Webster technique for pregnant patients. Every adjustment technique is extremely gentle and adapted to the spine based on each patient\'s age and needs.',
        },
        {
          q: 'How long will it take to see results and improvements in my health?',
          a: "It varies from person to person: some symptoms improve after just a few sessions, while more chronic conditions take longer. We run regular reviews to monitor your progress and adjust the care plan as needed.",
        },
      ],
    },
    {
      title: 'Our chiropractic service',
      subtitle:
        'The most common questions about the services we offer at our chiropractic center in Valencia',
      items: [
        {
          q: 'Can I bring my child to a chiropractic appointment?',
          a: 'Absolutely! We welcome the whole family, and we\'ve designed a waiting room with games so little ones can have fun while they wait their turn.',
        },
        {
          q: 'How long will my first visit and regular adjustments take?',
          a: 'The first visit takes about 60 minutes, spent gathering your history and running the necessary tests. Regular adjustments usually last 15 to 20 minutes, always in a private room dedicated just to you.',
        },
      ],
    },
  ],
}
