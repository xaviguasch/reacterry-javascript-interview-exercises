// Anagram checker
// Write a function areAnagrams(strOne, strTwo), which takes two strings: strOne and strTwo as arguments. The function should return true if the two strings are anagrams and false otherwise.

// An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In other words, two strings are considered anagrams if they have exactly the same characters but in a different order.

// Directions
// The function areAnagrams should be case-insensitive

const areAnagrams = (strOne, strTwo) => {
  // Write your code here
  if (strOne.length !== strTwo.length) {
    return false
  }

  const wordOneOrdered = strOne.toLowerCase().split('').sort().join('')
  const wordTwoOrdered = strTwo.toLowerCase().split('').sort().join('')

  return wordOneOrdered === wordTwoOrdered
}

console.log(areAnagrams('cinema', 'iceman'))
// Output: true
console.log(areAnagrams('restful', 'fluster'))
// Output: true
console.log(areAnagrams('hello', 'world'))
// Output: false
