// Rotate an array
// Implement a function called rotateArray(arr, n) that takes an array arr and a number n as arguments. It should return a new array with the elements rotated to the left by n places.

// Directions
// The input array can contain strings and numbers
// The value of n can be any positive integer
// If n is greater than the length of the array, the elements should be rotated more than once.

const rotateArray = (arr, n) => {
  const len = arr.length
  const steps = n % len

  return [...arr.slice(steps), ...arr.slice(0, steps)]
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)) // returns [3, 4, 5, 1, 2]
console.log(rotateArray(['apple', 'banana', 'cherry', 'date'], 3))
// ["date", "apple", "banana", "cherry"]
console.log(rotateArray([1, 2, 3, 4, 5, 6], 4)) // [5, 6, 1, 2, 3, 4]
