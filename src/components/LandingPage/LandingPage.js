import './LandingPage.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function LandingPage() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/browse"
        navigate(path);
    }

    return (
        <div class="test">
            <div class="Landing">
                <div class="StewieIntro">
                    <h1>Hello! <br/> I'm Stewie</h1>
                </div>
                <div class="StewieText">
                    <div class="StewieContent">
                        <h3>
                            The cooking helper that gives you the confidence and support to simply get in the kitchen and cook so that you can relax and eat some good food.
                        </h3>
                        <Button variant="contained" className="CookButton" onClick={routeChange}> Start Cooking </Button>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default LandingPage;