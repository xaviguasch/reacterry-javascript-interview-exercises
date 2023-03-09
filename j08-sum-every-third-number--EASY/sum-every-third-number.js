// Sum every third number
// Write a function sumOfThirds(arr), which takes an array as an argument. This function should return a sum of every third number in the array, starting from the first one.

// Directions
// If the input array is empty then return 0
// The input array will contain only numbers

const sumOfThirds = (arr) => {
  let sum = 0

  for (let i = 0; i < arr.length; i += 3) {
    sum += arr[i]
  }

  return sum
}

console.log(sumOfThirds([1, 1, 1, 2, 2, 2, 3, 3, 3])) // 6
console.log(sumOfThirds([])) // 0
console.log(sumOfThirds([-5, 0, 5, -4, 1, 6, -3, 2, 7])) // -12
console.log(sumOfThirds([1, 2, 3, 4, 5, 6])) // 5
