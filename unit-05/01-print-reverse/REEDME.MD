# String Reversal by Iterating Backwards

## Description

This project demonstrates how to reverse a string by iterating **from the last character to the first**.  
The function reads the input string in **reverse order** and constructs the reversed version.  
This approach is straightforward and works efficiently for reversing short to moderately long strings.

## Example Usage

```javascript
printReverse('foobar'); // Output: "raboof"
printReverse('hello');  // Output: "olleh"
printReverse('cane');   // Output: "enac"
printReverse('JavaScript'); // Output: "tpircSavaJ"
printReverse('racecar'); // Output: "racecar" (palindrome case)
printReverse('12345'); // Output: "54321"
printReverse('a'); // Output: "a" (single character case)
printReverse(''); // Output: "" (empty string case)
