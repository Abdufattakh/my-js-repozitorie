"use strict";

// ассоцативные объекты

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    setTimeout(function () {
      console.log("test");
    }, 500);
  },
};
options.makeTest();

delete options.height;
//==========  Помогает взять lenght of objects

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);
for (let key in options) {
  if (typeof options === "object") {
    for (const i in options[key]) {
      console.log(`Svoystva ${i} imeet znacheniye ${key[i]}`);
    }
  } else {
    console.log(`Svoystva ${key} imeet znacheniye ${options[key]}`);
  }
}

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойства ${key} имеет значение ${options[key]}`);
//   }
// }
