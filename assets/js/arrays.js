const vipEmails = new Array(
  'asdqwe@test',
  'asdfgbch@test',
  '1234tgdhhxc@test',
  '67fhfjha234@test'
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

const users = new Array(
  'Kirill',
  'Alexandr',
  'Viktor'
);


// 2. Через літерал
// пустий масив
const arr4 = [];

// масив з якимись елементами
const arr5 = [50, 515, 8478, 4456];

const users2 = ['Lesha', 'Anton', 'Maxim'];

arr5[4] = Infinity;

// arr5[7] = NaN;

// додавання елементів у кінець массиву
arr5.push('push1', 'push2', 'push3');
arr5.push(null, {}, 67, undefined);

const newArray5Length = arr5.push(1500000);
// console.log(newArray5Length);


// видалення останнього елемента масиву
const deletedValue = arr5.pop();

users.push('EREN EGER');
users.push('MIKASA AKERMAN', 'ARMIN');

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
  test: true
})

// console.log(arr5);

arr5.unshift(-1000, 'test 12323', null);

// console.log(arr5);

users.unshift('Violetta', 'Viktoria')
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

copy4[2].newProp = 'wifi';

// метод join

/* 
  Перетворю масив на рядок 
  елементи розмежуються або комами 
  або рядком який передали як параметр
*/

const joinTest = ['Name 1', 'Name 2', true, 1000];

const stringFromArr = joinTest.join();




