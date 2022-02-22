"use strict";

function arbore(height, symbol) {
  let gap = " ";
  for (let i = 1; i <= height; i++) {
    let gap1 = gap.repeat(height - i);
    let symbol1 = symbol.repeat(i);
    console.log(gap1 + symbol1);
  }
}

arbore(5, "*");

arbore(5, "/");

arbore(14, "*");
