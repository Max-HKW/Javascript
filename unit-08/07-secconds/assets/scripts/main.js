/**
 * @file main.js
 * @author Massimo Musso
 * @description This file contains two functions that return the number of seconds:
 *              1. `getSecondsToday()` returns the number of seconds since the start of the current day.
 *              2. `getSecondsToTomorrow()` returns the number of seconds until the start of the next day.
 */

/**
 * Returns the number of seconds that have passed since the beginning of today.
 * The beginning of today is considered to be midnight (00:00:00) of the current day.
 *
 * @returns {number} The number of seconds that have passed since midnight today.
 * 
 * @example
 * const secondsToday = getSecondsToday();
 * console.log(secondsToday); // Output: number of seconds from 00:00:00 today until the current time.
 */
function getSecondsToday() {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Set time to 00:00:00
  const secondsToday = Math.floor((now - startOfToday) / 1000); // Calculate the seconds passed since midnight
  return secondsToday;
}

/**
 * Returns the number of seconds remaining until the beginning of tomorrow.
 * The beginning of tomorrow is considered to be midnight (00:00:00) of the next day.
 *
 * @returns {number} The number of seconds until midnight tomorrow.
 * 
 * @example
 * const secondsToTomorrow = getSecondsToTomorrow();
 * console.log(secondsToTomorrow); // Output: number of seconds until midnight tomorrow.
 */
function getSecondsToTomorrow() {
  const now = new Date();
  const startOfTomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // Set time to 00:00:00 tomorrow
  const secondsToTomorrow = Math.floor((startOfTomorrow - now) / 1000); // Calculate the seconds remaining until tomorrow
  return secondsToTomorrow;
}

console.log(getSecondsToday()); // Number of seconds since the start of today
console.log(getSecondsToTomorrow()); // Number of seconds until the start of tomorrow
