var http = require("http");

// Here's an example of making an HTTP request with a Node module
http.get("http://omdbapi.com/?s=cool+runnings", function(response) {
  if (response.statusCode == 200) {
    var body = "";
    response.on("data", function(chunk) { body += chunk; });
    response.on("end", function() { console.log(body); });
  }
});
