# itemsPrinter.js

## Author
Massimo Musso

## Description
This script prints each item from an array at **1-second intervals** using `setInterval`.  
Once all items have been printed, the interval is **cleared** using `clearInterval`.

## How It Works
1. A **constant array** (`items`) stores a list of 30 elements.
2. A **variable** (`index`) keeps track of the current item.
3. A **setInterval function** executes every second:
   - Prints the current item.
   - Increments the `index` counter.
   - Stops execution when all items are printed.
4. The **clearInterval function** is used to stop the process when the last item is printed.

## Code Explanation
```javascript
const items = [...]; // Array of items to print

let index = 0; // Current index

const intervalId = setInterval(() => {
  console.log(items[index]); // Print the item
  index++; // Move to the next item

  if (index === items.length) {
    clearInterval(intervalId); // Stop the interval
    console.log('All items printed!');
  }
}, 1000);
