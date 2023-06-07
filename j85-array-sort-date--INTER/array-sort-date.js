// Implement a function called sortAscendingByDate(array) that takes an array of objects as an argument and sorts it in ascending order based on the date property of each object.

// Directions
// The date property can be assumed to be a string in the format YYYY-MM-DD.
// Sort the array in place.
// If the input array is empty, return an empty array.

const sortAscendingByDate = (array) => {
  // Write your code here
}

const events = [
  { name: 'Event 1', date: '2022-10-20', location: 'New York' },
  { name: 'Event 2', date: '2023-02-10', location: 'Paris' },
  { name: 'Event 3', date: '2023-01-01', location: 'Tokyo' },
]

const sortedEvents = sortAscendingByDate(events)
console.log(sortedEvents)
// Output: [
//   { name: 'Event 3', date: '2023-01-01', location: 'Tokyo' },
//   { name: 'Event 2', date: '2023-02-10', location: 'Paris' },
//   { name: 'Event 1', date: '2022-10-20', location: 'New York' },
// ]
