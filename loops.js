"use strict";

var garage = [];
var porsche = { make: "porsche", model: "911" };
var audi = { make: "audi", model: "s4" };
var vw = { make: "vw", model: "gti" }
var cars = [porsche, audi, vw];
var junk = ["furniture", "gardening equipment", "tools"]

// for
for (var i = 0; i < cars.length; i++) {
  var car = cars[i];
  garage.push(car);
  console.log(`${car.make} is now in the garage (${garage.length} total)`)
}

console.log("---")

// do...while
do {
  var car = garage.pop();
  console.log(`${car.make} left the garage (${garage.length} total)`);
} while (garage.length > 0)

console.log("---")

// while
while (junk.length > 0) {
  garage.push(junk.pop());
  console.log(`${garage.length} piece(s) of junk in the garage`);
}

console.log("---")

for (var prop in garage) {
  if (garage.hasOwnProperty(prop)) {
    console.log(`${prop}: ${garage[prop]}`);
  }
}

console.log("---")

for (prop in porsche) {
  if (garage.hasOwnProperty(prop)) {
    console.log(`${prop}: ${porsche[prop]}`);
  }
}

// Note: In all the examples above the brackets could be removed because
// there's only one statement in each block.
