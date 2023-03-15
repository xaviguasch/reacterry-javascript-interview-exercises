// Array.filter II - objects
// Implement a function called getAdultUser that takes an array of user objects as input and returns a new array containing only the users who are at least 18 years old.

// Each user object in the input array has three properties: name, age, and height.

// Directions
// If no adult users are found, return an empty array.

const getAdultUsers = (users) => {
  return
}

const users = [
  { name: 'John', age: 21, height: 180 },
  { name: 'Mary', age: 17, height: 165 },
  { name: 'Bob', age: 25, height: 175 },
  { name: 'Jane', age: 15, height: 170 },
]

console.log(getAdultUsers(users)) // Output: [{ name: 'John', age: 21, height: 180 }, { name: 'Bob', age: 25, height: 175 }]

const users2 = [
  { name: 'Tom', age: 18, height: 190 },
  { name: 'Alice', age: 20, height: 160 },
  { name: 'Mike', age: 17, height: 175 },
  { name: 'Lucy', age: 23, height: 165 },
]

console.log(getAdultUsers(users2)) // Output: [{ name: 'Tom', age: 18, height: 190 }, { name: 'Alice', age: 20, height: 160 }, { name: 'Lucy', age: 23, height: 165 }]
