// Compare two arrays
// Implement a function called areArraysEqual(arr1, arr2) that compares two arrays arr1 and arr2 and returns a boolean indicating if they are equal or not.

// The function should perform a deep comparison of the elements in the arrays, and return true only if both arrays have the same number of elements and each corresponding element in the arrays is equal.

// Directions
// Simple comparison === cannot be used to determine the equality of arrays. This is because the equality operator === only checks for reference equality, meaning that two arrays are considered equal only if they reference the same object in memory.
// The input arrays can contain only booleans, strings, and numbers.

const areArraysEqual = (arr1, arr2) => {
  // Write your code here
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])) // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])) // false
console.log(areArraysEqual([1, 2, 3], [1, 2, 3, 4])) // false
