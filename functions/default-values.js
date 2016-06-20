"use strict";

function greet(name, greeting = "Hello") {
  console.log(`${greeting}, ${name}!`)
}

greet("Avand");
greet("Avand", "Good morning")
