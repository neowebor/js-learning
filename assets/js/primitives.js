'use strict';

// console.log('test text');

// const textFromServer = 'test text';

// console.log(textFromServer);

// const str1 = 'test';
// console.log(str1);

// const str2 = new String('test');
// console.log(str2);

// const bool2 = new Boolean(false);

// if(bool2) {
//   console.log(1);
// }

// // Використання функцій Boolean, String, Number

// const test3 = [];

// console.log(Number(test3));

// // об'єкт Math
// console.log(Math.PI);

// // повертає абсолютне значення числа (Модуль)
// console.log(Math.abs(10)); // 10
// console.log(Math.abs(0)); // 0
// console.log(Math.abs(-20)); // 20

// // округлення до більшого цілого числа
// console.log(Math.ceil(5.6)); // 6
// console.log(Math.ceil(2.1)); // 3

// // округлення до меньшого цілого числа
// console.log(Math.floor(5.6)); // 5
// console.log(Math.floor(5.9)); // 5

// // округлення до ближчого цілого числа
// console.log(Math.round(5.6)); // 6
// console.log(Math.round(2.1)); // 2
// console.log(Math.round(2.5)); // 3

// // знаходження мінімального / максимального числа
// console.log(Math.min(10, 2, 5, -7, -10, 1000, 12, -63, 0)); // -63
// console.log(Math.max(10, 2, 5, -7, -10, 1000, 12, -63, 0)); // 1000

// // зведення в ступінь
// // 5 ** 3
// console.log(Math.pow(5, 3)); // 125

// // повертає випадкове значення у діапазоні
// // від 0 до 1 (але одиниця не входить у діапазон)
// console.log(Math.random());


// // Методи примітивів 

// console.log(true);
// const boolValue = true;

// console.log(true.toString());
// console.log(boolValue.toString());

// // Number
// const num1 = 15.4;
// console.log(num1.toExponential());

// console.log(num1.toFixed()); // 16
// console.log(num1.toFixed(1)); // 15.5



// String

const Objstr = new String('this is test string');

const str = 'this is test string'

console.log(str.length);
console.log(str[2]);

// str[2] = 'I'; // error

// charAt - повертає символ який находиться по вказаному індексу в рядку
const symbol1 = str.charAt(2); // i

// charCodeAt - повертає Юнікодівське значення символа яке находиться по вказаному індексу в рядку
const unicodeNum1 = str.charCodeAt(2); // 105

// concat - повертає новий рядок, в якому до старого приєднуються (конкатенаються) аргументи конкату (зазвичай рядки)
//str + ' CONCAT ' + 10 + '!!!'

const concatStr = str.concat(' CONCAT ', 10, '!!!');

// includes - відповідає чи входить рядок-аргумент у склад рядка у якого викликаємо метод
const includes1 = str.includes('tesasdsdt'); // false
const includes2 = str.includes('test') // true

// indexOf - повертає індекс першого входження рядка-аргумента у рядку, у якого метода його викликали
const indexOf1 = str.indexOf('test');


// slice - робить копію частини рядка
const copy1 = str.slice(0, 4) // test
const copy2 = str.slice(0, -5) // his is test s

// trim - створює новий рядок в якому пробіли з початку та кінця видаляються
const untrimemedStr = '                  John            Doe      ';

const trimmedStr = untrimemedStr.trim();

// toLowerCase / toUpperCase - створюють новий рядок який буде повністю в нижньому / верхньому регістрі

const str2 = 'Test String';

const lowerCase = str2.toLowerCase(); // 'test string'
const upperCase = str2.toUpperCase(); // 'TEST STRING'
















