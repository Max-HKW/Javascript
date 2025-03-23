/**
 * @file creditCardValidator.js
 * @author [Your Name]
 * @description This script validates a credit card number based on specific rules
 * and prints the validation result in a formatted output.
 */

/**
 * Validates a credit card number based on the following criteria:
 * 1. Must be exactly 16 digits long.
 * 2. Must contain only numeric characters.
 * 3. Cannot consist of the same digit repeated 16 times.
 * 4. The last digit must be even.
 * 5. The sum of all digits must be at least 16.
 *
 * @param {string} card - The credit card number (may contain "-").
 * @returns {Object} An object containing validation results.
 * @property {boolean} valid - Whether the card number is valid.
 * @property {string} number - The original card number input.
 * @property {string} errors - A list of validation errors or "None" if valid.
 */
function validateCreditCard(card) {
  // Remove all dashes from the input
  const filteredCard = card.replaceAll('-', '');
  const errors = [];

  // Check if the card has exactly 16 digits
  if (filteredCard.length !== 16) {
    errors.push('Wrong length!');
  }

  // Check if the card contains only numeric characters
  if (!/^\d+$/.test(filteredCard)) {
    errors.push('Invalid characters!');
  }

  // Check if all digits are the same
  if (/^(\d)\1{15}$/.test(filteredCard)) {
    errors.push('All digits are the same!');
  }

  // Check if the last digit is even
  if (!/[02468]$/.test(filteredCard)) {
    errors.push('Last digit must be even');
  }

  // Calculate the sum of all digits
  const digitSum = filteredCard
    .split('')
    .reduce((acc, digit) => acc + +digit, 0);

  // Check if the sum of the digits is at least 16
  if (digitSum < 16) {
    errors.push('Sum of digits must be at least 16');
  }

  // Return validation result
  return {
    valid: errors.length === 0,
    number: card,
    errors: errors.length > 0 ? errors.join(', ') : 'None',
  };
}

/**
 * Prints the validation result in a formatted output.
 *
 * @param {string} card - The credit card number to validate.
 */
function printValidationResult(card) {
  const result = validateCreditCard(card);

  console.log('===================');
  console.log(`= Number: ${result.number} =`);
  console.log(`= Valid: ${result.valid} =`);
  console.log(`= Error: ${result.errors} =`);
  console.log('===================');
}

console.log(printValidationResult('9999-9999-8888-0000'));

console.log(printValidationResult('1111-1111-1111-1111'));

console.log(printValidationResult('1234-5678-9012-345'));

console.log(printValidationResult('1234-5678-9012-345a'));

console.log(printValidationResult('0000-0000-0000-0001'));

console.log(printValidationResult('1234-5678-9012-3457'));
