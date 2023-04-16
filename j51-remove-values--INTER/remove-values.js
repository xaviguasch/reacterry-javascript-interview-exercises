// Remove values
// You are tasked with implementing a function called removeValues(arr1, arr2) that takes two arrays, arr1 and arr2, and removes from arr1 all values that appear in arr2.

// The removeValues function should not modify arr2. It should return a new array with the remaining values of arr1 after removing the values that appear in arr2. The order of the values in the new array should be the same as in the original array.

// Directions
// The elements in the arrays can be of any type.
// The function should not modify arr1 or arr2.
// The function should be case-sensitive.

const removeValues = (arr1, arr2) => {
  // Write your code here

  return arr1.filter((el) => !arr2.includes(el))
}

// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [3, 4, 6]
// const remaining = removeValues(arr1, arr2)
// console.log(remaining) // [1, 2, 5]

// const arr1 = [1, 2, 3]
// const arr2 = [1, 2, 3]
// const remaining = removeValues(arr1, arr2)
// console.log(remaining) // []

const arr1 = [1, 2, 2, 3, 4, 4, 5]
const arr2 = [2, 4]
const remaining = removeValues(arr1, arr2)
console.log(remaining) // [1, 3, 5]
