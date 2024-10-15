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
const house4 = new House(4, 4, 'test street 4', 10000);


class Product {
  constructor (productName, price, totalQuantityOnStock = 100, isForAdults) {
    this.productName = productName;
    this.price = price;
    this.totalQuantityOnStock = totalQuantityOnStock;
    this.isForAdults = isForAdults;
  }

  getTotalProductSum () {
    return this.totalQuantityOnStock * this.price;
  }
}

const phones = new Product('Galaxy s10', 12000, 20, false);
console.log(phones.getTotalProductSum())

const owner1 = {
  name: 'Owner 1',
  email: 'owner1@gmail.com',
  balance: 5000
}

//
// if(owner1.balance >= (phones.price * phones.totalQuantityOnStock) ) {
//   // alert('Owner 1 може купити все морозиво')
// } else {
//   // alert('Owner 1 не може купити все морозиво, бо йому бракує коштів')
// }