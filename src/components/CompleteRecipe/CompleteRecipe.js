import { useNavigate } from 'react-router-dom';
import { Button, Modal, Box, Typography } from '@mui/material';
import { Route, Routes, useState , useEffect, useContext } from "react";
import congratsGIF from '../../img/celebrate.gif';

import bchick from '../../img/newbake.png';

import './CompleteRecipe.scss';

function CompleteRecipe() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/'
        // navigate(path, {state:{image:{bchick}, label: 'hi', desc: 'hellohello'}});
        navigate(path);
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="CongratsPage">
           {/* <h1>Congrats!</h1> */}
           <Button variant="contained" className='yesButton' onClick={handleOpen}>Yes!</Button>
           <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='congratsModal'>
                    <Typography id="modal-modal-title" className='congratsTitle'>
                        Congratulations!
                    </Typography>
                    <Typography id="modal-modal-description" className='congratsMessage'>
                        <h3>You just cooked a meal!</h3>
                        <img src={congratsGIF} alt="congratsGIF"/>
                    </Typography>
                    <Button variant="contained" className="ReturnButton" onClick={routeChange}>Return To Home</Button>
                </Box>
            </Modal>
           
        </div> 
    );
}

export default CompleteRecipe;