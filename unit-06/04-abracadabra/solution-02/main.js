/**
 * @file main.js
 * @author Massimo Musso
 * @description  * Solution 2: Using `split()`, modifying the array, and `join()`
 * This method converts the string into an array of characters, modifies
 * the specific index, and then joins the array back into a string.
 */

/**
 * @param {string} str - The original string
 * @returns {string} - The modified string with the 4th letter replaced
 */
function replaceWithSplitJoin(str) {
    let strArray = str.split(""); // Convert string to array
    strArray[3] = "X"; // Change the 4th letter (index 3)
    return strArray.join(""); // Convert array back to string
}
console.log(replaceWithSplitJoin("Abracadabra")); // "AbrXcadabra"