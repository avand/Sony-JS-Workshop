"use strict";

// Use symbols in place of constant-like strings
var log = {}

log.levels = {
  DEBUG: Symbol('debug'),
  INFO:  Symbol('info'),
  WARN:  Symbol('warn'),
};

console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');


// Use symbols to create "hidden" object properties
var key = Symbol("key");
class Car {
  constructor() {
    this.make = "porsche";
    this[key] = "secret"
  }
}

var car = new Car();
console.log(Object.keys(car));
console.log(Object.getOwnPropertyNames(car));
console.log(Object.getOwnPropertySymbols(car));
