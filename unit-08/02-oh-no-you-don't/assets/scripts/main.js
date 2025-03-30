/**
 * @file main.js
 * @author Massimo Musso
 * @description Schedules a function to run after 10 seconds and provides a way to cancel it after 5 seconds.
 */

/**
 * A useful function that logs a message to the console.
 * This function is scheduled to run after 10 seconds unless cancelled.
 */
function useful() {
  console.log('Hello!');
}

/**
 * Schedules the `useful` function to execute after 10 seconds.
 * @constant {number}
 */
const timeoutId = setTimeout(useful, 10000);

/**
 * Cancels the scheduled execution of a function.
 *
 * @param {number} id - The timeout ID to clear.
 */
function cancelExecution(id) {
  clearTimeout(id); // Cancel the scheduled timeout
  console.log('Function cancelled!');
}

/**
 * After 5 seconds, cancels the execution of `useful()`.
 */
setTimeout(() => cancelExecution(timeoutId), 5000);
