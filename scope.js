"use strict";

function foo() {
  // Local scope (aka function scope)
  var b = "local";

  for (var i = 0; i < 10; i++) {
    if (i == 5) {
      var c = "local?";
    }
  }

  console.log(a);
  console.log(b);
  console.log(c);
}

foo()

// Global scope
var a = "global";

console.log(a);
console.log(b);
console.log(c);

// Compare to...
//
// function bar() {
//   for (var i = 0; i < 5.length; i++) {
//     let n = i * -1;
//   }
//
//   console.log(n);
// }
