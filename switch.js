function getPrice(product) {
  var price;

  switch (product) {
    case "iphone":
      price = 499;
      break;
    case "ipad":
    case "macbook air":
      price = 999;
      break;
    case "macbook pro":
      price = 1999;
      break;
    default:
      price = null;
  }

  return price;
}

console.log(`iphone costs $${getPrice("iphone")}`);
console.log(`ipad costs $${getPrice("ipad")}`);
console.log(`watch pro costs $${getPrice("watch")}`);
