/**
 * @file main.js
 * @author Massimo Musso
 * @description This script calculates the total price of items in a shopping cart.
 */

/**
 * Represents a shopping cart where item names are keys and prices are values.
 * @typedef {Object} ShoppingCart
 * @property {string} itemName - The name of the item.
 * @property {string} itemPrice - The price of the item as a string.
 */

/**
 * Calculates the total price of all items in the shopping cart.
 * @param {ShoppingCart} cart - The shopping cart object with item names and prices as strings.
 * @returns {number} The total price of all items in the cart.
 */
function cashRegister(cart) {
    return Object.values(cart)
        .map(price => parseFloat(price)) // Convert string prices to numbers
        .reduce((acc, price) => acc + price, 0); // Sum up all the prices
}

// Sample shopping cart
let cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

// Output the total price
console.log(cashRegister(cartForParty)); // 60.55
