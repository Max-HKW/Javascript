# main.js

**Author**: Massimo Musso

## Description:
This file contains a function that modifies a string based on specific rules:
1. If the string's length is at least 3, it appends 'ing' unless the string already ends in 'ing', in which case it appends 'ly'.
2. If the string's length is less than 3, it returns the string unchanged.

The function handles various cases based on the string's content, such as appending "ing" or "ly" to strings with sufficient length, and leaving shorter strings unchanged.

## Usage:

- **verbing("play")**: Returns `"playing"`
- **verbing("playing")**: Returns `"playingly"`
- **verbing("go")**: Returns `"go"`

## Example:

```javascript
console.log(verbing("play"));     // "playing"
console.log(verbing("playing"));  // "playingly"
console.log(verbing("go"));       // "go"
