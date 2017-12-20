const authController = require('../controllers/auth');
const recipeController = require('../controllers/recipes');

const path = require('path');

module.exports = function(app){
    app
        .post('/auth/login',authController.login)
        .post('/auth/register',authController.register)
        .delete('/auth/logout',authController.logout)

        .get('/api/recipes', recipeController.index)
        .post('/api/recipes', recipeController.create)
        .get('/api/recipes/:recipe_id', recipeController.get)
        .put('/api/recipes/:recipe_id', recipeController.update)
        .delete('/api/recipes/:recipe_id', recipeController.destroy)
        
        .all('*',function(request,response){
            response.sendFile(path.resolve('dist','index.html'));
        });
};
