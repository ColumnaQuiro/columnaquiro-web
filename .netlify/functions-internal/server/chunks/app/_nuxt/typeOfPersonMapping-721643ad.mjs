const typeOfPersonToKey = /* @__PURE__ */ new Map([
  ["discapacidades-motoras-intelectuales", "disabled"],
  ["bebes-y-ninos", "kids"],
  ["personas-mayores", "elder"],
  ["embarazadas", "pregnant"],
  ["trabajadores", "workers"],
  ["deportistas", "sport"]
]);
const keyToTypeOfPerson = /* @__PURE__ */ new Map([
  ["disabled", "discapacidades-motoras-intelectuales"],
  ["kids", "bebes-y-ninos"],
  ["elder", "personas-mayores"],
  ["pregnant", "embarazadas"],
  ["workers", "trabajadores"],
  ["sport", "deportistas"]
]);

export { keyToTypeOfPerson as k, typeOfPersonToKey as t };
//# sourceMappingURL=typeOfPersonMapping-721643ad.mjs.map
