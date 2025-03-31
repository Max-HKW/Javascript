/**
 * @file main.js
 * @author Massimo Musso
 * @description Simulates a dishwasher that washes dishes from multiple stacks of dirty plates, 
 *              showing the state of the dirty and clean stacks with a randomized delay.
 */

class Dishwasher {
  /**
   * Creates an instance of the dishwasher.
   * Initializes 3 stacks of dirty plates and an empty array for clean plates.
   */
  constructor() {
    /**
     * Array containing 3 stacks of dirty plates.
     * Each stack has a random number of plates, between 10 and 50.
     * @type {Array<Array<string>>}
     */
    this.dirtyStacks = [
      Array.from(
        { length: Math.floor(Math.random() * 41) + 10 },
        (_, i) => `Plate ${i + 1}A`
      ),
      Array.from(
        { length: Math.floor(Math.random() * 41) + 10 },
        (_, i) => `Plate ${i + 1}B`
      ),
      Array.from(
        { length: Math.floor(Math.random() * 41) + 10 },
        (_, i) => `Plate ${i + 1}C`
      ),
    ];

    /**
     * Array that holds clean plates after washing.
     * @type {Array<string>}
     */
    this.cleanStack = [];
  }

  /**
   * Simulates washing dishes by moving them from the dirty stacks to the clean stack.
   * A maximum of 2 plates are washed per operation.
   */
  washDish() {
    let washDishes = [];

    for (let stack of this.dirtyStacks) {
      if (stack.length > 0 && washDishes.length < 2) {
        washDishes.push(stack.pop());
      }
    }

    // Add the washed dishes to the clean stack
    this.cleanStack.push(...washDishes);
  }

  /**
   * Displays the current state of the dirty stacks and the clean stack in the console.
   */
  displayStack() {
    console.clear();
    console.log('Dirty Stacks:');
    this.dirtyStacks.forEach((stack, index) => {
      console.log(`Stack ${index + 1}: [${stack.join(', ')}]`);
    });

    console.log('\nClean Stack:');
    console.log(`[${this.cleanStack.join(', ')}]`);
  }

  /**
   * Runs the dishwasher simulation.
   * Continuously washes dishes from the dirty stacks until they are all clean.
   * A random delay is introduced between each operation to simulate washing time.
   * @returns {Promise<void>} A promise that resolves when all dishes are washed.
   */
  async runSimulation() {
    console.log('Starting Dishwasher Simulation...');
    while (this.dirtyStacks.some(stack => stack.length > 0)) {
      this.washDish();
      this.displayStack();
      await new Promise(resolve =>
        setTimeout(resolve, Math.random() * 1000 + 500)
      );
    }
    console.log('All dishes are clean!');
  }
}

// Create a new dishwasher instance and run the simulation
const dishwasher = new Dishwasher();
dishwasher.runSimulation();
