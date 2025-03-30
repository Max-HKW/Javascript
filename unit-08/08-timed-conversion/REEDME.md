# Converting Celsius to Fahrenheit and Printing Every Second

## Author:
Massimo Musso

## Overview

This document explains two methods to convert temperatures from Celsius to Fahrenheit and print the results every second. The methods used are `setInterval` and `setTimeout`. Both approaches involve printing the conversion for temperatures from 0°C to 100°C, with one temperature being printed every second.

## Approach 1: Using `setInterval`

### Steps:
1. **Function Definition**:
   The first step is to create a function that converts a temperature from Celsius to Fahrenheit. The formula used for the conversion is `Fahrenheit = (Celsius * 9/5) + 32`.

2. **Using `setInterval`**:
   - We utilize `setInterval` to repeatedly execute a function at regular intervals (every second).
   - The function will print the current Celsius temperature and its equivalent Fahrenheit conversion.
   - The temperature starts from 0°C and increments by 1 every second.
   - Once the temperature exceeds 100°C, the interval is cleared using `clearInterval`, which stops the process.

3. **Function Execution**:
   The function is then invoked, starting the process of printing the conversions one by one every second.

### Explanation:
- The `setInterval` function runs the specified code block at a defined interval (in this case, every second).
- The `clearInterval` function stops the execution of `setInterval` once the temperature reaches 100°C.

## Approach 2: Using `setTimeout`

### Steps:
1. **Function Definition**:
   As with the first approach, we define the conversion function to convert Celsius to Fahrenheit.

2. **Using `setTimeout`**:
   - In this approach, instead of using `setInterval`, we use `setTimeout` to delay the execution of a function. 
   - The function calls itself recursively with a 1-second delay, continuing to print the conversions for each Celsius value.
   - The temperature starts from 0°C and increments by 1 each time.
   - The recursion stops once the temperature exceeds 100°C.

3. **Function Execution**:
   The function is invoked, and the recursion begins, with each subsequent call happening after 1 second.

### Explanation:
- `setTimeout` is used here to delay the execution of the conversion function by 1 second.
- This method uses recursion, meaning the function calls itself after each delay, continuing until the temperature exceeds 100°C.

## Conclusion

Both approaches achieve the same result of converting and printing the Celsius to Fahrenheit conversion every second. The key difference is in the method used to schedule the repeated execution:
- `setInterval` allows for a repeated call at fixed intervals.
- `setTimeout` uses recursion to delay the next function call after a fixed time.

Both methods are useful depending on the specific use case and the desired behavior of the program.
