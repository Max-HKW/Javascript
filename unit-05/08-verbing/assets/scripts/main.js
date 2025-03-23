/**
 * Filename: main.js
 * @author Massimo Musso
 * @description: This function takes a string as input. If the string's length is at least 3, it appends 'ing' unless the string already ends in 'ing', in which case it appends 'ly'. If the string's length is less than 3, it returns the string unchanged.
 *
 * @param {string} str - The input string to modify.
 * @returns {string} - The modified string based on the rules described.

 */
function verbing(str) {
  if (str.length >= 3) {
    if (str.endsWith("ing")) {
      return str + "ly";
    } else {
      return str + "ing";
    }
  }
  return str;
}

console.log(verbing("play")); // "playing"
console.log(verbing("playing")); // "playingly"
console.log(verbing("go")); // "go"
