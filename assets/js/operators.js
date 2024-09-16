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

// конкатенація
console.log('' + 1 + 2 + 3 + 4 + 5 + 2 * 5);


console.log('=================== Логічні оператори ===================');

/* 
  > - більше
  < - меньше
  >= - більше або дорівнює
  <= - меньше або дорівнює

*/

console.log(10 > 5);

console.log(5 > 10);


console.log(10 >= 10); // true

console.log('cat' > 'm'); // false

// рівність значень

/* 
  == - оператор рівності
  === - оператор жорсткої рівності

  != - оператор нерівності
  !== оператор жорсткої нерівності

*/

console.log(15 === 15); // true
console.log("Anton" === "Anton"); // true

console.log(1000 === '1000'); // false
console.log(1000 == '1000'); // true

// Логічне заперечення

console.log(!true);

console.log(!0); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true


// логічне "І" та логічне "АБО"
/* 
  && - Логічне "І" - повертає правду якщо ліва і права частина правдива (повертає перша брехливе значення, або останнє правдиве)

  || - Логічне "АБО" - повертає правдие значення якщо ліва або права частина є правдивою
  (повертає перша правдиве значення, або останнє брехливе)
*/

const testNumber = 17.5;

console.log((testNumber > 0 && testNumber < 100) + ' ?');

console.log(false || true);


// Присвоєння
/* 

*/
let age = 71;

// age = age + 5;
age += 5;
age -= 5;

console.log(age);








