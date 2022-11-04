import { useState } from 'react';
import { Tabs, Tab} from '@mui/material';
import PreviewRecipe from '../PreviewRecipe/PreviewRecipe.js';
import NotesRecipe from '../NotesRecipe/NotesRecipe.js';
import CookRecipe from '../CookRecipe/CookRecipe.js';
import './TabBarRecipe.scss'

function TabBarRecipe(props) {
    const [tab, setTab] = useState("preview");
    
    return (
        <div>
            <div>
            {console.log(tab)}
                {console.log(props)}
                <div class="content">  {/* content changes depending on the tab */}
                    {tab === "preview" && <PreviewRecipe recipe={props.recipe}></PreviewRecipe>}
                    {tab === "instruc" && <CookRecipe instructions = {props.recipe.instructions}></CookRecipe>}
                    {tab === "notes" && <NotesRecipe></NotesRecipe>}
                </div>
                <Tabs aria-label="basic tabs example" centered>
                    <Tab label="Preview" onClick={() => setTab("preview")}/>
                    <Tab label="Cook" onClick={() => setTab("instruc")}/>
                    <Tab label="Notes" onClick={() => setTab("notes")}/>
                </Tabs>
            </div>
           
        </div>
    );
}

export default TabBarRecipe;