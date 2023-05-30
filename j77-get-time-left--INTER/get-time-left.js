// Get time left
// Write a function called getTimeLeft(years, months) that takes in two number arguments called years and months. The function should treat the arguments as a countdown until some unspecified event and return a human-readable string representing how much time is left. The string should follow this format: X year(s) and Z month(s).

// For example, if years is 1 and months is 6, the function should return the string "1 year and 6 months".

// Directions
// The output string should use the singular form of "year" and "month" when the corresponding value is one.
// The output string should use the plural form of "years" and "months" when the corresponding value is zero or greater than one.
// The function should return a string.

const getTimeLeft = (years, months) => {
  // Write your code here
}

console.log(getTimeLeft(0, 0)) // Output: "0 years and 0 months"
console.log(getTimeLeft(0, 1)) // Output: "0 years and 1 month"
console.log(getTimeLeft(0, 2)) // Output: "0 years and 2 months"
console.log(getTimeLeft(1, 0)) // Output: "1 year and 0 months"
console.log(getTimeLeft(1, 1)) // Output: "1 year and 1 month"
