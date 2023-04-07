// Array.every I - strings
// In this coding challenge, you will be implementing a function called validateStrings(array) that takes one argument: an array. The function should check if every element of the array is a string.

// Directions
// If the input array is empty, return false.

const validateStrings = (array) => {
  // Write your code here
  return array.every((el) => typeof el === 'string')
}

console.log(validateStrings(['hello', 'world']))
console.log(validateStrings(['hello', 123]))
