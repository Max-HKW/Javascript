/**
 * @file main.js
 * @author Massimo Musso
 * @description This file contains two functions:
 *              - `isAlphanumeric(char)`: checks if a character is alphanumeric (letter or number).
 *              - `isPalindrome(string)`: checks if a string is a palindrome, ignoring non-alphanumeric characters and case differences.
 */

/**
 * Function that checks if a given character is alphanumeric (letter or number).
 * @param {string} char - The character to check.
 * @returns {boolean} Returns `true` if the character is alphanumeric, otherwise `false`.
 */
function isAlphanumeric(char) {
  return (
    (char >= 'a' && char <= 'z') ||   // Checks if it's a lowercase letter
    (char >= 'A' && char <= 'Z') ||   // Checks if it's an uppercase letter
    (char >= '0' && char <= '9')      // Checks if it's a number
  );
}

/**
 * Function that checks if a string is a palindrome, ignoring non-alphanumeric characters and case sensitivity.
 * @param {string} string - The string to check.
 * @returns {boolean} Returns `true` if the string is a palindrome, otherwise `false`.
 */
function isPalindrome(string) {
  let leftPointer = 0,          // Left pointer
      rightPointer = string.length - 1;  // Right pointer

  // Continue until the two pointers meet
  while (leftPointer < rightPointer) {
    
    // If the character on the left is not alphanumeric, move the left pointer right
    if (!isAlphanumeric(string[leftPointer])) {
      leftPointer++;
      continue;  // Skip the rest of the loop and proceed to the next iteration
    }

    // If the character on the right is not alphanumeric, move the right pointer left
    if (!isAlphanumeric(string[rightPointer])) {
      rightPointer--;
      continue;  // Skip the rest of the loop and proceed to the next iteration
    }

    // Compare the characters on the left and right (ignore case)
    if (string[leftPointer].toLowerCase() !== string[rightPointer].toLowerCase()) {
      return false;  // If the characters are not the same, the string is not a palindrome
    }

    // Move the pointers to continue checking
    leftPointer++;
    rightPointer--;
  }

  // If all comparisons pass, the string is a palindrome
  return true;
}

// Example usage
console.log(isPalindrome('Was it a car or a cat I saw?'));  // true
console.log(isPalindrome('tab a cat'));  // false
