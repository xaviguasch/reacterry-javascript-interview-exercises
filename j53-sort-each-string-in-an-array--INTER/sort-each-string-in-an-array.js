// Sort each string in an array
// In this coding challenge, you will be implementing a function called sortStrings(array) that takes an array of strings array as the argument. The function should return an array with all the strings sorted alphabetically.

// Directions
// If the input array is empty, then return an empty array.

const sortStrings = (array) => {
  // Write your code here
  return array.map((word) => word.split('').sort().join(''))
}

console.log(sortStrings(['apple', 'banana', 'pear', 'banana', 'orange', 'apple']))
// Output: ['aelpp', 'aaabnn', 'aepr', 'aaabnn', 'aegnor', 'aelpp']
console.log(sortStrings(['Orange', 'apple', 'Banana', 'pear']))
// Output: ['aegnor', 'aelpp', 'aaabnn', 'aepr']
console.log(sortStrings(['orange', 'apple', '123', '!banana', 'pear']))
// Output: ['aegnor', 'aelpp', '123', 'aabnn!', 'aepr']
