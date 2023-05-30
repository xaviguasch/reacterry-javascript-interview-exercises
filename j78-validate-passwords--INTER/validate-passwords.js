// Validate Passwords
// Write a function called validatePasswords(first, second), which takes two string arguments called first and second. Your function needs to check if:

// passwords are equal
// passwords follow the provided password policy.
// If both the conditions are met then return true, otherwise return false.

// Password policy: “Minimum 8 characters long, at least 1 letter, 1 number and 1 special character”

const validatePasswords = (first, second) => {
  // Write your code here
}

console.log(validatePasswords('1234567', '1234567')) // Output: false
console.log(validatePasswords('abcdefgH1@', 'abcdefgH1@')) // Output: true
console.log(validatePasswords('abcdefghi', 'abcdefgH1@')) // Output: false
