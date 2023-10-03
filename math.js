// pow - 3 to the power 8
const result = Math.pow(3, 8);
console.log(result); 
// The Math.abs() static method returns the absolute value of a number.
function difference(a, b) {
    return Math.abs(a - b);
  }
  
  console.log(difference(3, 5));
//   The Math.round() static method returns the value of a number rounded to the nearest integer.
console.log(Math.round(0.9));

// The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number.
console.log(Math.ceil(.95));
// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6

// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1\
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1
  