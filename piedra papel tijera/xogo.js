"use strict";

let userCount = new Array(0, 0, 0);
let computerCount = new Array(0, 0, 0);

// console.log(userCount);

while (userCount[0] < 3 && computerCount[0] < 3) {
  let userTrick = prompt("pedra, papel, tesoira");
  let x = Math.random().toFixed(1);

  if (userTrick === "pedra") {
    if (x <= 0.3) {
      alert("empataches");
      userCount[2] = userCount[2] + 1;
      computerCount[2] = computerCount[2] + 1;
    } else if (x <= 0.6) {
      alert("perdiches");
      computerCount[0] = computerCount[0] + 1;
      userCount[1] = userCount[1] + 1;
    } else {
      alert("gañaches");
      computerCount[1] = computerCount[1] + 1;
      userCount[0] = userCount[0] + 1;
    }
  }

  if (userTrick === "papel") {
    if (x <= 0.3) {
      alert("gañaches");
      userCount[0] = userCount[0] + 1;
      computerCount[1] = computerCount[1] + 1;
    } else if (x <= 0.6) {
      alert("empataches");
      computerCount[2] = computerCount[2] + 1;
      userCount[2] = userCount[2] + 1;
    } else {
      alert("perdiches");
      computerCount[0] = computerCount[0] + 1;
      userCount[1] = userCount[1] + 1;
    }
  }

  if (userTrick === "tesoira") {
    if (x <= 0.3) {
      alert("perdiches");
      userCount[1] = userCount[1] + 1;
      computerCount[0] = computerCount[0] + 1;
    } else if (x <= 0.6) {
      alert("gañaches");
      computerCount[1] = computerCount[1] + 1;
      userCount[0] = userCount[0] + 1;
    } else {
      alert("empataches");
      computerCount[2] = computerCount[2] + 1;
      userCount[2] = userCount[2] + 1;
    }
  }
}

console.log(userCount);
console.log(computerCount);
