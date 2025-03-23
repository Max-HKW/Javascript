/**
 * @file main.js
 * @author Massimo Musso
 * @description This function checks if the first string contains the second string.
 */

/**
 * Checks if string 'a' contains string 'b'.
 *
 * @param {string} a - The main string.
 * @param {string} b - The substring to check for.
 * @returns {boolean} - True if 'a' contains 'b', otherwise false.
 */
function aContainsb(a, b) {
  return a.includes(b);
}

// Example usage:
console.log(aContainsb("hello world", "world"));  // Output: true
console.log(aContainsb("hello world", "mars"));   // Output: false
