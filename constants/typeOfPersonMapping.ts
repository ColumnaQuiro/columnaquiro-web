import type { TypeOfPersonLocales } from '~/types/Person'

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

export const typeOfPersonLocales: TypeOfPersonLocales = {
  en: {
    'discapacidades-motoras-intelectuales': 'disabled-people',
    'bebes-y-ninos': 'kids',
    'personas-mayores': 'elder-people',
    embarazadas: 'pregnant-women',
    trabajadores: 'workers',
    deportistas: 'athletes'
  },
  es: {
    workers: 'trabajadores',
    athletes: 'deportistas',
    'pregnant-women': 'embarazadas',
    kids: 'bebes-y-ninos',
    'disabled-people': 'discapacidades-motoras-intelectuales',
    'elder-people': 'personas-mayores'
  }
}
