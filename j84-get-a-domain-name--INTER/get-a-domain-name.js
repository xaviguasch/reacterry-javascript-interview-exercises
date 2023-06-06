// Get domain name
// In this coding challenge, you will implement a function called getDomain(url), which takes a string url as input. The function should return the domain name.

// Directions
// The function should be able to handle URLs starting with both http and https protocols.
// For simplicity, you may assume that all URLs will include www and will always be ending with a forward slash /.

const getDomain = (url) => {
  // Write your code here
}

console.log(getDomain('https://www.google.com/')) // Output: 'google.com'
console.log(getDomain('https://www.facebook.com/reacterry/')) // Output: 'facebook.com'
getDomain('http://www.reddit.com/user/reacterry/') // Output: 'reddit.com'
getDomain('http://www.reddit.co.uk/user/reacterry/') // Output: 'reddit.co.uk'
getDomain('http://www.reddit.info/user/reacterry/') // Output: 'reddit.info'
getDomain('https://www.example.com/') // Output: 'example.com'
