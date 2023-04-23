// Longest string in the array
// In this coding challenge, you will be implementing a function called findLongest(array) that takes an array of strings array as the argument. The function should return the longest string in the array.

// Directions
// If the input array is empty, then return null.
// If two or more strings have the same length, return the one with a lower index.

const findLongest = (array) => {
  // Write your code here
  if (array.length === 0) {
    return ''
  }

  let longestStr = ''

  array.forEach((string) => {
    if (string.length > longestStr.length) {
      longestStr = string
    }
  })

  return longestStr
}

console.log(findLongest(['cat', 'dog', 'elephant'])) // Output: 'elephant'
console.log(findLongest(['apple', 'banana', 'pear'])) // Output: 'banana'
console.log(findLongest(['', 'a', 'aa', 'aaa'])) // Output: 'aaa'
console.log(findLongest([])) // Output: null
