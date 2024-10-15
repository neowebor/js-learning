/**
 *
 */
// function House1(
//   floors = 1,
//   apartmentsPerFloor = 4,
//   adress = "DEFAULT ADDRESS, CHANGE IT",
//   priceOfApartment = 15000
// ) {
//   this.floors = floors;
//   this.apartmentsPerFloor = apartmentsPerFloor;
//   this.address = adress;
//   this.priceOfApartment = priceOfApartment;
// }

// const housePrototype = {
//   getFullHouseData: function () {
//     return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
//   },
// };

// House1.prototype = housePrototype;

// const house1 = new House1(3, 4, "test street 1", 1200);
// const house2 = new House1();

// Клас - новий синтаксис написання функцій-конструкторів
class House {
  constructor(
    floors = 1,
    apartmentsPerFloor = 4,
    adress = "DEFAULT ADDRESS, CHANGE IT",
    priceOfApartment = 15000
  ) {
    // зона конструктора
    this.floors = floors;
    this.apartmentsPerFloor = apartmentsPerFloor;
    this.address = adress;
    this.priceOfApartment = priceOfApartment;
  }

  // методи прототипу
  getFullHouseData() {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
  }

  // властивість прототипу (спільна однакова властивість всіх будинків)
  id = NaN;
}

const house3 = new House();
const house4 = new House(4, 4, "test street 4", 10000);

class Product {
  constructor(productName, price, totalQuantityOnStock = 100, isForAdults) {
    this.name = productName; // тут визивається сеттер name
    this.price = price;
    this.amount = totalQuantityOnStock;
    this.isForAdults = isForAdults;
  }

  get name() {
    return this._productName;
  }

  set name(newName) {
    if (typeof newName !== "string" || newName.trim().length === 0) {
      throw new TypeError("name of a product must be string");
    }
    this._productName = newName; // тут з'являється _name у об'єкті продукта
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (typeof newPrice !== "number" || isNaN(newPrice)) {
      throw new TypeError("price of a product must be numeric");
    }

    if (newPrice < 0) {
      throw new RangeError("price must not be negative number");
    }

    this._price = newPrice;
  }

  get amount() {
    return this._amount;
  }

  set amount(newTotalAmountOnStock) {
    if (
      typeof newTotalAmountOnStock !== "number" ||
      isNaN(newTotalAmountOnStock)
    ) {
      throw new TypeError("amount of a product must be numeric");
    }

    if (newTotalAmountOnStock < 0) {
      throw new RangeError("amount must not be negative number");
    }

    this._amount = newTotalAmountOnStock;
  }

  get isForAdults() {
    return this._isForAdults;
  }

  set isForAdults(newBooleanValue) {
    if (typeof newBooleanValue !== "boolean") {
      throw new TypeError("isForAdult of a product must be boolean");
    }

    this._isForAdults = newBooleanValue;
  }

  getTotalProductSum() {
    return this.totalQuantityOnStock * this.price;
  }

  static isProduct(obj) {
    return obj instanceof Product;
  }
}
const phones = new Product("Galaxy s10", 12000, 20, false);

// const owner1 = {
//   name: 'Owner 1',
//   email: 'owner1@gmail.com',
//   balance: 5000
// }

//
// if(owner1.balance >= (phones.price * phones.totalQuantityOnStock) ) {
//   // alert('Owner 1 може купити все морозиво')
// } else {
//   // alert('Owner 1 не може купити все морозиво, бо йому бракує коштів')
// }
