const recipeController = require('../../controllers/recipes');
const router = require('express').Router();

module.exports = router
    .get('/', recipeController.index)
    .post('/', recipeController.create)
    .get('/:recipe_id', recipeController.get)
    .put('/:recipe_id', recipeController.update)
    .delete('/:recipe_id', recipeController.destroy);
