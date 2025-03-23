/**
 * @file main.js
 * @author Massimo Musso
 * @description This file contains the `mixUp` function, which takes two strings, swaps their first two characters, 
 * and returns them concatenated with a space. The function assumes both strings have at least two characters.
 * 
 * @function mixUp
 * @param {string} str1 - The first string (must be at least 2 characters long).
 * @param {string} str2 - The second string (must be at least 2 characters long).
 * @throws {Error} If either string is shorter than 2 characters.
 * @returns {string} - A new string with swapped first two characters, separated by a space.
 */

function mixUp(str1, str2) {
  // Ensure both strings are at least 2 characters long
  if (str1.length < 2 || str2.length < 2) {
    throw new Error("Both strings must be at least 2 characters long.");
  }

  // Swap the first two characters and concatenate the strings
  const mixedStr1 = str2.slice(0, 2) + str1.slice(2);
  const mixedStr2 = str1.slice(0, 2) + str2.slice(2);

  return `${mixedStr1} ${mixedStr2}`;
}

// Examples:
console.log(mixUp("hello", "world")); // "wollo herld"
console.log(mixUp("mix", "up")); // "upx mi"
console.log(mixUp("dog", "cat")); // "cog dat"
