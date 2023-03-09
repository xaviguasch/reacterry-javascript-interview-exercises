// Find the largest number in array
// Write a function findMax(arr), which takes an array of numbers as the input. This function should return the biggest number in the array. The highest number may occur more than once. If no such number is found then return null.

// Directions
// The input array will contain only numbers
// Return null if no max number is found

const findMax = (arr) => {
  if (!arr || arr.length === 0) {
    return null
  }

  let largestNum = arr[0]

  for (const num of arr) {
    if (num > largestNum) {
      largestNum = num
    }
  }

  return largestNum
}

console.log(findMax([4, 7, 2, 9, 1, 5])) // 9
console.log(findMax([-1, -5, -2])) // -1
console.log(findMax([])) // null
