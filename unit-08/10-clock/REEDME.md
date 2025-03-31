# Function to Update Clock on Webpage

## Author:
Massimo Musso

## Overview:
This document explains a JavaScript function that updates the current time on a webpage every second. The function retrieves the current time, formats it to a "HH:mm:ss" format, and updates the content of an HTML element with the ID `clock`. The time is updated every second.

## Steps:

### 1. **Retrieve Current Date and Time**:
   - Use `new Date()` to get the current date and time.

### 2. **Format Hours, Minutes, and Seconds**:
   - Use `getHours()`, `getMinutes()`, and `getSeconds()` to get the current hour, minute, and second.
   - Use `padStart(2, '0')` to ensure that the hours, minutes, and seconds are always two digits (e.g., `07` instead of `7`).

### 3. **Combine Time Components**:
   - Combine the formatted hours, minutes, and seconds into a time string in the format `HH:mm:ss`.

### 4. **Update the Clock on Webpage**:
   - Use `document.getElementById('clock')` to get the HTML element with the ID `clock`.
   - Set the `textContent` of this element to the formatted time string.

### 5. **Set Interval for Continuous Update**:
   - Use `setInterval` to call the `updateClock` function every 1000 milliseconds (1 second) to continuously update the time.


