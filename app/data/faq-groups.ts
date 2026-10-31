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
          a: 'Nuestro cuerpo constantemente se enfrenta a tres tipos principales de estrés: físico (accidentes, golpes, caídas, malas posturas, parto, deporte de élite), de hábitos (sedentarismo, dormir poco o mal, falta de fuerza muscular) y emocional (relaciones humanas, preocupaciones económicas, trabajo, familia). Todos ellos pueden aumentar la tensión muscular y el dolor. En consulta revisamos contigo cuáles pesan más en tu caso: la quiropráctica ayuda con el dolor de espalda y cuello, y el resto lo trabajamos con pautas de movimiento, descanso y hábitos.',
        },
        {
          q: '¿Qué reconocimiento tiene la quiropráctica y su desarrollo en España?',
          a: 'La Organización Mundial de la Salud publicó en 2005 unas pautas sobre la formación y la seguridad en quiropráctica, y en muchos países es una profesión sanitaria regulada. En España no lo es todavía. La Asociación Española de Quiropráctica (AEQ) agrupa a los quiroprácticos con una formación universitaria completa y solo admite a quienes la tienen, por eso conviene comprobar que tu quiropráctico es miembro.',
        },
        {
          q: '¿Qué es el mantenimiento quiropráctico y lo necesito?',
          a: 'Son revisiones espaciadas, cada pocas semanas, una vez que el dolor ha mejorado. Son opcionales. En personas con dolor lumbar recurrente, un ensayo clínico encontró menos días con dolor con revisiones periódicas que acudiendo solo cuando dolía (Eklund y cols., PLoS ONE 2018). Si tu dolor no suele volver, no hace falta.',
        },
        {
          q: '¿Tiene sentido ir al quiropráctico sin dolor?',
          a: 'Si nunca has tenido dolor de espalda o de cuello, no hace falta. Si tu dolor vuelve una y otra vez, las revisiones espaciadas y el ejercicio pueden ayudar a que aparezca menos. Lo que no hacemos es prometer que la quiropráctica prevenga enfermedades.',
        },
        {
          q: 'Requisitos y proceso de formación para convertirse en quiropráctico',
          a: 'Hace falta una formación universitaria de cinco o seis años en quiropráctica, acreditada por el Consejo Europeo de Educación Quiropráctica (ECCE). Los últimos años se dedican a la práctica clínica supervisada con pacientes de todas las edades. El nombre del título cambia según el país (máster o grado en Europa, «Doctor of Chiropractic» en Estados Unidos) y no equivale a un doctorado universitario.',
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
          a: 'No. La mayoría de las personas experimentan relajación y reducción de la tensión después de los ajustes. Se realizan mediante impulsos de alta velocidad y baja amplitud que devuelven el movimiento a la articulación. Puedes notar presión, pero no deberían doler; si algo te molesta, adaptamos la técnica.',
        },
        {
          q: '¿Qué reacciones puedo experimentar después de recibir un ajuste quiropráctico?',
          a: 'Es posible sentir alivio inmediato en las tensiones del cuerpo, no notar cambios inmediatos (algo normal, ya que el proceso puede tardar en manifestarse), o notar cansancio o una molestia leve, como agujetas, durante las primeras 24 a 48 horas. Es frecuente y pasa sola. Si el dolor empeora o aparece algo nuevo, llámanos.',
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
          a: 'Our bodies constantly face three main types of stress: physical (accidents, blows, falls, poor posture, childbirth, elite sports), habits (a sedentary routine, poor sleep, low muscle strength), and emotional (relationships, financial worries, work, family). All of them can raise muscle tension and pain. In the clinic we work out with you which ones matter most in your case: chiropractic helps with back and neck pain, and we handle the rest with advice on movement, rest and habits.',
        },
        {
          q: 'What recognition does chiropractic have and how is it developing in Spain?',
          a: 'The World Health Organization published guidelines on chiropractic training and safety in 2005, and in many countries it is a regulated health profession. In Spain it is not yet. The Spanish Chiropractic Association (AEQ) brings together chiropractors with full university-level training and only admits those who have it, so it is worth checking that your chiropractor is a member.',
        },
        {
          q: 'What is chiropractic maintenance care, and do I need it?',
          a: 'It means spaced-out check-ups, every few weeks, once your pain has improved. It is optional. In people with recurrent lower back pain, a clinical trial found fewer days with pain with regular check-ups than with treatment only when it hurt (Eklund et al., PLoS ONE 2018). If your pain does not tend to come back, you do not need it.',
        },
        {
          q: 'Is there any point seeing a chiropractor without pain?',
          a: 'If you have never had back or neck pain, there is no need. If your pain keeps coming back, spaced-out check-ups and exercise can help it come back less often. What we do not do is promise that chiropractic prevents disease.',
        },
        {
          q: 'Requirements and training process to become a chiropractor',
          a: 'It takes five or six years of university-level chiropractic training accredited by the European Council on Chiropractic Education (ECCE). The final years are spent in supervised clinical practice with patients of all ages. The name of the degree varies by country (a master\'s or bachelor\'s in Europe, "Doctor of Chiropractic" in the US) and is not a PhD.',
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
          a: 'No. Most people experience relaxation and reduced tension after adjustments. They use high-velocity, low-amplitude impulses that restore movement to the joint. You may feel pressure, but it should not hurt; if anything is uncomfortable, we adapt the technique.',
        },
        {
          q: 'What reactions might I experience after a chiropractic adjustment?',
          a: "You might feel immediate relief from body tension, notice no immediate change (which is normal, since results can take time to show), or feel tired or mildly sore, like after exercise, for the first 24 to 48 hours. That is common and passes on its own. If the pain gets worse or something new appears, call us.",
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
