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

  getFullHouseData() {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
  }
}

const house3 = new House();
const house4 = new House(4, 4, 'test street 4', 10000);
