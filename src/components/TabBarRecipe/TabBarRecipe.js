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
                <Tabs value = {tab} aria-label="" TabIndicatorProps={{style: {background:'#4848C1'}}} centered >
                    <Tab value = "preview" icon={<img src={Preview} width="25" height="25" alt="" />} className='tabIcon' label ="Preview" onClick={() => setTab("preview")}/>
                    <Tab value = "instruc" icon = {<img src={Cook} width="25" height="25" alt="" />} className='tabIcon' label="Steps" onClick={() => setTab("instruc")}/>
                    <Tab value = "notes" icon = {<img src={Notes} width="25" height="25" alt="" />} className='tabIcon' label="Notes" onClick={() => setTab("notes")}/>
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