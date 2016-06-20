"use strict";

var user = Object.create(null);

Object.defineProperty(user, "firstName", {
  value: "Avand",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(user, "lastName", {
  value: "Amiri",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(user, "fullName", {
  enumerable: true,
  configurable: false,
  get: function() {
    return `${this.firstName} ${this.lastName}`
  },
  set: function(val) {
    var nameParts = val.split(" ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }
});

console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.fullName);

user.fullName = "John Smith"

console.log(user.fullName);
