// Most common
// In this coding challenge, you will be implementing a function mostCommon(words) that takes an array of strings words as its argument and should return the string that appears the most often. If there are two or more elements that appear the same number of times, then the function should the element whose’ first occurrence has a smaller index.

// Directions
// If the input array is empty then return null.
// The input array can only contain strings and numbers.

const mostCommon = (arr) => {
  // Write your code here

  const hashMap = {}

  for (const item of arr) {
    if (!hashMap[item]) {
      hashMap[item] = 1
    } else {
      hashMap[item]++
    }
  }

  let mostCommon = ''
  let mSCount = 0

  for (const key in hashMap) {
    if (hashMap[key] > mSCount) {
      mostCommon = key
      mSCount = hashMap[key]
    }
  }

  return mostCommon
}

const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']
const mostCommonWord = mostCommon(words)
console.log(mostCommonWord) // "apple"
