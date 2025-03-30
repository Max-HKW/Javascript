/**
 * @file main.js
 * @author Massimo Musso
 * @description Performs basic arithmetic operations with a 3-second delay between each operation.
 */

/**
 * Simulates a delayed mathematical operation.
 * @param {string} operation - The type of operation ('add', 'subtract', 'multiply', 'divide').
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {Promise<number>} A promise that resolves with the operation result after 3 seconds.
 */
function delayedOperation(operation, a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result;
      switch (operation) {
        case 'add':
          result = a + b;
          break;
        case 'subtract':
          result = a - b;
          break;
        case 'multiply':
          result = a * b;
          break;
        case 'divide':
          result = b !== 0 ? a / b : 'Cannot divide by zero';
          break;
        default:
          result = 'Invalid operation';
      }
      console.log(`${operation} result:`, result);
      resolve(result);
    }, 3000);
  });
}

/**
 * Executes all four arithmetic operations sequentially with a 3-second delay between each.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 */
async function performOperations(a, b) {
  await delayedOperation('add', a, b);
  await delayedOperation('subtract', a, b);
  await delayedOperation('multiply', a, b);
  await delayedOperation('divide', a, b);
}

// Example usage:
performOperations(10, 2);
