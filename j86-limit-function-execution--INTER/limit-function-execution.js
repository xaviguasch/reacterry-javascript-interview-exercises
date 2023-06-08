// Limit function execution I
// In this coding challenge, you will be implementing a function callbackAtMostOnce(callback) that accepts a callback function and returns a new function that can be called at most once. The returned function should behave like the original callback function, except that it should only be called at most once. After the function has been called once, any further calls to the function should do nothing and return undefined.

// The returned function should take any number of arguments, which should be passed on to the original callback function when it is called.

// Directions
// The original callback function should be called with the same arguments as the returned function, except for any arguments that are ignored after the first call has been made.
// Any return values from the original callback function should be ignored after the first call has been made.
// The returned function should not modify any external state or variables.

const callbackAtMostOnce = (callback) => {
  // Write your code here
}

const callback = (a, b) => console.log(a + b)
const callbackAtMostOnce = callbackAtMostOnce(callback)
callbackAtMostOnce(1, 2) // logs 3
callbackAtMostOnce(3, 4) // does nothing
