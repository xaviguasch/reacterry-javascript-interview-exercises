// Count vowels
// Write a function countVowels(str), which takes a string as an input. This function should return the total number of vowels in the string. Return 0 if no vowels are found.

// Directions
// Return 0 if the input has no vowels
// The string can consist of any alphanumeric characters

const countVowels = (str) => {
  if (!str) {
    return 0
  }

  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0

  str
    .toLowerCase()
    .split('')
    .forEach((letter) => {
      if (vowels.includes(letter)) {
        count++
      }
    })

  return count
}

console.log(countVowels('Hello world!')) // 3
console.log(countVowels('This is a test')) // 4
console.log(countVowels('No vowels here')) // 0
