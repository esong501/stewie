import * as React from 'react';
import { Link, Route, Routes } from "react-router-dom";

import './ExpandRecipe.scss';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import RecipeWalkthrough from '../RecipeWalkthrough/RecipeWalkthrough.js';
import Recipe from '../Recipe.js';
import TabBarRecipe from '../TabBarRecipe/TabBarRecipe.js';
import { Button } from '@mui/material';


// temp
import bchick from '../../img/newbake.png';



function ExpandRecipe(props) {
    // const navigate = useNavigate();
    const [isCooking, setIsCooking] = React.useState(false);

    const recipeOverview = (
        <div class = "NavTabs">
            <div className = "Tabs">
                <TabBarRecipe recipe = {props.recipe}/>
            </div>
        </div>
    );
    
    return (
        <div>
            {/* <Header /> */}
            <div class="Recipe">
                <div class = "RecipeSidebar">
                    <div class="RecipeTags">
                        {console.log(props)}
                        <ul class="TagsList">
                            <li>Level 1</li>
                            <li>{props.recipe.ingredientLines.length} Ingredients</li>
                            <li>{props.recipe.dietLabels[0]}</li>
                            <li>{props.recipe.healthLabels[0]}</li>
                            <li>total time</li>
                        </ul>
                    </div>
                    <div class = "RecipeIngreds">
                        <h2>Ingredients</h2>
                        <ul class="IngredientsList">
                            <li>{props.recipe.ingredientLines[0]}</li>
                            <li>{props.recipe.ingredientLines[1]}</li>
                            <li>{props.recipe.ingredientLines[2]}</li>
                            <li>{props.recipe.ingredientLines[3]}</li>
                        </ul>
                    </div>
                    <div >
                        <Button variant = "contained" className="CookButton" onClick={() => setIsCooking(!isCooking)}>
                            <span>Start Cooking</span>
                        </Button>   
                    </div>
                </div>
                <div class="RecipeOverview">
                    {isCooking ? <div><RecipeWalkthrough steps = {props.recipe.instructions} index={0}></RecipeWalkthrough> </div> : recipeOverview}

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default ExpandRecipe;