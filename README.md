# Sony JS Workshop at General Assembly

Curriculum for a 3-day JavaScript workshop at General Assembly.

## Orientation

* About me
* Curriculum outline & examples
  * Good reference
  * Requires some hand-holding
  * Half lecture notes, half your notes
  * Repository of good links
* A lot of this stuff is new to me too
* Helping one another

## Tools

* Atom (vs. VIM, Sublime)
* Command line (Terminal)
* Node

## Development Environment

* Chrome
  * Console
  * Snippets
* [JavaScript Shell Scripting][jss]
  * Windows Scripting Host: `cscript program.js`
  * JavaScriptCore: `jsc program.js` (symlink required, see link)
* [Node](https://nodejs.org/en/)
  * `node` for interactive shell
  * `node file.js` to execute saved code
  * `ctrl + c` twice to quite or `.exit`
  * `.help`

## ECMAScript

* Scripting language created by Brendan Eich
* Initially called “Mocha”
* 1995/96 Netscape released JavaScript
* Netscape passed JS onto ECMA
* European Computer Manufacturers Association International, a standards organization

## The Language

* Comments
  * Line-by-line: `//`
  * Block: `/* */`
* Variables
  * `var`
  * Declaring multiple variables at once
  * Assignment operator: `=`
* Data types
  * JS is *loosely typed*, aka *dynamic*—variables do not need to be typed and their type can change at any time
  * Literals
  * Primitives
    * Boolean
    * Null
    * Undefined
    * Number
    * String
      * Templating: `` `I am ${n} year(s) old` ``
      * `split()`
  * Arrays
    * `length`
    * `push()`
    * `pop()`
    * `map()`
    * `filter()`
    * `reduce()`
    * `sort()`
    * [Functional programming in Javascript: map, filter and reduce][map-filter-reduce]
* [Arithmetic operators][arithmetic] (MDN)
  * `+`, `-`, `/`, `*`, `++`, `--`
  * Concatenation
* [Strict mode](strict) (MDN)
  * Eliminates some JavaScript silent errors by changing them to throw errors
  * Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode
  * Applies to entires scripts or individual functions
  * `"use strict";`
* Functions
  * [functions.js](functions/functions.js)
    * Expressions
    * Declarations
    * Parameters: variable name within function definition
    * Argument: value passed into the function
  * [default-values.js](functions/default-values.js)
  * Anonymous functions
  * [Arrow functions][arrow] (MDN)
    * `(args) => { ... }`
    * [arrow](functions/arrow.js)
    * Parentheses are optional when there's only one parameter
    * Parentheses are required when no params
    * Allows for a more succinct syntax
    * Preserves the value `this` (more on that later)
* Variable scope & hoisting
  * [scope.js](scope.js)
    * Where will this program break?
    * Notice how block level variables are treated as local
    * `let` in ES6 allows for true block level variables
  * **Exercise**: [hoisting-before.js](hoisting-before.js)
    * Function declarations are hoisted
    * In a function expressions, the variable declaration will be hoisted, but the function declaration will stay put
    * Translate code into what it will be
    * Will this code run?
* Objects & classes
  * Objects
    * Collection of key-value pairs (properties)
    * An object is the Python equivalent of a dictionary
    * `Object.create(proto)`
    * `Object.defineProperty(obj, prop, descriptor)`
      * Descriptor allows you to describe the property further
        * `value`: The value of the property (e.g., `firstName: "Avand"`)
        * `enumerable`: The property will show up when iterating over all the properties of that object using `for...in`
        * `writeable`: The property can be changed
        * `configurable`: The property can be deleted or its attributes can be changed
      * The descriptor also allows you to define a `get` and `set` function
        * This is one way to privatize a property
        * `get`: The getter function
        * `set`: The setter function
       * [JavaScript Getters and Setters][getset]
    * [object-create-verbose.js](classes/object-create-verbose.js)
    * Accessing properties with dot notation & bracket notation
      * When would you use one notation over another?
    * Object literal: `{}`
    * [object-create-succinct.js](classes/object-create-succinct.js)
    * A single instance of an object can sometimes serve as a "poor man's class"
      * [singleton-es5.js](classes/singleton-es5.js)
  * Classes are defined with functions
    * Prior to ES6, there were a few ways to do declare a class
    * Confusion in the dev community
    * [class-es5.js](classes/class-es5.js)
      * `new` keyword
      * `this` keyword
    * [arrow.js](classes/arrow.js)
      * What is wrong with this program?
     * **Exercise**: Rewrite the `setTimeout` function with an arrow function to fix the problem
  * ES6 class defined with `class` keyword
    * `constructor` keyword
    * [class-es6.js](classes/class-es6.js)
  * Inheritance with prototypes
    * Objects, in addition to being a collection of properties, contain one more attribute: a pointer to another object (the prototype)
    * When looking for a key on an object, if it isn't found, JS will look for it in the prototype
    * JS will follow the "prototype chain" until the prototype comes back `null`, when it will return `undefined`
    * [inheritance-es5.js](classes/inheritance-es5.js)
    * [inheritance-es6.js](classes/inheritance-es6.js)
    * [class-es5-preferred.js](classes/class-es5-preferred.js)
      * What's the advantage of putting the `start()` and `stop()` functions on the prototype?
  * Static functions
    * `static` keyword
    * [static.js](classes/static.js)
  * [Working with objects][objects] (MDN)
  * [Introduction to Object-Oriented JavaScript][oop] (MDN)
* [Closures](closures) (MDN)
  * Definition: a function that "remembers" the environment in which it was defined, specifically the variables in context at the time
  * [closures.js](functions/closures.js)
    * Will this code run?
  * Study size maker example on MDN
  * [Module pattern](module-pattern)
    * Emulate private methods
    * [Immediately-invoked function expressions](iife): `(function() {})()`
    * [module-pattern.js](functions/module-pattern.js)
* Control flow and error handling
  * `if (condition) { ... }`
  * `if (condition) { ... } else { ... }`
  * `if (condition) { ... } else if (condition) { ... }`
  * Conditional practice to come with loops
  * Logical and & or: `&&` & `||`
  * `||` to get one of two values (revisit functions.js)
  * `switch (exp) { }`
    * [switch.js](switch.js)
    * Without `break` execution continues to next statement after finding a match
    * `default` case can go anywhere but is typical at the end
    * Chaining operations
    * How can `return` act like `break`?
  * `try...catch`, `throw`, & error objects
    * [try-catch.js](try-catch.js)
* Expressions and operators
  * `=` vs `==` vs `===`
  * Equality and sameness (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
* [Loops and iteration][loops] (MDN)
  * [loops.js](loops.js)
  * `for`
  * `do...while`
  * `while`
  * `break`: terminates the innermost loop
  * `continue`: goes to the next iteration of the innermost loop
  * `for...in`
    * Use `Object#hasOwnProperty` to avoid iterating over inherited properties
     * When you create an object literal (`{}`), it will always have `Object.prototype` as its prototype.
     * Since `Object.prototype` is an object like any other object, anyone can define a new property on it, which may (and probably would) be marked enumerable
     * [Understanding "Prototypes" in JavaScript][prototypes]
  * **Exercise**: [loops-exercise.js](loops-exercise.js)
  * Closures within loops: [closures-in-loops.js](functions/closures-in-loops.js)
  * **Exercise**: Fix the bug
* Symbols
  * [symbols.js](symbols.js)
  * `Symbol()` or with label `Symbol("foo")`
  * Are unique (no two symbols are equal, even with the same label)
  * Good in places where you might use constant-like strings
  * Good to store data on an object without that key being available in `Object.getOwnProperties()`
  * [Metaprogramming in ES6: Symbols and why they're awesome][symbols]
* Promises
  * Terminology:
    * Fulfilled: the action relating to the promise succeeded
    * Rejected: the action relating to the promise failed
    * Pending: hasn't fulfilled or rejected yet
    * Settled: has fulfilled or rejected
  * `new Promise(function(resolve, reject) { ... })`
    * Do asynchronous stuff, and call `resolve` on success
    * If there's a problem, call `reject`
  * `Promise#then(successCallback, errorCallback)`
  * Chaining
    * `promise.then(function(val) { return val}).then(...)`
  * `Promise.all([...])`
  * **Exercise**: Movie search
    * `JSON.parse()`
    * `parseInt()`
    * Implement promises for IO and HTTP operations
    * Use `Promise.all`
  * [JavaScript Promises: There and back again][promises-html5rocks]
* Generators

## Node

* Definition: server-side platform built on Google Chrome’s JS Engine (V8)
* Features
  * Event-driven
  * Non-blocking I/O model
  * Never waits for a response
  * Fast (because of V8)
  * nodejs_concepts.jpg
* Node Package Manager (NPM)
  * Definition
    * Online repository of packages
    * search.nodejs.org
    * Command line utility to install and manage packages
  * `npm init`: initialize a project folder as a node project
  * `package.json`: project manifest
  * `npm search express`
  * `npm install express`
    * `-g` option to install globally
    * `--save`  option to add as project dependency
  * `npm ls` (local)
  * `npm ls -g` (global)
* Modules and exports
  * [Node Modules][node-modules]
  * Files and modules correspond one-to-one
  * `exports` is a global object, whatever you put there will be available once the module is required
  * `require(...)`
  * **Exercise**
    * [say-hey.js][say-hey.js]
    * Create a module, "sayHey", that exports a method `sayHey`
    * In your console, require that module and execute the function
* Event handling
  * Callbacks take error as first argument (see io_async.js)
  * [emitter.js](emitter.js)
* Building a web server & client
  * [server.js](server.js)
  * [client.js](client.js)

## Mocha

* [Mocha homepage][mocha]
* JavaScript testing framework for Node.js
* Pair with assertion library of your choosing
* **Exercise**: Tree node
  * Create a folder, "tree-node", and inside:
    * test/tree-node-test.js
    * tree-node.js
  * `npm init`
  * `npm install --save mocha`
  * `npm install --save chai`
  * Ensure that mocha and chai are listed as `devDependencies`
  * [Chai Installation Guide][chai-install]
  * [Chai Assert API][chai-assert]
  * Write the following tests
    * A TreeNode has an undefined value by default
    * A TreeNode can be constructed with a value
    * A TreeNode should have a null parent by default
    * A TreeNode should have 0 children by default
    * A TreeNode without a parent should be considered a root
    * A TreeNode with a parent should not be considered a root
    * A TreeNode should become the child of a new parent when added
    * A TreeNode should become the parent of a new child when added
  * Bonus
    * A TreeNode can return the root from any child
    * A TreeNode is enumerable, allowing iteration from any child down
    * A TreeNode can be removed, where parent adopts children

## Grunt

* Automates repetitive tasks like minification, concatenation, testing, linting, etc.
* `npm install -g grunt-cli`
* [Sprinkles][sprinkles]

## Browserify

* Bundles all files in a Node project into one browser-suitable file
* npm install -g browserify
* **Exercise**: Browserify the TreeNode project
  * Create an HTML file that references that file

## Babel

* Multi-purpose compiler for JavaScript
* Allows you to write JavaScript that takes advantage of latest standards
* "Source-to-source" compiling (aka transpiling)
* [Babel User Handbook][babel]

[symbols]: http://blog.keithcirkel.co.uk/metaprogramming-in-es6-symbols/
[objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
[oop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
[arithmetic]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
[loops]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
[jss]: http://www.phpied.com/javascript-shell-scripting/
[closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
[iife]: http://benalman.com/news/2010/11/immediately-invoked-function-expression/
[module-pattern]: https://toddmotto.com/mastering-the-module-pattern/
[prototypes]: http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
[strict]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
[arrow]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[getset]: http://javascriptplayground.com/blog/2013/12/es5-getters-setters/
[promises]: http://www.html5rocks.com/en/tutorials/es6/promises/
[promises-html5rocks]: http://www.html5rocks.com/en/tutorials/es6/promises/
[map-filter-reduce]: http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/
[mocha]: https://mochajs.org
[chai-install]: http://chaijs.com/guide/installation/#node
[node-modules]: https://nodejs.org/api/modules.html
[chai-assert]: http://chaijs.com/api/assert/
[sprinkles]: https://github.com/avand/sprinkles/blob/master/Gruntfile.js
[babel]: https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/user-handbook.md
