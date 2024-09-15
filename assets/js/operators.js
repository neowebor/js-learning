// оператори

// typeof - оператор визначення типу даних

typeof 10;

let data = 'test';

console.log(typeof data);

let bug = null;
console.log(typeof bug); // object

// Математичні оператори
// +, -, *, /,

console.log('2 + 2');
console.log(2 + 2);

console.log('10 - 5');
console.log(10 - 5);

console.log('9 * 2');
console.log(9 * 2);

console.log('100 / 4'); 
console.log(100 / 4);

// Зведення в ступінь
console.log(5 ** 3);

console.log((-5) ** 2);

// Асоціативність опріділяє порядок, в якому обрабатуються оператори з однаковим пріорітетом 

// залишок від ділення

console.log(-17%3);

// інкрементатор і декрементатор
let counter = 0;

counter++; // 1..
counter++;
counter++;
counter++;
counter++; // ..5


console.log('Мій лічильник ' + counter); // Мій лічильнік = 5

counter--;
console.log(counter); // 4

// counter++ / counter-- - постфіксний
// ++counter / --counter - префіксний

let counter1 = 10;

console.log(counter1++);


let counter2 = 10;

console.log(++counter2);

// Унарні оператори
// + , -

console.log(typeof -'675.5');
console.log(-'asdqwexcxmfgfs'); // NaN

console.log(+true);
console.log(+'-1275');

// перетворення типу на числовий
console.log(+null);







