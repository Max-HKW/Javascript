# String Reversal by Iterating Backwards

## Description

This project demonstrates how to reverse a string by iterating **from the last character to the first**.  
The function reads the input string in **reverse order** and constructs the reversed version.  
This approach is straightforward and works efficiently for reversing short to moderately long strings.

## Example Usage

```javascript
console.log(printReverse('foobar')); // Output: "raboof"
console.log(printReverse('hello'));  // Output: "olleh"
console.log(printReverse('cane'));   // Output: "enac"
console.log(printReverse('JavaScript')); // Output: "tpircSavaJ"
console.log(printReverse('racecar')); // Output: "racecar" (palindrome case)
console.log(printReverse('12345')); // Output: "54321"
console.log(printReverse('a')); // Output: "a" (single character case)
console.log(printReverse('')); // Output: "" (empty string case)
