export const typeOfPersonToKey = new Map<string, string>([
  ['discapacidades-motoras-intelectuales', 'disabled'],
  ['disabled-people', 'disabled'],
  ['bebes-y-ninos', 'kids'],
  ['kids', 'kids'],
  ['personas-mayores', 'elder'],
  ['elder-people', 'elder'],
  ['embarazadas', 'pregnant'],
  ['pregnant-women', 'pregnant'],
  ['trabajadores', 'workers'],
  ['workers', 'workers'],
  ['deportistas', 'sport'],
  ['athletes', 'sport']
])

export const typeOfPersonLocales = {
  'discapacidades-motoras-intelectuales': {
    en: 'disabled-people',
    es: 'discapacidades-motoras-intelectuales'
  },
  'bebes-y-ninos': {
    en: 'kids',
    es: 'bebes-y-ninos'
  },
  'personas-mayores': {
    en: 'elder-people',
    es: 'personas-mayores'
  },
  embarazadas: {
    en: 'pregnant-women',
    es: 'embarazadas'
  },
  trabajadores: {
    en: 'workers',
    es: 'trabajadores'
  },
  deportistas: {
    en: 'athletes',
    es: 'deportistas'
  },
  workers: {
    en: 'workers',
    es: 'trabajadores'
  },
  athletes: {
    en: 'athletes',
    es: 'deportistas'
  },
  'pregnant-women': {
    en: 'pregnant-women',
    es: 'embarazadas'
  },
  kids: {
    en: 'kids',
    es: 'bebes-y-ninos'
  },
  'disabled-people': {
    en: 'disabled-people',
    es: 'discapacidades-motoras-intelectuales'
  },
  'elder-people': {
    en: 'elder-people',
    es: 'personas-mayores'
  }
}
