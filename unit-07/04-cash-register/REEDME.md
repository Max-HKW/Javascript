# main.js

## Author  
Massimo Musso

## Description  
This JavaScript file defines a function `cashRegister` that calculates the total cost of a shopping cart.  
Each item in the cart is stored as a key-value pair, where:  
- The **key** is the item name.  
- The **value** is the price of the item, stored as a **string**.  

The function converts the prices to **numbers**, sums them up, and returns the total price.

## Features  
- Defines a **shopping cart object** with items and their respective prices.  
- Uses `Object.values()` to extract the item prices.  
- Converts string prices to numbers using `parseFloat()`.  
- Uses `reduce()` to sum up all prices.  
- Returns the total cost of the shopping cart.

## Examples of Console Logs  

### Example 1: Shopping Cart Total  
```sh
60.55
