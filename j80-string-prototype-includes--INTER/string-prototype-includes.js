// String.prototype.includes
// In this coding challenge, you will be implementing a custom myIncludes method for JavaScript strings. The myIncludes method should behave similarly to the built-in includes method, but should be implemented from scratch without using the built-in method.

// The myIncludes method should take a string as its argument, and should return a boolean indicating whether the string appears within the original string. The method should search for the substring from the specified index, which defaults to 0. If the provided index is negative, the method should search from the end of the string.

// Your implementation should be written as an extension to the String.prototype, so that the myIncludes method can be called on any string.

// Directions
// You may not use the built-in includes method or any other string methods in your implementation of myIncludes
// Your implementation should be case sensitive

String.prototype.myIncludes = function (searchValue, fromIndex = 0) {
  // Write your code here
}

const str = 'hello world'
console.log(str.myIncludes('world')) // true
console.log(str.myIncludes('foo')) // false
console.log(str.myIncludes('hello', 1)) // false
console.log(str.myIncludes('world', 6)) // true
console.log(str.myIncludes('hello', -1)) // true
