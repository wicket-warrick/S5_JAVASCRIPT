"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

// metodo1
const listaFinal = new Set(names);
console.log(listaFinal);
//
function people(array) {
  const listaFinal = new Set(array);
  console.log(listaFinal);
}

people(names);

// metodo2
const listaFinal1 = [];

for (const name of names) {
  if (listaFinal1[name]) {
    listaFinal1[name] = listaFinal1[name];
  } else {
    listaFinal1[name] = 1;
  }
}
console.log(listaFinal1);

function poeple2(array) {
  const listaFinal1 = [];

  for (const name of array) {
    if (listaFinal1[name]) {
      listaFinal1[name] = listaFinal1[name];
    } else {
      listaFinal1[name] = 1;
    }
  }
  console.log(listaFinal1);
}

poeple2(names);

// metodo3

const listaFinal2 = [];

names.forEach((name) => {
  if (!listaFinal2.includes(name)) {
    listaFinal2.push(name);
  }
});
console.log(listaFinal2);

function people3(array) {
  names.forEach((name) => {
    if (!listaFinal2.includes(name)) {
      listaFinal2.push(name);
    }
  });
  console.log(listaFinal2);
}
people3(names);
