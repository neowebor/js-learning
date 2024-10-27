'use strict';

// Алгоритм - певна послідовність дій які дають бажаний кінцевий результат

/* 
  оцінка швидкості алогритму у часі робиться по кількості його операцій
  оцінка алгоритму по занятій пам'яті

  x = y (лінійна функція)
  x = y ^ 2 (квадратична)
  x = log y (логаріфмічна)
  x = 2 ^ y (експоненціальна)
  x = y! (факторіал)

  при оцінці алогритмів по часу
  y - кількість операцій
  x - вхідні дані

  y = x ^ 2 + 5x + 15;
  y = 2 ^ x + 55;

  x = 1
  y = 1 ^ 2 + 5 * 1 + 15 = 21
  y = 2 ^ 1 + 55 = 56

  x = 8
  y = 8 ^ 2 + 5 * 8 + 15 = 119 операцій
  y = 2 ^ 8 + 55 = 311 операцій

  Розрахунок складності алгоритмів
  x -> n (вхідні дані)
  y = x -> O(n)
  y = 2^n -> O(2^n)
*/

// O(1) -константна складність 
const arr1 = [1, 5, 7, 20, 5, -50];

function getElemOfArray (array, elemIndex) {
  return array[elemIndex];
}

// O(n) - лінійна складність
function getElemIndex (array, elemValue) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === elemValue) {
      return i;
    }
  }

  return -1;
}

getElemIndex(arr1, 20);

// O(n^2) - квадратична складність
/* 
  1. Проходимось по масиву та порівнюємо два сусідних елементи
  2. якщо в першого значення більше ніж у другого то міняємо їх місцями
  3. повторюємо ці дії поки найбільші значення не опиняться в кінці масиву
    а найменші у початку
*/
function bubbleSort(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 1; j < array.length; j++) {
      let value1 = array[j - 1];
      let value2 = array[j];

      if(value1 > value2) {
        array[j] = value1;
        array[j - 1] = value2;
      }
    }
  }

  return array;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const numbers = new Array(8000).fill(null).map(() => getRandomArbitrary(-5000, 5000));
console.log('start');
bubbleSort(numbers);
console.log('end')