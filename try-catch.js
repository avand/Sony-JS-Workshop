function MyCustomError(message) {
  this.name = "MyCustomError";
  this.message = "Something terrible just happened";
  this.stack = (new Error()).stack;
}
MyCustomError.prototype = Object.create(Error.prototype);
MyCustomError.prototype.constructor = MyCustomError;

try {
  takeAChance();
} catch (error) {
  if (error instanceof TypeError) {
    // Handle TypeError
    throw "reraising the error"
  } else if (error instanceof RangeError) {
    // Handle RangeError
    throw new Error("reraising error with object")
  } else if (error instanceof MyCustomError) {
    // Handle EvalError
    console.log("swallowing EvalError error")
  } else {
    console.error(error);
  }
} finally {
  console.log("this will be logged no matter what");
}
