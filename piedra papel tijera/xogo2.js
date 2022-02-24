"use strict";
function xogada(minimo, maximo) {
  let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

const trick = ["pedra", "papel", "tesoira"];
let userCount = new Array(0, 0, 0);
let pcCount = new Array(0, 0, 0);
let userTrick;
//
while (userCount[0] < 3 && pcCount[0] < 3) {
  let pcTrick = xogada(0, 2);
  userTrick = Number(prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2"));
  alert(
    "elixes " + trick[userTrick] + ".O ordenador escolleu " + trick[pcTrick]
  );

  if (userTrick === pcTrick) {
    alert("Empate");
    userCount[2] = userCount[2] + 1;
    pcCount[2] = pcCount[2] + 1;
  } else if (
    (userTrick === 0 && pcTrick === 1) ||
    (userTrick === 1 && pcTrick === 2) ||
    (userTrick === 2 && pcTrick === 0)
  ) {
    alert("Perdiches");
    userCount[1] = userCount[1] + 1;
    pcCount[0] = pcCount[0] + 1;
  } else {
    alert("Gañaches");
    userCount[0] = userCount[0] + 1;
    pcCount[1] = pcCount[1] + 1;
  }
}

if (userCount[0] === 3) {
  alert(
    `Noraboa, gañaches a partida.O resultado da partida foi:\nGañadas:${userCount[0]}\nPerdidas:${userCount[1]}\nEmpatadas:${userCount[2]}`
  );
}
if (pcCount[0] === 3) {
  alert(
    `Perdiches.Recarga e volve tentalo.O resultado da partida foi:\nGañadas:${userCount[0]}\nPerdidas:${userCount[1]}\nEmpatadas:${userCount[2]}`
  );
}
