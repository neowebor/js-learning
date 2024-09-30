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



