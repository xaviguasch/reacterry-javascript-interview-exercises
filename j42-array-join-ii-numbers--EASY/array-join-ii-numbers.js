// Array.join II - numbers
// Implement a function called joinWithCommas() that takes an array of numbers array as the argument and returns a string of comma-separated values (CSV). If array is empty, the function should return an empty string.

// Directions
// If the input array is empty, return an empty string
// The input array will contain only numbers

const joinWithCommas = (array) => {
  return array.join(',')
}

console.log(joinWithCommas([1, 2, 3, 4, 5, 6]))
console.log(joinWithCommas([1, 2, 3]))
console.log(joinWithCommas([]))
