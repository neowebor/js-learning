'use strict';

// console.log('test text');

const textFromServer = 'test text';

// console.log(textFromServer);

const str1 = 'test';
console.log(str1);

const str2 = new String('test');
console.log(str2);

const bool2 = new Boolean(false);

if(bool2) {
  console.log(1);
}

// Використання функцій Boolean, String, Number

const test3 = [];

console.log(Number(test3));

// об'єкт Math
console.log(Math.PI);

// повертає абсолютне значення числа (Модуль)
console.log(Math.abs(10)); // 10
console.log(Math.abs(0)); // 0
console.log(Math.abs(-20)); // 20

// округлення до більшого цілого числа
console.log(Math.ceil(5.6)); // 6
console.log(Math.ceil(2.1)); // 3

// округлення до меньшого цілого числа
console.log(Math.floor(5.6)); // 5
console.log(Math.floor(5.9)); // 5

// округлення до ближчого цілого числа
console.log(Math.round(5.6)); // 6
console.log(Math.round(2.1)); // 2
console.log(Math.round(2.5)); // 3

// знаходження мінімального / максимального числа
console.log(Math.min(10, 2, 5, -7, -10, 1000, 12, -63, 0)); // -63
console.log(Math.max(10, 2, 5, -7, -10, 1000, 12, -63, 0)); // 1000

// зведення в ступінь
// 5 ** 3
console.log(Math.pow(5, 3)); // 125

// повертає випадкове значення у діапазоні
// від 0 до 1 (але одиниця не входить у діапазон)
console.log(Math.random());










