/**
 * @file main.js
 * @author Massimo Musso
 * @description 
 * This file contains a function to reverse a given string.
 * It reads the input string from the last character to the first
 * and prints the reversed version.
 */

/**
 * Reverses a given string by iterating from the last to the first character.
 * This method constructs the reversed string by appending characters in reverse order.
 *
 * @param {string} string - The input string to be reversed.
 * @returns {void} 
 */
function printReverse(string) {
  let reversedString = '';

  // Loop through the string from the last character to the first
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]; // Append each character in reverse order
  }

  console.log(reversedString); // Print the reversed string
}

// Example usage
printReverse('foobar'); // Output: "raboof"
printReverse('hello');  // Output: "olleh"
printReverse('cane');   // Output: "enac"
