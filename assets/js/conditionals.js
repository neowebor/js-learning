// умовні конструкції
// виконувати певні дії за певних умов

// console.log('1');

/* 
  if ( умова ) {
    // дія
  }

  дія якак буде виконана тільки тоді, коли умова буде правдиваю
*/
// let text = prompt('Write yes to run блок коду 2');
// if (text === 'yes') {
//   console.log('2');
// }

// console.log('3');
// let number = +prompt('Enter number')

// if (number > 0) {
//   console.log('Number is positive');
// } else {
//   console.log('Number is negative');
// }


// Тернарний оператор який може замінити вам конструкцію if() {} else {}

// const userMessage = prompt('Test');

// let text = userMessage === 'Test' ? 'yes' : 'no';

// console.log(text);

// конструкція switch ... case

/*
  може бути зручною коли ви хочете виконат певні дії виходячи з конкретних значень певної змінної або виразу

  switch (змінная_або_вираз) {
    case значення_А: {
      // блок коду А
    }

    case значення_B: {
      // блок коду В
    }

  }
*/

// let value = 1;

// switch (value) {
//   case 1: {
//     alert('value прийняло значення 1');
//     break;
//   }
//   case 2: {
//     alert('value прийняло значення 2');
//     break;
//   }
//   case 'test': {
//     alert('value прийняло значення test');
//     break;
//   }

//   default: {
//     alert('default')
//   }
// }

// const getCardCashbackPercentage = function(cardLevel) {
//   let cashbackPercentage;

//   switch (cardLevel) {
//     case 'basic':
//     case 'basic+': {
//       cashbackPercentage = 1;
//       break;
//     }
//     case 'pro': {
//       cashbackPercentage = 1.1;
//       break;
//     }
//     case 'gold': {
//       cashbackPercentage = 2;
//       break;
//     }
//     case 'platinum': {
//       cashbackPercentage = 5;
//       break;
//     }
//     default: {
//       cashbackPercentage = 0;
//     }
//   }

//   return cashbackPercentage;
// }


const getSeason = function(month) {
  switch (month) {
    case 'грудень':
    case 12:
    case 'січень':
    case 1:
    case 'лютий':
    case 2: {
      return 'Зіма'
    }
    case 'березень':
    case 3:
    case 'квітень':
    case 4:
    case 'травень': 
    case 5: {
      return 'Весна'
    }
    
    case 'червень':
    case 6:
    case 'липень':
    case 7:
    case 'серпень':
    case 8: {
      return 'Літо'
    }

    case 'вересень':
    case 9:
    case 'жовтень':
    case 10:
    case 'листопад':
    case 11: {
      return 'Весна'
    }

    default: {
      return 'Такого місяця немає';
    }
  }
}

