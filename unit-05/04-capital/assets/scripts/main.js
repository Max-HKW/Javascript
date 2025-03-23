/**
 * @file main.js
 * @author Massimo Musso
 * @description This file contains a `capital` function that capitalizes the first letter of each word in a string.
 * The function handles both single-word and multi-word strings.
 * 
 * The function returns the original string if it is empty or contains only whitespace.
 * 
 * @function capital
 * @param {string} string - The string to be modified.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function capital(string) {
  // Check if the string is empty or contains only whitespace
  if (!string || string.trim() === '') {
    return string; // Return the original string
  }

  // Split the string into words separated by spaces
  const words = string.split(' ');

  // If there are more than one word
  if (words.length > 1) {
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    // Join the capitalized words into a single string
    return capitalizedWords.join(' ');
  } else {
    // If there is only one word, capitalize only the first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}


console.log(capital('parallelepipedo'));
console.log(capital('hello'));
console.log(capital('drago'));
console.log(capital('my name is john'));
console.log(capital('my doG iS cuTe'));
