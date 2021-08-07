"use strict";

function learnJs(learnEnglish, callback) {
  setTimeout(function () {
    console.log(`I learn: ${learnEnglish}`);
  }, 1000);
  callback();
}
function done(){
    console.log(`I require IELTS`);
}
learnJs("English", done);

// function first(){
// setTimeout(function(){
//     console.log(1);
// },500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJs(lang, callback){
//     setTimeout(function(){
//         console.log(`я учу ${lang}`);
//     },1500);
// callback();
// }

// function done(){
//     console.log('Я прошел этот урок');
// }

// learnJs('JavaSCRIPT', done);

// function learnJs(hello,callback){
//     setTimeout(function(){
//         console.log(`i learn ${hello}`);
//     },500);
//     callback();
// }
// function done(){
//     console.log('hello bro');
// }
// learnJs(done);
