"use strict";

var fs = require("fs");
var http = require("http");

function readLines(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data.toString().trim().split("\n"));
      }
    });
  });
};

function get(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(response) {
      if (response.statusCode == 200) {
        var body = "";
        response.on("data", function(chunk) { body += chunk; });
        response.on("end", function() { resolve(body); });
      } else {
        reject(response);
      }
    });
  });
};

function getMovie(id) {
  return get(`http://omdbapi.com/?i=${id}`).then(JSON.parse).then(function(response) {
    if (response["Error"]) throw Error(response["Error"])
    return response;
  }).catch(function() {
    console.log(`Could not find movie: ${id}`);
  })
};

readLines("movies.txt").then(function(lines) {
  Promise.all(lines.map(getMovie)).then(function(movies) {
    movies.sort(function(a, b) {
      return parseInt(b["Year"]) - parseInt(a["Year"]);
    }).forEach(function(movie) {
      console.log(`${movie["Year"]} - ${movie["Title"]}`)
    });
  });
})
