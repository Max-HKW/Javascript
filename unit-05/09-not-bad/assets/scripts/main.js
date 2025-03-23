/**
 * @file main.js
 * @author Massimo Musso
 * @description This function finds occurrences of 'not' followed by 'bad' 
 *              and replaces the entire phrase with 'good'.
 */

/**
 * Replaces the first occurrence of 'not...bad' with 'good' in a given sentence.
 *
 * @param {string} sentence - The input string to process.
 * @returns {string} - The modified string with 'not...bad' replaced by 'good'.
 */
function notBad(sentence) {
  return sentence.replace(/not.*?bad/, 'good');
}

// Example usage:
console.log(notBad("This movie is not that bad!"));  // Output: "This movie is good!"
console.log(notBad("The food is not bad at all."));  // Output: "The food is good at all."
console.log(notBad("This is bad, not good."));      // Output: "This is bad, not good."
