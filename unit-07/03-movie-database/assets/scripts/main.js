/**
 * @file movies.js
 * @author Massimo Musso
 * @description This script defines an array of movies and logs their details.
 */

/**
 * Represents a movie.
 * @typedef {Object} Movie
 * @property {string} title - The title of the movie.
 * @property {number} duration - The duration of the movie in minutes.
 * @property {string[]} stars - An array of actors starring in the movie.
 */

/**
 * An array of movies.
 * @type {Movie[]}
 */
const movies = [
  {
    title: 'Inception',
    duration: 148,
    stars: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
  },
  {
    title: 'The Matrix',
    duration: 136,
    stars: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
  },
  {
    title: 'Interstellar',
    duration: 169,
    stars: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
  },
  {
    title: 'The Dark Knight',
    duration: 152,
    stars: ['Christian Bale', 'Heath Ledger', 'Gary Oldman'],
  },
  {
    title: 'Pulp Fiction',
    duration: 154,
    stars: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
  },
];

/**
 * Logs information about each movie in the array.
 * @param {Movie[]} moviesArray - The array of movies.
 */
function logMovies(moviesArray) {
  moviesArray.forEach(movie => {
    console.log(
      `${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}`
    );
  });
}

// Call the function to log movie information
logMovies(movies);
 