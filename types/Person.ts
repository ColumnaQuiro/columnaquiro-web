export type UrlEsPersonType = 'discapacidades-motoras-intelectuales' | 'bebes-y-ninos' | 'personas-mayores' | 'embarazadas' | 'trabajadores' | 'deportistas'
export type UrlEnPersonType = 'disabled-people' | 'kids' | 'elder-people' | 'pregnant-women' | 'workers' | 'athletes'
export interface TypeOfPersonLocales {
  en: {
    [key in UrlEsPersonType]: UrlEnPersonType
  },
  es: {
    [key in UrlEnPersonType]: UrlEsPersonType
  }
}
