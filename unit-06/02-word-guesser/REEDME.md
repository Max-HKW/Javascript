# Hangman Game Documentation

## Overview
This is a simple Hangman game where the player guesses letters to complete a randomly chosen word.

---

## Features
- Random word selection from a predefined set.
- Tracks guessed letters and wrong attempts.
- Displays a Hangman drawing based on incorrect guesses.
- Implements a scoring system with rewards and penalties.
- Provides a game loop for continuous play.

---

## Code Breakdown

### **1. Word Selection**
```javascript
const words = new Set(["APPLE", "BANANA", "ORANGE", "GRAPE", "LEMON", "TIGER", "LION", "ZEBRA", "ELEPHANT", "GIRAFFE", "TABLE", "CHAIR", "WINDOW", "DOOR", "LAMP", "OCEAN", "RIVER", "MOUNTAIN", "DESERT", "FOREST"]);
let usedWords = new Set();
```
- The game stores a predefined set of words.
- Used words are tracked to prevent repetition.

```javascript
function getNewWord() {
  if (words.size === usedWords.size) {
    usedWords.clear(); // Reset if all words are used
  }
  let availableWords = [...words].filter(word => !usedWords.has(word));
  let chosenWord = availableWords[Math.floor(Math.random() * availableWords.length)];
  usedWords.add(chosenWord);
  return chosenWord.split('');
}
```
- Randomly selects a word from the available words.
- Resets used words when all have been used.

---

### **2. Hangman Display**
```javascript
const hangmanStages = {
  0: '\n\n\n\n',
  1: '\n       O  ',
  2: '\n       O  \n       |  ',
  3: '\n       O  \n      /|  ',
  4: '\n       O  \n      /|\\ ',
  5: '\n       O  \n      /|\\ \n      /   ',
  6: '\n       O  \n      /|\\ \n      / \\ \n   GAME OVER!',
};

function drawHangman(stage) {
  return hangmanStages[stage];
}
```
- ASCII representation of the Hangman drawing.
- Changes based on the number of incorrect guesses.

---

### **3. Game Flow**
```javascript
function resetGame() {
  console.log("Press the 'Start Game' button to begin.");
}
```
- Displays a message prompting the player to start.

```javascript
function startGame() {
  chosenWord = getNewWord();
  guessedLetters = new Array(chosenWord.length).fill('_');
  wrongGuesses = 0;
  totalReward = 0;
  attemptedLetters = new Set();
  console.log('New game started! Guess one letter at a time.');
  console.log(`${drawHangman(wrongGuesses)}\nWord to guess: ${guessedLetters.join(' ')}`);
  playGame();
}
```
- Selects a word, resets game variables, and starts the game loop.

---

### **4. Guess Handling**
```javascript
function guessLetter(letter) {
  letter = letter.toUpperCase();
  if (attemptedLetters.has(letter)) {
    console.log('You have already guessed this letter. Try another one.');
    return;
  }
  attemptedLetters.add(letter);

  if (wrongGuesses >= maxGuesses || guessedLetters.join('') === chosenWord.join('')) {
    console.log("Game over. Press the 'Start Game' button to play again!");
    return;
  }

  if (chosenWord.includes(letter)) {
    chosenWord.forEach((char, index) => {
      if (char === letter) guessedLetters[index] = letter;
    });
    let reward = Math.floor(Math.random() * 50) + 10;
    totalReward += reward;
    console.log(`Correct! You earned $${reward}.`);
  } else {
    let penalty = Math.floor(Math.random() * 30) + 5;
    totalReward -= penalty;
    wrongGuesses++;
    console.log(`Wrong! You lost $${penalty}.`);
  }

  console.log(`${drawHangman(wrongGuesses)}\n\nCurrent word: ${guessedLetters.join(' ')}\nRemaining guesses: ${maxGuesses - wrongGuesses}\nTotal reward: $${totalReward}`);

  if (guessedLetters.join('') === chosenWord.join('')) {
    console.log("Congratulations! You won! Press the 'Start Game' button to play again.");
  } else if (wrongGuesses >= maxGuesses) {
    console.log('Game over! The word was: ' + chosenWord.join('') + ". Press the 'Start Game' button to play again.");
  }
}
```
- Checks if the guessed letter has been attempted before.
- Updates game state based on correct or incorrect guesses.
- Applies rewards and penalties.
- Determines if the player has won or lost.

---

### **5. Game Loop**
```javascript
document.addEventListener('DOMContentLoaded', function () {
  console.log('Welcome to Hangman!');
  resetGame();
  document.getElementById('startButton').addEventListener('click', function () {
    startGame();
  });
});
```
- Initializes the game and sets up an event listener for the start button.

```javascript
function playGame() {
  setTimeout(() => {
    let letter = prompt('Enter a letter:');
    if (letter === null) {
      console.log("Game stopped. Press the 'Start Game' button to play again.");
      return;
    }
    if (!letter || letter.length !== 1 || !/[a-zA-Z]/.test(letter)) {
      console.log('Please enter a single valid letter.');
      playGame();
      return;
    }
    guessLetter(letter);
    if (wrongGuesses < maxGuesses && guessedLetters.includes('_')) {
      playGame();
    }
  }, 100);
}
```
- Continuously prompts the player to guess a letter.
- Ends the game when all letters are guessed or max wrong guesses are reached.

---

## **Conclusion**
This Hangman game implements:
- Random word selection.
- A simple ASCII Hangman drawing.
- A game loop with player input.
- A scoring system with rewards and penalties.

Players can start a new game at any time by clicking the **Start Game** button!
