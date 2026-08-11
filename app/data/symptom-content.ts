export interface SymptomContent {
  title: string
  intro: string[]
  signs: string[]
  howChiropracticHelps: string[]
  note?: string
}

export const symptomContent: Record<string, { es: SymptomContent; en: SymptomContent }> = {
  artrosis: {
    es: {
      title: 'Artrosis',
      intro: [
        'La artrosis es una enfermedad degenerativa que provoca el desgaste progresivo del cartílago articular, especialmente en rodillas, caderas, manos y columna. Es más frecuente a partir de los 50 años, aunque puede aparecer antes por sobrecarga o lesiones previas.',
      ],
      signs: [
        'Dolor articular que aumenta con el movimiento y mejora con el reposo',
        'Rigidez, especialmente al levantarse por la mañana',
        'Crujidos o chasquidos articulares',
        'Reducción progresiva del rango de movimiento',
      ],
      howChiropracticHelps: [
        'Los ajustes quiroprácticos y el trabajo de movilidad articular pueden ayudar a aliviar la rigidez y mejorar la función de las articulaciones afectadas, complementando el tratamiento médico habitual.',
      ],
    },
    en: {
      title: 'Osteoarthritis',
      intro: [
        'Osteoarthritis is a degenerative condition that causes the gradual wearing down of joint cartilage, especially in the knees, hips, hands, and spine. It becomes more common after age 50, though it can appear earlier due to overuse or past injuries.',
      ],
      signs: [
        'Joint pain that increases with movement and eases with rest',
        'Stiffness, especially first thing in the morning',
        'Joint cracking or grinding sensations',
        'Gradually reduced range of motion',
      ],
      howChiropracticHelps: [
        'Chiropractic adjustments and joint mobility work can help ease stiffness and improve function in affected joints, complementing standard medical care.',
      ],
    },
  },
  'deficit-de-atencion': {
    es: {
      title: 'Déficit de atención',
      intro: [
        'El trastorno por déficit de atención (con o sin hiperactividad, TDAH) es una condición neurodesarrollo que afecta la capacidad de concentración, la impulsividad y, en algunos casos, la actividad motora. Su diagnóstico y tratamiento corresponden a profesionales especializados en salud infantil y neurodesarrollo.',
      ],
      signs: [
        'Dificultad para mantener la atención en tareas',
        'Impulsividad',
        'Hiperactividad (en algunos casos)',
        'Dificultades de organización',
      ],
      howChiropracticHelps: [
        'La quiropráctica no diagnostica ni trata el TDAH. Como parte de un enfoque integral de bienestar, algunos padres buscan cuidado quiropráctico para apoyar la salud general del sistema nervioso y la calidad del descanso de sus hijos, siempre como complemento y nunca como sustituto del seguimiento por parte de pediatría o profesionales especializados.',
      ],
      note: 'Si sospechas que tu hijo/a puede tener TDAH, consulta con su pediatra o un especialista en neurodesarrollo.',
    },
    en: {
      title: 'Attention Deficit',
      intro: [
        'Attention-deficit (hyperactivity) disorder, ADHD, is a neurodevelopmental condition that affects concentration, impulse control, and, in some cases, motor activity. Diagnosis and treatment belong to professionals specialized in child health and neurodevelopment.',
      ],
      signs: [
        'Difficulty sustaining attention on tasks',
        'Impulsivity',
        'Hyperactivity (in some cases)',
        'Difficulty with organization',
      ],
      howChiropracticHelps: [
        "Chiropractic care does not diagnose or treat ADHD. As part of a broader wellness approach, some parents seek chiropractic care to support their child's overall nervous system health and quality of rest, always as a complement to — never a substitute for — care from a pediatrician or neurodevelopmental specialist.",
      ],
      note: "If you suspect your child may have ADHD, please consult their pediatrician or a neurodevelopmental specialist.",
    },
  },
  'espectro-autistico': {
    es: {
      title: 'Espectro autista',
      intro: [
        'El trastorno del espectro autista (TEA) es una condición del neurodesarrollo que afecta la comunicación, la interacción social y, en muchos casos, el procesamiento sensorial. Cada persona dentro del espectro es distinta, y su diagnóstico y abordaje corresponden a un equipo multidisciplinar especializado.',
      ],
      signs: [
        'Diferencias en la comunicación social',
        'Intereses o comportamientos repetitivos',
        'Sensibilidad sensorial (a sonidos, texturas, luces)',
        'Preferencia por rutinas predecibles',
      ],
      howChiropracticHelps: [
        'La quiropráctica no diagnostica, trata ni cura el autismo. Algunas familias buscan cuidado quiropráctico como parte de un enfoque de bienestar general, centrado en la comodidad física y la salud del sistema nervioso, siempre en coordinación con el equipo médico y terapéutico que acompaña a cada niño o adulto.',
      ],
      note: 'El diagnóstico y el tratamiento del TEA deben ser guiados por profesionales especializados en neurodesarrollo.',
    },
    en: {
      title: 'Autism Spectrum',
      intro: [
        'Autism spectrum disorder (ASD) is a neurodevelopmental condition that affects communication, social interaction, and, in many cases, sensory processing. Every person on the spectrum is different, and diagnosis and care should come from a specialized multidisciplinary team.',
      ],
      signs: [
        'Differences in social communication',
        'Repetitive interests or behaviors',
        'Sensory sensitivity (to sounds, textures, light)',
        'A preference for predictable routines',
      ],
      howChiropracticHelps: [
        "Chiropractic care does not diagnose, treat, or cure autism. Some families seek chiropractic care as part of a broader wellness approach focused on physical comfort and nervous system health, always coordinated with the medical and therapeutic team supporting the child or adult.",
      ],
      note: 'ASD diagnosis and care should be guided by professionals specialized in neurodevelopment.',
    },
  },
  'dolor-de-espalda': {
    es: {
      title: 'Dolor de espalda',
      intro: [
        'El dolor de espalda es uno de los motivos de consulta más frecuentes y puede originarse en los músculos, las articulaciones, los discos intervertebrales o los nervios de la columna. Suele estar relacionado con malas posturas, sobrecarga física o sedentarismo.',
      ],
      signs: [
        'Dolor localizado o difuso en la espalda',
        'Rigidez al levantarse o tras estar sentado mucho tiempo',
        'Molestias que empeoran con ciertos movimientos',
        'Tensión muscular acompañante',
      ],
      howChiropracticHelps: [
        'Los ajustes quiroprácticos ayudan a mejorar la movilidad de la columna y reducir la tensión muscular asociada, abordando la causa mecánica del dolor de forma natural.',
      ],
    },
    en: {
      title: 'Back Pain',
      intro: [
        'Back pain is one of the most common reasons people seek care, and it can originate in the muscles, joints, spinal discs, or nerves of the spine. It is often linked to poor posture, physical overload, or a sedentary lifestyle.',
      ],
      signs: [
        'Localized or diffuse back pain',
        'Stiffness when getting up or after sitting for a long time',
        'Discomfort that worsens with certain movements',
        'Accompanying muscle tension',
      ],
      howChiropracticHelps: [
        'Chiropractic adjustments help improve spinal mobility and reduce the associated muscle tension, naturally addressing the mechanical cause of the pain.',
      ],
    },
  },
  'bajo-rendimiento': {
    es: {
      title: 'Bajo rendimiento',
      intro: [
        'El bajo rendimiento físico o deportivo puede tener múltiples causas: fatiga acumulada, desequilibrios musculares, restricciones de movilidad o un sistema nervioso sobrecargado por el estrés.',
      ],
      signs: [
        'Fatiga persistente durante el entrenamiento',
        'Dificultad para recuperar entre sesiones',
        'Lesiones recurrentes',
        'Sensación de rigidez o falta de fluidez en el movimiento',
      ],
      howChiropracticHelps: [
        'Al mejorar la movilidad articular y optimizar la función del sistema nervioso, los ajustes quiroprácticos pueden ayudar a mejorar la fuerza, el equilibrio y los tiempos de recuperación.',
      ],
    },
    en: {
      title: 'Low Performance',
      intro: [
        'Low physical or athletic performance can have several causes: accumulated fatigue, muscle imbalances, mobility restrictions, or a nervous system overloaded by stress.',
      ],
      signs: [
        'Persistent fatigue during training',
        'Difficulty recovering between sessions',
        'Recurring injuries',
        'A feeling of stiffness or lack of fluidity in movement',
      ],
      howChiropracticHelps: [
        'By improving joint mobility and optimizing nervous system function, chiropractic adjustments can help improve strength, balance, and recovery times.',
      ],
    },
  },
  braquicefalia: {
    es: {
      title: 'Braquicefalia',
      intro: [
        'La braquicefalia es un aplanamiento de la parte posterior de la cabeza del bebé, habitual durante los primeros meses de vida debido a la presión mantenida al dormir boca arriba. En la mayoría de los casos se corrige de forma natural con cambios posturales.',
      ],
      signs: [
        'Zona posterior de la cabeza aplanada',
        'Cabeza que parece más ancha de lo habitual',
        'Preferencia por girar la cabeza hacia un lado',
      ],
      howChiropracticHelps: [
        'Un abordaje quiropráctico suave, junto con pautas de cambios posturales y tiempo boca abajo supervisado, puede ayudar a favorecer una forma craneal más equilibrada durante los primeros meses.',
      ],
      note: 'Consulta con el pediatra para valorar la evolución y descartar otras causas.',
    },
    en: {
      title: 'Brachycephaly',
      intro: [
        "Brachycephaly is a flattening of the back of a baby's head, common in the first months of life due to sustained pressure from lying on the back. In most cases it resolves naturally with positional changes.",
      ],
      signs: [
        'Flattened area at the back of the head',
        'Head appearing wider than usual',
        'A preference for turning the head to one side',
      ],
      howChiropracticHelps: [
        'A gentle chiropractic approach, alongside guidance on positional changes and supervised tummy time, can help support a more balanced head shape during the first months.',
      ],
      note: "Check in with your pediatrician to monitor progress and rule out other causes.",
    },
  },
  'sindrome-del-tunel-carpiano': {
    es: {
      title: 'Síndrome del túnel carpiano',
      intro: [
        'El síndrome del túnel carpiano se produce por la compresión del nervio mediano a su paso por la muñeca, generando dolor, hormigueo y adormecimiento en la mano.',
      ],
      signs: [
        'Hormigueo en pulgar, índice y corazón',
        'Adormecimiento nocturno de la mano',
        'Pérdida de fuerza al agarrar objetos',
      ],
      howChiropracticHelps: [
        'Los ajustes en muñeca, codo y columna cervical pueden mejorar la movilidad y reducir la presión sobre el nervio mediano, complementando otras medidas como férulas o pausas activas.',
      ],
    },
    en: {
      title: 'Carpal Tunnel Syndrome',
      intro: [
        'Carpal tunnel syndrome occurs when the median nerve is compressed as it passes through the wrist, causing pain, tingling, and numbness in the hand.',
      ],
      signs: [
        'Tingling in the thumb, index, and middle fingers',
        'Nighttime numbness in the hand',
        'Loss of grip strength',
      ],
      howChiropracticHelps: [
        'Adjustments to the wrist, elbow, and cervical spine can improve mobility and reduce pressure on the median nerve, complementing other measures like splints or active breaks.',
      ],
    },
  },
  ciatica: {
    es: {
      title: 'Ciática',
      intro: [
        'La ciática es el dolor que se produce por la irritación o compresión del nervio ciático, que recorre desde la zona lumbar hasta la pierna.',
      ],
      signs: [
        'Dolor que se irradia desde la zona lumbar hasta la pierna',
        'Hormigueo o adormecimiento en la pierna',
        'Molestias al estar sentado durante mucho tiempo',
      ],
      howChiropracticHelps: [
        'Los ajustes quiroprácticos pueden ayudar a reducir la presión sobre el nervio ciático y mejorar la movilidad de la columna lumbar, aliviando el dolor de forma natural.',
      ],
    },
    en: {
      title: 'Sciatica',
      intro: [
        'Sciatica is pain caused by irritation or compression of the sciatic nerve, which runs from the lower back down the leg.',
      ],
      signs: [
        'Pain radiating from the lower back down the leg',
        'Tingling or numbness in the leg',
        'Discomfort from sitting for long periods',
      ],
      howChiropracticHelps: [
        'Chiropractic adjustments can help reduce pressure on the sciatic nerve and improve lower-back mobility, naturally easing the pain.',
      ],
    },
  },
  colicos: {
    es: {
      title: 'Cólicos del bebé',
      intro: [
        'Los cólicos del lactante son episodios de llanto intenso y prolongado en bebés sanos, habitualmente durante los primeros meses de vida, sin una causa médica identificable en la mayoría de los casos.',
      ],
      signs: [
        'Llanto intenso, especialmente por la tarde/noche',
        'Piernas flexionadas hacia el abdomen',
        'Dificultad para calmarse',
      ],
      howChiropracticHelps: [
        'Un cuidado quiropráctico suave y adaptado a bebés puede ayudar a relajar la tensión del sistema nervioso y digestivo, siendo siempre un complemento a la valoración pediátrica.',
      ],
      note: 'Consulta siempre con el pediatra para descartar otras causas del llanto.',
    },
    en: {
      title: 'Infant Colic',
      intro: [
        'Infant colic refers to episodes of intense, prolonged crying in otherwise healthy babies, usually during the first months of life, with no identifiable medical cause in most cases.',
      ],
      signs: [
        'Intense crying, especially in the evening/night',
        'Legs drawn up toward the abdomen',
        'Difficulty settling down',
      ],
      howChiropracticHelps: [
        "Gentle, infant-adapted chiropractic care can help ease tension in the nervous and digestive systems, always as a complement to your pediatrician's assessment.",
      ],
      note: "Always check with your pediatrician to rule out other causes of the crying.",
    },
  },
  estrenimiento: {
    es: {
      title: 'Estreñimiento',
      intro: [
        'El estreñimiento puede estar relacionado con la alimentación, la hidratación, el sedentarismo o, en algunos casos, con una alteración en la función nerviosa que regula el tránsito intestinal.',
      ],
      signs: [
        'Deposiciones poco frecuentes',
        'Dificultad o esfuerzo al defecar',
        'Sensación de evacuación incompleta',
      ],
      howChiropracticHelps: [
        'Al mejorar la función del sistema nervioso que regula los órganos digestivos, los ajustes quiroprácticos pueden contribuir, junto con hábitos de alimentación e hidratación adecuados, a un tránsito intestinal más regular.',
      ],
    },
    en: {
      title: 'Constipation',
      intro: [
        'Constipation can be related to diet, hydration, a sedentary lifestyle, or, in some cases, disruption in the nervous system function that regulates bowel movement.',
      ],
      signs: [
        'Infrequent bowel movements',
        'Difficulty or straining during bowel movements',
        'A feeling of incomplete evacuation',
      ],
      howChiropracticHelps: [
        'By improving the function of the nervous system that regulates the digestive organs, chiropractic adjustments — along with proper diet and hydration habits — can contribute to more regular bowel function.',
      ],
    },
  },
  dislexia: {
    es: {
      title: 'Dislexia',
      intro: [
        'La dislexia es una dificultad específica del aprendizaje que afecta a la lectura y la escritura, con origen neurológico. No está relacionada con el nivel de inteligencia y su abordaje corresponde a profesionales de la educación y la psicopedagogía.',
      ],
      signs: [
        'Dificultad para relacionar letras con sonidos',
        'Lectura lenta o con errores frecuentes',
        'Dificultad para escribir correctamente',
      ],
      howChiropracticHelps: [
        'La quiropráctica no diagnostica ni trata la dislexia. Como parte de un enfoque de bienestar general, puede ayudar a mejorar la comodidad física y reducir el estrés, siempre en coordinación con el apoyo psicopedagógico especializado.',
      ],
      note: 'El abordaje de la dislexia debe ser guiado por profesionales especializados en educación y neurodesarrollo.',
    },
    en: {
      title: 'Dyslexia',
      intro: [
        'Dyslexia is a specific learning difficulty affecting reading and writing, with a neurological basis. It is unrelated to intelligence level, and support should come from education and learning-support professionals.',
      ],
      signs: [
        'Difficulty connecting letters with sounds',
        'Slow reading or frequent reading errors',
        'Difficulty writing correctly',
      ],
      howChiropracticHelps: [
        'Chiropractic care does not diagnose or treat dyslexia. As part of a broader wellness approach, it may help with physical comfort and stress reduction, always alongside specialized learning support.',
      ],
      note: 'Support for dyslexia should be guided by professionals specialized in education and neurodevelopment.',
    },
  },
  'dolor-de-cervicales-y-cabeza': {
    es: {
      title: 'Dolor de cervicales y cabeza',
      intro: [
        'Muchos dolores de cabeza tienen su origen en tensiones o disfunciones de la columna cervical, un tipo conocido como cefalea cervicogénica.',
      ],
      signs: [
        'Dolor de cabeza que empieza en la nuca',
        'Tensión en cuello y hombros',
        'Empeoramiento con posturas mantenidas frente a pantallas',
      ],
      howChiropracticHelps: [
        'Los ajustes cervicales y el trabajo de movilidad pueden reducir la frecuencia e intensidad de este tipo de dolor de cabeza, abordando su origen mecánico.',
      ],
    },
    en: {
      title: 'Neck and Head Pain',
      intro: [
        'Many headaches originate from tension or dysfunction in the cervical spine — a type known as cervicogenic headache.',
      ],
      signs: [
        'Headache that starts at the base of the skull',
        'Neck and shoulder tension',
        'Worsens with sustained screen-facing postures',
      ],
      howChiropracticHelps: [
        'Cervical adjustments and mobility work can reduce the frequency and intensity of this type of headache by addressing its mechanical origin.',
      ],
    },
  },
  'dolor-de-cuello': {
    es: {
      title: 'Dolor de cuello',
      intro: [
        'El dolor de cuello suele estar relacionado con malas posturas mantenidas, estrés o el uso prolongado de dispositivos móviles y ordenadores.',
      ],
      signs: [
        'Rigidez al girar la cabeza',
        'Tensión muscular en cuello y hombros',
        'Dolor que empeora al final del día',
      ],
      howChiropracticHelps: [
        'Los ajustes cervicales ayudan a restaurar la movilidad y reducir la tensión muscular, aliviando el dolor de forma natural.',
      ],
    },
    en: {
      title: 'Neck Pain',
      intro: [
        'Neck pain is often related to sustained poor posture, stress, or prolonged use of mobile devices and computers.',
      ],
      signs: [
        'Stiffness when turning the head',
        'Muscle tension in the neck and shoulders',
        'Pain that worsens by the end of the day',
      ],
      howChiropracticHelps: [
        'Cervical adjustments help restore mobility and reduce muscle tension, naturally easing the pain.',
      ],
    },
  },
  escoliosis: {
    es: {
      title: 'Escoliosis',
      intro: [
        'La escoliosis es una curvatura lateral anormal de la columna vertebral. Puede aparecer en la infancia, la adolescencia o la edad adulta, y su seguimiento debe ser realizado por un especialista.',
      ],
      signs: [
        'Hombros u omóplatos a distinta altura',
        'Asimetría en la cintura',
        'Molestias de espalda al mantener una postura',
      ],
      howChiropracticHelps: [
        'El cuidado quiropráctico puede ayudar a mejorar la movilidad, reducir las molestias asociadas y apoyar una mejor postura, siempre como complemento al seguimiento médico especializado en los casos de curvas moderadas o severas.',
      ],
      note: 'Las curvas moderadas o severas requieren seguimiento por un especialista en columna.',
    },
    en: {
      title: 'Scoliosis',
      intro: [
        'Scoliosis is an abnormal sideways curvature of the spine. It can appear in childhood, adolescence, or adulthood, and should be monitored by a specialist.',
      ],
      signs: [
        'Shoulders or shoulder blades at uneven heights',
        'Waist asymmetry',
        'Back discomfort from sustained postures',
      ],
      howChiropracticHelps: [
        'Chiropractic care can help improve mobility, reduce associated discomfort, and support better posture, always as a complement to specialized medical monitoring for moderate or severe curves.',
      ],
      note: 'Moderate or severe curves require monitoring by a spine specialist.',
    },
  },
  'estres-y-depresion': {
    es: {
      title: 'Estrés y depresión',
      intro: [
        'El estrés crónico y los estados de ánimo bajo tienen un componente físico real: pueden generar tensión muscular, alterar el sueño y afectar al sistema nervioso. La depresión es una condición de salud mental que requiere atención profesional especializada.',
      ],
      signs: [
        'Tensión muscular persistente (cuello, hombros, mandíbula)',
        'Alteraciones del sueño',
        'Fatiga generalizada',
      ],
      howChiropracticHelps: [
        'El cuidado quiropráctico puede ayudar a reducir la tensión física asociada al estrés y mejorar la calidad del sueño, como parte de un enfoque de bienestar más amplio. No sustituye la atención psicológica o psiquiátrica cuando esta es necesaria.',
      ],
      note: 'Si experimentas síntomas de depresión, consulta con un profesional de la salud mental.',
    },
    en: {
      title: 'Stress and Depression',
      intro: [
        'Chronic stress and low mood have a real physical component — they can create muscle tension, disrupt sleep, and affect the nervous system. Depression is a mental health condition that requires specialized professional care.',
      ],
      signs: [
        'Persistent muscle tension (neck, shoulders, jaw)',
        'Sleep disturbances',
        'General fatigue',
      ],
      howChiropracticHelps: [
        'Chiropractic care can help reduce the physical tension associated with stress and improve sleep quality, as part of a broader wellness approach. It does not replace psychological or psychiatric care when that is needed.',
      ],
      note: 'If you are experiencing symptoms of depression, please consult a mental health professional.',
    },
  },
  fibromialgia: {
    es: {
      title: 'Fibromialgia',
      intro: [
        'La fibromialgia es una condición crónica caracterizada por dolor musculoesquelético generalizado, fatiga y sensibilidad en puntos específicos del cuerpo.',
      ],
      signs: [
        'Dolor generalizado y persistente',
        'Fatiga crónica',
        'Alteraciones del sueño',
        'Sensibilidad al tacto en zonas concretas',
      ],
      howChiropracticHelps: [
        'Los ajustes suaves y el trabajo de tejido blando pueden ayudar a aliviar la tensión muscular y mejorar la calidad de vida, siempre como parte de un abordaje multidisciplinar junto con el equipo médico.',
      ],
    },
    en: {
      title: 'Fibromyalgia',
      intro: [
        'Fibromyalgia is a chronic condition characterized by widespread musculoskeletal pain, fatigue, and tenderness at specific points on the body.',
      ],
      signs: [
        'Widespread, persistent pain',
        'Chronic fatigue',
        'Sleep disturbances',
        'Tenderness to touch in specific areas',
      ],
      howChiropracticHelps: [
        'Gentle adjustments and soft-tissue work can help ease muscle tension and improve quality of life, always as part of a multidisciplinary approach alongside the medical team.',
      ],
    },
  },
  'hernia-discal': {
    es: {
      title: 'Hernia discal',
      intro: [
        'Una hernia discal ocurre cuando el material interno de un disco intervertebral se desplaza, pudiendo comprimir estructuras nerviosas cercanas.',
      ],
      signs: [
        'Dolor localizado que puede irradiarse a brazo o pierna',
        'Hormigueo o adormecimiento',
        'Debilidad muscular en casos más avanzados',
      ],
      howChiropracticHelps: [
        'Los ajustes quiroprácticos y las técnicas de descompresión pueden ayudar a reducir la presión sobre el disco y aliviar los síntomas asociados, en casos leves o moderados.',
      ],
    },
    en: {
      title: 'Herniated Disc',
      intro: [
        'A herniated disc occurs when the inner material of a spinal disc shifts out of place, potentially compressing nearby nerve structures.',
      ],
      signs: [
        'Localized pain that may radiate to the arm or leg',
        'Tingling or numbness',
        'Muscle weakness in more advanced cases',
      ],
      howChiropracticHelps: [
        'Chiropractic adjustments and decompression techniques can help reduce pressure on the disc and ease associated symptoms in mild to moderate cases.',
      ],
    },
  },
  lumbalgia: {
    es: {
      title: 'Lumbalgia',
      intro: [
        'La lumbalgia es el dolor localizado en la parte baja de la espalda, una de las dolencias más comunes relacionadas con la postura y la sobrecarga mecánica.',
      ],
      signs: [
        'Dolor en la zona lumbar',
        'Rigidez al agacharse o incorporarse',
        'Tensión muscular en la zona baja de la espalda',
      ],
      howChiropracticHelps: [
        'Los ajustes lumbares mejoran la movilidad de la columna y reducen la tensión muscular, aliviando el dolor de forma natural.',
      ],
    },
    en: {
      title: 'Low Back Pain',
      intro: [
        'Low back pain is discomfort located in the lower back, one of the most common ailments related to posture and mechanical overload.',
      ],
      signs: [
        'Pain in the lower back area',
        'Stiffness when bending or standing up',
        'Muscle tension in the lower back',
      ],
      howChiropracticHelps: [
        'Lumbar adjustments improve spinal mobility and reduce muscle tension, naturally easing the pain.',
      ],
    },
  },
  'retraso-motor': {
    es: {
      title: 'Retraso motor',
      intro: [
        'El retraso motor se refiere a que un niño no alcanza los hitos de desarrollo motor (como girarse, sentarse, gatear o caminar) en los tiempos esperados. Su valoración corresponde al pediatra y, si es necesario, a especialistas en desarrollo infantil.',
      ],
      signs: [
        'Retraso en alcanzar hitos motores habituales',
        'Tono muscular alterado (más flojo o más rígido de lo esperado)',
        'Dificultad para coordinar movimientos',
      ],
      howChiropracticHelps: [
        'Un cuidado quiropráctico suave, adaptado a la edad del niño, puede formar parte de un enfoque de apoyo al desarrollo motor, siempre en coordinación con el pediatra y, si corresponde, con fisioterapia infantil.',
      ],
      note: 'Ante cualquier señal de retraso motor, consulta con el pediatra lo antes posible.',
    },
    en: {
      title: 'Motor Delay',
      intro: [
        "Motor delay refers to a child not reaching motor development milestones (like rolling over, sitting, crawling, or walking) within the expected timeframe. Assessment should come from the child's pediatrician and, if needed, child development specialists.",
      ],
      signs: [
        'Delay in reaching typical motor milestones',
        'Altered muscle tone (looser or stiffer than expected)',
        'Difficulty coordinating movements',
      ],
      howChiropracticHelps: [
        "Gentle, age-appropriate chiropractic care can be part of a supportive approach to motor development, always coordinated with the child's pediatrician and, where appropriate, pediatric physiotherapy.",
      ],
      note: 'If you notice any sign of motor delay, consult your pediatrician as soon as possible.',
    },
  },
  reflujo: {
    es: {
      title: 'Reflujo',
      intro: [
        'El reflujo en bebés ocurre cuando el contenido del estómago regresa hacia el esófago, algo habitual en los primeros meses de vida debido a la inmadurez del sistema digestivo.',
      ],
      signs: [
        'Regurgitaciones frecuentes tras las tomas',
        'Irritabilidad durante o después de comer',
        'Arqueo de espalda al alimentarse',
      ],
      howChiropracticHelps: [
        'Un cuidado quiropráctico suave puede ayudar a relajar la tensión en la zona del diafragma y el sistema nervioso, siendo siempre un complemento a la valoración y pautas del pediatra.',
      ],
      note: 'Consulta con el pediatra si el reflujo afecta al aumento de peso o al bienestar del bebé.',
    },
    en: {
      title: 'Reflux',
      intro: [
        "Reflux in babies happens when stomach contents move back up into the esophagus, which is common in the first months of life due to the digestive system's immaturity.",
      ],
      signs: [
        'Frequent spit-up after feeds',
        'Irritability during or after feeding',
        'Arching the back while feeding',
      ],
      howChiropracticHelps: [
        "Gentle chiropractic care can help ease tension around the diaphragm and nervous system, always as a complement to your pediatrician's assessment and guidance.",
      ],
      note: "Check with your pediatrician if reflux is affecting weight gain or your baby's overall wellbeing.",
    },
  },
}
