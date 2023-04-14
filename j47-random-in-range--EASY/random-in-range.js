// Random in range
// In this coding challenge, you will be implementing a function called randomInRange(min, max) that generates a random integer between a given minimum value (inclusive) and a maximum value (exclusive). The function should take two arguments, min and max, both of which are integers.

// Directions
// The minimum value is inclusive and the maximum value is exclusive.
// Assume that this statement is always true min < max.

const randomInRange = (min, max) => {
  // Write your code here
  return Math.floor(Math.random() * (max - min) + min)
}

const randomInt = randomInRange(1, 10)
console.log(randomInt) // output: a random integer between 1 and 9
