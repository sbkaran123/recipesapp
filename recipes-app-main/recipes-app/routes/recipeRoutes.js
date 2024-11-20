const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// CRUD Routes
router.post('/recipes', recipeController.createRecipe); // Create recipe
router.get('/recipes', recipeController.getAllRecipes); // Get all recipes
router.get('/recipes/:id', recipeController.getRecipeById); // Get recipe by ID
router.put('/recipes/:id', recipeController.updateRecipe); // Update recipe
router.delete('/recipes/:id', recipeController.deleteRecipe); // Delete recipe

module.exports = router;
