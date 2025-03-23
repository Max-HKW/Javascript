/**
 * @file main.js
 * @author Massimo Musso
 * @description Function to reverse a given string using the two-pointer technique.
 */

/**
 * Reverses a given string using the two-pointer approach.
 * The method works by initializing two pointers: one at the beginning of the string
 * and one at the end. These pointers move towards each other while swapping the characters
 * at their respective positions until they meet or cross. This technique provides an
 * efficient way to reverse a string in-place with O(n) time complexity and O(1) space complexity.
 *
 * @param {string} string - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function printReverse(string) {
  let arr = string.split('');

  let leftPointer = 0,
    rightPointer = string.length - 1;

  while (leftPointer <= rightPointer) {
    [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]];
    leftPointer++;
    rightPointer--;
  }

  return arr.join('');
}

// Example usage of the function
console.log(printReverse('foobar')); // Output: 'raboof'
console.log(printReverse('hello'));  // Output: 'olleh'
console.log(printReverse('cane'));   // Output: 'enac'
