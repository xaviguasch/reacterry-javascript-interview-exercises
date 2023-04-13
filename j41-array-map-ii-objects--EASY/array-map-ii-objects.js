// Array.map II - objects
// Write a function called getAges(users), which takes in an array of objects users as an argument. Each user object has three properties: name, age, and height. Return a new array that contains only the ages of the users.

// Directions
// Return a new array
// If the input array is empty, then return an empty array
// Maintain the order of the elements as in the original array

const getAges = (users) => {
  // Write your code here
  return users.map((user) => user.age)
}

const users = [
  { name: 'John', age: 25, height: 175 },
  { name: 'Mary', age: 30, height: 165 },
  { name: 'Bob', age: 40, height: 180 },
  { name: 'Jane', age: 20, height: 170 },
]

const ages = getAges(users)
console.log(ages)

// Output: [25, 30, 40, 20]
