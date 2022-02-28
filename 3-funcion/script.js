"use strict";

function password(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function play(min, max) {
  let pass = password(min, max);
  console.log(pass);

  for (let i = 1; i <= 5; i++) {
    let move = Number(
      prompt(`Por favor xogadas , introduce a combinación.Tes ${5 + 1 - i}`)
    );

    while (move < min || max < move) {
      move = Number(
        prompt(
          `Por favor, introduce un número entre ${min} e ${max} (ambos incluidos).`
        )
      );
    }

    if (move === pass) {
      alert(`NORABOA`);
      break;
    } else if (move !== pass && i < 5) {
      alert(`ERROR. Contrasinal incorrecta.Volva tentalo`);
    } else {
      alert("Non adivinaches o código.volve comezar se queres");
      if (confirm("desexas seguir xogando?")) {
        play(min, max);
      }
    }
  }
  alert(`FIN DA PARTIDA`);
  if (confirm("desexas seguir xogando?")) {
    play(min, max);
  }
}

play(0, 100);
