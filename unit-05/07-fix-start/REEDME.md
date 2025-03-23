# fixStart Function

## Filename: fixStart.js
## Author: Massimo Musso
## Purpose: Replace all occurrences of the first character in a string with '*' except for the first character.
## Description:
This file contains a function `fixStart` that takes a string as input and returns a version of the string where all occurrences of its first character are replaced with a `*`, except for the first character itself. 

The function is useful for situations where you want to obfuscate repeated characters in a string while keeping the first character visible.

### How it Works:
- The function receives a string as input.
- It identifies the first character of the string.
- It replaces all occurrences of the first character (excluding the first one) with `*`.
- The modified string is returned.

### Usage Example:
```javascript
console.log(fixStart("babble"));  // "ba**le"
console.log(fixStart("google"));  // "goo*le"
console.log(fixStart("apple"));   // "ap*le"
