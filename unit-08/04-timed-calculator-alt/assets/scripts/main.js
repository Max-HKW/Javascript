/**
 * @file main.js
 * @author Massimo Musso
 * @description This script performs basic arithmetic operations (addition, subtraction, multiplication, and division) 
 * with a delay of 3 seconds between each operation using setTimeout.The operations are executed in sequence without waiting for each to finish.
 */

/**
 * Performs an addition operation with a 3-second delay.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {void} Outputs the result of the addition after 3 seconds.
 */
function delayedAdd(a, b) {
  setTimeout(() => {
    console.log('Addition result:', a + b);
  }, 3000); // Delay of 3 seconds
}

/**
 * Performs a subtraction operation with a 3-second delay.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {void} Outputs the result of the subtraction after 3 seconds.
 */
function delayedSubtract(a, b) {
  setTimeout(() => {
    console.log('Subtraction result:', a - b);
  }, 3000); // Delay of 3 seconds
}

/**
 * Performs a multiplication operation with a 3-second delay.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {void} Outputs the result of the multiplication after 3 seconds.
 */
function delayedMultiply(a, b) {
  setTimeout(() => {
    console.log('Multiplication result:', a * b);
  }, 3000); // Delay of 3 seconds
}

/**
 * Performs a division operation with a 3-second delay.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {void} Outputs the result of the division after 3 seconds, or an error message if dividing by zero.
 */
function delayedDivide(a, b) {
  setTimeout(() => {
    if (b !== 0) {
      console.log('Division result:', a / b);
    } else {
      console.log('Cannot divide by zero');
    }
  }, 3000); // Delay of 3 seconds
}

/**
 * Calls all four arithmetic operations (add, subtract, multiply, divide) in sequence with a 3-second delay between each.
 * @param {number} a - The first operand used in all operations.
 * @param {number} b - The second operand used in all operations.
 * @returns {void} Initiates all operations with delays between them.
 */
function performOperations(a, b) {
  delayedAdd(a, b);
  delayedSubtract(a, b);
  delayedMultiply(a, b);
  delayedDivide(a, b);
}

// Example usage of the performOperations function
performOperations(10, 5); // Executes all operations with operands 10 and 5.
