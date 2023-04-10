// Array.includes
// In this coding challenge, you will be implementing a function called isInArray(array, value) that takes two arguments: an array and a value. The function should return true if the input array includes the value and false otherwise

// Directions
// If the input array is empty, return false.
// Assume that the input array will not contain objects.

const isInArray = (array, value) => {
  // Write your code here
  return array.includes(value)
}

const fruits = ['apple', 'banana', 'orange']
console.log(isInArray(fruits, 'banana'))
console.log(isInArray(fruits, 'pear'))
