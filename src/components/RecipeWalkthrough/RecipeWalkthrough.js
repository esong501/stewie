import { Route, Routes, useState , useEffect} from "react";
import './RecipeWalkthrough.scss'

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
            {index > 0 ? <button onClick={decClick}>prev step</button> : null}
            {index < props.steps.length ? <button onClick={handleClick}>next step</button> : null}
        </div> 
    );
}

export default RecipeWalkthrough;