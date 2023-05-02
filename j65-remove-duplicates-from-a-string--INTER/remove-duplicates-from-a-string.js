// Remove duplicates from a string
// Write a function removeDuplicates(str) that takes a string str and returns a new string with all duplicate characters removed.

// Directions
// If the input string is empty, return an empty string.
// The function should be case-sensitive.
// The function should not modify the relative order of the characters in the string.

const removeDuplicates = (str) => {
  if (str.length === 0) {
    return ''
  }

  const noRepeats = []

  str.split('').forEach((letter) => {
    if (!noRepeats.includes(letter)) {
      noRepeats.push(letter)
    }
  })

  return noRepeats.join('')
}

console.log(removeDuplicates('hello')) // Output: "helo"
console.log(removeDuplicates('AAbb')) // Output: "Ab"
console.log(removeDuplicates('abcdef')) //  Output: "abcdef"
console.log(removeDuplicates('')) // Output: ""
console.log(removeDuplicates('HHeelloo  WWoorrlldd')) // Output: 'Helo Wrd'
