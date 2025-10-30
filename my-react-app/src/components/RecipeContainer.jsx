import { recipes } from "../data/data.js";
import Recipe from "./Recipe.jsx";

function RecipeContainer() {
    return (
        <div>
            {recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />)}
        </div>
    );
}

export default RecipeContainer;