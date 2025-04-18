/**
 * @file main.js
 * @author Massimo Musso
 * @description Formats the given date based on the time passed.
 */

/**
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
function formatDate(date) {
    const now = new Date();
    const diff = now - date; // Time difference in milliseconds
    
    // Less than a second has passed
    if (diff < 1000) {
      return "right now";
    }
    
    // Less than a minute has passed
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) {
      return `${seconds} sec. ago`;
    }
    
    // Less than an hour has passed
    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 60) {
      return `${minutes} min. ago`;
    }
    
    // More than an hour has passed, format the date
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
    const hours = String(date.getHours()).padStart(2, '0');
    const minutesFormatted = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}.${month}.${year} ${hours}:${minutesFormatted}`;
  }
  
  // Example usage
  const date = new Date(new Date() - 5000); // 5 seconds ago
  console.log(formatDate(date)); // Output: "5 sec. ago"
  
  const oldDate = new Date(2016, 3, 17, 10, 0); // April 17, 2016, 10:00
  console.log(formatDate(oldDate)); // Output: "17.04.16 10:00"
  