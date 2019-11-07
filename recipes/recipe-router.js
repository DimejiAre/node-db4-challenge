const express = require('express');

const router = express.Router();

const Recipes = require('./recipe-model');

router.get('/', async (req,res) => {
    try{
        let response = await Recipes.getRecipes()
        res.status(200).json(response)
    }
    catch(error){
        res.status(500).json({error: 'Recipes could not be retrieved from DB'})
    }
})

router.get('/:id/shoppingList', [validateRecipeId], async (req,res) => {
    try{
        const id = req.params.id;
        let response = await Recipes.getShoppingList(id)
        res.status(200).json(response)
    }
    catch (error){
        res.status(500).json({error: 'ShoppingList could not be retrieved from DB'})
    }
    
})

router.get('/:id/instructions', [validateRecipeId], async (req,res) => {
    try{
        const id = req.params.id;
        let response = await Recipes.getInstructions(id)
        res.status(200).json(response)
    }
    catch (error){
        res.status(500).json({error: 'Instructions could not be retrieved from DB'})
    }
})

function validateRecipeId(req,res,next){
    const id = req.params.id;
    if (parseInt(id) > 0){
        Recipes.getRecipeById(id)
            .then(response => {
                if(response.length > 0){
                    req.recipes = response[0]
                    next()
                } else {
                    res.status(404).json({message: 'recipe with specified id does not exist'})
                }
            })
            .catch(err => {
                res.status(500).json({error: 'Recipe could not be retrieved from DB ' + err })
            })
    } else {
        res.status(400).json({message: 'Invalid ID'})
    }
}

module.exports = router;