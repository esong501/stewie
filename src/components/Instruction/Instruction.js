import { useState } from 'react';
import './Instruction.scss';
import Dictionary from '../Dictionary/Dictionary.js';
import { FormGroup, FormControlLabel, Checkbox, LinearProgress, Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


function Instruction() { // later props can be like props.dictitem and props description
    const [dict, setDict] = useState(false)

    const showDictionary = (
        <div class="IndivDict">
           <Dictionary />
        </div>
    );


    return (
        <div class="IndivInstruction">
            <FormControlLabel
                label={<p class="InstructionText"><button class="DictButton" onClick={()=>setDict(!dict)}>cook</button> something</p>}
                control={
                    <Checkbox
                        size="large"
                        style ={{color: "#3B9F2B",}}
                    />
                }
            />
            {dict === false ? null : showDictionary}
        </div>
    );
}

export default Instruction;