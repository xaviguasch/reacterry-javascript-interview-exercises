// Remove vowels
// Write a function removeVowels(n), which takes a string str as an input. This function should return a new string with all of the vowels removed.

// Directions
// The function should remove vowels in both lowercase and UPPERCASE.

const removeVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return str
    .split('')
    .filter((char) => !vowels.includes(char.toLowerCase()))
    .join('')
}

console.log(removeVowels('Hello, World!'))
console.log(removeVowels('hello world'))
console.log(removeVowels('programming is fun'))
