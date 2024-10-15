'use strict';
// let data = 'letter';

// function log1() {
//   console.log(`log1: ${data}`);
// }

// log1(); // letter

// function log2() {
//   let data = 151;
//   console.log(`log2 outer: ${data}`);
// }

// log2(); 

// function log3() {
//   let data = NaN;

//   console.log(`log3: ${data}`); // NaN
  
//   log1();

//   if(true) {
//     let data = true;
//     console.log(`log3 inner: ${data}`); // true
//   }
// }


// log3(); 


// // Лексичне оточення функції - спеціальний об'єкт, який містить всі змінні, які функція бачить. Розраховується на момент створення функції

// function log4() {
//   let data = NaN;

//   function innerLog() {
//     console.log(`innerLog: ${data}`);
//   }

//   function innerInnerLog() {
//     let data = 123;

//     innerLog();
//   }

//   innerLog();
//   innerInnerLog();
// }

// log4();

// function createGreeting(name) {

//   function greet() {
//     return `Hello, ${name}`;
//   }

//   return greet;
// }

// const greetAnton = createGreeting('Anton');

function createId () {
  let currentId = 0;

  function getNewId () {
    currentId++;
    return currentId;
  }

  function getId () {
    return currentId;
  }

  const returningObject = {
    getId,
    getNewId
  };

  return returningObject;
}

const userIdHelper = createId();


const createMultiplier = x => y => x *= y;


const multiplyResult = createMultiplier(5);

console.log(multiplyResult(2)); // 2 * 5 = 10
console.log(multiplyResult(2)); // 20
console.log(multiplyResult(100)); // 2000

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) );

// Смотри на то, что у тебя inBetween возвращает функцию и эта функция вызывается для каждого элемента в фильтре (так работает filter)



// ВАЖНО. Обратите внимание — когда функция выполняется, её контекст выполнения удаляется из стека, но её лексическое окружение может или не может быть удалено из памяти, в зависимости от того, ссылается ли на это лексическое окружение другое лексическое окружение.

/* 
  personLexicalEnvironment = {
  environmentRecord: {
    name : 'Peter',
    displayName: < displayName function reference>
  }
  outer: <globalLexicalEnvironment>
}

Когда функция person завершится, её контекст выполнения выкинется из стека. Но её лексическое окружение всё ещё останется в памяти, так как на него ссылается лексическое окружение его внутренней функции displayName. Таким образом, её переменные всё ещё будут доступны в памяти.
*/

// Замыкание это способ получения доступа и управления внешними переменными из функции.


