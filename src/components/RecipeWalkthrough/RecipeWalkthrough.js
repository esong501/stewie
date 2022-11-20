import { Route, Routes, useState , useEffect} from "react";
import CompleteRecipe from "../CompleteRecipe/CompleteRecipe.js";
import './RecipeWalkthrough.scss'
import PropTypes from 'prop-types';
import { FormGroup, FormControlLabel, Checkbox, LinearProgress, Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Instruction from "../Instruction/Instruction.js";

// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//       primary: "#3B9F2B",
//     },
//   });

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
LinearProgressWithLabel.propTypes = {
/**
 * The value of the progress indicator for the determinate and buffer variants.
 * Value between 0 and 100.
 */
value: PropTypes.number.isRequired,
};



function RecipeWalkthrough(props) {
    const [finish, setFinish] = useState(false);
    const [checked, setChecked] = useState(Array(props.steps.length).fill(false));

    const handleClick = (index) => {
        setChecked(() => 
            checked[index] = !checked[index]
        );
    };

    const recipeWalk = (
        <div>
            <div className="WalkthruScrollElems">
                {/* {console.log(props.steps)}
                {console.log(checked)} */}
                
                <tbody>
                    {props.steps.map((steps, index) =>
                        <tr key={index}>
                            <td>
                                <h4>
                                    <FormGroup className="steps">
                                        {console.log(steps)}
                                        {console.log(index)} 
                                        <FormControlLabel sx={{fontFamily: 'monarcha'}} control={<Checkbox size="large" style ={{color: "#3B9F2B",}} onChange={() => checked[index] = !checked[index]}/>} label={<Typography className="steps">{steps}</Typography>}/>
                                    </FormGroup>
                                </h4>
                            </td>
                        </tr>
                    )}
                    <Instruction />
                </tbody>
            </div>
        </div>
    )


    return (
        <div>
            {finish ? <CompleteRecipe/> : recipeWalk}
        </div>
    );
}

export default RecipeWalkthrough;