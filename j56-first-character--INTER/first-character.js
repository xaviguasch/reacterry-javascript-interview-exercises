// First character
// Write a function firstCharacter(str) which takes a string str as an input. This function has to find the first non-repeating character in the input string. If no such character is found, the function should return null. The solution should be able to handle all types of strings, including empty strings, strings with only one character, and strings with all repeating characters.

// Directions
// If no non-repeating character is found, return null.
// str can consist of any alphanumeric characters.

const firstCharacter = (str) => {
  // Write your code here
}

console.log(firstCharacter('hello')) // "h"
console.log(firstCharacter('dad')) // "a"
console.log(firstCharacter('racecar')) // null
console.log(firstCharacter('aabbcc')) // null
console.log(firstCharacter('')) // null
