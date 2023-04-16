// Invert an object
// Write a function invertObject(obj), which takes an object obj as an argument and returns a new object where the keys and values of the original object are swapped.

// Directions
// The values of the input object can only be strings and numbers
// If the input object is empty, then return an empty object
// The function should not modify the original object
// The function should handle objects with any number of key-value pairs

const invertObject = (obj) => {
  const invObj = {}

  const entries = Object.entries(obj)

  for (const pair of entries) {
    invObj[pair[1]] = pair[0]
  }

  return invObj
}

const originalObj = {
  name: 'John',
  age: 30,
  city: 'New York',
}

const invertedObj = invertObject(originalObj)
console.log(invertedObj) // Output: { John: 'name', '30': 'age', 'New York': 'city' }
