import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import bchick from '../../img/newbake.png';

import './CompleteRecipe.scss';

function CompleteRecipe() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/recipe'
        // navigate(path, {state:{image:{bchick}, label: 'hi', desc: 'hellohello'}});
        navigate(path);
    }

    return (
        <div className="CongratsPage">
           <h1>Congrats!</h1>
           <Button variant="contained" className="ReturnButton" onClick={routeChange}>Return To Home</Button>
        </div> 
    );
}

export default CompleteRecipe;