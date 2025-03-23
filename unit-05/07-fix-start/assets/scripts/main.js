/**
 * @file main.js
 * @author Massimo Musso
 * @description This function takes a string as input and returns a modified version where all occurrences of the first character are replaced with '*' except for the first character itself.
 *
 * @param {string} string - The input string to process.
 * @returns {string} - The processed string with the first character unchanged and all other occurrences of it replaced with '*'.
 */
function fixStart(string) {
  const firstLetter = string[0];
  const regex = new RegExp(firstLetter, "g");

  return firstLetter + string.slice(1).replace(regex, "*");
}

console.log(fixStart("babble")); // "ba**le"
console.log(fixStart("google")); // "goo*le"
console.log(fixStart("apple"));  // "ap*le"
