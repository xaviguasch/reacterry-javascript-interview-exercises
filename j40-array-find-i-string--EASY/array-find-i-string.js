// Array.find I - string
// In this coding challenge, you will be implementing a function called getLongerThanFour(array) that takes an array of strings array. This function should return the first element that’s longer than 4 characters.

// Directions
// If no such element is found, return null.
// Assume that all elements in the array are strings.

const getLongerThanFour = (array) => {
  return array.find((str) => str.length > 4) || null
}

console.log(getLongerThanFour(['hello', 'world', 'foo'])) // Output: 'hello'
console.log(getLongerThanFour(['a', 'ab', 'abc', 'abcd'])) // Output: null
console.log(getLongerThanFour(['a', 'ab', 'abc', 'abcd'])) // Output: null
