import { useState } from 'react';
import { Tabs, Tab} from '@mui/material';
import PreviewRecipe from '../PreviewRecipe/PreviewRecipe.js';
import NotesRecipe from '../NotesRecipe/NotesRecipe.js';
import CookRecipe from '../CookRecipe/CookRecipe.js';
import Preview from '../../img/preview.svg';
import Cook from '../../img/cook.svg';
import Notes from '../../img/notes.svg';
import './TabBarRecipe.scss'

function TabBarRecipe(props) {
    const [tab, setTab] = useState("preview");
    
    return (
        <div class="Tabs">
             <div class="TabBar">
                <Tabs aria-label="" centered indicatorColor='primary'>
                    <Tab icon={<img src={Preview} width="25" height="25" alt="" />} label ="Preview" onClick={() => setTab("preview")}/>
                    <Tab icon = {<img src={Cook} width="25" height="25" alt="" />} label="Cook" onClick={() => setTab("instruc")}/>
                    <Tab icon = {<img src={Notes} width="25" height="25" alt="" />} label="Notes" onClick={() => setTab("notes")}/>
                </Tabs>
            </div> 
            <div class="content">  {/* content changes depending on the tab */}
                {tab === "preview" && <PreviewRecipe recipe={props.recipe}></PreviewRecipe>}
                {tab === "instruc" && <CookRecipe instructions = {props.recipe.instructions}></CookRecipe>}
                {tab === "notes" && <NotesRecipe></NotesRecipe>}
            </div>
           
         </div>
    );
}

export default TabBarRecipe;