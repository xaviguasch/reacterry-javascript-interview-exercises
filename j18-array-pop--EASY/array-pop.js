// Array.pop
// In this coding challenge, you will be implementing a function called remove(array) that takes one argument: an array. The function should remove the last element from the input array and return the array.

// Directions

const remove = (array) => {
  // Write your code here
  array.pop()
  return array
}

console.log(remove([1, 2, 3]))
console.log(remove(['foo', 'bar', 'baz']))
