import { useState } from 'react';
import './Instruction.scss';
import Dictionary from '../Dictionary/Dictionary.js';
import { FormGroup, FormControlLabel, Checkbox, LinearProgress, Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import reactStringReplace from 'react-string-replace';



function Instruction(props) { // later props can be like props.dictitem and props description
    const termBank = new Map([
        ["dry", "pat dry with paper towel"],
        ["al dente", "pasta is cooked to just firm as opposed to a softer texture"],
        ["braise", "cook food first by browning and then by gently simmering in a small amount of liquid in a covered pan until very tender"],
        ["broil", "to cook directly over or under high heat, usually in an oven"],
        ["butterfly", "to cut a piece of meat through the middle, without cutting completely in half, and then to spread it out so that it resembles a butterfly"],
        ["chop", "to cut food smaller but not perfectly even (1/4-1/3 inch pieces)"],
        ["simmer", "keep stove on lowest heat to keep liquids below boiling point"],
        ["dice", "to cut food into very small (1/8 - 1/4 inch) cubes"]
    ]);


    const [dict, setDict] = useState(false);
    const [foundTerm, setTerm] = useState("");


    const showDictionary = (
        <div class="IndivDict">
           <Dictionary word = {foundTerm} def = {termBank.get(foundTerm)}/>
        </div>
    );

    function find() {
        const step = props.step.toLowerCase();
        for (const key of termBank.keys()) {
            if (step.includes(" " + key + " ") || step.includes(" " + key )){
                if (foundTerm === "") {
                    setTerm(key)
                }
                return key;
            }
        }
    }

    const dictionaryItem = (
        reactStringReplace(props.step, find(), (match, i) => ( // dry is hardcoded but we can remove this later
            <button class="DictButton" onClick={()=>setDict(!dict)}>{match}</button>
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