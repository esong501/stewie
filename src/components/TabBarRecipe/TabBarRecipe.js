import { useState } from 'react';
import { Button, Tabs, Tab} from '@mui/material';
import PreviewRecipe from '../PreviewRecipe/PreviewRecipe.js';
import NotesRecipe from '../NotesRecipe/NotesRecipe.js';
import CookRecipe from '../CookRecipe/CookRecipe.js';

function TabBarRecipe(props) {
    // const navigate = useNavigate();
    const [isCooking, setIsCooking] = useState(false);
    
    return (
        <div>
            <div>
                {console.log(props)}
                <div class="content">  {/* content changes depending on the tab */}
                    {/* <CookRecipe instructions = {props.recipe.instructions}></CookRecipe> */}
                    <PreviewRecipe recipe={props.recipe}></PreviewRecipe>
                    <NotesRecipe></NotesRecipe>
                </div>
                <Tabs aria-label="basic tabs example" centered>
                    <Tab label="Preview" />
                    <Tab label="Cook" />
                    <Tab label="Notes" />
                </Tabs>
            </div>
           
        </div>
    );
}

export default TabBarRecipe;