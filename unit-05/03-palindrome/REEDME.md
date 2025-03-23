# Palindrome Checker

## Author: Massimo Musso

## Description
This project contains two functions:

- `isAlphanumeric(char)`: Checks if a character is alphanumeric (either a letter or a number).
- `isPalindrome(string)`: Checks if a string is a palindrome, ignoring non-alphanumeric characters and case differences.

## Purpose
The purpose of this file is to implement a simple palindrome checker that can handle strings with spaces, punctuation, and case differences. It verifies if the given string, after ignoring non-alphanumeric characters and treating uppercase and lowercase characters equally, reads the same forwards and backwards.

## How It Works

### `isAlphanumeric(char)`
This function checks if the given character is a valid alphanumeric character (i.e., a letter or a number).

- **Input**: A character (string of length 1).
- **Output**: `true` if the character is alphanumeric, `false` otherwise.

### `isPalindrome(string)`
This function checks if the provided string is a palindrome, ignoring non-alphanumeric characters and case differences. It uses two pointers: one starting from the beginning and the other from the end of the string. The function compares characters at these positions, moving the pointers towards the center.

- **Input**: A string to check.
- **Output**: `true` if the string is a palindrome, `false` otherwise.

## Example Usage

```javascript
console.log(isPalindrome('Was it a car or a cat I saw?'));  // true
console.log(isPalindrome('tab a cat'));  // false

