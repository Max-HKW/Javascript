/**
 * @file main.js
 * @author Massimo Musso
 * @description This script simulates the behavior of setInterval using setTimeout.
 * It repeatedly logs "Hello!" every 2 seconds until a counter reaches 15.
 * After 15 iterations, the process stops automatically without the need for setInterval.
 */

/**
 * Counter to track the number of iterations.
 * @type {number}
 */
let counter = 0;

/**
 * A function that simulates setInterval using setTimeout. It logs "Hello!" every 2 seconds
 * and stops after 15 iterations.
 *
 * @function mySetTimeout
 * @returns {void} Logs "Hello!" every 2 seconds, increments the counter, and stops at 15 iterations.
 */
function mySetTimeout() {
  console.log('Hello!'); // Logs "Hello!" to the console
  counter++; // Increments the counter

  // Checks if the counter is less than 15 before scheduling the next iteration
  if (counter < 15) {
    setTimeout(mySetTimeout, 2000); // Calls the function again after 2 seconds
  }
}

/**
 * Initiates the recursive timeout function to start the process.
 *
 * @returns {void} Starts the logging process with the mySetTimeout function.
 */
mySetTimeout(); // Starts the sequence of operations
