# Credit Card Validator

## File Information
- **File Name:** `main.js`
- **Author:** Massimo Musso
- **Description:** This script validates credit card numbers based on specific formatting and logical rules.

---

## Features
- Removes dashes (`-`) from the input.
- Ensures the number is **exactly 16 digits long**.
- Checks that the input contains **only numeric characters**.
- Ensures the number is **not made up of the same digit** (e.g., `1111-1111-1111-1111` is invalid).
- Checks that the **last digit is even**.
- Ensures the **sum of all digits is at least 16**.

---

## Validation Rules
| Rule | Condition |
|------|----------|
| **Length** | Must be exactly 16 digits (excluding dashes). |
| **Only Numbers** | Must contain only numeric characters. |
| **Unique Digits** | Cannot consist of the same digit repeated 16 times. |
| **Last Digit Even** | The last digit must be 0, 2, 4, 6, or 8. |
| **Sum of Digits** | The sum of all digits must be at least 16. |

---

## Installation & Usage
1. **Copy the JavaScript file** into your project.
2. Call `validateCreditCard(cardNumber)` with a string containing the card number.

Example:
```js
console.log(validateCreditCard('9999-9999-8888-0000'));
