// Random
// Write a function random() that takes no arguments and returns a random integer between 0 and Number.MAX_SAFE_INTEGER.

// Directions
// Should always return an integer between 0 and Number.MAX_SAFE_INTEGER.

const random = () => {
  // Write your code here

  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
}

const randomNum = random()
console.log(randomNum) // e.g. 1234567890
