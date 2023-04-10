// Array.indexOf
// In this coding challenge, you will be implementing a function called findIndexOf(array, value) that takes two arguments: an array and a value. The function should return the index of the first occurrence of the value in the array.

// Directions
// If no element is found, return -1.

const findIndexOf = (array, value) => {
  return array.indexOf(value)
}

console.log(findIndexOf([1, 2, 3], 2))
console.log(findIndexOf(['foo', 'bar', 'baz'], 'baz'))
