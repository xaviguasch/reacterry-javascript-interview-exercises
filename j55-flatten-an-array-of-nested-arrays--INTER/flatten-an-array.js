// Flatten an array of nested arrays
// You have been tasked with writing a function called flatten, which should take in an array of nested arrays arr and return a single, flattened array.

// This array may contain other arrays as elements, and those arrays may themselves contain other arrays. The function should return a new array that contains all the elements of the input array, but with any nested arrays "flattened" so that they are all at the same level in the returned array.

// For example, if the input array is [1, [2, 3], 4, [5, 6, [7, 8]]], the output array should be [1, 2, 3, 4, 5, 6, 7, 8].

// The order of the elements in the output array should be the same as in the input array. That is, if two elements of the input array are adjacent, their corresponding elements in the output array should also be adjacent.

// Directions
// If the input array is empty, then return an empty array
// The input array can have multiple levels of nesting

const flatten = (arr) => {
  // Write your code here
  return arr.flat(Infinity)
}

console.log(flatten([[1, 2, [3]], 4]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
console.log(flatten([[1], [2], [3]]))
