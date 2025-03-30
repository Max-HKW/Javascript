/**
 * @file main.js
 * @author Massimo Musso
 * @description Prints each item from an array at 1-second intervals using setTimeout. 
 *              Stops execution when all items have been printed.
 */

/**
 * Array of items to be printed to the console.
 * @constant {string[]}
 */
const items = [
  'Mela', 'Banana', 'Ciliegia', 'Dattero', 'Erba', 'Fragola', 'Girasole', 'Hotel',
  'Isola', 'Jaguar', 'Ketchup', 'Lampione', 'Mare', 'Nebbia', 'Orologio', 'Pianeta',
  'Quaderno', 'Ruscello', 'Sole', 'Tigre', 'Uva', 'Vulcano', 'Whisky', 'Xilofono',
  'Yogurt', 'Zebra', 'Albero', 'Bosco', 'Cascata', 'Diamante'
];

/**
 * Current index of the item to be printed.
 * @type {number}
 */
let i = 0;

/**
 * Recursively prints each item in the array with a 1-second delay.
 * Uses `setTimeout` to achieve the delay instead of `setInterval`.
 *
 * @param {string[]} items - The array of items to print.
 */
function printItem(items) {
  if (i < items.length) {
    console.log(items[i]); // Print the current item
    i++; // Move to the next item

    // Schedule the next execution with a delay of 1 second
    setTimeout(() => printItem(items), 1000);
  } else {
    console.log('All items printed!'); // End message
  }
}

// Start the recursive printing
printItem(items);
