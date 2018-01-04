const Recipe = require('mongoose').model('Recipe');

module.exports = {
    index(request, response){
        console.log('get all');
        Recipe.find({})
            .then(recipes => {
                if(!recipes) { throw new Error(); }

                console.log(recipes);
                return response.json(recipes)
            })
            .catch(console.log);
    },
    get(request, response){
        console.log('get 1',request.params);
        Recipe.findById(request.params.recipe_id)
            .then(recipe => response.json(recipe))
            .catch(console.log);
    },
    create(request, response){
        request.body._creator = request.cookies.userId;
        Recipe.create(request.body)
            .then(recipe => response.json(recipe))
            .catch(console.log);
    },
    update(request, response){
        console.log('update',request.params);
        recipe.findByIdAndUpdate(request.params._id, request.body, { new : true})
            .then(recipe => response.json(recipe))
            .catch(error => {
                console.log(error);
                response.status(500).json(error);
            });
    },
    destroy(request, response){
        console.log('delete',request.params.recipe_id);
        Recipe.findByIdAndRemove(request.params.recipe_id)
            .then(recipe => response.json(recipe))
            .catch(error => {
                console.log(error);
                response.status(500).json(error);
            });
    }
}