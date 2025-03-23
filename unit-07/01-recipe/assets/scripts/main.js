/**
 * @file main.js
 * @author Massimo Musso
 * @description This script defines an array of recipes and logs each recipe's details to the console.
 */

/**
 * Represents a recipe.
 * @typedef {Object} Recipe
 * @property {string} title - The title of the recipe.
 * @property {number} servings - The number of servings.
 * @property {string[]} ingredients - List of ingredients.
 */

/**
 * An array of recipes.
 * @type {Recipe[]}
 */
const recipes = [
  {
    title: 'Spaghetti Carbonara',
    servings: 2,
    ingredients: ['spaghetti', 'eggs', 'guanciale', 'pecorino cheese', 'black pepper']
  },
  {
    title: 'Pancakes',
    servings: 4,
    ingredients: ['flour', 'milk', 'eggs', 'baking powder', 'sugar']
  },
  {
    title: 'Quinoa Salad',
    servings: 3,
    ingredients: ['quinoa', 'tomatoes', 'cucumbers', 'feta cheese', 'olive oil']
  }
];

/**
 * Logs the details of each recipe to the console.
 * @param {Recipe[]} recipesArray - The array of recipes.
 */
function logRecipes(recipesArray) {
  recipesArray.forEach(recipe => {
    console.log(`\n${recipe.title}`);
    console.log(`Servings: ${recipe.servings}`);
    console.log('Ingredients:');
    recipe.ingredients.forEach(ingredient => console.log(`- ${ingredient}`));
  });
}

// Call the function to log the recipes
logRecipes(recipes);
