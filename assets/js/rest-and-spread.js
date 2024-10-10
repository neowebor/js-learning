// об'єкт arguments

/**
 * Функція суми необмеженої кількості значень
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function sum (num1, num2) {
  

  // масивоподібний об'єкт
  // немає методів масиву
  console.log(arguments);

  let resultingSum = num1 + num2;

  for(let i = 0; i < arguments.length; i++) {
    resultingSum += arguments[i];
  }

  return resultingSum;
}

console.log(sum(1, 2, 3));

// rest-оператор (оператор залишкових параметрів)
/**
 * @param {number[]} numbers - масив аргументів з будь якими типами даних в ньому
 */
const sumWithRestOperator = (num1, num2, ...numbers) => {
  let resultingSum = num1 + num2;

  numbers.forEach((number => resultingSum += number));

  return resultingSum;
}

// spread - оператор (оператор розширення)

const numbers = [20, 35, 15, 7, 23, -2, 0, -100, -789, -1000]

// const minNumber = Math.min(...numbers);
// console.log(minNumber);

// function filterMin(arr) {
//   let min = 0;
  
//   arr.filter((elem) => {
//     if(elem < min) {
//       min = elem;
//     } 
//   })

//   return min;
// }

// console.log(filterMin(numbers));

