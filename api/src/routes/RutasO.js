const { Router } = require("express");

const misRouter = Router();

const { handler1, handler2, handler3, handler4} = require("./handlers/handlers")

misRouter.get("/recipes/:idRecipe",  handler1);

misRouter.get("/recipes/name?=", handler2);

misRouter.post("/recipes", handler3);

misRouter.get("diets", handler4);

module.exports = misRouter;