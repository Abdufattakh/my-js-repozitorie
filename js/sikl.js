"use strict";

//  Пока что => цикл while

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// Сделай что-то =>  цикл do

// do {
//   console.log(num);
//   num++;
// } while (num < 55);
let num = 50;

for (let i = 1; i < 8; i++) {
  if (i == 6) {
    // break;
    continue;
  }

  console.log(i);
  // console.log(num);
  // num++;
}

var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
console.log(x);