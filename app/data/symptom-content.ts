export interface SymptomContent {
  title: string
  /** Search title, when it should say more than the bare condition name. */
  seoTitle?: string
  /** Meta description; falls back to intro[0]. */
  description?: string
  intro: string[]
  signs: string[]
  howChiropracticHelps: string[]
  /** "See a doctor first" signs, shown as their own section. */
  redFlags?: string[]
  /** Blog posts that go deeper on the same condition. */
  related?: { label: string; href: string }[]
  note?: string
}

export const symptomContent: Record<string, { es: SymptomContent; en: SymptomContent }> = {
  artrosis: {
    es: {
      "title": "Artrosis",
      "seoTitle": "Artrosis: síntomas, ejercicio y tratamiento en Valencia",
      "description": "Qué es la artrosis, qué síntomas da, por qué el ejercicio es el primer tratamiento y cómo encaja la terapia manual. Y cuándo consultar al médico.",
      "intro": [
        "La artrosis es el desgaste progresivo del cartílago de las articulaciones, con cambios en el hueso y en los tejidos de alrededor. Afecta sobre todo a rodillas, caderas, manos y columna, y es más frecuente a partir de los 50 años, aunque puede aparecer antes tras lesiones o sobrecargas.",
        "Tener artrosis en una radiografía no significa necesariamente tener dolor: muchas personas con cambios importantes no tienen molestias. Lo que más influye en cómo te encuentras es la fuerza de los músculos que rodean la articulación, el peso y lo activa que sea tu vida."
      ],
      "signs": [
        "Dolor articular que aumenta con el uso y mejora con el reposo",
        "Rigidez por la mañana que dura menos de media hora",
        "Crujidos al mover la articulación",
        "Pérdida progresiva de movilidad"
      ],
      "howChiropracticHelps": [
        "El primer tratamiento de la artrosis es el ejercicio, junto con el control del peso, según las guías clínicas internacionales. La terapia manual se usa como complemento para aliviar la rigidez y facilitar ese ejercicio.",
        "En consulta movilizamos con suavidad las articulaciones afectadas y las de alrededor, trabajamos el tejido blando y te pautamos ejercicios de fuerza y movilidad adaptados a tu nivel. No usamos maniobras de fuerza en articulaciones muy degeneradas ni si hay osteoporosis."
      ],
      "redFlags": [
        "Articulación hinchada, caliente o enrojecida de repente",
        "Fiebre con dolor articular",
        "Dolor que no cede con el reposo y te despierta por la noche",
        "Deformidad o bloqueo repentino de la articulación"
      ],
      "related": [
        {
          "label": "Coxartrosis: artrosis de cadera",
          "href": "/blog/coxartrosis-sintomas-y-beneficios-de-la-quiropractica/"
        },
        {
          "label": "Diferencias entre artritis y artrosis",
          "href": "/blog/diferencias-entre-artritis-y-artrosis/"
        },
        {
          "label": "Gonalgia: dolor de rodilla",
          "href": "/blog/gonalgia/"
        }
      ]
    },
    en: {
      "title": "Osteoarthritis",
      "seoTitle": "Osteoarthritis: symptoms, exercise and treatment in Valencia",
      "description": "What osteoarthritis is, the symptoms it causes, why exercise is the first treatment and where manual therapy fits in. And when to see a doctor.",
      "intro": [
        "Osteoarthritis is the gradual wearing of joint cartilage, with changes in the bone and surrounding tissues. It mostly affects the knees, hips, hands and spine, and is more common from around 50, though it can appear earlier after injuries or overuse.",
        "Having osteoarthritis on an X-ray doesn't necessarily mean having pain: many people with marked changes have no symptoms. What affects how you feel most is the strength of the muscles around the joint, your weight and how active you are."
      ],
      "signs": [
        "Joint pain that increases with use and eases with rest",
        "Morning stiffness lasting less than half an hour",
        "Cracking or grinding when you move the joint",
        "Gradual loss of movement"
      ],
      "howChiropracticHelps": [
        "The first treatment for osteoarthritis is exercise, together with weight management, according to international clinical guidelines. Manual therapy is used as an add-on to ease stiffness and make that exercise easier.",
        "At the clinic we gently mobilise the affected joints and those around them, work on the soft tissues and set strength and mobility exercises suited to your level. We don't use forceful techniques on badly worn joints or where there is osteoporosis."
      ],
      "redFlags": [
        "A joint that suddenly becomes swollen, hot or red",
        "Fever with joint pain",
        "Pain that doesn't ease with rest and wakes you at night",
        "Sudden deformity or locking of the joint"
      ],
      "related": [
        {
          "label": "Coxarthrosis: hip osteoarthritis",
          "href": "/en/blog/coxarthrosis-symptoms-and-benefits-of-chiropractic/"
        },
        {
          "label": "Differences between arthritis and osteoarthritis",
          "href": "/en/blog/differences-between-arthritis-and-osteoarthritis/"
        },
        {
          "label": "Gonalgia: knee pain",
          "href": "/en/blog/gonalgia-understanding-knee-pain/"
        }
      ]
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
        'La quiropráctica no diagnostica ni trata el TDAH, y no hay evidencia de que mejore sus síntomas. Lo que sí podemos atender es el dolor de espalda o de cuello que tenga tu hijo o hija, como a cualquier otro niño, siempre sin sustituir el seguimiento de su pediatra o especialista.',
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
        "Chiropractic does not diagnose or treat ADHD, and there is no evidence that it improves its symptoms. What we can help with is any back or neck pain your child has, as with any other child, never in place of their paediatrician or specialist.",
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
        'La quiropráctica no diagnostica ni trata el autismo, y no hay evidencia de que cambie sus características. Lo que sí podemos atender es el dolor de espalda o de cuello, adaptando el tiempo, el contacto y el entorno de la consulta a la sensibilidad de cada persona, y en coordinación con su equipo médico y terapéutico.',
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
        "Chiropractic does not diagnose or treat autism, and there is no evidence that it changes its characteristics. What we can help with is back or neck pain, adapting the timing, touch and setting of the session to each person's sensory needs, and working with their medical and therapy team.",
      ],
      note: 'ASD diagnosis and care should be guided by professionals specialized in neurodevelopment.',
    },
  },
  'dolor-de-espalda': {
    es: {
      "title": "Dolor de espalda",
      "seoTitle": "Dolor de espalda: causas, alivio y cuándo ir al médico",
      "description": "Por qué duele la espalda, qué suele haber detrás, qué ayuda de verdad y qué tratamiento tiene respaldo. Y las señales para ir antes al médico.",
      "intro": [
        "El dolor de espalda es la causa más frecuente de baja laboral y una de las consultas más habituales. Puede afectar a la zona lumbar, a la parte media de la espalda (entre los omóplatos) o a la parte alta y el cuello.",
        "Casi siempre es mecánico: músculos cargados, articulaciones rígidas o discos irritados, sin una enfermedad grave detrás. Influyen las posturas mantenidas, la falta de fuerza, el sedentarismo, el estrés y dormir mal. La mayoría de los episodios mejora en pocas semanas, y mantenerse activo ayuda más que el reposo."
      ],
      "signs": [
        "Dolor que cambia con la postura y el movimiento",
        "Rigidez al levantarte o después de estar sentado",
        "Contracturas o «nudos» musculares",
        "Dolor entre los omóplatos en quien trabaja muchas horas sentado"
      ],
      "howChiropracticHelps": [
        "La quiropráctica tiene su mejor respaldo en el dolor de espalda y cuello. Las guías clínicas recomiendan la terapia manual junto con ejercicio, nunca como tratamiento aislado (NICE NG59).",
        "En consulta buscamos el origen de tu dolor, tratamos las zonas rígidas con ajustes y movilizaciones, y te damos ejercicios y pautas para tu día a día. Revisamos contigo la evolución y, si no mejoras como esperábamos, cambiamos el plan o te derivamos."
      ],
      "redFlags": [
        "Pérdida de fuerza o adormecimiento en las piernas o la zona genital",
        "Cambios al orinar o en las deposiciones",
        "Fiebre, pérdida de peso sin explicación o antecedentes de cáncer",
        "Dolor en el pecho o dolor de espalda con falta de aire",
        "Dolor tras una caída o un golpe fuerte"
      ],
      "related": [
        {
          "label": "Dolor en la espalda media",
          "href": "/blog/dolor-de-espalda-media/"
        },
        {
          "label": "Punto gatillo en la espalda",
          "href": "/blog/punto-gatillo-en-la-espalda-sintomas-y-solucion-quiropractica/"
        },
        {
          "label": "¿Es peligrosa la quiropráctica? Efectos secundarios",
          "href": "/blog/es-peligrosa-la-quiropractica-efectos-secundarios/"
        }
      ]
    },
    en: {
      "title": "Back Pain",
      "seoTitle": "Back pain: causes, relief and when to see a doctor",
      "description": "Why your back hurts, what usually sits behind it, what really helps and which treatment has evidence. Plus the signs that mean seeing a doctor first.",
      "intro": [
        "Back pain is the most common reason for sick leave and one of the most common reasons to see a health professional. It can affect the lower back, the middle of the back (between the shoulder blades) or the upper back and neck.",
        "It is almost always mechanical: overloaded muscles, stiff joints or irritated discs, with no serious disease behind it. Long-held positions, low strength, inactivity, stress and poor sleep all play a part. Most episodes improve within a few weeks, and staying active helps more than rest."
      ],
      "signs": [
        "Pain that changes with position and movement",
        "Stiffness getting up or after sitting",
        "Muscle spasms or \"knots\"",
        "Pain between the shoulder blades in people who sit for long hours"
      ],
      "howChiropracticHelps": [
        "Chiropractic has its strongest evidence for back and neck pain. Clinical guidelines recommend manual therapy alongside exercise, never on its own (NICE NG59).",
        "At the clinic we look for the source of your pain, treat stiff areas with adjustments and mobilisation, and give you exercises and advice for everyday life. We review your progress with you and, if you're not improving as expected, we change the plan or refer you."
      ],
      "redFlags": [
        "Weakness or numbness in the legs or around the groin",
        "Changes in bladder or bowel control",
        "Fever, unexplained weight loss or a history of cancer",
        "Chest pain, or back pain with shortness of breath",
        "Pain after a fall or a hard knock"
      ],
      "related": [
        {
          "label": "Middle back pain",
          "href": "/en/blog/right-middle-back-pain/"
        },
        {
          "label": "Trigger points in the back",
          "href": "/en/blog/solutions-trigger-point-on-the-back/"
        },
        {
          "label": "Is chiropractic dangerous? Side effects",
          "href": "/en/blog/is-chiropractic-dangerous-side-effects/"
        }
      ]
    },
  },
  'bajo-rendimiento': {
    es: {
      title: 'Bajo rendimiento',
      intro: [
        'El bajo rendimiento físico o deportivo puede tener muchas causas: fatiga acumulada, poco descanso, desequilibrios musculares, falta de movilidad o una lesión que no ha terminado de curar.',
      ],
      signs: [
        'Fatiga persistente durante el entrenamiento',
        'Dificultad para recuperar entre sesiones',
        'Lesiones recurrentes',
        'Sensación de rigidez o falta de fluidez en el movimiento',
      ],
      howChiropracticHelps: [
        'No hay pruebas sólidas de que los ajustes aumenten la fuerza o el rendimiento. Donde podemos ayudarte es con el dolor de espalda, cadera o cuello que te limita al entrenar, y con una vuelta progresiva tras una lesión.',
      ],
    },
    en: {
      title: 'Low Performance',
      intro: [
        'Low physical or athletic performance can have many causes: accumulated fatigue, poor rest, muscle imbalances, limited mobility or an injury that has not fully healed.',
      ],
      signs: [
        'Persistent fatigue during training',
        'Difficulty recovering between sessions',
        'Recurring injuries',
        'A feeling of stiffness or lack of fluidity in movement',
      ],
      howChiropracticHelps: [
        'There is no solid evidence that adjustments increase strength or performance. Where we can help is with back, hip or neck pain that limits your training, and with a gradual return after an injury.',
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
        'La base del tratamiento son los cambios de postura y el tiempo boca abajo supervisado. Si tu bebé gira siempre la cabeza hacia el mismo lado, revisamos con mucha suavidad la movilidad de su cuello y te enseñamos esas pautas.',
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
        "The core of treatment is changing your baby's position and supervised tummy time. If your baby always turns their head to the same side, we very gently check how their neck moves and show you those techniques.",
      ],
      note: "Check in with your pediatrician to monitor progress and rule out other causes.",
    },
  },
  'sindrome-del-tunel-carpiano': {
    es: {
      "title": "Síndrome del túnel carpiano",
      "seoTitle": "Túnel carpiano: síntomas, causas y tratamiento",
      "description": "Qué es el síndrome del túnel carpiano, cómo distinguirlo de un problema del cuello, qué tratamiento conservador ayuda y cuándo consultar al médico.",
      "intro": [
        "El síndrome del túnel carpiano es la compresión del nervio mediano a su paso por la muñeca. Da hormigueo y adormecimiento en el pulgar, el índice, el corazón y parte del anular, a menudo por la noche.",
        "Es más frecuente en mujeres, durante el embarazo y en trabajos con movimientos repetidos de la muñeca. Algunos síntomas parecidos vienen en realidad del cuello, de una raíz nerviosa irritada, por eso conviene valorar las dos zonas."
      ],
      "signs": [
        "Hormigueo o adormecimiento en los primeros dedos, sobre todo de noche",
        "Necesidad de sacudir la mano para que se pase",
        "Torpeza o pérdida de fuerza al coger objetos",
        "Dolor en la muñeca que puede subir por el antebrazo"
      ],
      "howChiropracticHelps": [
        "El tratamiento conservador de referencia es una férula nocturna, modificar los gestos repetitivos y ejercicios de deslizamiento del nervio. La evidencia sobre la terapia manual es limitada, así que la usamos como complemento.",
        "En consulta comprobamos si el origen está en la muñeca, en el cuello o en ambos, movilizamos la muñeca, el codo y la columna cervical, y te enseñamos los ejercicios del nervio y pautas para tu puesto de trabajo."
      ],
      "redFlags": [
        "Pérdida de fuerza en la mano o el pulgar",
        "Músculo de la base del pulgar más delgado que en la otra mano",
        "Adormecimiento constante que no se va en ningún momento del día",
        "Síntomas en las dos manos con torpeza al andar"
      ],
      "related": [
        {
          "label": "Túnel carpiano: ¿puede doler hasta el hombro?",
          "href": "/blog/tunel-carpiano-causas-y-soluciones/"
        },
        {
          "label": "Micro-estiramientos para la oficina",
          "href": "/blog/trabajas-en-oficina-10-micro-estiramientos-avalados/"
        }
      ]
    },
    en: {
      "title": "Carpal Tunnel Syndrome",
      "seoTitle": "Carpal tunnel syndrome: symptoms, causes and treatment",
      "description": "What carpal tunnel syndrome is, how to tell it from a neck problem, which conservative treatment helps and when to see a doctor.",
      "intro": [
        "Carpal tunnel syndrome is compression of the median nerve as it passes through the wrist. It causes tingling and numbness in the thumb, index, middle and part of the ring finger, often at night.",
        "It is more common in women, during pregnancy and in jobs with repetitive wrist movements. Some similar symptoms actually come from the neck, from an irritated nerve root, so it is worth assessing both areas."
      ],
      "signs": [
        "Tingling or numbness in the first fingers, especially at night",
        "Needing to shake your hand to make it pass",
        "Clumsiness or weakness gripping things",
        "Wrist pain that may spread up the forearm"
      ],
      "howChiropracticHelps": [
        "The standard conservative treatment is a night splint, changing repetitive movements and nerve-gliding exercises. The evidence for manual therapy is limited, so we use it as an add-on.",
        "At the clinic we check whether the source is the wrist, the neck or both, mobilise the wrist, elbow and neck, and teach you the nerve exercises and advice for your workstation."
      ],
      "redFlags": [
        "Weakness in the hand or thumb",
        "The muscle at the base of the thumb looks thinner than on the other hand",
        "Constant numbness that never goes away",
        "Symptoms in both hands with unsteadiness walking"
      ],
      "related": [
        {
          "label": "Carpal tunnel: can it cause pain up to the shoulder?",
          "href": "/en/blog/carpal-tunnel-causes-and-solutions/"
        },
        {
          "label": "Micro-stretches for the office",
          "href": "/en/blog/10-chiropractor-backed-micro-stretches-you-can-do-on-your-desk/"
        }
      ]
    },
  },
  ciatica: {
    es: {
      "title": "Ciática",
      "seoTitle": "Ciática: síntomas, causas y tratamiento en Valencia",
      "description": "Qué es la ciática, por qué baja el dolor por la pierna, cuánto tarda en mejorar y qué tratamiento ayuda. Y las señales para ir al médico sin esperar.",
      "intro": [
        "La ciática es el dolor que nace en la zona lumbar o el glúteo y baja por detrás de la pierna, a veces hasta el pie, siguiendo el recorrido del nervio ciático. Suele ir con hormigueo o adormecimiento, y a menudo duele más en la pierna que en la espalda.",
        "La causa más frecuente es una hernia o protrusión de un disco lumbar que irrita la raíz del nervio. Otras veces viene de un estrechamiento del canal lumbar o, más raramente, de la tensión de los músculos del glúteo. La mayoría de las ciáticas mejora en 6 a 12 semanas sin cirugía."
      ],
      "signs": [
        "Dolor que baja por detrás del muslo, a veces hasta la pantorrilla o el pie",
        "Hormigueo, quemazón o adormecimiento en la pierna",
        "Dolor que empeora al sentarte, toser o estornudar",
        "Normalmente afecta solo a una pierna"
      ],
      "howChiropracticHelps": [
        "Las guías clínicas recomiendan la terapia manual en la ciática como parte de un plan que incluya ejercicio (NICE NG59). El objetivo es reducir la irritación del nervio y recuperar el movimiento, no «recolocar» el disco.",
        "En consulta comprobamos la fuerza, los reflejos y la sensibilidad de la pierna antes de tratar. Usamos técnicas suaves adaptadas a la fase en que estás, movilizaciones del nervio y ejercicios progresivos. Si hay signos de compresión importante del nervio, te derivamos a tu médico antes de seguir."
      ],
      "redFlags": [
        "Pérdida de fuerza en la pierna o el pie (por ejemplo, el pie «cae» al andar)",
        "Adormecimiento en la zona genital o cambios al orinar o en las deposiciones: es una urgencia",
        "Ciática en las dos piernas a la vez",
        "Dolor que empeora semana a semana pese al tratamiento"
      ],
      "related": [
        {
          "label": "Ciática en el embarazo",
          "href": "/blog/ciatica-en-el-embarazo/"
        },
        {
          "label": "Dolor de cadera y de piernas: causas y tratamiento",
          "href": "/blog/dolor-de-cadera-y-piernas/"
        },
        {
          "label": "Hernia discal",
          "href": "/sintomas/hernia-discal/"
        }
      ]
    },
    en: {
      "title": "Sciatica",
      "seoTitle": "Sciatica: symptoms, causes and treatment in Valencia",
      "description": "What sciatica is, why the pain runs down your leg, how long it takes to improve and what helps. Plus the signs that mean seeing a doctor straight away.",
      "intro": [
        "Sciatica is pain that starts in the lower back or buttock and runs down the back of the leg, sometimes to the foot, following the sciatic nerve. It often comes with tingling or numbness, and the leg frequently hurts more than the back.",
        "The most common cause is a herniated or bulging lumbar disc irritating the nerve root. Sometimes it comes from narrowing of the spinal canal or, less often, from tight buttock muscles. Most sciatica improves within 6 to 12 weeks without surgery."
      ],
      "signs": [
        "Pain running down the back of the thigh, sometimes to the calf or foot",
        "Tingling, burning or numbness in the leg",
        "Pain that gets worse sitting, coughing or sneezing",
        "Usually affects one leg only"
      ],
      "howChiropracticHelps": [
        "Clinical guidelines recommend manual therapy for sciatica as part of a plan that includes exercise (NICE NG59). The aim is to calm the irritated nerve and restore movement, not to \"put the disc back\".",
        "At the clinic we check your leg's strength, reflexes and sensation before treating. We use gentle techniques suited to the stage you're at, nerve mobilisation and progressive exercises. If there are signs of significant nerve compression, we refer you to your doctor before going further."
      ],
      "redFlags": [
        "Weakness in the leg or foot (for example, your foot drops when you walk)",
        "Numbness around the groin or changes in bladder or bowel control: this is an emergency",
        "Sciatica in both legs at once",
        "Pain that gets worse week by week despite treatment"
      ],
      "related": [
        {
          "label": "Sciatica in pregnancy",
          "href": "/en/blog/sciatica-in-pregnancy/"
        },
        {
          "label": "Hip and leg pain: causes and treatment",
          "href": "/en/blog/hip-and-leg-pain-what-it-is-and-how-to-treat-it/"
        },
        {
          "label": "Herniated disc",
          "href": "/en/symptoms/herniated-disc/"
        }
      ]
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
        'Los estudios sobre terapia manual en el cólico del lactante son pocos y de baja calidad, así que no podemos prometer que reduzca el llanto (revisión Cochrane, Dobson y cols., 2012). Si tu bebé además prefiere girar la cabeza o mamar de un lado, podemos revisar con suavidad la movilidad de su cuello.',
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
        "Studies of manual therapy for infant colic are few and of low quality, so we cannot promise it will reduce crying (Cochrane review, Dobson et al., 2012). If your baby also prefers turning their head or feeding on one side, we can gently check how their neck moves.",
      ],
      note: "Always check with your pediatrician to rule out other causes of the crying.",
    },
  },
  estrenimiento: {
    es: {
      title: 'Estreñimiento',
      intro: [
        'El estreñimiento suele estar relacionado con la alimentación, la hidratación, el sedentarismo o algunos medicamentos.',
      ],
      signs: [
        'Deposiciones poco frecuentes',
        'Dificultad o esfuerzo al defecar',
        'Sensación de evacuación incompleta',
      ],
      howChiropracticHelps: [
        'No hay evidencia de que los ajustes quiroprácticos mejoren el estreñimiento. Lo eficaz es la fibra, el agua, el movimiento y, si no basta, la valoración de tu médico. Si el estreñimiento es nuevo, se acompaña de sangre o de pérdida de peso, consulta con tu médico cuanto antes.',
      ],
    },
    en: {
      title: 'Constipation',
      intro: [
        'Constipation is usually linked to diet, hydration, a sedentary lifestyle or some medications.',
      ],
      signs: [
        'Infrequent bowel movements',
        'Difficulty or straining during bowel movements',
        'A feeling of incomplete evacuation',
      ],
      howChiropracticHelps: [
        'There is no evidence that chiropractic adjustments relieve constipation. What works is fibre, water, movement and, if that is not enough, your doctor. If constipation is new, or comes with blood or weight loss, see your doctor promptly.',
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
        'La quiropráctica no diagnostica ni trata la dislexia, y no hay evidencia de que mejore la lectura o la escritura. El apoyo adecuado es el psicopedagógico. Si además tu hijo o hija tiene dolor de espalda o de cuello, eso sí podemos valorarlo.',
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
        'Chiropractic does not diagnose or treat dyslexia, and there is no evidence that it improves reading or writing. The right support is specialist learning support. If your child also has back or neck pain, that is something we can assess.',
      ],
      note: 'Support for dyslexia should be guided by professionals specialized in education and neurodevelopment.',
    },
  },
  'dolor-de-cervicales-y-cabeza': {
    es: {
      "title": "Dolor de cervicales y cabeza",
      "seoTitle": "Dolor de cabeza por cervicales: causas y tratamiento",
      "description": "Cuándo el dolor de cabeza viene del cuello, cómo distinguirlo de la migraña y qué tratamiento tiene respaldo. Y las señales para ir al médico.",
      "intro": [
        "Muchos dolores de cabeza empiezan en el cuello. Se llaman cefaleas cervicogénicas: nacen en las articulaciones y los músculos de la parte alta del cuello y se notan en la nuca, la sien o detrás del ojo, casi siempre del mismo lado.",
        "Es lo que mucha gente llama «migraña cervical», aunque no es una migraña. Suele aparecer o empeorar tras horas frente a la pantalla, con estrés o después de un latigazo cervical, y va con rigidez de cuello."
      ],
      "signs": [
        "Dolor que empieza en la nuca y sube hacia la frente o el ojo",
        "Casi siempre en el mismo lado",
        "Empeora al mover el cuello o al mantener una postura",
        "Rigidez de cuello y dolor al presionar la base del cráneo"
      ],
      "howChiropracticHelps": [
        "En el dolor de cabeza cervicogénico, la terapia manual combinada con ejercicios para la musculatura profunda del cuello redujo la frecuencia y la intensidad del dolor en un ensayo clínico, con efecto mantenido al año (Jull y cols., Spine, 2002).",
        "En consulta comprobamos si tu dolor de cabeza tiene un componente cervical, tratamos la movilidad de la parte alta del cuello y te enseñamos esos ejercicios. Si tus dolores de cabeza encajan más con una migraña, te lo decimos y te orientamos hacia tu médico o un neurólogo."
      ],
      "redFlags": [
        "Dolor de cabeza repentino y muy intenso, «el peor de tu vida»",
        "Fiebre con rigidez de cuello",
        "Pérdida de fuerza, adormecimiento, visión doble, confusión o dificultad para hablar",
        "Dolor de cabeza después de un golpe en la cabeza",
        "Un dolor de cabeza nuevo y distinto a partir de los 50 años"
      ],
      "related": [
        {
          "label": "Dolor de cabeza por cervicales y «migraña cervical»: guía completa",
          "href": "/blog/guia-completa-para-tratar-el-dolor-de-cabeza-por-cervicales/"
        },
        {
          "label": "¿Puede la cervical afectar al oído?",
          "href": "/blog/puede-la-cervical-afectar-el-oido-descubre-como-y-por-que/"
        }
      ]
    },
    en: {
      "title": "Neck and Head Pain",
      "seoTitle": "Headaches from the neck: causes and treatment",
      "description": "When a headache comes from your neck, how to tell it from migraine and which treatment has evidence. Plus the signs that mean seeing a doctor.",
      "intro": [
        "Many headaches start in the neck. They are called cervicogenic headaches: they come from the joints and muscles at the top of the neck and are felt at the base of the skull, the temple or behind the eye, almost always on the same side.",
        "It's what many people call a \"cervical migraine\", but it isn't a migraine. It tends to start or get worse after hours at a screen, with stress or after whiplash, and comes with neck stiffness."
      ],
      "signs": [
        "Pain that starts at the base of the skull and moves up to the forehead or eye",
        "Almost always on the same side",
        "Gets worse moving your neck or holding a position",
        "Neck stiffness and tenderness at the base of the skull"
      ],
      "howChiropracticHelps": [
        "For cervicogenic headache, manual therapy combined with exercises for the deep neck muscles reduced how often and how badly people had headaches in a clinical trial, with the effect lasting at a year (Jull et al., Spine, 2002).",
        "At the clinic we check whether your headache has a neck component, treat the mobility of the top of your neck and teach you those exercises. If your headaches look more like migraine, we tell you and point you to your doctor or a neurologist."
      ],
      "redFlags": [
        "A sudden, extremely severe headache, \"the worst of your life\"",
        "Fever with a stiff neck",
        "Weakness, numbness, double vision, confusion or trouble speaking",
        "A headache after a blow to the head",
        "A new, different headache after age 50"
      ],
      "related": [
        {
          "label": "Headaches from the neck and \"cervical migraine\": a complete guide",
          "href": "/en/blog/complete-guide-to-treating-cervical-headache/"
        },
        {
          "label": "Can your neck affect your ear?",
          "href": "/en/blog/can-the-cervical-affect-the-ear/"
        }
      ]
    },
  },
  'dolor-de-cuello': {
    es: {
      "title": "Dolor de cuello",
      "seoTitle": "Dolor de cuello y cervicalgia: causas y tratamiento",
      "description": "Por qué duele el cuello, qué lo empeora, qué tratamiento tiene respaldo y qué puedes hacer en casa. Y cuándo hay que ir antes al médico.",
      "intro": [
        "El dolor de cuello, o cervicalgia, es muy frecuente en personas que pasan muchas horas frente a una pantalla o con la cabeza inclinada hacia el móvil. Suele ir con rigidez y tensión en los hombros y la parte alta de la espalda.",
        "En la mayoría de los casos es mecánico: viene de las articulaciones y los músculos del cuello, cargados por posturas mantenidas, estrés o un mal gesto. También puede aparecer después de un latigazo cervical. Casi siempre mejora en pocas semanas con movimiento y tratamiento."
      ],
      "signs": [
        "Dolor y rigidez al girar o inclinar la cabeza",
        "Tensión en hombros y trapecios",
        "Dolor de cabeza que nace en la nuca",
        "A veces, dolor que baja hacia el brazo"
      ],
      "howChiropracticHelps": [
        "En el dolor de cuello, la combinación de terapia manual y ejercicio ofrece beneficios modestos pero reales según las revisiones (Gross y cols., revisión Cochrane, 2015). Es lo que hacemos en consulta: ajustes y movilizaciones suaves en las zonas rígidas del cuello y la espalda alta, y ejercicios de fuerza para la musculatura profunda del cuello.",
        "Revisamos también tu puesto de trabajo y tus hábitos con el móvil, porque cambiar eso es lo que hace que el alivio dure."
      ],
      "redFlags": [
        "Dolor tras un accidente o un golpe fuerte",
        "Hormigueo, adormecimiento o pérdida de fuerza en los brazos",
        "Mareo con visión doble, dificultad para hablar o para tragar",
        "Fiebre con rigidez de cuello",
        "Dolor de cabeza repentino y muy intenso"
      ],
      "related": [
        {
          "label": "Contractura en el cuello: causas y soluciones",
          "href": "/blog/contractura-en-el-cuello-causas-sintomas-y-soluciones/"
        },
        {
          "label": "Rectificación cervical y lordosis",
          "href": "/blog/rectificacion-de-cervicales-sintomas-y-tratamiento-quiropractico/"
        },
        {
          "label": "Pinzamiento del nervio en el trapecio",
          "href": "/blog/pinzamiento-nervio-trapecio/"
        }
      ]
    },
    en: {
      "title": "Neck Pain",
      "seoTitle": "Neck pain: causes and treatment in Valencia",
      "description": "Why your neck hurts, what makes it worse, which treatment has evidence and what you can do at home. And when to see a doctor first.",
      "intro": [
        "Neck pain is very common in people who spend long hours at a screen or with their head tilted towards a phone. It usually comes with stiffness and tension in the shoulders and upper back.",
        "In most cases it is mechanical: it comes from the joints and muscles of the neck, loaded by long-held positions, stress or an awkward movement. It can also follow whiplash. It almost always improves within a few weeks with movement and treatment."
      ],
      "signs": [
        "Pain and stiffness turning or tilting your head",
        "Tension in the shoulders and trapezius",
        "Headaches that start at the base of the skull",
        "Sometimes, pain running into the arm"
      ],
      "howChiropracticHelps": [
        "For neck pain, combining manual therapy with exercise gives modest but real benefits according to the reviews (Gross et al., Cochrane review, 2015). That's what we do at the clinic: gentle adjustments and mobilisation for the stiff areas of the neck and upper back, and strengthening exercises for the deep neck muscles.",
        "We also look at your workstation and phone habits, because changing those is what makes the relief last."
      ],
      "redFlags": [
        "Pain after an accident or a hard knock",
        "Tingling, numbness or weakness in the arms",
        "Dizziness with double vision, trouble speaking or swallowing",
        "Fever with a stiff neck",
        "A sudden, extremely severe headache"
      ],
      "related": [
        {
          "label": "Neck contracture: causes and solutions",
          "href": "/en/blog/neck-contracture/"
        },
        {
          "label": "Straight neck and cervical lordosis",
          "href": "/en/blog/straight-neck-and-cervical-lordosis/"
        },
        {
          "label": "Pinched nerve in the trapezius",
          "href": "/en/blog/trapezius-pinched-nerve/"
        }
      ]
    },
  },
  escoliosis: {
    es: {
      title: 'Escoliosis',
      seoTitle: "Escoliosis: señales, seguimiento y qué puede hacer la quiropráctica",
      description: "Qué es la escoliosis, qué señales vigilar, cómo se sigue y trata, y qué puede y no puede hacer la quiropráctica.",
      intro: [
        'La escoliosis es una curvatura lateral de la columna, con algo de rotación de las vértebras. Puede aparecer en la infancia, la adolescencia o la edad adulta, y su seguimiento debe hacerlo un traumatólogo o especialista en columna.',
        'La forma más frecuente es la escoliosis idiopática del adolescente, que suele hacerse visible entre los 10 y los 15 años, durante el estirón. En adultos, la escoliosis puede venir de la adolescencia o aparecer con el desgaste de la columna. Las señales que conviene vigilar en tu hijo o hija las contamos en <a href="/blog/escoliosis-adolescencia/" class="font-semibold text-gold-dark underline">escoliosis en la adolescencia</a>.',
        'El grado de la curva se mide en una radiografía (ángulo de Cobb), y es ese grado, junto con la edad y lo que queda de crecimiento, lo que decide el tratamiento: vigilancia, ejercicios específicos, corsé o, en curvas severas, cirugía. En adolescentes con curvas moderadas, el corsé reduce el riesgo de que la curva progrese (Weinstein y cols., <em>New England Journal of Medicine</em>, 2013).',
      ],
      signs: [
        'Hombros u omóplatos a distinta altura',
        'Asimetría en la cintura o una cadera más alta',
        'Un lado de la espalda que sobresale al inclinarse hacia delante',
        'Ropa que no cae igual por los dos lados',
        'Molestias o cansancio de espalda al mantener una postura',
      ],
      howChiropracticHelps: [
        'La quiropráctica no corrige ni cura la escoliosis, y no hay evidencia de que los ajustes reduzcan la curva. Lo que sí podemos hacer es tratar el dolor y la rigidez de espalda que a menudo la acompañan, sobre todo en adultos, y reforzar los ejercicios que te haya pautado tu especialista.',
        'En consulta adaptamos la técnica a la forma de tu columna, con movilizaciones suaves y trabajo de tejido blando, y te damos ejercicios de movilidad y fuerza. Nos coordinamos con tu traumatólogo, y nunca sustituimos el corsé ni los controles que te haya indicado.',
        'Si la escoliosis te da sensación de falta de aire, lo explicamos en <a href="/blog/tengo-escoliosis-y-me-cuesta-respirar/" class="font-semibold text-gold-dark underline">tengo escoliosis y me cuesta respirar</a>.',
      ],
      note: 'Ante cualquier sospecha de escoliosis, o si una curva conocida cambia o empieza a doler, consulta con tu médico o con un especialista en columna.',
    },
    en: {
      title: 'Scoliosis',
      seoTitle: "Scoliosis: signs, monitoring and what chiropractic can do",
      description: "What scoliosis is, which signs to watch for, how it is monitored and treated, and what chiropractic can and cannot do.",
      intro: [
        'Scoliosis is a sideways curve of the spine, with some rotation of the vertebrae. It can appear in childhood, adolescence or adulthood, and it should be monitored by an orthopaedic or spine specialist.',
        'The most common form is adolescent idiopathic scoliosis, which usually becomes visible between 10 and 15, during the growth spurt. In adults, scoliosis may date from adolescence or develop with wear on the spine. The signs to watch for in your child are in <a href="/en/blog/adolescent-scoliosis/" class="font-semibold text-gold-dark underline">adolescent scoliosis</a>.',
        'The size of the curve is measured on an X-ray (the Cobb angle), and that size, together with age and remaining growth, decides the treatment: monitoring, specific exercises, a brace or, for severe curves, surgery. In teenagers with moderate curves, bracing lowers the risk of the curve progressing (Weinstein et al., <em>New England Journal of Medicine</em>, 2013).',
      ],
      signs: [
        'Shoulders or shoulder blades at uneven heights',
        'An uneven waist or one hip higher than the other',
        'One side of the back sticking out when bending forward',
        'Clothes that hang differently on each side',
        'Back ache or tiredness when holding a position',
      ],
      howChiropracticHelps: [
        'Chiropractic does not correct or cure scoliosis, and there is no evidence that adjustments reduce the curve. What we can do is treat the back pain and stiffness that often come with it, especially in adults, and support the exercises your specialist has given you.',
        'At the clinic we adapt the technique to the shape of your spine, with gentle mobilisation and soft-tissue work, and give you mobility and strength exercises. We work alongside your orthopaedic specialist and never replace a brace or the check-ups they have set.',
        'If your scoliosis makes you feel short of breath, we explain it in <a href="/en/blog/scoliosis-hard-to-breathe/" class="font-semibold text-gold-dark underline">scoliosis and breathing difficulty</a>.',
      ],
      note: 'If you suspect scoliosis, or a known curve changes or starts to hurt, see your doctor or a spine specialist.',
    },
  },
  'estres-y-depresion': {
    es: {
      title: 'Estrés y depresión',
      intro: [
        'El estrés crónico y el ánimo bajo tienen un componente físico real: aumentan la tensión muscular y alteran el sueño. La depresión es una condición de salud mental que requiere atención profesional especializada.',
      ],
      signs: [
        'Tensión muscular persistente (cuello, hombros, mandíbula)',
        'Alteraciones del sueño',
        'Fatiga generalizada',
      ],
      howChiropracticHelps: [
        'Podemos ayudarte con la tensión y el dolor de cuello, hombros y espalda que suele acompañar al estrés. La quiropráctica no trata la ansiedad ni la depresión y no sustituye la atención psicológica o psiquiátrica.',
      ],
      note: 'Si experimentas síntomas de depresión, consulta con un profesional de la salud mental.',
    },
    en: {
      title: 'Stress and Depression',
      intro: [
        'Chronic stress and low mood have a real physical side: they raise muscle tension and disrupt sleep. Depression is a mental health condition that needs specialist professional care.',
      ],
      signs: [
        'Persistent muscle tension (neck, shoulders, jaw)',
        'Sleep disturbances',
        'General fatigue',
      ],
      howChiropracticHelps: [
        'We can help with the neck, shoulder and back tension and pain that often come with stress. Chiropractic does not treat anxiety or depression and does not replace psychological or psychiatric care.',
      ],
      note: 'If you are experiencing symptoms of depression, please consult a mental health professional.',
    },
  },
  fibromialgia: {
    es: {
      "title": "Fibromialgia",
      "seoTitle": "Fibromialgia: qué ayuda y qué esperar de la quiropráctica",
      "description": "Qué es la fibromialgia, qué tratamiento tiene más respaldo y qué papel puede tener la terapia manual, sin promesas. Y cuándo consultar al médico.",
      "intro": [
        "La fibromialgia es una condición crónica con dolor generalizado, cansancio, sueño poco reparador y, a menudo, dificultades de concentración. Se relaciona con una mayor sensibilidad del sistema nervioso al dolor, no con un daño en los músculos o las articulaciones.",
        "Su diagnóstico lo hace el médico, y el tratamiento funciona mejor cuando combina varios enfoques: ejercicio adaptado, buena higiene del sueño, manejo del estrés y, cuando hace falta, medicación y apoyo psicológico."
      ],
      "signs": [
        "Dolor generalizado durante más de tres meses",
        "Cansancio que no mejora con el descanso",
        "Sueño poco reparador",
        "Sensibilidad aumentada al tacto"
      ],
      "howChiropracticHelps": [
        "El tratamiento con más respaldo en la fibromialgia es el ejercicio adaptado y progresivo, según las recomendaciones europeas (EULAR, 2016). La evidencia sobre la terapia manual es débil, así que no te vamos a prometer resultados.",
        "Lo que sí podemos hacer es tratar con mucha suavidad las zonas de más tensión, como el cuello y la espalda, ayudarte a empezar a moverte sin que el dolor se dispare, y coordinarnos con tu médico. Si no notas beneficio en unas pocas sesiones, te lo diremos."
      ],
      "redFlags": [
        "Fiebre, pérdida de peso sin explicación o sudores nocturnos",
        "Articulaciones hinchadas o enrojecidas",
        "Pérdida de fuerza real en brazos o piernas",
        "Síntomas nuevos que no encajan con los habituales"
      ]
    },
    en: {
      "title": "Fibromyalgia",
      "seoTitle": "Fibromyalgia: what helps and what to expect from chiropractic",
      "description": "What fibromyalgia is, which treatment has the most evidence and what role manual therapy can play, without promises. And when to see a doctor.",
      "intro": [
        "Fibromyalgia is a chronic condition with widespread pain, tiredness, unrefreshing sleep and often difficulty concentrating. It is linked to increased sensitivity of the nervous system to pain, not to damage in the muscles or joints.",
        "It is diagnosed by a doctor, and treatment works best when it combines several approaches: tailored exercise, good sleep habits, stress management and, where needed, medication and psychological support."
      ],
      "signs": [
        "Widespread pain for more than three months",
        "Tiredness that doesn't improve with rest",
        "Unrefreshing sleep",
        "Increased sensitivity to touch"
      ],
      "howChiropracticHelps": [
        "The treatment with the most evidence for fibromyalgia is tailored, progressive exercise, according to the European recommendations (EULAR, 2016). The evidence for manual therapy is weak, so we will not promise you results.",
        "What we can do is treat the tensest areas, such as the neck and back, very gently, help you start moving without the pain flaring, and work with your doctor. If you don't feel any benefit within a few sessions, we'll tell you."
      ],
      "redFlags": [
        "Fever, unexplained weight loss or night sweats",
        "Swollen or red joints",
        "Real weakness in the arms or legs",
        "New symptoms that are different from your usual ones"
      ]
    },
  },
  'hernia-discal': {
    es: {
      "title": "Hernia discal",
      "seoTitle": "Hernia discal lumbar y cervical: síntomas y tratamiento",
      "description": "Qué es una hernia discal, por qué no siempre duele, cuánto tarda en mejorar y qué tratamiento ayuda sin cirugía. Y cuándo hay que ir al médico.",
      "intro": [
        "Los discos son los amortiguadores que hay entre las vértebras. Hablamos de hernia discal cuando parte del disco sale de su sitio y puede presionar o irritar una raíz nerviosa. Es más frecuente en la zona lumbar y en el cuello.",
        "Una hernia en la resonancia no siempre explica el dolor: los cambios en los discos son muy frecuentes en personas sin ninguna molestia, y más con la edad (Brinjikji y cols., American Journal of Neuroradiology, 2015). Lo que importa son los síntomas y la exploración. La mayoría de las hernias que dan dolor mejora en semanas o meses sin cirugía, y muchas se reabsorben solas."
      ],
      "signs": [
        "Dolor lumbar o cervical que se irradia a la pierna o al brazo",
        "Hormigueo o adormecimiento en una zona concreta de la pierna o la mano",
        "Dolor que empeora al sentarte, toser o agacharte",
        "A veces, pérdida de fuerza en la pierna o el brazo"
      ],
      "howChiropracticHelps": [
        "El tratamiento de primera línea es conservador: mantenerse activo, ejercicio y terapia manual. En consulta adaptamos la técnica a tu caso, con movilizaciones suaves y sin maniobras de fuerza en el nivel afectado cuando hay signos de compresión del nervio.",
        "Trabajamos la movilidad del resto de la columna y la cadera, y te damos ejercicios progresivos para que recuperes la tolerancia a estar sentado, andar y cargar peso. Antes de empezar revisamos tus pruebas, si las tienes, y comprobamos fuerza, reflejos y sensibilidad."
      ],
      "redFlags": [
        "Pérdida de fuerza que avanza en la pierna, el pie, el brazo o la mano",
        "Adormecimiento en la zona genital o cambios al orinar o en las deposiciones",
        "Torpeza en las manos o inestabilidad al andar (en hernias cervicales)",
        "Dolor insoportable que no mejora con nada"
      ],
      "related": [
        {
          "label": "¿Es bueno el calor para las hernias discales?",
          "href": "/blog/es-bueno-el-calor-para-las-hernias-discales/"
        },
        {
          "label": "Protrusión discal cervical",
          "href": "/blog/protusion-discal-cervical/"
        },
        {
          "label": "Deshidratación discal",
          "href": "/blog/deshidratacion-discales-sintomas-y-soluciones-quiropracticas/"
        }
      ]
    },
    en: {
      "title": "Herniated Disc",
      "seoTitle": "Herniated disc in the back or neck: symptoms and treatment",
      "description": "What a herniated disc is, why it doesn't always hurt, how long it takes to improve and what helps without surgery. And when to see a doctor.",
      "intro": [
        "Discs are the shock absorbers between the vertebrae. A herniated disc is when part of the disc moves out of place and can press on or irritate a nerve root. It is most common in the lower back and the neck.",
        "A herniation on an MRI doesn't always explain pain: disc changes are very common in people with no symptoms at all, and more so with age (Brinjikji et al., American Journal of Neuroradiology, 2015). What matters is your symptoms and the examination. Most painful herniations improve within weeks or months without surgery, and many are reabsorbed on their own."
      ],
      "signs": [
        "Lower back or neck pain that spreads into the leg or arm",
        "Tingling or numbness in a specific area of the leg or hand",
        "Pain that gets worse sitting, coughing or bending",
        "Sometimes, weakness in the leg or arm"
      ],
      "howChiropracticHelps": [
        "First-line treatment is conservative: staying active, exercise and manual therapy. At the clinic we adapt the technique to your case, with gentle mobilisation and no forceful techniques at the affected level when there are signs of nerve compression.",
        "We work on the mobility of the rest of your spine and hips, and give you progressive exercises to rebuild your tolerance for sitting, walking and lifting. Before starting we review any scans you have and check strength, reflexes and sensation."
      ],
      "redFlags": [
        "Weakness that is getting worse in the leg, foot, arm or hand",
        "Numbness around the groin or changes in bladder or bowel control",
        "Clumsy hands or unsteadiness walking (with neck herniations)",
        "Unbearable pain that nothing eases"
      ],
      "related": [
        {
          "label": "Is heat good for herniated discs?",
          "href": "/en/blog/is-heat-good-for-herniated-discs/"
        },
        {
          "label": "Cervical disc protrusion",
          "href": "/en/blog/cervical-disc-protrusion/"
        },
        {
          "label": "Disc dehydration",
          "href": "/en/blog/disc-dehydration-symptoms-and-chiropractic-solutions/"
        }
      ]
    },
  },
  lumbalgia: {
    es: {
      "title": "Lumbalgia",
      "seoTitle": "Lumbalgia: causas, síntomas y tratamiento en Valencia",
      "description": "Qué es la lumbalgia, por qué aparece, cuánto suele durar y qué tratamiento tiene respaldo. Y cuándo hay que ir antes al médico.",
      "intro": [
        "La lumbalgia es el dolor en la parte baja de la espalda, entre las costillas y los glúteos. Es uno de los motivos de consulta más frecuentes: la mayoría de las personas la sufre alguna vez en la vida.",
        "En casi todos los casos es una lumbalgia mecánica: viene de los músculos, las articulaciones o los discos de la zona lumbar, sin una enfermedad grave detrás. Suele aparecer tras un esfuerzo, una postura mantenida o un periodo de estrés y poco movimiento. La mayoría mejora en pocas semanas, aunque en algunas personas vuelve o se hace persistente."
      ],
      "signs": [
        "Dolor en la zona lumbar que empeora al agacharte, levantar peso o estar mucho tiempo sentado",
        "Rigidez por la mañana o al levantarte de la silla",
        "Contractura o sensación de «espalda bloqueada»",
        "Dolor que puede irradiar a los glúteos o la parte alta del muslo"
      ],
      "howChiropracticHelps": [
        "En la lumbalgia es donde la quiropráctica tiene más respaldo. En el dolor lumbar crónico, la manipulación vertebral consigue resultados parecidos a los de otros tratamientos recomendados (Rubinstein y cols., BMJ, 2019), y las guías clínicas la recomiendan siempre junto con ejercicio (NICE NG59).",
        "En consulta valoramos de dónde viene tu dolor y lo tratamos con ajustes, movilizaciones y trabajo de tejido blando. Te damos ejercicios para casa y pautas para el trabajo, que son lo que más ayuda a que no vuelva. Si en unas sesiones no mejoras como esperábamos, te derivamos."
      ],
      "redFlags": [
        "Pérdida de fuerza en una o las dos piernas",
        "Adormecimiento en la zona genital o los glúteos, o cambios al orinar o en las deposiciones",
        "Fiebre, pérdida de peso sin explicación o antecedentes de cáncer",
        "Dolor tras una caída o un golpe fuerte",
        "Dolor que no cambia con la postura y te despierta por la noche"
      ],
      "related": [
        {
          "label": "Contracturas musculares lumbares",
          "href": "/blog/contracturas-musculares-lumbares/"
        },
        {
          "label": "¿Cuántas sesiones de quiropráctica necesito?",
          "href": "/blog/cuantas-sesiones-de-quiropractica-necesito/"
        },
        {
          "label": "Micro-estiramientos para la oficina",
          "href": "/blog/trabajas-en-oficina-10-micro-estiramientos-avalados/"
        }
      ]
    },
    en: {
      "title": "Lower Back Pain",
      "seoTitle": "Lower back pain: causes, symptoms and treatment in Valencia",
      "description": "What lower back pain is, why it happens, how long it usually lasts and which treatment has evidence behind it. And when to see a doctor first.",
      "intro": [
        "Lower back pain is pain in the lower part of the back, between the ribs and the buttocks. It is one of the most common reasons people see a health professional: most people have it at some point in their lives.",
        "In almost every case it is mechanical: it comes from the muscles, joints or discs of the lower back, with no serious disease behind it. It often starts after an effort, a long-held position or a stressful, inactive period. Most people improve within a few weeks, though for some it comes back or lingers."
      ],
      "signs": [
        "Pain in the lower back that gets worse bending, lifting or sitting for long",
        "Stiffness in the morning or getting up from a chair",
        "A muscle spasm or a \"locked\" back",
        "Pain that may spread into the buttocks or upper thigh"
      ],
      "howChiropracticHelps": [
        "Lower back pain is where chiropractic has the strongest evidence. For chronic lower back pain, spinal manipulation gives results similar to other recommended treatments (Rubinstein et al., BMJ, 2019), and clinical guidelines recommend it always alongside exercise (NICE NG59).",
        "At the clinic we work out where your pain comes from and treat it with adjustments, mobilisation and soft-tissue work. We give you exercises for home and advice for work, which do the most to keep it from coming back. If you're not improving as expected after a few sessions, we refer you on."
      ],
      "redFlags": [
        "Weakness in one or both legs",
        "Numbness around the groin or buttocks, or changes in bladder or bowel control",
        "Fever, unexplained weight loss or a history of cancer",
        "Pain after a fall or a hard knock",
        "Pain that doesn't change with position and wakes you at night"
      ],
      "related": [
        {
          "label": "Lumbar muscle contractures",
          "href": "/en/blog/lumbar-muscle-contractures/"
        },
        {
          "label": "How many chiropractic sessions do I need?",
          "href": "/en/blog/how-many-chiropractic-sessions-do-i-need/"
        },
        {
          "label": "Micro-stretches for the office",
          "href": "/en/blog/10-chiropractor-backed-micro-stretches-you-can-do-on-your-desk/"
        }
      ]
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
        'No hay evidencia de que la quiropráctica acelere el desarrollo motor. La referencia es el pediatra, la atención temprana y la fisioterapia infantil. Si nos consultas, valoramos al niño con suavidad y te derivamos a ellos.',
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
        "There is no evidence that chiropractic speeds up motor development. The right people are your child's paediatrician, early-intervention services and paediatric physiotherapy. If you come to us, we assess your child gently and refer you to them.",
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
        'No hay evidencia de que la quiropráctica trate el reflujo del bebé. Las pautas de alimentación y postura del pediatra son el tratamiento de referencia. Si además notas que tu bebé gira siempre la cabeza hacia el mismo lado, podemos revisarlo con suavidad.',
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
        "There is no evidence that chiropractic treats reflux in babies. Your paediatrician's feeding and positioning advice is the standard treatment. If you also notice your baby always turns their head to the same side, we can check that gently.",
      ],
      note: "Check with your pediatrician if reflux is affecting weight gain or your baby's overall wellbeing.",
    },
  },
}
