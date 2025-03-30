/**
 * @file itemsPrinter.js
 * @author Massimo Musso
 * @description Prints each item from an array at 1-second intervals, 
 *              stopping when all items have been printed.
 */

/**
 * Array of items to be printed to the console.
 * @constant {string[]}
 */
const items = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Grass', 'Strawberry', 'Sunflower', 'Hotel', 
    'Island', 'Jaguar', 'Ketchup', 'Lamp', 'Sea', 'Fog', 'Clock', 'Planet', 
    'Notebook', 'Stream', 'Sun', 'Tiger', 'Grape', 'Volcano', 'Whisky', 'Xylophone', 
    'Yogurt', 'Zebra', 'Tree', 'Forest', 'Waterfall', 'Diamond'
  ];
  
  /**
   * Current index of the item to be printed.
   * @type {number}
   */
  let index = 0;
  
  /**
   * Interval ID, used to stop execution when all items are printed.
   * @constant {number}
   */
  const intervalId = setInterval(() => {
    console.log(items[index]); // Print the current item
    index++; // Move to the next item
  
    // Stop the interval when all items have been printed
    if (index === items.length) {
      clearInterval(intervalId);
      console.log('All items printed!');
    }
  }, 1000);
  
