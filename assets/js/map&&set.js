// Set (множина) - коллекція, яка зберігає всередині себе унікальні значення

// створення множин
const set1 = new Set();

// створення заповненої множини
const set2 = new Set([1, 200, 3, 4, 5, 6]);

// додавання елементів до існуючого сету
set1.add(10);
set1.add('test');
set1.add(false);

set1.add('10');
set1.add([1, 2, 3]);
set1.add([1, 2, 3]);

set1.add({});
set1.add({});

const user = {name: 'test'};
const sameUser = user;
set1.add(user);
set1.add(user);
set1.add(sameUser);

// видалення конкретного значення
const deleteResult = set1.delete('10');
/*
  deletedResult 
    true якщо елемент був видалений
    false якщо елемента у сеті не було
*/

set1.delete('10');
set1.delete({});
set1.delete(user);

// повністю очистити Set
// set1.clear();

console.log(set1);

// перевірити наявність елементу у сеті
const hasResult1 = set2.has(3);
const hasResult2 = set2.has(30000);

// обхід по сету
// set2.forEach((elem, index, array) => {
//   console.log(`elem is ${elem}`);
//   console.log(`index is ${index}`);
//   console.log(`array is ${array}`);
// });

const arrWithDuplicates = [1, 2, 3, 7, 1, 9, 8, 10, 8, 2];
const arrWithUniqueNumbers2 = [...new Set(arrWithDuplicates)];

// Map (мапа, карта, словник, асоціативний масив) - колекція, яка зберігає пари
// ключ - значення

const obj = {
  key: 'value',
  0: 'test',
  [Symbol('private')]: true,
}

for(const key in obj) {
  console.log(key);
}

/*
  відмінності мапи від об'єкта:
    1. мапа запам'ятовує порядок вставки данних
    2. мапа може використовувати будь-який тип даних у якості ключа
    3. мапа знає скільки елементів в ній знаходиться
    4. є ітератор тобто легше пройтися по всім елементам мапи
    5. швидше працює при додаванні або видаленні значень
*/

const user1 = {
  name: 'User',
}

const user2 = {
  name: 'Other user'
}

obj[user1] = 'user object';
obj[user2] = 'this is other user';

// створення пустої мапи
const map1 = new Map();

// додавання або перезаписує елементів до мапи
map1.set('key', 10000);
map1.set(123, 'some value');
map1.set('123', true);

map1.set('123', [1, 4, 6])

const sum = (...numbers) => numbers.reduce((acc, num) => acc += num);

map1.set(sum, 'my key is a function')

// отримання значень з мапи

const value1 = map1.get(user1); // undefined
const value2 = map1.get('123');
const value3 = map1.get(sum);

// перевірити наявність елемента по ключу 
const has123Key = map1.has(123);

// видалення запису по ключу
const deleteRes = map1.delete(123);

// очистка мапи
// map1.clear();

// розміри мапи 
console.log(map1.size);

// forEach
map1.forEach((value, key, map) => {
  console.log(`value is ${value}`);
  console.log(`key is ${key}`);
  console.log(`map is ${map}`);
})