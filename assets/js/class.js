/**
 * 
 */
function House (floors = 1, apartmentsPerFloor = 4, adress = 'DEFAULT ADDRESS, CHANGE IT', priceOfApartment = 15000) {
  this.floors = floors;
  this.apartmentsPerFloor = apartmentsPerFloor;
  this.address = adress;
  this.priceOfApartment = priceOfApartment;
}

const housePrototype = {
  getFullHouseData: function () {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
  }
}

House.prototype = housePrototype;

const house1 = new House(3, 4, 'test street 1', 1200);
const house2 = new House();
