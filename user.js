class User {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  get fullName() {
    return `${this.fName} ${this.lName}`;
  }

  set fullName(newValue) {
    var firstAndLastName = newValue.split(" ");
    this.fName = firstAndLastName[0];
    this.lName = firstAndLastName[1];
  }
}

var u = new User("avand", "amiri");

u.fName = "allison";
u.lName = "gorman";

console.log(u.fullName);

u.fullName = "avand amiri";

console.log(u.fullName);
