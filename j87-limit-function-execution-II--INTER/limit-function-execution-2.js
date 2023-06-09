// Limit function execution II
// In this coding challenge, you will be implementing a function that accepts a callback function and a number n, which limits how many times the callback can be called. The callbackAtMostN function should return a new function that can be called at most n times.

// The returned function should behave like the original callback function, except that it should only be called at most n times. After the function has been called n times, any further calls to the function should do nothing and return undefined.

// The returned function should take any number of arguments, which should be passed on to the original callback function when it is called.

// Directions
// The maximum number of times the callback can be called should be a positive integer.
// The original callback function should be called with the same arguments as the returned function, except for any arguments that are ignored after the maximum number of calls has been reached.
// Any return values from the original callback function should be ignored after the maximum number of calls has been reached.
// The returned function should not modify any external state or variables.

const callbackAtMostN = (callback, n) => {
  // Write your code here
}

const callback = (a, b) => console.log(a + b)
const callbackAtMostTwo = callbackAtMostN(callback, 2)
callbackAtMostTwo(1, 2) // logs 3
callbackAtMostTwo(3, 4) // logs 7
callbackAtMostTwo(5, 6) // does nothing
