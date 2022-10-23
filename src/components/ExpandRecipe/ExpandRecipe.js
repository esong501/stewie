import { Route, Routes, useNavigate } from "react";
import './ExpandRecipe.scss';

// temp
import bchick from '../../img/newbake.png';


function ExpandRecipe() {
    return (
        <div class="Recipe">
            <div class = "RecipeSidebar">
                <div class="RecipeTags">
                    <ul class="TagsList">
                        <li>Level 1</li>
                        <li>8 Ingredients</li>
                        <li>veg/gf</li>
                        <li>prep time</li>
                        <li>total time</li>
                    </ul>
                </div>
                <div class = "RecipeIngreds">
                    <h2>Ingredients</h2>
                    <ul class="IngredientsList">
                        <li>ingred 1</li>
                        <li>ingred 2</li>
                        <li>ingred 3</li>
                        <li>ingred 4</li>
                    </ul>
                </div>
                <div >
                    <button class="CookButton">Start Cooking</button>
                </div>
            </div>
            <div class="RecipeOverview">
                <h1>Creamy Mushroom Soup</h1>
                <img src = {bchick} class ="RecipeImg" alt='thumbnail'/>
                <p class="RecipeDesc">A delicious creamy mushroom soup description</p>
            </div>
            
        </div>
    );
}

export default ExpandRecipe;