var http = require("http");

var callback = function(response){
  var body = "";

  response.on("data", function(data) {
    body += data;
  });

  response.on("end", function() {
    console.log(body);
  });
}

var req = http.request({
  host: "localhost",
  port: "8081",
  path: "/input.txt"
}, callback);

// https://nodejs.org/api/http.html#http_request_end_data_encoding_callback
req.end();
