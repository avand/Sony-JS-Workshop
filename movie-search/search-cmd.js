"use strict";

var http = require("http");

function get(url) {
  return new Promise(function(resolve, reject) {
    try {
      http.get(url, function(response) {
        if (response.statusCode == 200) {
          var body = "";
          response.on("data", function(chunk) { body += chunk; });
          response.on("end", function() { resolve(body); });
        } else {
          reject(response)
        }
      });
    } catch (error) {
      reject(error)
    }
  });
};

function getJSON(url) {
  return get(url).then(JSON.parse);
};

function getMovies(name) {
  name = encodeURIComponent(name);
  return getJSON(`http://omdbapi.com/?s=${name}`).then(function(results) {
    return results["Search"];
  });
};

function printMovies(movies) {
  movies.forEach(function(movie) {
    console.log(`${movie["Title"]} (${movie["Year"]})`)
  });
}

var searchTerm = process.argv[process.argv.length - 1];

getMovies(searchTerm)
  .then(printMovies)
  .catch(console.error)
