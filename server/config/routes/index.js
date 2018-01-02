const router = require('express').Router();
const recipeRoutes = require('./recipe.routes');
const authRoutes = require('./auth.routes');

module.exports = router
    .use('/recipes', recipeRoutes)
    .use('/auth',authRoutes);
