# Function to Format Date Based on Time Elapsed

## Author:
John Doe

## Overview

This document explains how to create a function that formats a given date based on the time that has passed since that date. The function should return different outputs depending on how much time has passed:
- If less than a second has passed, it should output "right now".
- If less than a minute has passed, it should output "n sec. ago".
- If less than an hour has passed, it should output "m min. ago".
- Otherwise, it should return the date in the format "DD.MM.YY HH:mm" (e.g., "17.04.16 10:00").

## Steps:

### 1. **Check Time Difference**:
   - Use `Date.now()` to get the current date and time.
   - Calculate the time difference between the current date and the given date.

### 2. **Check If Less Than a Second Has Passed**:
   - If the time difference is less than 1000 milliseconds (1 second), return "right now".

### 3. **Check If Less Than a Minute Has Passed**:
   - If the time difference is less than 60 seconds, calculate the number of seconds passed and return the result in the format "n sec. ago".

### 4. **Check If Less Than an Hour Has Passed**:
   - If the time difference is less than 60 minutes, calculate the number of minutes passed and return the result in the format "m min. ago".

### 5. **Format the Date**:
   - If more than an hour has passed, format the date as "DD.MM.YY HH:mm". Ensure that the day, month, year, hour, and minute are always two digits.

## Explanation:

1. **Right now**:
   - If less than a second has passed, the function immediately returns "right now".

2. **Seconds ago**:
   - If less than a minute has passed, the function calculates the number of seconds that have passed and returns it in the format `n sec. ago`.

3. **Minutes ago**:
   - If less than an hour has passed, the function calculates the number of minutes that have passed and returns it in the format `m min. ago`.

4. **Formatted Date**:
   - If more than an hour has passed, the function formats the date to match the "DD.MM.YY HH:mm" format. The day, month, and time values are padded with leading zeros if necessary to ensure two digits.

## Example:

If the current date is "2023-04-15 10:30:00" and the given date is:
- **5 seconds ago**, the function will return `"5 sec. ago"`.
- **1 minute ago**, the function will return `"1 min. ago"`.
- **1 hour ago**, the function will return `"17.04.16 10:00"`.

The function works by calculating the time difference and applying different formats based on the result.
