"use strict";

// Function declaration
function foo() {
  console.log("foo");
}

// Function expression
var bar = function() {
  console.log("bar");
}

foo()
bar()

function sayHello(name) {
  console.log(`Hi ${name}!`);
}

sayHello("Avand");
sayHello();
