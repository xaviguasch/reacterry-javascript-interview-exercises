// Reverse a string
// You have been asked to write a function reverseAString(str) that takes in a string as an argument. The function should return a new string that is the reverse of the input string. The function should not modify the original string.

// Directions
// Strings are immutable, so return a new string
// If the input string is empty, then return an empty string

const reverseAString = (str) => {
  // return str.split('').reverse().join('')

  // ALTERNATIVE SOLUTION

  let reversedStr = ''

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }

  return reversedStr
}

console.log(reverseAString('hello')) // 'olleh'
console.log(reverseAString('hi')) // 'ih'
