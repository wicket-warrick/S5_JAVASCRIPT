"use strict";

const password = prompt("cal é a clave para adiviñar?");
const attempt = Number(prompt(`Número de intentos?`));

for (let i = 1; i <= attempt; i++) {
  let key = prompt(`Introduce a clave. Tes ${attempt + 1 - i} oportunidades:`);
  if (key === password) {
    console.log(`NORABOA`);
    break;
  } else if (key !== password && i < attempt) {
    continue;
  } else {
    console.log("Non adivinaches o código.volve comezar");
  }
}
console.log("fin");
