// // Task 1
// let num1 = 2;
// let num2 = 4;

// let result1 = num1 + num2;

// console.log(result1);

// // Task 2
// let result2 = result1 - 50;
// console.log(result2);

// // Task 3
// let result3 = result1 * result2;
// console.log(result3);

// // Task 4
// let result4 = result3 / 2.687;
// console.log(result4);

// let reminderOfNumber = result3 % 2.687;
// console.log(reminderOfNumber);

// // Task 5
// let importantString = '' + reminderOfNumber;

// console.log('Ого, оце число.. ' + importantString);

// ----------------------------------------------------------------------------------------

// Task 1
// const getSmallerOfTwoNumbers = function(firstNum, secondNum) {
//   if(!isNaN(firstNum + secondNum)) {
//     if(firstNum === 0 || secondNum === 0) {
//       return 'Одно з чисел це або пуста строка, або нуль. Спробуй шось інше';
//     } else if (firstNum === secondNum) {
//       return 'equal';
//     }
//     return firstNum > secondNum ? secondNum : firstNum;
//   }
  
//   return null;
// }

// const userFirstNum = +prompt('First number: ');
// const userSecondNum = +prompt('Second number: ');

// console.log(getSmallerOfTwoNumbers(+userFirstNum, +userSecondNum));


// Task 2
// const getUserAge = function(age) {
//   if(isNaN(age)) {
//     return null;
//   }

//   if(age < 18 && age >= 0) {
//     return 'малявка або пуста строка';
//   } else if(age > 18 && age <= 102){
//     return 'в тебе все життя попереду! Насолоджуйся!'
//   } else {
//     return 'ти не людина'
//   }
// }

// const personAge = +prompt('Введіть свій вік: ');

// console.log(getUserAge(personAge));


// Task 3
// const discountCalculation = function(purchaseAmount) {
//   if(isNaN(purchaseAmount) || purchaseAmount === 0) {
//     return null;
//   }

//   let discountPercentage = 0.05;

//   if(purchaseAmount >= 1500) {
//     discountPercentage = 0.10;
//   } 
// 
//   purchaseAmount >= 1500 ? discountPercentage = 0.10 : discountPercentage = 0.05; 

//   const discount = purchaseAmount * discountPercentage;
//   const discountedPrice = purchaseAmount - discount;

//   return discountedPrice;
// }

// const totalUserPrice = +prompt('Бажаєте розрахувати знижку? Введіть повну суму: ');

// console.log('Ваша ціна зі знижкою: ' + discountCalculation(totalUserPrice));



// Task 4
// const checkEvenNumber = function(num) {
//   if(isNaN(num) || num === 0) {
//     return null;
//   }

//   if(num%2 === 1 || num%2 === -1) {
//     return 'Це непарне число'
//   }

//   return 'Це парне число'
// }

// const userNumber = +prompt('Введіть число для перевірки: ')

// console.log(checkEvenNumber(userNumber));



