// Концепції ООП (об'єктно-орієнтованого програмування)

// 1. Успадкування
// class Animal {
//   constructor(nickname, weight = 1) {
//     this.nickname = nickname;
//     this.weight = weight;
//   }

//   sleep() {
//     console.log(`${this.nickname} is sleeping`);
//   }

//   eat() {
//     console.log(`${this.nickname} is eating`);
//   }
// }

// const mouse = new Animal("Jerry");
// const dog = new Animal("Bulldog");

// class Bird extends Animal {
//   constructor(nickname, weight = 1) {
//     super(nickname, (weight = 1));
//   }

//   fly() {
//     console.log(`${this.nickname} is flying`);
//   }
// }

// const parrot = new Bird("Kesha");

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
    super("rectangle");
    this.a = a;
    this.b = b;
  }

  getArea() {
    return this.a * this.b;
  }
}

class Triangle extends Figure {
  constructor(a, h) {
    super("triangle");
    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h * 0.5;
  }
}

function getAreaOfFigure(figure) {
  if (Figure.isFigure(figure)) {
    return figure.getArea();
  }

  throw new TypeError("figure must be instance Figure");
}

// class Animal {
//   constructor(name, animalType) {
//     this.name = name;
//     this.animalType = animalType;
//   }

//   run() {
//     console.log(`run`);
//   }

//   sleep() {
//     console.log(`sleep`);

//   }

//   eat() {
//     console.log(`eat`);
//   }
// }

// class Pantera extends Animal {
//   constructor(name) {
//     super(name, 'panther');
//   }

//   eat() {
//     super.eat();
//     console.log('eating meat')
//   }
// }

// class Sneak extends Animal {
//   constructor(name) {
//     super(name, 'sneak');
//   }

//   run() {
//     super.run();
//     console.log('the snake is crawling')
//   }
// }

// 3. Інкапсуляція - приховування внутрішнього стану та методів об'єкту від зовнішнього світу

// class Animal {
//   constructor(name, animalType) {
//     this.name = name;
//     this.animalType = animalType;

//     // 0 (голодна) - 100 (сита)
//     this._hunger = 50;

//     // 0 (стомлена) - 100 (повна сил)
//     this._energy = 50;

//     // 0 (роззлючена) - 100 (задоволена)
//     this._mood = 50;
//   }

//   get hunger() {
//     return this._hunger;
//   }

//   get energy() {
//     return this._energy;
//   }

//   get mood() {
//     return this._mood;
//   }

//   set mood (newMood) {
//     if(typeof newMood !== 'number' || isNaN(newMood)) {
//       throw new TypeError('you must give number');
//     }

//     // this._mood = this.mood + newMood <= 100 ? this.mood + newMood : 100;

//     if(this.mood + newMood <= 100 && newMood >= 0) {
//       this._mood = newMood;
//     } else if(newMood < 0) {
//       this._mood = 0;
//     }
//   }

//   run() {
//     console.log(`run`);

//     this.energy = this.energy - 4 >= 0 ? this.energy - 4 : 0;
//     this.hunger = this.hunger - 3 >= 0 ? this.hunger - 3 : 0;
//   }

//   sleep() {
//     this.energy = this.energy + 50 <= 100 ? this.energy + 50 : 100;

//     console.log(`sleep`);

//   }

//   eat() {
//     const hungerSated = 5;

//     this.hunger = this.hunger + hungerSated <= 100 ? this.hunger + hungerSated : 100;

//     this.mood = this.mood + 10 <= 100 ? this.mood + 10 : 100;

//     console.log(`eat`);
//   }
// }

// ------------------------------------------------------------------------------------------

class Animal {
  // створення приватної властивості
  #secret;
  #hunger;
  #mood;
  #energy;

  constructor(nickname, type) {
    this.nickname = nickname;
    this.type = type;

    // 0 (голодна) - 100 (сита)
    this.#hunger = 50;

    // 0 (стомлена) - 100 (повна сил)
    this.#energy = 50;

    // 0 (роззлючена) - 100 (задоволена)
    this.#mood = 50;

    this.#secret = 'try find be';
  }

  get hunger() {
    return this.#hunger;
  }

  get energy() {
    return this.#energy;
  }

  get mood() {
    return this.#mood;
  }

  // приватні методи - можна запускати тільки в коді всередині класу
  #setMood(newMood) {
    if (typeof newMood !== "number" || isNaN(newMood)) {
      throw new TypeError("you must give number");
    }

    if (newMood <= 100 && newMood >= 0) {
      this.#mood = newMood;
    } else if (newMood < 0) {
      this.#mood = 0;
    } else if (newMood > 100) {
      this.#mood = 100;
    }
  }

  #setHunger(newHunger) {
    if (typeof newHunger !== "number" || isNaN(newHunger)) {
      throw new TypeError("you must give number");
    }

    if (newHunger <= 100 && newHunger >= 0) {
      this.#hunger = newHunger;
    } else if (newHunger < 0) {
      this.#hunger = 0;
    } else if (newHunger > 100) {
      this.#hunger = 100;
    }
  }

  #setEnergy(newEnergy) {
    if (typeof newEnergy !== "number" || isNaN(newEnergy)) {
      throw new TypeError("you must give number");
    }

    if (newEnergy <= 100 && newEnergy >= 0) {
      this.#energy = newEnergy;
    } else if (newEnergy < 0) {
      this.#energy = 0;
    } else if (newEnergy > 100) {
      this.#energy = 100;
    }
  }

  sleep() {
    this.energy += 50;;

    console.log("тваринка спить");
  }

  eat() {
    this.hunger += 5;
    this.mood += 10;;

    console.log("тваринка їсть");
  }

  move() {
    this.#setEnergy(this.energy - 4);
    this.#setHunger(this.#hunger - 3);

    console.log("тваринка рухається");
  }
}

const animal1 = new Animal("Мурзик", "Кіт");

// console.log(animal1.#secret); // error

class Dog extends Animal {
  constructor(nickname) {
    super(nickname, 'dog');
  }
}

const dog1 = new Dog('dog1234');

// 4. Абстракція - (не всіма вважається окремим концепцією)
/* 
  полягає у виділенні найважливіших методів та властивостей об'єкту для вирішення задачі інші методи та деталі не реалізуються
  При цьому публічні методи які залишуються у об'єкті вважаються достатніми для ефективної роботи з ними
*/

class Computer {
  #isOn;

  constructor () {
    this.#isOn;
  }

  // низкорівневі (складні для розуміння для загальної маси людей) методи
  #applyCurrent () {

  }

  #enablePeriferyDevices () {

  }

  #startBIOS () {

  }

  #startOS () {

  }

  // високорівневий метод (простий у використанні)
  turnOn() {
    this.#applyCurrent;
    this.#enablePeriferyDevices;
    this.#startBIOS;
    this.#startOS;
  }
}