// Stringify
// In this coding challenge, you will be implementing a custom stringify(value) function, which takes a JavaScript value as its argument and converts it to a string.

// If the value is a primitive type (string, number, boolean, null, or undefined), the stringify method should return a string representing the value.

// If the value is an object or array, the stringify method should recursively traverse the object or array and return a string representing the value.

// For objects, the string should be in the format of a JSON object, with keys and values separated by a colon and items separated by commas. For arrays, the string should be in the format of a JSON array, with items separated by commas.

// Your implementation should handle circular references (i.e. objects that refer to themselves or to other objects that refer back to them) by returning the string null.

// Directions
// You may not use the built-in JSON.stringify method or any other serialization libraries in your implementation of stringify.
// Your implementation should handle circular references.
// Your implementation should be efficient and avoid unnecessary looping and variable creation.

const stringify = (value) => {
  // Write your code here
}

const obj = {
  name: 'John',
  age: 30,
  city: 'New York',
  friends: ['Mary', 'Tom'],
  address: {
    street: '123 Main St',
    zip: '10001',
  },
}

const str = stringify(obj)
console.log(str) // {"name":"John","age":30,"city":"New York","friends":["Mary","Tom"],"address":{"street":"123 Main St","zip":"10001"}}

console.log(stringify(null)) // "null"
console.log(stringify(undefined)) // undefined
console.log(stringify(function () {})) // undefined
console.log(stringify(Symbol('test'))) // undefined
console.log(stringify('Hello, world!')) // "Hello, world!"
console.log(stringify([1, 2, 'three'])) // "[1,2,"three"]"
console.log(stringify({ foo: 'bar', baz: 42 })) // "{"foo":"bar","baz":42}"
console.log(stringify({ foo: [1, 2, 3], bar: { baz: 'qux' } })) // "{"foo":[1,2,3],"bar":{"baz":"qux"}}"
console.log(stringify(42)) // "42"
