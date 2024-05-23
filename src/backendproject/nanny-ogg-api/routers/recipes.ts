import { Router, type Request, type Response } from "express";
import recipes from "../data/recipes.json" assert { type: "json" };

const router: Router = Router();

// GET all recipes
router.get("/", (req: Request, res: Response) => {
    res.json(recipes);
});

// GET recipe by ID
router.get("/:id", (req: Request, res: Response) => {
    const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).send("Recipe not found");
    res.json(recipe);
});

// POST create new recipe
router.post("/", (req: Request, res: Response) => {
    const newRecipe = {
        id: recipes.length + 1,
        name: req.body.name,
        ingredients: req.body.ingredients,
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

// PUT update recipe by ID
router.put("/:id", (req: Request, res: Response) => {
    const recipe = recipes.find((r) => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).send("Recipe not found");

    recipe.name = req.body.name;
    recipe.ingredients = req.body.ingredients;
    res.json(recipe);
});

// DELETE recipe by ID
router.delete("/:id", (req: Request, res: Response) => {
    const recipeIndex = recipes.findIndex(
        (r) => r.id === parseInt(req.params.id)
    );
    if (recipeIndex === -1) return res.status(404).send("Recipe not found");

    const deletedRecipe = recipes.splice(recipeIndex, 1);
    res.json(deletedRecipe);
});

export default router;
