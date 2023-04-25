// Sum numbers from a string
// Write a function sumNumbers(str), which takes a string str as an argument. The string represents a list of numbers separated by a comma. This function should return the sum of all the numbers in the string.

// Directions
// Assume that the input str will always be a valid sequence of comma-separated integers.
// If the input string is empty, then return 0.

const sumNumbers = (str) => {
  // Write your code here
  if (!str) return 0

  const numsArr = str.split(',').map((e) => Number(e))

  return numsArr.reduce((acc, currV) => acc + currV, 0)
}

console.log(sumNumbers('')) // Output: 0
console.log(sumNumbers('1,2,3,4,5')) // Output: 15
console.log(sumNumbers('0,0,1,2,2')) // Output: 5
console.log(sumNumbers('10,-20,30,-40,50')) // Output: 30
