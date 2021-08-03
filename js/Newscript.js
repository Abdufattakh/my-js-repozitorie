"use strict";
//====================Простое обращение с пользователям

// alert('Hello world')

/**confirm =>Функция confirm отображает модальное
 * окно с текстом вопроса question и двумя кнопками:
 * OK и Отмена.Результат – true, если нажата кнопка OK.
 *  В других случаях – false.
 */

// const result = confirm("are you here");
// console.log(result);

// const answer = +prompt("вам есть 18?", "18");
// console.log(answer + 5);
// строки

// const answers = [];
// answers[0] = prompt("Как ваше имя ?", "");
// answers[1] = prompt("Как ваше фамилия ?", "");
// answers[2] = prompt("Сколько вам лет ?", "");
// console.log(typeof answers);
// console.log(null);

// ========================================================================================

//================== Интерполяция

// const category = "toys";
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Првет, ${user}`);

// =========================================================================================
// =====================  Операторы

// console.log('arr' + '- object');
// console.log('arr' + '- object');
//

// ==========================  Задание 1
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// // ==========================  Задание 2
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// // ==========================  Задание 3
// const movies = {};
// const question1 = prompt("один из последных просмотренных фильмов ?", ""),
//   a = prompt("один из последных просмотренных фильмов ?", "");
// const qustion2 = +prompt("На сколько оцените его"),
//   b = +prompt("На сколько оцените его");

// personalMovieDB.movies[question1] = a;
// personalMovieDB.movies[qustion2] = b;
// console.log(personalMovieDB);