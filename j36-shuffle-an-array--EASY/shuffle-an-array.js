// Shuffle an array
// Write a function suffleArray(arr), which takes an array arr as an argument. This function should shuffle the elements of the array like a deck of cards or in other words, randomly change their positions.

// Directions
// If the input array is empty then return an empty array
// You should shuffle the array in place, do not create a new array

const shuffleArray = (arr) => {
  // Write your code here

  return arr.sort((a, b) => 0.5 - Math.random())
}

console.log(shuffleArray([1, 2, 3, 4, 5]))
console.log(shuffleArray(['apple', 'banana', 'orange', 'mango', 'kiwi']))
console.log(shuffleArray([5, 10, 15, 20, 25, 30, 35]))
