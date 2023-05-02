// Get value from an object
// Write a function called get(key, object) that takes a key and an object as input and returns the value assigned to the key in the object.

// The object can have many nested objects in it. The function should recursively search for the key in the object and its nested objects and return the value if found, or undefined if not found. If the object is null or undefined, the function should return undefined.

// The function should not modify the original object. If there are many identical keys at different levels then return the one that is higher in the nesting hierarchy.

// Directions
// If the key doesn’t exist or the input object is not valid, return undefined.

// If there are multiple keys found, return the one higher in the nesting hierarchy.

const get = (key, object) => {
  // Write your code here
}

const obj = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
  },
}

const myName = get('name', obj) // returns "John"
console.log(myName)
const city = get('city', obj) // returns "Anytown"
console.log(city)
const zipCode = get('zipCode', obj) // returns undefined
console.log(zipCode)
