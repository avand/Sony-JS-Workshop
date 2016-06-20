"use strict";

var bar, baz;

function foo() {
  console.log("foo")
};

foo();
bar();

bar = function() {
  console.log("bar");
};

baz = "baz";
