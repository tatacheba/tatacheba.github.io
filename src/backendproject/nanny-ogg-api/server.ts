import express, {
    type Application,
    type Request,
    type Response,
} from "express";
import recipesRouter from "./routers/recipes.js";

const app: Application = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/recipes", recipesRouter);

// Root route
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Nanny Ogg API!");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
