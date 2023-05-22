// Sorted Index
// In this coding challenge, you will implement a function called sortedIndex, which takes an array and a value as input and returns the index at which the value should be inserted into the array in order to maintain its sorted order.

// The sortedIndex function should work with arrays that contain numbers or strings. The array will be sorted in ascending order. If the value to be inserted is already present in the array, the function should return the index of the existing value.

// Directions
// The input array will contain only numbers or only strings.
// The input array may be empty.

sortedIndex = (arr, value) => {
  // Write your code here
}

const arr = [10, 20, 30, 40, 50]
const value1 = 25
const value2 = 35
const value3 = 10
const index1 = sortedIndex(arr, value1) // index1 should be 2
const index2 = sortedIndex(arr, value2) // index2 should be 4
const index3 = sortedIndex(arr, value3) // index3 should be 0

console.log(index1)
console.log(index2)
console.log(index3)
