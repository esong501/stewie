import { useState } from 'react';
// import { Button, Tabs, Tab} from '@mui/material';
function PreviewRecipe(props) {
    
    return (
    <div >
        <h1>{props.recipe.label}</h1>
        <img src = {props.recipe.image} class ="RecipeImg" alt='thumbnail' referrerpolicy="no-referrer"/>
    </div>
    );
}

export default PreviewRecipe;