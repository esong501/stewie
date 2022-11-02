import { useState } from 'react';
// import { Button, Tabs, Tab} from '@mui/material';

function CookRecipe(props) {
    
    return (
        <div >
           <p>{props.instructions[0]}</p>
        </div>
    );
}

export default CookRecipe;