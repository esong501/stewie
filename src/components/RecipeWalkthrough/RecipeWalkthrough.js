import { Route, Routes, useState , useEffect} from "react";
import CompleteRecipe from "../CompleteRecipe/CompleteRecipe.js";
import './RecipeWalkthrough.scss'
import { Button } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Typography } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//       primary: "#3B9F2B",
//     },
//   });

function RecipeWalkthrough(props) {
    // const [index, setIndex] = useState(props.index);
    const [finish, setFinish] = useState(false);

    // const handleClick = () => {
    //     setIndex(index + 1);
    // };

    // const decClick = () => {
    //     setIndex(index - 1);
    // }

    // const recipeWalk = (
    //     <div className="steps">
    //         <h4>{props.steps[index]}</h4>
    //         {index > 0 ? <Button variant="contained" className="prevButton" onClick={decClick}>Previous Steps</Button> : null}
    //         {index < (props.steps.length - 1) ? <Button variant="contained" className="nextButton" onClick={handleClick}>Next Steps</Button> : null}
    //         {index === (props.steps.length - 1) ? <Button variant="contained" className="nextButton" onClick={() => setFinish(!finish)}>Finish Recipe!</Button> : null}
    //     </div> 
    // );

    const recipeWalk = (
        <div>
            {console.log(props.steps)}
            <tbody>
                {props.steps.map((steps, index) =>
                    <tr key={index}>
                        <td>
                            <h4>
                                {/* <ThemeProvider> */}
                                    <FormGroup className="steps">
                                        <FormControlLabel sx={{fontFamily: 'monarcha'}} control={<Checkbox size="large"/>} label={<Typography className="steps">{steps}</Typography>}/>
                                    </FormGroup>
                                {/* </ThemeProvider> */}
                            </h4>
                        </td>
                    </tr>
                )}
            </tbody>
        </div>
    )


    return (
        <div>
            {finish ? <CompleteRecipe/> : recipeWalk}
        </div>
    );
}

export default RecipeWalkthrough;