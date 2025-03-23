/**
 * @file Hangman Game
 * @author Your Name
 * @description A simple Hangman game where the player guesses letters to complete a randomly chosen word.
 */

/** Set of available words for the game */
const words = new Set([
  'APPLE',
  'BANANA',
  'ORANGE',
  'GRAPE',
  'LEMON',
  'TIGER',
  'LION',
  'ZEBRA',
  'ELEPHANT',
  'GIRAFFE',
  'TABLE',
  'CHAIR',
  'WINDOW',
  'DOOR',
  'LAMP',
  'OCEAN',
  'RIVER',
  'MOUNTAIN',
  'DESERT',
  'FOREST',
]);

/** Set to track used words */
let usedWords = new Set();

/**
 * Selects a new word randomly from the available words.
 * If all words are used, it resets the used words list.
 * @returns {string[]} Array of letters representing the chosen word.
 */
function getNewWord() {
  if (words.size === usedWords.size) {
    usedWords.clear(); // Reset if all words have been used
  }
  let availableWords = [...words].filter(word => !usedWords.has(word));
  let chosenWord =
    availableWords[Math.floor(Math.random() * availableWords.length)];
  usedWords.add(chosenWord);
  return chosenWord.split('');
}

let chosenWord;
let guessedLetters;
const maxGuesses = 6;
let wrongGuesses;
let totalReward;
let attemptedLetters;

/** Hangman drawing stages */
const hangmanStages = {
  0: '\n\n\n\n',
  1: '\n       O  ',
  2: '\n       O  \n       |  ',
  3: '\n       O  \n      /|  ',
  4: '\n       O  \n      /|\\ ',
  5: '\n       O  \n      /|\\ \n      /   ',
  6: '\n       O  \n      /|\\ \n      / \\ \n   GAME OVER!',
};

/**
 * Returns the Hangman drawing based on the current stage.
 * @param {number} stage - The number of wrong guesses.
 * @returns {string} The Hangman ASCII representation.
 */
function drawHangman(stage) {
  return hangmanStages[stage];
}

/**
 * Resets the game variables and prompts the user to start.
 */
function resetGame() {
  console.log("Press the 'Start Game' button to begin.");
}

/**
 * Starts a new game by selecting a word and resetting variables.
 */
function startGame() {
  chosenWord = getNewWord();
  guessedLetters = new Array(chosenWord.length).fill('_');
  wrongGuesses = 0;
  totalReward = 0;
  attemptedLetters = new Set();
  console.log('New game started! Guess one letter at a time.');
  console.log(
    `${drawHangman(wrongGuesses)}\nWord to guess: ${guessedLetters.join(' ')}`
  );
  playGame();
}

/**
 * Processes the player's guess and updates the game state.
 * @param {string} letter - The letter guessed by the player.
 */
function guessLetter(letter) {
  letter = letter.toUpperCase();

  if (attemptedLetters.has(letter)) {
    console.log('You have already guessed this letter. Try another one.');
    return;
  }
  attemptedLetters.add(letter);

  if (
    wrongGuesses >= maxGuesses ||
    guessedLetters.join('') === chosenWord.join('')
  ) {
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

  console.log(
    `${drawHangman(wrongGuesses)}\n\nCurrent word: ${guessedLetters.join(
      ' '
    )}\nRemaining guesses: ${
      maxGuesses - wrongGuesses
    }\nTotal reward: $${totalReward}`
  );

  if (guessedLetters.join('') === chosenWord.join('')) {
    console.log(
      "Congratulations! You won! Press the 'Start Game' button to play again."
    );
  } else if (wrongGuesses >= maxGuesses) {
    console.log(
      'Game over! The word was: ' +
        chosenWord.join('') +
        ". Press the 'Start Game' button to play again."
    );
  }
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', function () {
  console.log('Welcome to Hangman!');
  resetGame();

  document.getElementById('startButton').addEventListener('click', function () {
    startGame();
  });
});

/**
 * Runs the game loop, prompting the user for input and processing guesses.
 */
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
