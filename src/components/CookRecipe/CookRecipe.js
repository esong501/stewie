import { useState } from 'react';
import './CookRecipe.scss'
// import { Button, Tabs, Tab} from '@mui/material';

function CookRecipe(props) {
    
    return (
        <div class="CookRec">
            <h2 class="instructions">Instructions</h2>
            {/* <h3>Prep</h3> */}
            <div class="PreviewIns">
                <ol>
                    <li class ="step">{props.instructions[0]}</li>
                    <li class ="step">{props.instructions[1]}</li>
                    <li class ="step">{props.instructions[2]}</li>
                    <li class ="step">{props.instructions[3]}</li>
                    <li class ="step">{props.instructions[4]}</li>
                    <li class ="step">{props.instructions[5]}</li>
                    <li class ="step">{props.instructions[6]}</li>
                    <li class ="step">{props.instructions[7]}</li>
                    <li class ="step">{props.instructions[8]}</li>
                    <li class ="step">{props.instructions[9]}</li>
                    <li class ="step">{props.instructions[10]}</li>
                    <li class ="step">{props.instructions[11]}</li>
                </ol>
                
            </div>
            
        </div>
    );
}

export default CookRecipe;