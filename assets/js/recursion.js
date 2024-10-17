// рекурсивна функція  - функція, яка в процесі свого виконання може викликати саму себе

// ПОГАНА РЕКУРСИВНА ФУНКЦІЯ
// function sum(num1 = 2, num2 = 2) {
//   alert()

//   console.log(num1 + num2)
// }

// sum();
// for(let i = 10; i >= 0; i--) {
//   console.log(i)
// }

function countdown(number) {
  console.log(number)

  // Рекурсивний випадок
  if(number > 0) {
    countdown(number - 1);
  }

  // базовий випадок
  return undefined;
}

/* 
  Етапи роботи рекурсивної функції
  1. Функція рекурсивно робить якусь дію та запускає саму себе в колл стаці
  2. якась з запусків функцій доходить до базового випадку (не запускає іншу функцію до свого завершення)
  3. всі інші функції завершують свою роботу.
*/

const tree = {
  value: 2,
  left: {
    value: 7,
    left: {
      value: 2,
    },
    right: {
      value: 6, 
      left: {
        value: 5
      },
      right: {
        value: 11
      }
    }
  },
  right: {
    value: 5,
    right: {
      value: 9,
      left: {
        value: 4
      }
    }
  }
}
/**
 * 
 * @param {object} tree 
 * @returns {number}
 */
function reduceTree (tree) {
  let result = tree.value;

  // якщо є ліва гілка треба розрахувати її суму і додати її до result
  if(tree.left) {
    result += reduceTree(tree.left);
  }

  // якщо є права гілка треба розрахувати її суму і додати її до result
  if(tree.right) {
    result += reduceTree(tree.right);
  }

  // базовий випадок
  return result;
}