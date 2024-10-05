
// try {
// console.log(1);

// // const err1 = new Error('Приклад опису помилки');

// // err1.status = 500;

// throw new Error('Test');

// console.log(2);
// } catch (err) {
//   // блок коду який виконається якщо у блоці try відбулася помилка
//   console.log('помилка сталася')
//   console.dir(err);
  
//   if(err.message === 'Test') {
//     // alert('обробив')
//   }
// }

// console.log('весь код виконано');


// try {
//   console.log(1)

//   const err1 = new SyntaxError('This is syntax error');

//   err1.status = 500;

//   throw err1;

//   console.log(2)
// } catch(err) {

//   console.log(err.message);
//   console.log(err.status);

// } finally {
//   // блок коду який виконується або після catch або після повного виконання try
//   console.log('finally');
  
// }

// console.log('Помилку оброблено');


function getSumOfTwoNumbers(num1, num2) {
  if(typeof num1 !== 'number' || isNaN(num1)) {
    throw new TypeError('num1 має бути корректним числом')
  }

  if(typeof num2 !== 'number' || isNaN(num2)) {
    throw new TypeError('num2 має бути корректним числом')
  }

  return num1 + num2;
}

try {
  const res = getSumOfTwoNumbers(NaN, '2');
  console.log(res);

} catch (err) {
  console.log(err.message)
}

