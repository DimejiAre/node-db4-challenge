const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getRecipeById(id){
    return db('recipes').where({id})
}

function getShoppingList(recipe_id){
    return db('recipes as r')
        .join('resources as res', 'r.id', 'res.recipe_id')
        .join('ingredients as i', 'i.id', 'res.ingredient_id')
        .select('r.recipe_name', 'i.ingredient_name', 'res.quantity')
        .where({'r.id': recipe_id})
}

function getInstructions(recipe_id){
    return db('recipes as r')
        .join('steps as s', 'r.id', 's.recipe_id')
        .select('r.recipe_name', 's.step_number', 's.instruction')
        .where({'r.id': recipe_id})
        .orderBy('s.step_number')
}