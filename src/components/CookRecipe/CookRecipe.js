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
                     {props.instructions.map((ins) =>
                       <li class ="step">{ins}</li>
                    )}
                </ol>
                
            </div>
            
        </div>
    );
}

export default CookRecipe;