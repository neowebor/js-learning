const vipEmails = new Array(
  "asdqwe@test",
  "asdfgbch@test",
  "1234tgdhhxc@test",
  "67fhfjha234@test"
);

// console.log(typeof vipEmails); // масив - це варіація об'єкта (object)

// console.log(vipEmails);
// console.log(vipEmails.length);

// елемент з індексом 2
// console.log(vipEmails[2]);

// Створенння масивів

// 1. Через конструктор
// пустий масив
const arr1 = new Array();

// масив з якимись елементами
const arr2 = new Array(50, 515, 8478, 4456);

// пустий масив з певною довжиною
const arr3 = new Array(5);

const users = new Array("Kirill", "Alexandr", "Viktor");

// 2. Через літерал
// пустий масив
const arr4 = [];

// масив з якимись елементами
const arr5 = [50, 515, 8478, 4456];

const users2 = ["Lesha", "Anton", "Maxim"];

arr5[4] = Infinity;

// arr5[7] = NaN;

// додавання елементів у кінець массиву
arr5.push("push1", "push2", "push3");
arr5.push(null, {}, 67, undefined);

const newArray5Length = arr5.push(1500000);
// console.log(newArray5Length);

// видалення останнього елемента масиву
const deletedValue = arr5.pop();

users.push("EREN EGER");
users.push("MIKASA AKERMAN", "ARMIN");

const lastDeletedName = users.pop();
// console.log(lastDeletedName);

// Методи масива ------------------------------------------------------------

// Методи які сидять на функціяї конструкторах, а push/pop це методи екземплярів які сидять в конкретних масивав і дають їм функціонал

// Перевірка чи є об'єкт масивом
const isVipUsersArray = Array.isArray(users);
// console.log(isVipUsersArray);

// додавання елементів у початок масиву
// console.log(arr5);

arr5.unshift({
  test: true,
});

// console.log(arr5);

arr5.unshift(-1000, "test 12323", null);

// console.log(arr5);

users.unshift("Violetta", "Viktoria");
// console.log(users);

const firstDeletedName = users.shift();
// console.log(firstDeletedName);

// видалення та вставка елементів у будь-яку точку масиву
/* 
  Приймає необмежену кількість вхідних параметрів
  перший параметр - індекс з якого розпочинаємо зміну масива
  другий параметр - число, яке каже скільки елементів, починаючи з індексу треба видалити
  всі параметри після цього будуть вставлені на вказаний індекс після видалення елементів
*/
// console.log(arr5);

// console.log(arr5.splice(3, 1, 'hello test'));

// console.log(arr5);

// копіювання частини масиву у новий масив
/* 
  перший параметр - вказує початковий індекс
  другий параметр - вказує перед яким індексом треба зупинитися
*/

// console.log(arr5);

const copy = arr5.slice(3, 7);

// повна копія масиву
const copy1 = arr5.slice();

// копіює від 3 індексу до кінця
const copy2 = arr5.slice(3);

// негативні індексу теж працюють
const copy3 = arr5.slice(-4, -2);

const copy4 = arr5.slice(1, 5);

copy4[2].newProp = "wifi";

// метод join

/* 
  Перетворю масив на рядок 
  елементи розмежуються або комами 
  або рядком який передали як параметр
*/

const joinTest = ["Name 1", "Name 2", true, 1000];

const stringFromArr = joinTest.join();

// обертання елементів у масиві
const reverseArr = [100, 5000, -1, -2];
reverseArr.reverse();

// includes - перевіряє чи є якийсь елемент у масиві
// console.log(users.includes("Kirill")); // true

// flat
// створює масив всередені якого розрівнює вкладені масиви
// на вказану кількість рівнів
const onionArr = [
  "first",
  "second",
  [100, 200, 300],
  "third",
  [true, true, false, ["deep stuff"], false],
];

// console.log(onionArr[onionArr.length - 1][3][0]);
const flatted1 = onionArr.flat(1);
// console.log(flatted1);


/*
  Методи обходу масиву

  завжди обходять масив з початку до кінця
  кожен з методів обходу буде приймати спеціальну функцію, яку називають callback (або функція зворотнього виклику)
*/

function printSomeData(printFunction, dataToPrint) {
  printFunction(dataToPrint);
};

// printSomeData(confirm, 'test');
// printSomeData(console.log, 'test');


// forEach - виконує для кожного елемента масива callback функцію
/* 
  function callback(currentValue, index, array) {
    currentValue - поточний елемент масиву
    index - індекс поточного елементу масива
    array - посилання на масив по якому ви робите обхід
  }
*/
const forEachTestArray = [1, 2, 3, 4, 5];

// function forEachCallbackExample(currentValue, index, array) {
//   console.log('current value is');
//   console.log(currentValue);
  
//   console.log('index is');
//   console.log(index);
  
//   console.log('array value is');
//   console.log(array);
  
// }

// forEachTestArray.forEach(function (elem) {
//   console.log(elem);
// });

// map - на основі результатів роботи коллбек-функції
// та старого масиву створює новий масив

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const newArray = [];

numbers.forEach(function(number) {
  newArray.push(number * number);
});

// console.log(newArray);

const squaredNumbers = numbers.map(function(number) {
  // результат роботи коллбеку буде кластися у новий масив на поточний індекс, на якому зараз знаходиться обхід
  return number * number;
});

console.log(squaredNumbers);

// filter - створює новий масив, та заповнює його елементи, які пройшли перевірку (повернули правдиве значення) при виклику для них коллбека

const oddNumbers = numbers.filter(function (number) {
  // if(number % 2 !== 0) {

  // }
  return number % 2 !== 0;
});

console.log(oddNumbers);

// some - повертає правду якщо хоч один з елементів масиву пройшов перевірку у коллбеці (колллбек повернув правду). Повертає брехню інакше

const numbers2 = [1, 3, 2.5, 7, 9.99, 10.0001, 5];

const isThereEvenNumbers = numbers2.some(function(number) {
  return number % 2 === 0;
});

// every - повертає правду якщо всі з елементів масиву пройшов перевірку у коллбеці (колллбек повернув правду). Повертає брехню інакше


// find - повертає перший елемент, який пройшов перевірку з коллбеку. якщо кожен елемент не пройде перевірку поверне undefined

const number3 = [1, 2, 3, 4, 5, -2, 6, 7, -5];

const negativeNumber = number3.find(function (number) {
  return number < 0;
})

console.log(negativeNumber);

// findIndex - повертає перший індекс елементу, який пройшов перевірку з коллбеку. якщо кожен елемент не пройде перевірку поверне undefined

