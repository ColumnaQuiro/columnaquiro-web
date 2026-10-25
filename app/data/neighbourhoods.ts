// The two neighbourhood landing pages. They replace two blog posts that said
// much the same thing in a format Google treats as news: a page for
// "quiropráctico en Russafa" that is a dated article competes badly with a
// page that is simply the clinic's page for Russafa. Each entry keeps the
// detail that is actually local (how people get here, who comes from where)
// and shares everything else with the rest of the site through components.
// Walking times are the ones the clinic gives patients; keep them honest.
export type NeighbourhoodId = 'russafa' | 'eixample'

export interface NeighbourhoodCopy {
  title: string
  description: string
  eyebrow: string
  heading: string
  intro: string[]
  gettingHereTitle: string
  gettingHere: string[]
  whoTitle: string
  who: string[]
  faqTitle: string
  faqs: { q: string; a: string }[]
}

export const neighbourhoods: Record<NeighbourhoodId, { routeKey: string; es: NeighbourhoodCopy; en: NeighbourhoodCopy }> = {
  russafa: {
    routeKey: 'russafa',
    es: {
      title: 'Quiropráctico en Russafa (Ruzafa), València · Primera visita 70 € | ColumnaQuiro',
      description:
        'Centro quiropráctico en Russafa, València: Carrer dels Vivons 29, a pocos minutos a pie del Mercado de Ruzafa. Primera visita 70 € con evaluación y primer ajuste. Reserva online.',
      eyebrow: 'Quiropráctico en Russafa · Ruzafa, València',
      heading: 'Tu quiropráctico en Russafa',
      intro: [
        'ColumnaQuiro está en Carrer dels Vivons, 29, en el límite entre Russafa y el resto del Eixample. Si vives o trabajas en el barrio, vienes andando: estamos a pocos minutos a pie del Mercado de Ruzafa.',
        'La primera visita cuesta 70 € e incluye una evaluación completa, tu primer ajuste y un plan de cuidado. No pagas nada al reservar.',
      ],
      gettingHereTitle: 'Cómo llegar desde Russafa',
      gettingHere: [
        'A pie: unos minutos desde el Mercado de Ruzafa y desde la calle de Cuba.',
        'En coche: el parking del Mercado de Ruzafa es el que recomendamos a quien viene de fuera del barrio.',
        'En metro: la estación más cercana es Xàtiva.',
        'Horario: martes, miércoles y jueves, de 9 a 13 h y de 15 a 20 h.',
      ],
      whoTitle: 'A quién atendemos en Russafa',
      who: [
        'Vecinos del barrio que pasan muchas horas sentados frente al ordenador y llegan con dolor lumbar o de cervicales.',
        'Embarazadas y familias con bebés y niños: en el equipo hay quiroprácticas especializadas en cuidado materno-infantil.',
        'Corredores que entrenan por el Jardín del Turia y preparan pruebas como el Maratón de València.',
        'Personas que buscan una quiropráctica que hable inglés o francés; una parte importante de nuestras reseñas en Google está escrita por pacientes de fuera.',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          q: '¿ColumnaQuiro está en Russafa o en el Eixample?',
          a: 'En el límite de ambos: Carrer dels Vivons 29, a un paseo corto tanto del Mercado de Ruzafa como del resto del Eixample.',
        },
        {
          q: '¿Necesito derivación médica para pedir cita?',
          a: 'No. Puedes reservar tu primera visita directamente. En la evaluación revisamos tu historia y, si tu caso necesita otro especialista, te lo decimos.',
        },
        {
          q: '¿Cuánto dura la primera visita?',
          a: 'Más que las siguientes: incluye una historia clínica completa y una exploración física antes de proponer cualquier plan de cuidado.',
        },
        {
          q: '¿Dónde aparco?',
          a: 'En el parking del Mercado de Ruzafa, a pocos minutos a pie del centro.',
        },
      ],
    },
    en: {
      title: 'Chiropractor in Russafa (Ruzafa), Valencia · First visit €70 | ColumnaQuiro',
      description:
        'English-speaking chiropractic clinic in Russafa, Valencia: Carrer dels Vivons 29, a few minutes on foot from the Ruzafa Market. First visit €70 with assessment and first adjustment. Book online.',
      eyebrow: 'Chiropractor in Russafa · Ruzafa, Valencia',
      heading: 'Your chiropractor in Russafa',
      intro: [
        'ColumnaQuiro is at Carrer dels Vivons, 29, on the border between Russafa and the rest of the Eixample. If you live or work in the neighbourhood you walk here: we are a few minutes on foot from the Ruzafa Market.',
        'The first visit is €70 and includes a full assessment, your first adjustment and a care plan. Nothing to pay when booking, and we consult in English, Spanish and French.',
      ],
      gettingHereTitle: 'Getting here from Russafa',
      gettingHere: [
        'On foot: a few minutes from the Ruzafa Market and from Carrer de Cuba.',
        'By car: the Ruzafa Market car park is the one we recommend to anyone coming from outside the neighbourhood.',
        'By metro: the nearest station is Xàtiva.',
        'Hours: Tuesday to Thursday, 9 to 13 h and 15 to 20 h.',
      ],
      whoTitle: 'Who we see in Russafa',
      who: [
        'Locals who spend long hours at a desk and arrive with lower back or neck pain.',
        'Pregnant patients and families with babies and children: the team includes chiropractors specialised in maternal and paediatric care.',
        'Runners who train along the Turia Gardens and prepare for events like the Valencia Marathon.',
        'Newcomers and expats looking for a chiropractor who speaks English: a large share of our Google reviews are written by patients from abroad.',
      ],
      faqTitle: 'Frequently asked questions',
      faqs: [
        {
          q: 'Is ColumnaQuiro in Russafa or in the Eixample?',
          a: 'On the border of both: Carrer dels Vivons 29, a short walk from the Ruzafa Market and from the rest of the Eixample.',
        },
        {
          q: 'Do I need a medical referral to book?',
          a: 'No. You can book your first visit directly. During the assessment we review your history and, if your case needs another specialist, we tell you.',
        },
        {
          q: 'How long is the first visit?',
          a: 'Longer than follow-ups: it includes a full health history and a physical examination before any care plan is proposed.',
        },
        {
          q: 'Where do I park?',
          a: 'At the Ruzafa Market car park, a few minutes on foot from the clinic.',
        },
      ],
    },
  },
  eixample: {
    routeKey: 'eixample',
    es: {
      title: "Quiropráctico en L'Eixample de València · Primera visita 70 € | ColumnaQuiro",
      description:
        "Centro quiropráctico en L'Eixample, València: Carrer dels Vivons 29, cerca del Mercado de Ruzafa y del metro Xàtiva. Primera visita 70 € con evaluación y primer ajuste. Reserva online.",
      eyebrow: "Quiropráctico en L'Eixample · València",
      heading: "Tu quiropráctico en L'Eixample",
      intro: [
        "L'Eixample es el distrito con más búsquedas de 'quiropráctico cerca de mí' del centro de València. ColumnaQuiro está dentro de él, en Carrer dels Vivons, 29, a un paseo corto desde la Gran Via y desde Russafa.",
        'La primera visita cuesta 70 € e incluye una evaluación completa, tu primer ajuste y un plan de cuidado. No pagas nada al reservar.',
      ],
      gettingHereTitle: "Cómo llegar desde los barrios de L'Eixample y alrededores",
      gettingHere: [
        'Russafa: estás al lado; el Mercado de Ruzafa queda a pocos minutos a pie.',
        'Pla del Remei y Gran Via: un paseo corto cruzando hacia Russafa.',
        'Ciutat Vella y Extramurs: andando o en metro hasta Xàtiva, la estación más cercana.',
        'En coche: el parking del Mercado de Ruzafa.',
        'Horario: martes, miércoles y jueves, de 9 a 13 h y de 15 a 20 h.',
      ],
      whoTitle: "Lo que más vemos en consulta desde L'Eixample",
      who: [
        'Lumbalgia y ciática en personas que combinan oficina con desplazamientos a pie o en bici.',
        'Dolor de cuello y de cabeza por horas de pantalla.',
        'Seguimiento de escoliosis en adultos y adolescentes.',
        'Cuidado durante el embarazo y en los primeros años de bebés y niños.',
      ],
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        {
          q: "¿Es lo mismo un quiropráctico en L'Eixample que en el centro de València?",
          a: "L'Eixample forma parte del centro. Si buscas un centro quiropráctico céntrico, ColumnaQuiro te queda cerca vengas de donde vengas.",
        },
        {
          q: '¿Puedo ir andando desde Ciutat Vella o Russafa?',
          a: 'Sí. Los dos están a poca distancia a pie de Carrer dels Vivons, 29.',
        },
        {
          q: '¿Hace falta pedir cita con mucha antelación?',
          a: 'Recomendamos unos días de margen, aunque a veces hay huecos más cercanos. El calendario online muestra la disponibilidad real.',
        },
        {
          q: '¿Qué llevo a la primera visita?',
          a: 'Si tienes informes médicos o pruebas de imagen recientes, tráelos. No hace falta nada más.',
        },
      ],
    },
    en: {
      title: "Chiropractor in L'Eixample, Valencia · First visit €70 | ColumnaQuiro",
      description:
        "English-speaking chiropractic clinic in L'Eixample, Valencia: Carrer dels Vivons 29, near the Ruzafa Market and Xàtiva metro. First visit €70 with assessment and first adjustment. Book online.",
      eyebrow: "Chiropractor in L'Eixample · Valencia",
      heading: "Your chiropractor in L'Eixample",
      intro: [
        "L'Eixample is the central district where most 'chiropractor near me' searches in Valencia come from. ColumnaQuiro is inside it, at Carrer dels Vivons, 29, a short walk from Gran Via and from Russafa.",
        'The first visit is €70 and includes a full assessment, your first adjustment and a care plan. Nothing to pay when booking, and we consult in English, Spanish and French.',
      ],
      gettingHereTitle: "Getting here from around L'Eixample",
      gettingHere: [
        'Russafa: next door; the Ruzafa Market is a few minutes on foot.',
        'Pla del Remei and Gran Via: a short walk across into Russafa.',
        'Ciutat Vella and Extramurs: on foot, or by metro to Xàtiva, the nearest station.',
        'By car: the Ruzafa Market car park.',
        'Hours: Tuesday to Thursday, 9 to 13 h and 15 to 20 h.',
      ],
      whoTitle: "What we see most from L'Eixample",
      who: [
        'Lower back pain and sciatica in people who combine desk work with walking or cycling around the city.',
        'Neck pain and headaches from long hours at a screen.',
        'Ongoing care for scoliosis in adults and teenagers.',
        "Care during pregnancy and through a baby's or child's early years.",
      ],
      faqTitle: 'Frequently asked questions',
      faqs: [
        {
          q: "Is a chiropractor in L'Eixample the same as one in central Valencia?",
          a: "L'Eixample is part of the centre. Wherever you start from, a centrally located clinic like ColumnaQuiro is easy to reach.",
        },
        {
          q: 'Can I walk from Ciutat Vella or Russafa?',
          a: 'Yes. Both are within easy walking distance of Carrer dels Vivons, 29.',
        },
        {
          q: 'Do I need to book far in advance?',
          a: 'A few days ahead is wise, though closer slots sometimes open up. The online calendar shows real availability.',
        },
        {
          q: 'What should I bring to the first visit?',
          a: 'Any recent medical reports or imaging you have. Nothing else is needed.',
        },
      ],
    },
  },
}
