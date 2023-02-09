export const typeOfPersonToKey = new Map<string, string>([
  ['discapacidades-motoras-intelectuales', 'disabled'],
  ['bebes-y-ninos', 'kids'],
  ['personas-mayores', 'elder'],
  ['embarazadas', 'pregnant'],
  ['trabajadores', 'workers'],
  ['deportistas', 'sport']
])

export const keyToTypeOfPerson = new Map<string, string>([
  ['disabled', 'discapacidades-motoras-intelectuales'],
  ['kids', 'bebes-y-ninos'],
  ['elder', 'personas-mayores'],
  ['pregnant', 'embarazadas'],
  ['workers', 'trabajadores'],
  ['sport', 'deportistas']
])
