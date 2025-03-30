/**
 * @file main.js
 * @author Massimo Musso
 * @description A function that calculates the day of the month n days ago or ahead from the given date.
 *              Handles both positive and negative values for the 'days' parameter.
 *              If 'days' is positive, it subtracts days; if 'days' is negative, it adds days after converting to positive.
 */

/**
 * Returns the day of the month 'n' days ago or ahead from the given date.
 * This function handles both positive and negative 'days' parameters.
 *
 * @param {Date} date - The starting date to subtract or add days.
 * @param {number} days - The number of days to add (positive) or subtract (negative).
 * @returns {number} - The day of the month after adding or subtracting the specified number of days.
 *
 * @example
 * const today = new Date('2025-03-30');
 * console.log(getDayAgo(today, -7));  // 23 March 2025 (7 days ago)
 * console.log(getDayAgo(today, 7));   // 6 April 2025 (7 days ahead)
 */
function getDayAgo(date, days) {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error('Invalid date');
    }
    if (typeof days !== 'number') {
      throw new Error('The days parameter must be a number');
    }

    const newDate = new Date(date.getTime());
  
    if (days > 0) {
      newDate.setDate(newDate.getDate() - days);  
    } else {
      days = Math.abs(days);  
      newDate.setDate(newDate.getDate() + days);  
    }
  
    return newDate.getDate();
  }
  
  const today = new Date('2025-03-30');
  console.log(getDayAgo(today, -7));   // 23 marzo 2025 (7 giorni nel passato)
  console.log(getDayAgo(today, 7));    // 6 aprile 2025 (7 giorni nel futuro)
  