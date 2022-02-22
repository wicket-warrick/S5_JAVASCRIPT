"use strict";

function bomb(attempt, password) {
  for (let i = 1; i <= attempt; i++) {
    let key = prompt(
      `Introduce a clave. Tes ${attempt + 1 - i} oportunidades:`
    );
    if (key === password) {
      console.log(`NORABOA`);
      break;
    } else if (key !== password && i < attempt) {
      continue;
    } else {
      console.log("Non adivinaches o código.volve comezar se queres");

      if (confirm("desexas seguir xogando?")) {
        bomb(attempt, password);
      }
    }
  }
  console.log("fin da partida");
}

bomb(3, "derf");
