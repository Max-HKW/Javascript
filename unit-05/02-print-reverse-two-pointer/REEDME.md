# String Reversal using Two-Pointer Technique

## Description

This project demonstrates how to reverse a string using the **two-pointer technique**.  

## How It Works

The approach initializes two pointers:
- One at the **beginning** of the string.
- One at the **end** of the string.

These pointers move toward each other, swapping the characters at their respective positions until they meet or cross.  
This ensures an **in-place** reversal of the string.

## Example Usage

```javascript
console.log(printReverse('foobar')); // Output: 'raboof'
console.log(printReverse('hello'));  // Output: 'olleh'
console.log(printReverse('cane'));   // Output: 'enac'
console.log(printReverse('JavaScript')); // Output: 'tpircSavaJ'
console.log(printReverse('racecar')); // Output: 'racecar' (palindrome case)
console.log(printReverse('12345')); // Output: '54321'
console.log(printReverse('a')); // Output: 'a' (single character case)
console.log(printReverse('')); // Output: '' (empty string case)
