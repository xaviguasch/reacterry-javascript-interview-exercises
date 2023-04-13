// Array.map III - numbers
// Write a function called doubleNumbers(numbers) that takes an array of numbers as an argument and returns a new array with every element of the input array doubled.

// Directions
// You should return a new array.
// If the input array is empty, then return an empty array.
// The input array will contain only numbers.

const doubleNumbers = (numbers) => {
  // Edit this line
  return numbers.map((num) => num * 2)
}

const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = doubleNumbers(numbers)

console.log(doubledNumbers) // Output: [2, 4, 6, 8, 10]
