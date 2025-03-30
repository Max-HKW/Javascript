# usefulFunction.js

## Author
Massimo Musso

## Description
This script demonstrates how to:
- **Schedule** a function (`useful`) to run **after 10 seconds**.
- **Cancel** the scheduled execution after **5 seconds** using `clearTimeout`.

## How It Works
1. The function **`useful()`** is defined to log `"Hello!"` to the console.
2. A **timeout (`timeoutId`)** is created with `setTimeout(useful, 10000)`, scheduling the `useful()` function to run after 10 seconds.
3. Another `setTimeout()` is set for **5 seconds**, which:
   - Calls `cancelExecution(timeoutId)`, a function that cancels the scheduled execution.
   - Prints **"Function cancelled!"** to the console, indicating that the function was cancelled before it had the chance to run.

## Expected Output

*(The `useful()` function will never execute because it gets cancelled after 5 seconds.)*

## Notes
- If you want to **change the delay**, modify the `10000` and `5000` values in `setTimeout()`.
- This demonstrates how to control function execution in an asynchronous environment.
