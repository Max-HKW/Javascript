/**
 * @file main.js
 * @author Massimo Musso
 * @description This file contains a `money` function that formats an amount of money in dollars and also converts it to euros. 
 * The function handles edge cases such as the singular form for 1 dollar, adding a smiley for 1 million dollars, 
 * and converting the amount into euros.
 * 
 * @function money
 * @param {number} amount - The amount of money in dollars.
 * @returns {string} - A string formatted with the amount in dollars and its equivalent in euros.
 */
function money(amount) {
  // Define the conversion rate from dollars to euros (assuming 1 USD = 0.931 EUR)
  const conversionRate = 0.931;

  // Handle the amount in dollars
  let result = '';

  if (amount === 1000000) {
    result = `${amount} dollars ;)`; // Add a smiley for 1 million dollars
  } else if (amount === 1) {
    result = `${amount} dollar`; // Singular form for 1 dollar
  } else {
    result = `${amount} dollars`; // Plural form for other amounts
  }

  // Convert dollars to euros
  const euros = (amount * conversionRate).toFixed(2); // Convert and round to 2 decimal places

  // Add the conversion information to the result
  result += ` are ${euros} euros`;

  return result;
}

// Examples:
console.log(money(1)); // "1 dollar are 0.93 euros"
console.log(money(10)); // "10 dollars are 9.31 euros"
console.log(money(1000000)); // "1000000 dollars ;) are 931000.00 euros"
