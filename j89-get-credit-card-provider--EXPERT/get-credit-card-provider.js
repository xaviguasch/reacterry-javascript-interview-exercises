// Get credit card provider
// Write a function called getCreditCardProvider(cardNumber). This function takes one string argument called cardNumber. Your task is to return the credit card provider based on the cardNumber. You can do this by comparing the first digit of the cardNumber against the providers object.

// Return the provider name as string, exactly as it appears in the providers object.

// If no provider was found or a card was invalid then return string Invalid Card Number.

// A card number is considered valid if it has 15 or 16 digits.

// Directions
// Do not edit the providers object

const providers = {
  amex: 3,
  visa: 4,
  mastercard: 5,
  discover: 6,
}

const getCreditCardProvider = (cardNumber) => {
  // Write your code here
}

console.log(getCreditCardProvider('340000000000000')) // Output: 'amex'
console.log(getCreditCardProvider('lll')) // Output: 'Invalid Card Number'
