// Add ellipsis to a string
// Write a function truncateWithEllipsis(str, n), which takes in two arguments, the string str and the number n. This function should truncate the input string after the first n characters and append the … to the end of the string.

// The ellipsis should be appended only if the input string had to be shortened. Do not append the … if you didn’t need to truncate the input string.

// Directions
// Assume that n is an integer greater than 0

export const truncateWithEllipsis = (str, n) => {
  // Write your code here
}

console.log(truncateWithEllipsis('hello', 2)) // Output: "he..."
console.log(truncateWithEllipsis('hello', 10)) // Output: "hello"
console.log(truncateWithEllipsis('How are you?', 5)) // Output: "How a..."
