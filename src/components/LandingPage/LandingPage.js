import './LandingPage.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Header from '../Header/Header.js';
import Pea from '../../img/landingpage/pea.svg';


function LandingPage(props) {

    let navigate = useNavigate();
    const routeChange = () => {
        // let path = "/";
        let path = "/browse"
        navigate(path);
    }

    return (
        <div class="test">
            {/* <Header></Header> */}
            <div class="Landing">
                <div class="StewieIntro">
                    <h1>Hello! <br/> I'm Stewie</h1>
                </div>
                <div class="StewieText">
                    <div class="StewieContent">
                        {/* <img src={Pea} alt="Pea" class="Pea"/> */}
                        <h3>
                            The cooking helper that gives you the confidence and support to simply get in the kitchen and cook!
                        </h3>
                        <Button variant="contained" className="CookButton" onClick={routeChange}> Start Cooking </Button>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default LandingPage;