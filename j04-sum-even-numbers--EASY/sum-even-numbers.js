// BEGINNER
// Sum even numbers
// Write a function sumOfEvens(arr), which takes an array as an argument. This function should return a sum of every even number in the array.

// Directions
// If the input array is empty then return 0
// The input array will contain only numbers

const sumOfEvens = (arr) => {
  return arr.reduce((acc, currV) => {
    if (currV % 2 === 0) {
      console.log(currV)
      return acc + currV
    } else {
      return acc
    }
  }, 0)

  // ALTERNATIVE SOLUTION USING LOOPS
  // let sum = 0
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) {
  //     sum += arr[i]
  //   }
  // }
  // return sum
}

console.log(sumOfEvens([1, 1, 1, 2, 2, 2, 3, 3, 3])) // 6
console.log(sumOfEvens([])) // 0
console.log(sumOfEvens([-5, 0, 5, -4, 1, 6, -3, 2, 7])) // 4
