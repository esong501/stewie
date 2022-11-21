import { Route, Routes, useState , useEffect, useContext } from "react";
import CompleteRecipe from "../CompleteRecipe/CompleteRecipe.js";
import Instruction from "../Instruction/Instruction.js";
import './RecipeWalkthrough.scss'
import PropTypes from 'prop-types';
import { FormGroup, FormControlLabel, Checkbox, LinearProgress, Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from '@mui/material';
import { ProgressContext } from './../ExpandRecipe/ExpandRecipe.js'
import { Close } from '@mui/icons-material/';



function RecipeWalkthrough(props) {
    const [finish, setFinish] = useState(false);
    const [checked, setChecked] = useState([]);
    const { progress, setProgress } = useContext(ProgressContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCheck = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        setProgress((updatedList.length/props.steps.length)*100);
        if (updatedList.length === props.steps.length){
            handleOpen();
        }
    };

    const recipeWalk = (
        <div>
            <div className="WalkthruScrollElems">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='finishModal'>
                        <div>
                            <Typography id="modal-modal-title" className='modalTitle'>
                                Finished Cooking?
                            </Typography>
                        </div>
                        <Button variant="text" class='exitModal' startIcon={<Close />} onClick={handleClose}/>
                        <div className="exitButtons">
                            <CompleteRecipe/>
                            <Button variant="text" class='noButton' onClick={handleClose}>No, Keep Cooking</Button>
                        </div>
                    </Box>
                </Modal>
                <tbody>
                    {props.steps.map((steps, index) =>
                        <tr key={index}>
                            <td>
                                <h4>
                                
                                    <FormGroup className="steps">
                                        {/* <FormControlLabel sx={{fontFamily: 'monarcha'}} control={<Checkbox size="large" style ={{color: "#3B9F2B",}} onChange={handleCheck}/>} label={<Typography className="steps">{steps}</Typography>}/> */}
                                        <Instruction step = {steps} handleCheck = {handleCheck}/>
                                    </FormGroup>
                                </h4>
                            </td>
                        </tr>
                    )}
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