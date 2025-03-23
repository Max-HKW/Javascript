/**
 * @file main.js
 * @author Massimo Musso
 * @description   * Solution 3: Using `substring()` and template literals
 * This method extracts the beginning and end of the string separately
 * and reconstructs it using template literals with the replacement character.
 */

/**
 * @param {string} str - The original string
 * @returns {string} - The modified string with the 4th letter replaced
 */
function replaceWithSubstring(str) {
    return `${str.substring(0, 3)}X${str.substring(4)}`;
}
console.log(replaceWithSubstring("Abracadabra")); // "AbrXcadabra"
