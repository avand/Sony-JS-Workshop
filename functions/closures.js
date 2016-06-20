function makeGreeter() {
  var salutation = "Hi there!";

  function greet() {
    console.log(salutation);
  }

  return greet;
}

var greet = makeGreeter();
greet();
