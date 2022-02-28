"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
  "clasica",
  "pizzbur",
  "xamon e queixo",
  "alemana",
];

let j = 0;
for (const pizza of catalogo) {
  for (let i = j; i < catalogo.length - 1; i++) {
    console.log(`${pizza} y ${catalogo[i + 1]}`);
  }
  j = j + 1;
}
