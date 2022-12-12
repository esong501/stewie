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
                <h3 style={{color: 'var(--tomato)', textAlign:'center', fontFamily:'filson-soft'}}>Instructions</h3>
                <ol>
                     {props.recipe.instructions.map((ins) =>
                       <li class ="step">{ins}</li>
                    )}
                </ol>
            </div>
        </div>
        
    </div>
    );
}

export default PreviewRecipe;