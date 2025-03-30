/**
 * @file main.js
 * @author Massimo Musso
 * @description This script updates the time on a webpage every second. It retrieves the current time, formats it to a "HH:mm:ss" format, and updates the content of the HTML element with the ID 'clock'.
 */

/**
 * Updates the time on the webpage every second.
 * 
 * This function retrieves the current date and time, formats the hours, minutes, and seconds with leading zeros if necessary, 
 * and displays it in an element with the ID 'clock'. It runs immediately once called and then continues to update every second.
 *
 * @function
 * @name updateClock
 */
function updateClock() {
  // Get the current date and time
  const now = new Date();

  // Format the hours, minutes, and seconds to two digits using padStart
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Combine hours, minutes, and seconds into a time string
  const timeSring = `${hours}:${minutes}:${seconds}`;

  // Update the text content of the clock element
  document.getElementById('clock').textContent = timeSring;
}

// Call the updateClock function immediately
updateClock();

// Set an interval to call the updateClock function every second (1000 milliseconds)
setInterval(updateClock, 1000);
