// Remove falsy values
// In this coding challenge, you will be implementing a function removeFalsey(arr) that accepts an array arr and returns a new array containing only the truthy values.

// A value is considered truthy if it is NOT one of the following: false, null, undefined, 0, NaN, or an empty string.

// Directions
// The input array may contain any number of values, including zero.
// The returned array should only contain truthy values.
// The original input array should not be modified.

const removeFalsy = (arr) => {
  return arr.filter((value) => value)
  // ALTERNATIVE SOLUTION
  // return arr.filter(Boolean)
}

const arr = [0, 1, false, 2, '', 3]
const result = removeFalsy(arr)
console.log(result) // should log [1, 2, 3]
