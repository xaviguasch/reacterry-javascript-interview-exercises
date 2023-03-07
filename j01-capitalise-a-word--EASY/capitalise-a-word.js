// Capitalise a word
// Implement a function called capitalizeWord(word) that capitalizes the first letter of a given word and returns the capitalized string.

// Directions
// The function should return a new string with the first letter capitalized.
// If the input is an empty string, return an empty string.
// The input will always be a string consisting of one word, and will not contain numbers or special characters.

const capitaliseWord = (word) => {
  if (word.length === 0) {
    return ''
  }

  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

console.log(capitaliseWord('hello'))
console.log(capitaliseWord('mom'))
console.log(capitaliseWord('dAD'))
