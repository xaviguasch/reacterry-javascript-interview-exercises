// Range
// In this coding challenge, you will be implementing a range(start, end, step) function for JavaScript that creates an array of numbers progressing from a given start value up to, but not including, an end value.

// The range function should take up to three arguments: start, end, and step. If step is not specified, it should default to 1.

// In this challenge you only need to consider the incremental range case, meaning that the start is always less or equal to the end and a step is a positive number.

// Directions
// Assume that start is always less or equal to end.
// If a valid range cannot be generated, return an empty array.

const range = (start, end, step = 1) => {
  // Write your code here
}

const range1 = range(1, 5)
console.log(range1) // [1, 2, 3, 4]

const range2 = range(0, 10, 2)
console.log(range3) // [0, 2, 4, 6, 8]

const range3 = range(10, 0, -2)
console.log(range4) // [10, 8, 6, 4, 2]
