'use strict';
let data = 'letter';

function log1() {
  console.log(`log1: ${data}`);
}

log1(); // letter

function log2() {
  let data = 151;
  console.log(`log2 outer: ${data}`);
}

log2(); 

function log3() {
  let data = NaN;

  console.log(`log3: ${data}`); // NaN
  
  log1();

  if(true) {
    let data = true;
    console.log(`log3 inner: ${data}`); // true
  }
}


log3(); 


// Лексичне оточення функції - спеціальний об'єкт, який містить всі змінні, які функція бачить. Розраховується на момент створення функції

function log4() {
  let data = NaN;

  function innerLog() {
    console.log(`innerLog: ${data}`);
  }

  function innerInnerLog() {
    let data = 123;

    innerLog();
  }

  innerLog();
  innerInnerLog();
}

log4();

function createGreeting(name) {

  function greet() {
    return `Hello, ${name}`;
  }

  return greet;
}

const greetAnton = createGreeting('Anton');

function createId () {
  let currentId = 0;

  function getNewId () {
    currentId++;
    return currentId;
  }

  function getId () {
    return currentId;
  }

  const returningObject = {
    getId,
    getNewId
  };

  return returningObject;
}

const userIdHelper = createId();


