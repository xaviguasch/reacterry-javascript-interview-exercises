// Reverse an array
// You have been asked to write a function called reverseAnArray(arr) that takes in one array arr as the argument. The function should reverse the order of the elements in the array and return the reversed array.

// Directions
// If the input array is empty, then return an empty array.
// The input array will only contain strings and numbers

const reverseAnArray = (arr) => {
  if (arr.length === 0) {
    return []
  }

  // SOLUTION WITH METHODS
  // return arr.reverse()

  // SOLUTION WITHOUT METHODS

  const reversedArr = []

  for (const el of arr) {
    reversedArr.unshift(el)
  }

  return reversedArr
}

console.log(reverseAnArray([1, 2, 3, 4, 5]))
console.log(reverseAnArray(['e', 'd', 'c', 'b', 'a']))
console.log(reverseAnArray([1, 2]))
