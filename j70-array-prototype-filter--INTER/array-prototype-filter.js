// Array.prototype.filter
// In this coding challenge, you will be implementing a custom myFilter method for JavaScript arrays. The myFilter method should behave similarly to the built-in filter method, but should be implemented from scratch without using the built-in method.

// The myFilter method should take a callback function as its argument, and should apply the callback function to each element in the array, in the order in which they appear. The callback function should take three arguments: the current element, the index of the current element, and the array on which myFilter was called. The callback function should return a boolean value, which will be used to determine whether to include the current element in the new array returned by myFilter.

// The myFilter method should return a new array containing only the elements that satisfy the filter condition. The new array should have the same length as the original array, and its elements should be in the same order as the original array.

// Your implementation should be written as an extension to the Array.prototype, so that the myFilter method can be called on any array.

// Directions
// You may not use the built-in filter method or any other array methods in your implementation of myFilter.
// Your implementation should not modify the original array.
// Your implementation should be efficient and avoid unnecessary looping and variable creation.
// The callback function should return a boolean value.

Array.prototype.myFilter = function (callback) {
  // Write your code here
}

const numbers = [1, 2, 3, 4, 5]
const filteredNumbers = numbers.myFilter((num) => num > 3)
console.log(filteredNumbers) // [4, 5]
