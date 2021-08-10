"use strict";

// Object.create sozdayet obyekti
// setPrototypeOf
// V javascripte vse sostoit iz rototi[a]


let str = "same";
let strObj = new String(str);
console.log(str);
console.log(strObj);

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Helllo");
  },
};

const john = Object.create(soldier);
john.sayHello();

// const john = {
//   health: 100,
// };

// // john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier)
//
// console.log(john.armor);
