"use strict";

let num = 20;
// Function decloration;

function FirstMessage(text) {
  console.log(text);
  num = 15;
}
FirstMessage("hello world!");
console.log(num);

function calc(a, b) {
  return a + b;
}
console.log(calc(4, 3));

// Function expression

const logger = function () {
  console.log("Helllo");
};
logger();
// strelochnaya function

const cal = (a, b) => {
  console.log('hy');
  return a + b;
};
