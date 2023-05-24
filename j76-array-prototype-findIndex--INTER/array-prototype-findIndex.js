// Array.prototype.findIndex
// In this coding challenge, you will be implementing a custom myFindIndex method for JavaScript arrays. The myFindIndex method should behave similarly to the built-in findIndex method, but should be implemented from scratch without using the built-in method.

// The myFindIndex method should take a callback function as its argument, and should apply the callback function to each element in the array, in the order in which they appear. The callback function should take three arguments: the current element, the index of the current element, and the array on which myFindIndex was called. The callback function should return a Boolean value indicating whether the current element matches the search criteria.

// The myFindIndex method should return the index of the first element in the array for which the callback function returns true. If no such element is found, the method should return -1.

// Your implementation should be written as an extension to the Array.prototype, so that the myFindIndex method can be called on any array.

// Directions
// You may not use the built-in findIndex method or any other array methods in your implementation of myFindIndex.
// Your implementation should be efficient and avoid unnecessary looping and variable creation.

Array.prototype.myFindIndex = function (callback, thisArg) {
  // Write your code here
}

const numbers = [1, 2, 3, 4, 5]
const index = numbers.myFindIndex((num) => num > 3)
console.log(index) // 3
