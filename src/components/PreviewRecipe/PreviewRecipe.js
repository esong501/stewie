import { useState } from 'react';
// import { Button, Tabs, Tab} from '@mui/material';

function PreviewRecipe(props) {
    
    return (
    <div >
        {console.log(props)}
        <h1>{props.recipe.label}</h1>
        <img src = {props.recipe.image} class ="RecipeImg" alt='thumbnail'/>
    </div>
    );
}

export default PreviewRecipe;