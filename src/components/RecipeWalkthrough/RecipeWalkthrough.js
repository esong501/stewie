import { Route, Routes, useState , useEffect} from "react";
import './RecipeWalkthrough.scss'
import { Button } from '@mui/material';

function RecipeWalkthrough(props) {
    const [index, setIndex] = useState(props.index);

    const handleClick = () => {
        setIndex(index + 1);
    };

    const decClick = () => {
        setIndex(index - 1);
    }

    return (
        <div className="steps">
            <h3>{props.steps[index]}</h3>
            {index > 0 ? <Button variant="contained" className="prevButton" onClick={decClick}>Previous Steps</Button> : null}
            {index < props.steps.length ? <Button variant="contained" className="nextButton" onClick={handleClick}>Next Steps</Button> : null}
        </div> 
    );
}

export default RecipeWalkthrough;