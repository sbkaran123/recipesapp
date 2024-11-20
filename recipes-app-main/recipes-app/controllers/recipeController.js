const Recipe = require('../models/recipeModel');

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions, image } = req.body;
    const newRecipe = new Recipe({
      name,
      ingredients,
      instructions,
      image,
    });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: 'Error creating recipe', error });
  }
};

// Get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching recipes', error });
  }
};

// Get recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching recipe', error });
  }
};

// Update recipe by ID
const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: 'Error updating recipe', error });
  }
};

// Delete recipe by ID
const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting recipe', error });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
