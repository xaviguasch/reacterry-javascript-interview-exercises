// Array.reverse
// In this coding challenge, you will be implementing a function called reverseArray(array, value) that takes one argument: an array. The function should reverse the order of the elements in the array.

// Directions
// If the input array is empty, return an empty array.

const reverseArray = (array) => {
  // via method
  // return array.reverse()

  //  via loop
  const reversedArr = []

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i])
  }

  return reversedArr
}

console.log(reverseArray([1, 2, 3, 4]))
console.log(reverseArray([1, 2]))
console.log(reverseArray([]))
