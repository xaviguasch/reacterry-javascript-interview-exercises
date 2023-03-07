// Join two arrays
// Implement a function called joinArrays(arrOne, arrTwo) that takes two arrays as arguments: arrOne and arrTwo. The function should return a new array that is the result of joining the two arrays together, maintaining the respective order of the arrays.

// Directions
// Concatenate arrTwo to arrOne to form the new array.
// Do not modify the existing arrays, return a new array instead.
// If both arrays are empty, return an empty array.
// Ensure that your function returns a new array instead of modifying the input arrays.

const joinArrays = (arrOne, arrTwo) => {
  return [...arrOne, ...arrTwo]

  // ALTERNATIVE SOLUTION: It creates a new array
  // return arrOne.concat(arrTwo)
}

console.log(joinArrays([1, 2, 3], [4, 5, 6])) // Output: [1, 2, 3, 4, 5, 6]
