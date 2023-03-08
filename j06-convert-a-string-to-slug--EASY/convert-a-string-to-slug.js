// Convert a string to slug
// Write a function convertToSlug(str), which takes a string as an argument. This function should transform the input string into a slug.

// A slug is a URL-friendly version of a string. It is commonly used in website URLs to create human-readable links. A slug typically consists of lowercase letters, numbers, and hyphens, with no spaces or special characters. For example, the slug for the article "10 Tips for Better Sleep" might be "10-tips-for-better-sleep".

// Directions
// If the input string is empty then return an empty string
// The input string will be a valid sentence

const convertToSlug = (str) => {
  if (!str) {
    return ''
  }

  return str.toLowerCase().replaceAll(' ', '-')
}

console.log(convertToSlug('This is an example string')) // "this-is-an-example-string"
console.log(convertToSlug('This is another string')) // "this-is-another-string"
console.log(convertToSlug('')) // ""
