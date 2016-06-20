"use strict";

class Auto {
  constructor(color, wheels, topSpeed) {
    this.color = color;
    this.wheels = wheels;
    this.topSpeed = topSpeed;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
  }

  static hijack(auto) {
    // auto.start();
    auto.isRunning = true;
  }
}

class SportsCar extends Auto {
  constructor(color) {
    super(color, 4, "200mph")
  }
}

class Bus extends Auto {
  constructor(color, wheels) {
    super(color, 8, "80mph")
  }
}
var auto = new Auto("yellow", 4, "100mph");

console.log(auto.color); // => "yellow"
console.log(auto.wheels); // => 4
console.log(auto.topSpeed); // => "100mph"
console.log(auto.isRunning); // => false

var sportsCar = new SportsCar("red");

console.log(sportsCar.color); // => "red"
console.log(sportsCar.wheels); // => 4
console.log(sportsCar.topSpeed); // => "200mph"
console.log(sportsCar.isRunning); // => false

sportsCar.start();

console.log(sportsCar.isRunning); // => true

var bus = new Bus("grey");

console.log(bus.topSpeed); // => "80mph"
console.log(bus.wheels); // => 8

Auto.hijack(bus);

console.log(bus.isRunning); // => true
