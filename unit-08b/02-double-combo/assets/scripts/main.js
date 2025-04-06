/**
 * @file queue_card_game.js
 * @author Massimo Musso
 * @description Implementation of a card game using a queue for deck management.
 */

/**
 * Class representing a queue (FIFO structure).
 */
class Queue {
  constructor() {
      /** @type {Array} */
      this.items = [];
  }
  
  /**
   * Adds an item to the queue.
   * @param {*} item - The item to be added.
   */
  enqueue(item) {
      this.items.push(item);
  }
  
  /**
   * Removes and returns the first item from the queue.
   * @returns {*} The removed item.
   */
  dequeue() {
      return this.items.shift();
  }
  
  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if the queue is empty, otherwise false.
   */
  isEmpty() {
      return this.items.length === 0;
  }
  
  /**
   * Returns the size of the queue.
   * @returns {number} The number of items in the queue.
   */
  size() {
      return this.items.length;
  }
}

/**
* Array containing card names.
* @type {string[]}
*/
const cardNames = ["Dragon", "Mage", "Warrior", "Beast", "Orc", "Elf", "Troll", "Golem", "Vampire", "Wolf"];

/**
* Base class for a playing card.
*/
class Card {
  constructor() {
      /** @type {string} */
      this.name = cardNames[Math.floor(Math.random() * cardNames.length)];
      /** @type {number} */
      this.health = Math.floor(Math.random() * 20) + 10;
      /** @type {number} */
      this.attack = Math.floor(Math.random() * 5) + 5;
      /** @type {number} */
      this.defense = Math.floor(Math.random() * 3) + 1;
  }
  
  /**
   * Applies a special effect to another card.
   * @param {Card} opponentCard - The opponent's card.
   */
  applyEffect(opponentCard) {
      // No special effect by default
  }
}

/**
* Class representing a Fire-type card.
* @extends Card
*/
class FireCard extends Card {
  constructor() {
      super();
      this.name += " of Fire";
      this.attack += 2;
      this.defense -= 1;
  }
  
  applyEffect(opponentCard) {
      console.log(`${this.name} uses Fire Blast on ${opponentCard.name}, dealing ${this.attack} damage!`);
      opponentCard.health = Math.max(0, opponentCard.health - this.attack);
  }
}

/**
* Class representing an Ice-type card.
* @extends Card
*/
class IceCard extends Card {
  constructor() {
      super();
      this.name += " of Ice";
      this.attack -= 1;
      this.defense += 2;
  }
  
  applyEffect(opponentCard) {
      console.log(`${this.name} uses Frost on ${opponentCard.name}, reducing its health by ${this.attack} and freezing it!`);
      opponentCard.health = Math.max(0, opponentCard.health - this.attack);
      opponentCard.frozen = true;
  }
}

/**
* Class representing a Thunder-type card.
* @extends Card
*/
class ThunderCard extends Card {
  constructor() {
      super();
      this.name += " of Thunder";
      this.attack += Math.floor(Math.random() * 3) + 1;
      this.defense -= 1;
  }
  
  applyEffect(opponentCard) {
      console.log(`${this.name} uses Lightning on ${opponentCard.name}, dealing ${this.attack} damage and stunning it!`);
      opponentCard.health = Math.max(0, opponentCard.health - this.attack);
      opponentCard.stunned = true;
  }
}

/**
* Class representing a player.
*/
class Player {
  constructor(name) {
      /** @type {string} */
      this.name = name;
      /** @type {Queue} */
      this.deck = new Queue();
      /** @type {number} */
      this.wins = 0;
  }
  
  /**
   * Adds a card to the player's deck.
   * @param {Card} card - The card to add.
   */
  addCardToDeck(card) {
      this.deck.enqueue(card);
  }
  
  /**
   * Plays the first card from the deck.
   * @returns {Card} The played card.
   */
  playCard() {
      return this.deck.dequeue();
  }
}

/**
* Class managing the game.
*/
class Game {
  constructor(player1, player2, maxRounds) {
      /** @type {Player} */
      this.player1 = player1;
      /** @type {Player} */
      this.player2 = player2;
      /** @type {number} */
      this.maxRounds = maxRounds;
      /** @type {number} */
      this.currentRound = 0;
  }
  
  /**
   * Plays a round of the game.
   */
  playRound() {
      if (this.currentRound >= this.maxRounds || this.player1.deck.isEmpty() || this.player2.deck.isEmpty()) {
          this.declareWinner();
          return;
      }
      
      this.currentRound++;
      console.log(`Round ${this.currentRound}`);
      
      const card1 = this.player1.playCard();
      const card2 = this.player2.playCard();
      
      console.log(`${this.player1.name} plays ${card1.name}`);
      console.log(`${this.player2.name} plays ${card2.name}`);
      
      card1.applyEffect(card2);
      card2.applyEffect(card1);
      
      if (card1.health > card2.health) {
          this.player1.wins++;
      } else if (card2.health > card1.health) {
          this.player2.wins++;
      }
  }
  
  /**
   * Declares the winner of the game.
   */
  declareWinner() {
      console.log(`The winner is ${this.player1.wins > this.player2.wins ? this.player1.name : this.player2.name}`);
  }
}