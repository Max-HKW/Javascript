/**
 * @file main.js
 * @author Massimo Musso
 * @description Using `slice()` to replace the 4th letter
 * This method extracts parts of the string before and after the 4th letter
 * and concatenates them with the replacement character.
 */

/**
 * @param {string} str - The original string
 * @returns {string} - The modified string with the 4th letter replaced
 */
function replaceWithSlice(str) {
    return str.slice(0, 3) + "X" + str.slice(4);
}
console.log(replaceWithSlice("Abracadabra")); // "AbrXcadabra"