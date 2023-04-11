// Array.every II - objects
// In this coding challenge, you will be implementing a function called validateObject(users) that takes an array of users as the input. Assume that every user is an object. The function should check if every user object in the array users has the property firstName.

// Directions
// If the input array is empty, return false.

const validateObject = (users) => {
  return
}

const users1 = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Doe' },
]

console.log(validateObject(users1)) // Output: true
const users2 = [{ firstName: 'John', lastName: 'Doe' }, { lastName: 'Doe' }]
console.log(validateObject(users2))
