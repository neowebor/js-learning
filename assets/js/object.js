"use strict";

const citramon = {
  type: 'таблетки',
  doze: 2,
  price: 150,
  isSoldFree: true,
  maxAmount: 20,
  amount: 14
}

const phone = {
  brand: 'Samsung',
  model: 'Galaxy Note 25',
  price: 45000,
  isOn: true,
  color: 'red',
  callSomebody: function () {
    alert('ALO EPTA TI NA SV9ZI?');
  }
}

// CRUD - create, read, update, delete

// створення об'єктів (Create)
const obj1 = {}; // найчастіший спосіб. Літеральний.
const obj2 = Object(); // рідко
const obj3 = new Object(); // достатньо часто, використовується при ствоерння об'єктів зі специфічною структурою

const cat = {
  name: 'Pushok',
  furColor: 'white',
  eyeColor: 'green',
  breed: 'British',
  isSleeping: false,
  age: 3,
};

const user = {
  name: 'Andrey',
  lastName: 'Radeevich',
  age: 29,
  isMale: true,
  email: 'test@gmail.com',
  password: '12345qwe',

  helloUser: function() {
    alert(`Hello, ${this.name}`)    
  },

  getUserName: function() {
    return `${this.name} ${this.lastName}` 
  }
};

console.log(user.getUserName());

// Зчитування об'єктів (Read)
// console.log(user);

// console.log(user + '');

// console.log();

// Оновлення об'єктів (Update)
// user.name = 'Viktor'

// Видалення об'єктів (Delete)

// delete user.name // user.name = undefined

function getObject(obj) {
  return `Hello, ${obj.name} ${obj.lastName}`
}

console.log(getObject(user));

function test1() {
  // this - контекст виконання функції (хто її запускає)
  console.log(this); 
}

const testObj = {
  key1: 'value 1',
  key2: 10000,
  key3: false,
  test: function() {
    console.log(this);
    
  }
}

const video1 = {
  title: 'Titan submersible is ...',
  views: 155,
  author: 'BBC News',
}

const video2 = {
  title: 'title 2',
  views: 155123123123,
  author: 'BBC News 2',
}

// const userInput = prompt('Enter some phone key');

// console.log(phone[userInput]);


const testObj1 = {
  keyA: 1
};
const testObj2 = testObj1;

testObj2.keyB = 2



console.log(testObj1 === testObj2);

