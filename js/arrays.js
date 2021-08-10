const arr = [3, 15, 85, 5465, 1, 5, 9];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
  return a - b;
}
// arr.pop(); // удаляет с конца
// arr.push(50);
// console.log(arr);

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));

// arr.forEach(function (item, i, arr) {
//   console.log(`${item}: ${i} vnutri massiva ${arr}`);
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const value of arr) {
//     console.log(value);
// }

// const arr = [1, 2, 5, 6, 8];
// console.log(arr.length);

// arr.forEach(function (item, i , arr) {
// console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// // for (const iterator of arr) {
// //     console.log(iterator);
// // }

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// let rim = +prompt("napishite lubuyu sifru", "");
// if (rim === 2) {
//   alert("II");
// } else {
//   alert(3);
// }
