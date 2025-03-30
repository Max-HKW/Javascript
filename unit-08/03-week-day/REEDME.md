# Get Weekday Name (Separate Functions for Each Language)

## Author
Massimo Musso

## Introduction
This approach defines two separate functions to retrieve the abbreviated weekday name, one for English and one for Italian. Each function uses a predefined array of weekday names.

## Process Explanation
1. **Define Arrays for Weekday Names**  
   - Two arrays, `dayNamesEn` and `dayNamesIt`, store the weekday abbreviations for English and Italian.

2. **Create Two Separate Functions**  
   - `getWeekDayEn(date)`: Extracts the weekday index from the `Date` object and returns the corresponding value from `dayNamesEn`.  
   - `getWeekDayIt(date)`: Works similarly but returns the weekday abbreviation from `dayNamesIt`.

3. **Execute the Functions**  
   - The `console.log()` statements call the functions with the current date (`today`) and display the result.

## Pros and Cons
### ✅ Pros:
- Simple and easy to understand.
- No need to handle language selection within a function.

### ❌ Cons:
- Code duplication (two similar functions).
- Not easily scalable if more languages are needed.

## Best Use Case:
Use this approach if you need a **quick** solution and support only **a few** languages.
