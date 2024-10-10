// Функції - повторно використовующийся блок коду
// alert();

// Параметри функції - речі які передаємо всередину функції як додаткову інфу

// let text = 'test';
// console.log(text, 123, 'Hello');

// let username;
// username = prompt('Enter your name');

// console.log(username);

// const userName = prompt('Enter your name');

// alert('Hello, ' + userName + '!')

// const num1 = prompt("Enter first number");
// const num2 = prompt("Enter second number");

// alert(+num1 + +num2)

// const num1 = parseInt(prompt("Enter first number"));
// const num2 = parseInt(prompt("Enter second number"));

// alert(num1 + num2)

// Створення функцій

// function expression (функціональний вираз)
//const getSumOfTwoNumbers = function(firstNumber, secondNumber) {
// тіло функції - блок коду який буде виконано коли функція запуститься
// console.log('Hello from function');
// console.log('You can do anything you want here');
// console.log('Ваше значення: ' + firstParam);

// const firstNumber = +prompt("Enter first number");
// const secondNumber = +prompt("Enter second number");

// const sumResult = firstNumber + secondNumber;

// console.log(firstNumber + secondNumber);

// return каже функції її підсумковий результат роботи
// Після першого виконаного рядка з return функція зупиняє свою роботу

//   return sumResult;
// }

// const num1 = +prompt('Enter first number');
// const num2 = +prompt('Enter second number');

// const result = getSumOfTwoNumbers(num1, num2);

// console.log('Result is: ' + result);

// const result1 = myIDontKnowThisNumberFunction(10);

// myIDontKnowThisNumberFunction(10);
// myIDontKnowThisNumberFunction()

//function declaration
// function myFunc() {
//   console.log('123');

// }

// Чисті функції
/*
  Чиста функція - це функція, яка задовільняє двом вимогам:
    1. При однакових вхідних аргументах функція завжди повертає однаковий результат (детермінованість функції)
    2. У функції мають бути відсутні побічні впливи/ефекти
*/
function sum(num1, num2) {
  return num1 + num2;
}

// sum - детермінована функція
const res1 = sum(2, 2);

// badSum - недетермінована функція
function badSum(num1, num2) {
  return num1 + num2 + Math.random();
}

const res2 = badSum(2, 2);

//
function multiply(num1, num2) {
  return num1 * num2;
}

function getSquare(num) {
  return multiply(num, num);
}

// Функції вищого порядку (HOF - high order function)
/* 
  функція вищого порядку - функція яка або:
    1. приймає як аргумент іншу функцію
    2. повертає як результат іншу функцію
*/

// forEach - функція вищого порядку тому що приймає іншу функцію

//

// function hofExample2 () {
//   const innerFunc = function() {

//   }

//   return innerFunc;
// }

// const result2 = hofExample2();

function sayHello(userName = "Guest") {
  return `Hello ${userName}`;
}

const hello1 = sayHello("John");
console.log(hello1);

const hello2 = sayHello();
console.log(hello2);

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function declarationSum(num1, num2) {
  return num1 + num2;
}

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const expressionSum = function (num1, num2) {
  return num1 + num2;
};

// arrow function (функції - стрілки)
/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const arrowSum = (num1, num2) => {
  return num1 + num2;
};

// 1. У них існує скорочена версія
const arrowSumCompact = (num1 = 2, num2 = 4) => num1 + num2;

// 1.5 особливості запису дужок параметрів
const arrow1 = (param) => console.log(param);

// 2. відсутній arguments
function test() {
  console.log(arguments);
}

const arrowTest = () => {
  console.log(arguments); // error
};

// 3. Не можуть використовуватися як конструктори

// 4. У стрілок відсутній власний this
// стрілки беруть значення this з батьківського контексту виконання

const arrowThis = () => {
  console.log(this);
};

const eShopObject = {
  name: "єШоп",
  email: "admin@eshop.com",
  products: [
    { name: "Prod 1", price: 1000, quantity: 5 },
    { name: "Prod 2", price: 269, quantity: 5000 },
    { name: "Prod 3", price: 1233, quantity: 52323 },
    { name: "Prod 4", price: 222222, quantity: 877 },
    { name: "Prod 5", price: 800, quantity: 100 },
  ],
  logAllProducts: function() {

    this.products.forEach(function (product) {
      console.log(`Магазин ${this.name} продає на розетці товар з назвою ${product.name} і ціною ${product.price} `)
    });
  },
  logAllProducts2: function() {

    const callbackWithBadThis = function(product) {
      console.log(`Магазин ${this.name} продає на розетці товар з назвою ${product.name} і ціною ${product.price} `)
    };

    const callback = callbackWithBadThis.bind(this);

    this.products.forEach(callback);
  }
};
