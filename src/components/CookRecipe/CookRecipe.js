import { useState } from 'react';
import './CookRecipe.scss'
// import { Button, Tabs, Tab} from '@mui/material';

function CookRecipe(props) {
    
    return (
        <div >
            <h2 class="instructions">Instructions</h2>
            <p>{props.instructions[0]}</p>
        </div>
    );
}

export default CookRecipe;