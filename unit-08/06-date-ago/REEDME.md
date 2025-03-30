# `getDateAgo` Function - Documentation

## File Information

- **File Name**: `getDateAgo.js`
- **Author**: Massimo Musso
- **Description**: This function calculates the day of the month n days ago or ahead from the given date. It handles both positive and negative values for the 'days' parameter:
  - If 'days' is positive, it subtracts the days from the given date.
  - If 'days' is negative, it adds the days to the given date after converting the value to positive.

## Function Purpose

The purpose of the `getDateAgo` function is to compute a date that is a certain number of days before or after a given date. This is useful for applications where you need to calculate past or future dates based on a starting point.

### Function Overview

1. **Input Parameters**:
    - `date`: The starting date (a `Date` object).
    - `days`: A number that specifies how many days to add or subtract. Positive values subtract days, and negative values add days after being converted to positive.

2. **Output**:
    - The day of the month after adding or subtracting the specified number of days.

### Step-by-Step Process:

1. **Input Validation**:  
   The function checks if the `date` parameter is a valid `Date` object and if the `days` parameter is a number.
   
2. **Handling Positive Days**:  
   If `days` is positive, the function subtracts the specified number of days from the given date using the `setDate()` method.

3. **Handling Negative Days**:  
   If `days` is negative, the function first converts the number to a positive value using `Math.abs()`. Then, it adds that number of days to the given date.

4. **Returning the Day of the Month**:  
   After adjusting the date, the function returns the day of the month using `getDate()`.

### Example Usage:

```javascript
const today = new Date('2025-03-30');
console.log(getDayAgo(today, -7));   // 23 March 2025 (7 days ago)
console.log(getDayAgo(today, 7));    // 6 April 2025 (7 days ahead)
