// Array.sort - ascending
// In this coding challenge, you will be implementing a function called sortAscending(numbers), which takes in an array of numbers as input and returns the same array but sorted in ascending order.

// Directions
// If the input array is empty, return an empty array.
// Sort the array in place.

const sortAscending = (numbers) => {
  return numbers.sort((a, b) => a - b)
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sortAscending(numbers)
console.log(numbers)
