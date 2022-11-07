import { useState } from 'react';
import './CookRecipe.scss'
// import { Button, Tabs, Tab} from '@mui/material';

function CookRecipe(props) {
    
    return (
        <div class="CookRec">
            <h2 class="instructions">Instructions</h2>
            {/* <h3>Prep</h3> */}
            <p>{props.instructions[0]}{props.instructions[1]}</p>
            <p>{props.instructions[2]}</p>
            <p>{props.instructions[3]}</p>
            <p>{props.instructions[4]}</p>
            <p>{props.instructions[5]}{props.instructions[6]}</p>
            <p>{props.instructions[7]}</p>
            <p>{props.instructions[8]}</p>
            <p>{props.instructions[10]}</p>
            <p>{props.instructions[11]}</p>
        </div>
    );
}

export default CookRecipe;