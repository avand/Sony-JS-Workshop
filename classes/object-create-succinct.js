"use strict";

var user = {
  firstName: "Avand",
  lastName: "Amiri",
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(val) {
    var nameParts = val.split(" ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }
};

console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.fullName);

user.fullName = "John Smith"

console.log(user.fullName);
