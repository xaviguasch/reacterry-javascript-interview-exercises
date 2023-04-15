// Format Money
// Write a function called formatMoney(amount), which takes in a floating-point number amount as input and returns a string representation of the number formatted as currency.

// The output string should have the dollar sign "$" and should have two decimal places, even if the input number has fewer decimal places. The output string should also include commas to separate thousands, millions, billions, and so on.

const formatMoney = (amount) => {
  // Write code here
}

console.log(formatMoney(123)) // Output: $123.00
console.log(formatMoney(0)) // Output: $0.00
console.log(formatMoney(12.23)) // Output: $12.23
console.log(formatMoney(123.4123)) // Output: $123.41
console.log(formatMoney(100000000)) // Output: $100,000,000.00
