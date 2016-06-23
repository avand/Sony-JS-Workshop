var p = new Promise(function(resolve, reject) {
  console.log("going to server for data...");

  var data = {
    message: "happy birthday",
    names: ["vikram"]
  };

  if (data.names.length == 0) {
    reject("no birthdays, no cake 😭");
  } else {
    resolve(data);
  }
})

function composeMessage(d) {
  return `${d.message} to ${d.names.join(", ")}`
}

p.then(composeMessage)
 .then(function(message) {
   console.log(message);
 })
 .catch(function(e) {
  console.log(e.message);
})
