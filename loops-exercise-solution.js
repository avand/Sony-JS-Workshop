"use strict";

var numbers = [1, 1, 2, 4, 4, 6, 7, 4, 9, 10, 11, 12, 13, 14, 15]

// 1. What's the max number?
var max = 0;
numbers.forEach(function(n) {
  if (n > max) max = n;
})
console.log(max)

var max = numbers.reduce(function(max, n) {
  return n > max ? n : max;
}, 0)
console.log(max)

// 2. What's the sum of all the numbers?
var sum = 0;
numbers.forEach(function(n) {
  sum += n;
})
console.log(sum)

var sum = numbers.reduce(function(sum, n) {
  return sum + n;
}, 0)
console.log(sum)


// 3. How many numbers greater than 6?
var gt6 = numbers.filter(function(n) {
  return n > 6;
});
console.log(gt6.length);

// 4. What is the position of the first 4? (use break)
var index;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] == 4) {
    index = i;
    break;
  }
}
console.log(index + 1)

// 5. At what point in the array do you have enough numbers
//    to add up to 12? (use while)
var sum = 0;
var i = 0;
while (sum < 12) {
  if (i > numbers.length) break;
  sum += numbers[i];
  i++;
}
console.log(i);

// 6. How many numbers, whose sum of digits is greater than 3? (nested loop)
var max2 = 0;
numbers.forEach(function(n) {
  var digits = n.toString().split("");
  var sumOfDigits = 0;
  digits.forEach(function(m) {
    sumOfDigits += parseInt(m)
  })
  if (sumOfDigits > 3) max2++
});
console.log(max2)
