// Compare two objects
// Write a JavaScript function called areObjectsEqual(object1, object2) that takes in two arrays object1 and object2 as parameters. The function should compare the two objects and return a boolean indicating if they are equal or not.

// The function should consider two objects equal if they have the same properties and their values are also equal.

// Directions
// Operator === cannot be used to compare objects in JavaScript as it only checks for reference equality, not structural equality. To check if two objects have the same key-value pairs, a deeper comparison must be performed.
// Assume that the values can only be strings and numbers.

const areObjectsEqual = (obj1, obj2) => {
  // Write your code here
}

const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { a: 1, b: 2, c: 3 }
const obj3 = { a: 1, b: 2, c: 4 }

console.log(areObjectsEqual(obj1, obj2)) // Output: true
console.log(areObjectsEqual(obj1, obj3)) // Output: false
