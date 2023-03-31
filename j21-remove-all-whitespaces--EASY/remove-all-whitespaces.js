// Remove all whitespaces
// In this coding challenge, you will be implementing a function called removeWhitespaces(string) that takes a string as the input. The function should return the string with all the whitespace removed.

// Directions
// If the input string is empty, then return an input string.
// Remember to account for \n and \t.

const removeWhitespaces = (string) => {
  // using REGEX
  // return string.replace(/\s/g, '')

  let result = ''

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ' && string[i] !== '\t' && string[i] !== '\n') {
      result += string[i]
    }
  }

  return result
}

console.log(removeWhitespaces('Hello,   World!'))
console.log(removeWhitespaces('  This is a sentence.\nIt contains some whitespace.  '))
console.log(removeWhitespaces('\t  \n\n'))
