// Leap year
// Write a function isLeapYear(year) that takes in an integer number year as the argument and returns true if year is a leap year, and false otherwise.

// Directions
// Should return false if year is less than or equal to 0.
// Should return true if year is a leap year, i.e. it is divisible by 4 or by 400.
// Should return false if year is not a leap year.

const isLeapYear = (year) => {
  // Write your code here
  if (year <= 0) {
    return false
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true
  } else {
    return false
  }
}

console.log(isLeapYear(2000)) // true
console.log(isLeapYear(2001)) // false
