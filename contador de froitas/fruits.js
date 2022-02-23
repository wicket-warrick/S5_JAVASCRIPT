"use strict";

const fruitBasket = [
  "laranxa",
  "laranxa",
  "limón",
  "pera",
  "limón",
  "plátano",
  "laranxa",
];

const fruitsCount = {};

for (const fruit of fruitBasket) {
  if (fruit in fruitsCount) {
    fruitsCount[fruit] = fruitsCount[fruit] + 1;
  } else {
    fruitsCount[fruit] = 1;
  }
}
console.log(fruitsCount);

for (const fruit of fruitBasket) {
  if (fruitsCount[fruit]) {
    fruitsCount[fruit] = fruitsCount[fruit] + 1;
  } else {
    fruitsCount[fruit] = 1;
  }
}
console.log(fruitsCount);
