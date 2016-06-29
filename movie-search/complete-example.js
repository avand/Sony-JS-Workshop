var http = require("http");

getSearchTerm()
  .then(searchMovies)
  .then(printMovies)
  .catch(function(error) {
    console.log("error: " + error);
  })

function getSearchTerm() {
  return new Promise(function(resolve, reject) {
    var searchTerm = process.argv[2];

    if (searchTerm == undefined || searchTerm.length == 0) {
      reject("Please supply a search term...");
    } else {
      searchTerm = encodeURIComponent(searchTerm);
      resolve(searchTerm);
    }
  });
};

function searchMovies(term) {
  return new Promise(function(resolve, reject) {
    try {
      var url = `http://omdbapi.com/?s=${term}&type=movie`;
      getJSON(url, function(json) {
        var movies = json["Search"];
        resolve(movies);
      })
    } catch(error) {
      reject(error);
    }
  });
};

function printMovies(movies) {
  movies.forEach(function(movie, i) {
    console.log(`${i + 1}. ${movie["Title"]} (${movie["Year"]})`)
  })
}

function get(url, callback) {
  http.request(url, function(response) {
    var responseBody = "";
    response.on("data", function(data) {
      responseBody += data;
    });
    response.on("end", function() {
      callback(responseBody);
    })
  }).end()
}

function getJSON(url, callback) {
  get(url, function(responseBody) {
    callback(JSON.parse(responseBody));
  })
}
