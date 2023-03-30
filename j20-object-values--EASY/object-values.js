// Object.values
// In this coding challenge, you will be implementing a function called getValues(object) that takes an argument: an object. The function should return an array will all of the object’s values.

// Directions
// If the object has no values, return an empty array.

const getValues = (object) => {
  return Object.values(object)
}

console.log(getValues({ foo: 1, bar: 2, baz: 3 }))
console.log(getValues({ foo: 1, bar: 2 }))
console.log(getValues({}))
