/**
 * @file main.js
 * @author Massimo Musso
 * @description Functions to get the abbreviated weekday name in English and Italian.
 */

/**
 * The current date.
 * @constant {Date}
 */
const today = new Date();

/**
 * Array containing abbreviated weekday names in English.
 * @constant {string[]}
 */
const dayNamesEn = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

/**
 * Array containing abbreviated weekday names in Italian.
 * @constant {string[]}
 */
const dayNamesIt = ['DO', 'LU', 'MA', 'ME', 'GI', 'VE', 'SA'];

/**
 * Returns the abbreviated weekday name in English.
 * @param {Date} date - The Date object to get the weekday from.
 * @returns {string} The abbreviated weekday name in English.
 */
function getWeekDayEn(date) {
  const day = date.getDay(); // Gets the weekday number (0 = Sunday, 6 = Saturday)
  return dayNamesEn[day];
}

console.log(getWeekDayEn(today)); // Output: e.g., "SU" (Sunday)

/**
 * Returns the abbreviated weekday name in Italian.
 * @param {Date} date - The Date object to get the weekday from.
 * @returns {string} The abbreviated weekday name in Italian.
 */
function getWeekDayIt(date) {
  const day = date.getDay(); // Gets the weekday number (0 = Sunday, 6 = Saturday)
  return dayNamesIt[day];
}

console.log(getWeekDayIt(today)); // Output: e.g., "DO" (Sunday)

/**
 * Returns the abbreviated weekday name based on the specified language.
 * @param {Date} date - The Date object to get the weekday from.
 * @param {string} lang - The language ('en' for English, 'it' for Italian).
 * @returns {string} The abbreviated weekday name or an error message if the language is unavailable.
 */
function getWeekDay(date, lang) {
  const day = date.getDay(); // Gets the weekday number (0 = Sunday, 6 = Saturday)

  if (lang === 'it') {
    return dayNamesIt[day]; // Return the weekday in Italian
  } else if (lang === 'en') {
    return dayNamesEn[day]; // Return the weekday in English
  } else {
    return 'Language not available!'; // Return an error message if the language is not supported
  }
}

console.log(getWeekDay(today, 'en')); // Output: e.g., "SU"
