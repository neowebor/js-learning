// Концепції ООП (об'єктно-орієнтованого програмування)

// 1. Успадкування
class Animal {
  constructor(nickname, weight = 1) {
    this.nickname = nickname;
    this.weight = weight;
  }

  sleep() {
    console.log(`${this.nickname} is sleeping`);
  }

  eat() {
    console.log(`${this.nickname} is eating`);
  }
}

const mouse = new Animal("Jerry");
const dog = new Animal("Bulldog");

class Bird extends Animal {
  constructor(nickname, weight = 1) {
    super(nickname, (weight = 1));
  }

  fly() {
    console.log(`${this.nickname} is flying`);
  }
}

const parrot = new Bird("Kesha");

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isBanned = false;
  }

  createMessage() {
    console.log(`Повідомлення відправлене ${this.firstName} ${this.lastName}`);
  }

  deleteMessage() {
    console.log(`Повідомлення виделано ${this.firstName} ${this.lastName}`);
  }

  static isUser(user) {
    return user instanceof User;
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
    this.subForumList.forEach((e, index, arr) =>
      e === str ? arr.splice(index, 1) : e
    );
  }

  getSubForums() {
    return this.subForumList;
  }
}

class Admin extends Moderator {
  constructor(firstName, lastName, age, contactEmail) {
    super(firstName, lastName, age);

    this.contactEmail = contactEmail;
  }

  getUserBan(obj) {
    if (!User.isUser(obj)) {
      throw new TypeError("user must be instanceof User");
    }

    if (!obj.isBanned) obj.isBanned = true;
  }

  getUserUnban(obj) {
    if (!User.isUser(obj)) {
      throw new TypeError("user must be instanceof User");
    }

    if (obj.isBanned) obj.isBanned = false;
  }
}

const user1 = new User("qwe", "qwe", 12);
const moder1 = new Moderator("Anton", "Marikov", 25);
const admin1 = new Admin("Igor", "Test", 30, "test@gmail.com");

// 2. Поліморфізм - можливість методів успадкованих класів працювати по різнмоу

class Figure {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    console.log(`this function will calculate area of ${this.name}`);
  } 

  static isFigure(figure) {
    return figure instanceof Figure;
  }
}

class Rectangle extends Figure {
  constructor(a, b) {
    super('rectangle');
    this.a = a;
    this.b = b;
  }

  getArea() {
    return this.a * this.b;
  }
}

class Triangle extends Figure {
  constructor(a, h) {
    super('triangle');
    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h * 0.5;
  }
}

function getAreaOfFigure (figure) {
  if(Figure.isFigure(figure)) {
    return figure.getArea();
  }

  throw new TypeError('figure must be instance Figure')
}