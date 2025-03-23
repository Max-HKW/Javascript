/**
 * @file main.js
 * @author Massimo Musso
 * @description Prints a list of ranked preferences with the correct ordinal suffixes (st, nd, rd, th).
 */

/**
 * Array containing the user's favorite choices.
 * @type {string[]}
 */
const topChoices = ['blue', 'dogs', 'The Lord of the Rings', 'tennis', 'hills'];

/**
 * Iterates through the topChoices array and prints each preference with the correct ordinal suffix.
 */
for (let i = 0; i < topChoices.length; i++) {
  switch (i) {
    case 0:
      console.log(`My ${i + 1}st choice is ${topChoices[i]}`);
      break;
    case 1:
      console.log(`My ${i + 1}nd choice is ${topChoices[i]}`);
      break;
    case 2:
      console.log(`My ${i + 1}rd choice is ${topChoices[i]}`);
      break;
    default:
      console.log(`My ${i + 1}th choice is ${topChoices[i]}`);
      break;
  }
}
