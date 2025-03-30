/**
 * @file main.js
 * @author Massimo Musso
 * @description Converts Celsius temperature to Fahrenheit.
 */

/**
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} - The equivalent temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

/**
 * Prints the Celsius to Fahrenheit conversion from 0 to 100 every second using setInterval.
 */
function printTemperaturesWithInterval() {
  let celsius = 0;
  const intervalId = setInterval(() => {
    const fahrenheit = celsiusToFahrenheit(celsius);
    console.log(`${celsius}°C = ${fahrenheit}°F`);
    celsius++;

    if (celsius > 100) {
      clearInterval(intervalId); // Stop the interval after 100°C
    }
  }, 1000); // Interval of 1 second
}

printTemperaturesWithInterval();


/**
 * Converts Celsius temperature to Fahrenheit.
 * 
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} - The equivalent temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

/**
 * Prints the Celsius to Fahrenheit conversion from 0 to 100 every second using setTimeout.
 * 
 * @param {number} celsius - The current temperature in Celsius.
 */
function printTemperatureWithTimeout(celsius) {
  if (celsius > 100) return; // Stop if we reach 100°C

  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C = ${fahrenheit}°F`);

  setTimeout(() => printTemperatureWithTimeout(celsius + 1), 1000); // Call the function again after 1 second
}

printTemperatureWithTimeout(0);
