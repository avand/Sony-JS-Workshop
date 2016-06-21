"use strict";

function* makeIDGenerator() {
  var id = 1;
  while (true)
    yield id++
}

var idGenerator = makeIDGenerator();

console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
