function fillArray() {
  var fns = [];

  for (var i = 0; i < 10; i++) {
    fns.push(function() {
      console.log(i);
    })
  }

  return fns;
}

var fns = fillArray();

fns[0]()
fns[1]()
fns[2]()
fns[3]()
fns[4]()
fns[5]()
fns[6]()
fns[7]()
fns[8]()
fns[9]()
