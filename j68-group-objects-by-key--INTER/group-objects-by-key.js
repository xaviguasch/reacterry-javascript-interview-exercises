// Group objects by key
// Write a function groupBy(array, key) that takes an array of objects array and a key as inputs. The function should group the objects by the value of the key and return an object with the groups as keys and the objects as values.

// Directions
// You can assume that all of the objects have the same properties.
// You can assume that the key always exists in the objects.
// If the input array is empty, return an empty object.

const groupBy = (array, key) => {
  // Write your code here
  const hashObj = {}

  array.map((obj) => {
    if (!hashObj[obj[key]]) {
      hashObj[obj[key]] = [obj]
    } else {
      hashObj[obj[key]].push(obj)
    }
  })

  return hashObj
}

const people = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 35 },
  { name: 'Charlie', age: 28 },
  { name: 'David', age: 42 },
]

const result = groupBy(people, 'age')
console.log(result)

// {
//   28: [
//     { name: 'Alice', age: 28 },
//     { name: 'Charlie', age: 28 }
//   ],
//   35: [
//     { name: 'Bob', age: 35 }
//   ],
//   42: [
//     { name: 'David', age: 42 }
//   ]
// }
