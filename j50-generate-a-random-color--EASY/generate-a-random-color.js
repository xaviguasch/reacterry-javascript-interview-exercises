// Generate a random color
// Write a function getRandomColor(), which takes in no arguments. The function has to return a random color in a hexadecimal format.

// Hex color codes start with a pound sign or hashtag (#) and are followed by six characters.

// Directions
// A valid hex color code can only contain the digits 0-9 and the letters A-F or a-f, in any combination.

const getRandomColor = () => {
  // Write your code here
  const letters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return color
}

console.log(getRandomColor())
