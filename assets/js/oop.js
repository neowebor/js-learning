// Концепції ООП (об'єктно-орієнтованого програмування)

// 1. Успадкування
class Animal {
  constructor (nickname, weight = 1) {
    this.nickname = nickname;
    this.weight = weight;
  }

  sleep() {
    console.log(`${this.nickname} is sleeping`);
  }

  eat() {
    console.log(`${this.nickname} is eating`)
  }
}

const mouse = new Animal('Jerry');
const dog = new Animal('Bulldog');

class Bird extends Animal{
  constructor (nickname, weight = 1) {
    super(nickname, weight = 1);
  }

  fly() {
    console.log(`${this.nickname} is flying`);
  }
}

const parrot = new Bird('Kesha')


class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isBanned = false;
  }

  createMessage() {
    console.log(`Повідомлення відправлене ${this.firstName} ${this.lastName}`)
  }

  deleteMessage() {
    console.log(`Повідомлення виделано ${this.firstName} ${this.lastName}`);
  }
}

class Moderator extends User {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);

    this.subForumList = [];
  }

  createSubForum(str) {
    this.subForumList.push(str);
  }

  deleteSubForum(str) {
    this.subForumList.forEach((e, index, arr) => e === str ? arr.splice(index, 1) : e);
  }

  getSubForums() {
    return this.subForumList;
  }
}

const moder1 = new Moderator('Anton', 'Marikov', 25)