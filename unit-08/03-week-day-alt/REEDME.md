# Get Weekday Name (Single Function with Language Parameter)

## Author
Massimo Musso

## Introduction
This approach defines a single function that takes a language parameter and returns the corresponding weekday name. It uses an object (`dayNames`) to store multiple language options.

## Process Explanation
1. **Create an Object for Weekday Names**  
   - The `dayNames` object contains arrays for English (`en`) and Italian (`it`).

2. **Define a Single Function (`getWeekDay`)**  
   - Accepts a `Date` object and a `lang` parameter.
   - Uses `getDay()` to retrieve the day index.
   - Checks if the language exists in `dayNames`:
     - If **yes**, it returns the corresponding weekday name.
     - If **no**, it returns `'Language not available!'`.

3. **Execute the Function with Different Inputs**  
   - `console.log(getWeekDay(today, 'en'))`: Outputs the weekday in English.  
   - `console.log(getWeekDay(today, 'it'))`: Outputs the weekday in Italian.  
   - `console.log(getWeekDay(today, 'fr'))`: Outputs `'Language not available!'` since `'fr'` is not defined.

## Pros and Cons
### ✅ Pros:
- More scalable and reusable.
- Easy to add more languages by extending the `dayNames` object.
- Less code duplication.

### ❌ Cons:
- Slightly more complex logic due to language validation.

## Best Use Case:
Use this approach if you want a **flexible** and **scalable** solution that can support multiple languages with minimal modifications.
