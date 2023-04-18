// Max character
// Write a function maxCharacters(str), which takes a string str as an input. This function should return the character that occurs most often.

// Directions
// If the input string is empty, return null.
// If two or more characters appear in the str with the same frequency, return the one whose first occurrence has lower index.

const maxCharacters = (str) => {
  // Write your code here

  if (str === '') {
    return null
  }

  const hashObj = {}

  let maxChar = ''
  let maxNum = 0

  str.split('').forEach((char) => {
    if (hashObj[char]) {
      hashObj[char] += 1
    } else {
      hashObj[char] = 1
    }
  })

  for (const key in hashObj) {
    if (hashObj[key] > maxNum) {
      maxNum = hashObj[key]
      maxChar = key
    }
  }

  return maxChar
}

console.log(maxCharacters('hello'))
console.log(maxCharacters('Mississippi'))
console.log(maxCharacters(''))
console.log(maxCharacters('a b c d e'))
