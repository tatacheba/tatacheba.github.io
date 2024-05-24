import { Router, type Request, type Response } from "express";
import * as fs from "fs";
import * as path from "path";

const router: Router = Router();

const recipesFilePath = path.join(__dirname, "../data/recipes.json");

// Чтение данных из файла JSON
let recipesData = JSON.parse(fs.readFileSync(recipesFilePath, "utf-8"));

// GET all recipes
router.get("/", (req: Request, res: Response) => {
    res.json(recipesData.recipes);
});

// GET recipe by ID
router.get("/:id", (req: Request, res: Response) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipesData.recipes.find((r: any) => r.id === recipeId);
    if (!recipe) return res.status(404).send("Recipe not found");
    res.json(recipe);
});

// POST create new recipe
router.post("/", (req: Request, res: Response) => {
    const newRecipe = {
        id: recipesData.recipes.length + 1,
        title: req.body.title,
        servings: req.body.servings,
        src: req.body.src,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        notes: req.body.notes,
    };
    recipesData.recipes.push(newRecipe);
    fs.writeFileSync(recipesFilePath, JSON.stringify(recipesData, null, 2));
    res.status(201).json(newRecipe);
});

// PUT update recipe by ID
router.put("/:id", (req: Request, res: Response) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipesData.recipes.find((r: any) => r.id === recipeId);
    if (!recipe) return res.status(404).send("Recipe not found");

    recipe.title = req.body.title;
    recipe.servings = req.body.servings;
    recipe.src = req.body.src;
    recipe.ingredients = req.body.ingredients;
    recipe.instructions = req.body.instructions;
    recipe.notes = req.body.notes;

    fs.writeFileSync(recipesFilePath, JSON.stringify(recipesData, null, 2));
    res.json(recipe);
});

// DELETE recipe by ID
router.delete("/:id", (req: Request, res: Response) => {
    const recipeId = parseInt(req.params.id);
    const recipeIndex = recipesData.recipes.findIndex(
        (r: any) => r.id === recipeId
    );
    if (recipeIndex === -1) return res.status(404).send("Recipe not found");

    const deletedRecipe = recipesData.recipes.splice(recipeIndex, 1);
    fs.writeFileSync(recipesFilePath, JSON.stringify(recipesData, null, 2));
    res.json(deletedRecipe);
});

export default router;
