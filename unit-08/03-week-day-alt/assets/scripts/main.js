/**
 * @file main.js
 * @author Massimo Musso
 * @description Function to get the abbreviated weekday name in different languages.
 */

/**
 * Object containing abbreviated weekday names in different languages.
 * @constant {Object}
 */
const dayNames = {
  en: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'], // English
  it: ['DO', 'LU', 'MA', 'ME', 'GI', 'VE', 'SA']  // Italian
};

/**
 * Returns the abbreviated weekday name based on the specified language.
 * @param {Date} date - The Date object to get the weekday from.
 * @param {string} [lang='en'] - The language ('en' for English, 'it' for Italian). Default: 'en'.
 * @returns {string} The abbreviated weekday name or an error message if the language is unavailable.
 */
function getWeekDay(date, lang = 'en') {
  const day = date.getDay(); // Gets the weekday number (0 = Sunday, 6 = Saturday)
  
  // If the language is available, return the corresponding weekday name; otherwise, return an error message.
  return dayNames[lang] ? dayNames[lang][day] : 'Language not available!';
}

// Usage examples
const today = new Date();

console.log(getWeekDay(today, 'en')); // Output: e.g., "SU" (Sunday)
console.log(getWeekDay(today, 'it')); // Output: e.g., "DO" (Sunday)
console.log(getWeekDay(today, 'fr')); // Output: "Language not available!"
