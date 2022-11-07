import { Route, Routes, useState , useEffect} from "react";
import CompleteRecipe from "../CompleteRecipe/CompleteRecipe.js";
import './RecipeWalkthrough.scss'
import { Button } from '@mui/material';

function RecipeWalkthrough(props) {
    const [index, setIndex] = useState(props.index);
    const [finish, setFinish] = useState(false);

    const handleClick = () => {
        setIndex(index + 1);
    };

    const decClick = () => {
        setIndex(index - 1);
    }

    const recipeWalk = (
        <div className="steps">
            <h4>{props.steps[index]}</h4>
            {index > 0 ? <Button variant="contained" className="prevButton" onClick={decClick}>Previous Steps</Button> : null}
            {index < (props.steps.length - 1) ? <Button variant="contained" className="nextButton" onClick={handleClick}>Next Steps</Button> : null}
            {index === (props.steps.length - 1) ? <Button variant="contained" className="nextButton" onClick={() => setFinish(!finish)}>Finish Recipe!</Button> : null}
        </div> 
    );


    return (
        <div>
            {finish ? <CompleteRecipe/> : recipeWalk}
        </div>
    );
}

export default RecipeWalkthrough;