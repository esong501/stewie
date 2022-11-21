import { useState } from 'react';
import './Instruction.scss';
import Dictionary from '../Dictionary/Dictionary.js';
import { FormGroup, FormControlLabel, Checkbox, LinearProgress, Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import reactStringReplace from 'react-string-replace';


function Instruction(props) { // later props can be like props.dictitem and props description
    const [dict, setDict] = useState(false)

    const showDictionary = (
        <div class="IndivDict">
           <Dictionary word="dry"/>
        </div>
    );

    const dictionaryItem = (
        reactStringReplace(props.step, 'dry', (match, i) => ( // dry is hardcoded but we can remove this later
            <button class="DictButton" onClick={()=>setDict(!dict)}>dry</button>
        ))
    )


    return (
        <div class="IndivInstruction">
            <FormControlLabel
                label={<p class="InstructionText"> {dictionaryItem}</p>}
                control={
                    <Checkbox
                        size="large"
                        style ={{color: "#3B9F2B",}}
                        onChange={props.handleCheck}
                    />
                }
                className="CheckBoxInstruct"
            />
            {dict === false ? null : showDictionary}
        </div>
    );
}

export default Instruction;