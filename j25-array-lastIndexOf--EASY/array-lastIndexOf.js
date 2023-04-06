// Array.lastIndexOf
// In this coding challenge, you will be implementing a function called findLastIndexOf(array, value) that takes two arguments: an array and a value. The function should return the index of the last occurrence of the value in the array.

// Directions
// If no element is found, return -1.

const findLastIndexOf = (array, value) => {
  // Write your code here

  return array.lastIndexOf(value)
}

console.log(findLastIndexOf([1, 2, 3, 2], 2))
console.log(findLastIndexOf(['foo', 'bar', 'baz', 'bar'], 'baz'))
