const { Recipe } = require("../db");

const createRecipe = async (name, sumary, score, healthScore, image, steps, namedieta ) => 
 await  Recipe.create({ name, sumary, score, healthScore, image, steps, namedieta });


module.exports={ createRecipe };