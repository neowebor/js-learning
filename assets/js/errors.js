
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


try {
  console.log(1)

  const err1 = new SyntaxError('This is syntax error');

  err1.status = 500;

  throw err1;

  console.log(2)
} catch(err) {

  console.log(err.message);
  console.log(err.status);

} finally {
  // блок коду який виконується або після catch або після повного виконання try
  console.log('finally');
  
}

console.log('Помилку оброблено');
