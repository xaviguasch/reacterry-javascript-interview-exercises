// Array.sort - descending
// In this coding challenge, you will be implementing a function called sortDescending, which takes in an array of numbers as input and returns the same array but sorted in descending order.

// Your implementation should sort the input array in place, without creating a new array. If the input array is empty, your implementation should return an empty array.

// Directions
// You should not create a new array in your implementation.
// Your implementation should be efficient and avoid unnecessary looping and variable creation.

const sortDescending = (numbers) => {
  return numbers.sort((a, b) => b - a)
}

console.log(sortDescending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]))
