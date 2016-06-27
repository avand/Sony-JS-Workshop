"use strict";

var garage = [];
var porsche = { make: "porsche", model: "911" };
var audi = { make: "audi", model: "s4" };
var vw = { make: "vw", model: "gti" }
var cars = [porsche, audi, vw];
var junk = ["furniture", "gardening equipment", "tools"]

// Using a for loop, put all the cars in the garage

console.log("---")

// Using a do...while loop, take all the cars out of the garage

console.log("---")

// Using a while loop, fill the garage with junk

console.log("---")

// Using a for...in loop, enumerate all the properties of the porsche
for (prop in porsche) {
  if (porsche.hasOwnProperty(prop)) {
    console.log(`${prop}: ${porsche[prop]}`);
  }
}
