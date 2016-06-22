"use strict";

var movie = require("./movie.js");

var searchTerm = process.argv[process.argv.length - 1];

console.log(hello);

movie.getMovies(searchTerm)
  .then(movie.printMovies)
  .catch(console.error)
