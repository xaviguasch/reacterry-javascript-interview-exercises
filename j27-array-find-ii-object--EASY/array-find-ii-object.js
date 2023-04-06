// Array.find II - object
// In this coding challenge, you will be implementing a function called getAnAdult(users) that takes an array of objects users. This function should return the first object which property age corresponds to a value greater or equal to 18.

// Directions
// If no such element is found, return null.
// You can assume that all objects in users have the property age.

const getAnAdult = (users) => {
  // Write your code here

  return users.find((u) => u.age >= 18) || null
}

const users = [
  { name: 'John', age: 15 },
  { name: 'Jane', age: 20 },
  { name: 'Bob', age: 25 },
]

console.log(getAnAdult(users)) // Output: { name: 'Jane', age: 20 }

const users2 = [
  { name: 'John', age: 17 },
  { name: 'Jane', age: 17 },
  { name: 'Bob', age: 17 },
]
console.log(getAnAdult(users2)) // Output: null
