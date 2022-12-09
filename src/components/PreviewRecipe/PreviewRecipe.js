import { useState } from 'react';
// import { Button, Tabs, Tab} from '@mui/material';
import './PreviewRecipe.scss';

function PreviewRecipe(props) {
    
    return (
    <div class="Preview">
        <div class="PreviewScrollElems">
            {/* <img src = {props.recipe.image} class ="RecipeImg" alt='thumbnail' referrerpolicy="no-referrer"/> */}
            <img src = {"data:image/jpeg;base64,"+props.recipe.image} class ="RecipeImg" alt='thumbnail' referrerpolicy="no-referrer"/>
            <div class="PreviewInst">
                <h3 style={{color: 'var(--tomato)', textAlign:'center'}}>Instructions</h3>
                <ol>
                    <li class ="step">{props.recipe.instructions[0]}</li>
                    <li class ="step">{props.recipe.instructions[1]}</li>
                    <li class ="step">{props.recipe.instructions[2]}</li>
                    <li class ="step">{props.recipe.instructions[3]}</li>
                    <li class ="step">{props.recipe.instructions[4]}</li>
                    <li class ="step">{props.recipe.instructions[5]}</li>
                    <li class ="step">{props.recipe.instructions[6]}</li>
                    <li class ="step">{props.recipe.instructions[7]}</li>
                    <li class ="step">{props.recipe.instructions[8]}</li>
                    <li class ="step">{props.recipe.instructions[9]}</li>
                    <li class ="step">{props.recipe.instructions[10]}</li>
                    <li class ="step">{props.recipe.instructions[11]}</li>
                </ol>
            </div>
        </div>
        
    </div>
    );
}

export default PreviewRecipe;