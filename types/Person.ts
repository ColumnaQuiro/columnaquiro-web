export type UrlEsPersonType = 'discapacidades-motoras-intelectuales' | 'bebes-y-ninos' | 'personas-mayores' | 'embarazadas' | 'trabajadores' | 'deportistas'
export type UrlEnPersonType = 'disabled-people' | 'kids' | 'elder-people' | 'pregnant-women' | 'workers' | 'athletes'
export type TypeOfPersonLocales = {
  [key in UrlEnPersonType | UrlEsPersonType]:
  { en: UrlEnPersonType, es: UrlEsPersonType }
}
