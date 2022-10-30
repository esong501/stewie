import { Route, Routes, useNavigate } from "react";
import './ExpandRecipe.scss';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

// temp
import bchick from '../../img/newbake.png';


function ExpandRecipe(props) {
    return (
        <div>
            {/* <Header /> */}
            <div class="Recipe">
                <div class = "RecipeSidebar">
                    <div class="RecipeTags">
                        <ul class="TagsList">
                            <li>Level 1</li>
                            <li>{props.recipe.ingredientLines.length} Ingredients</li>
                            <li>veg/gf</li>
                            <li>prep time</li>
                            <li>total time</li>
                        </ul>
                    </div>
                    <div class = "RecipeIngreds">
                        <h2>Ingredients</h2>
                        <ul class="IngredientsList">
                            <li>{props.recipe.ingredientLines[0]}</li>
                            <li>{props.recipe.ingredientLines[1]}</li>
                            <li>ingred 3</li>
                            <li>ingred 4</li>
                        </ul>
                    </div>
                    <div >
                        <button class="CookButton">
                            <span>Start Cooking</span>
                        </button>
                    </div>
                </div>
                <div class="RecipeOverview">
                    <h1>Creamy Mushroom Soup</h1>
                    <img src = {bchick} class ="RecipeImg" alt='thumbnail'/>
                    <p class="RecipeDesc">A delicious creamy mushroom soup description. A delicious creamy mushroom soup description.
                    A delicious creamy mushroom soup description.A delicious creamy mushroom soup description
                    </p>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default ExpandRecipe;