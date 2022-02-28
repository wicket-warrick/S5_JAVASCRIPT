"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};
// SOLUCIÓN DIRECTA
// for (const name in people) {
//   if (people[name] < 18) {
//     console.log(`${name} é menor de idade`);
//   } else {
//     console.log(`${name} é maior de idade`);
//   }
// }
// SOLUCIÓN A TRAVÉS DE FUNCIÓN
const age = (listaDeGente) => {
  for (const name in listaDeGente) {
    if (listaDeGente[name] < 18) {
      console.log(`${name} é menor de idade`);
    } else {
      console.log(`${name} é maior de idade`);
    }
  }
};

age(people);
