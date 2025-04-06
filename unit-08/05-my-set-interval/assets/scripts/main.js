/**
 * @file main.js
 * @author Massimo Musso
 * @description Custom implementation of setInterval using setTimeout.
 */

/**
 * Custom implementation of setInterval using setTimeout.
 * Automatically stops after 15 executions.
 *
 * @param {Function} callback - Function to execute at each interval.
 * @param {number} delay - Time in milliseconds between executions.
 * @returns {Object} An object with a stop method to manually stop the interval.
 */
function mySetInterval(callback, delay) {
    let count = 0;
    let isRunning = true;
    
    /**
     * Recursive function to execute the callback and schedule the next execution.
     */
    function intervalFunction() {
        if (count < 15 && isRunning) {
            callback(); // Execute the provided function
            count++; // Increment the execution count
            setTimeout(intervalFunction, delay); // Schedule the next execution
        }
    }
    
    // Start the first execution after the specified delay
    setTimeout(intervalFunction, delay);
    
    return {
        /**
         * Stops the interval from executing further.
         */
        stop: () => { isRunning = false; }
    };
}

// Test mySetInterval
const interval = mySetInterval(() => {
    console.log("Interval executed", new Date().toLocaleTimeString());
}, 1000);

// Optionally stop early
// setTimeout(() => interval.stop(), 5000);