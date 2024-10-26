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
