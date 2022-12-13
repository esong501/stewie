import { useState } from 'react';
import { Tabs, Tab} from '@mui/material';
import PreviewRecipe from '../PreviewRecipe/PreviewRecipe.js';
import NotesRecipe from '../NotesRecipe/NotesRecipe.js';
import CookRecipe from '../CookRecipe/CookRecipe.js';
// import Preview from '../../img/preview.svg';
import {ReactComponent as Preview} from '../../img/preview.svg'
import {ReactComponent as Cook} from '../../img/cook.svg';
import Notes from '../../img/notes.svg';
import './TabBarRecipe.scss'

function TabBarRecipe(props) {
    const [tab, setTab] = useState("preview");
    
    return (
        <div class="Tabs">
             <div class="TabBar">
                <Tabs value = {tab} aria-label="" TabIndicatorProps={{style: {background:'var(--blueberry)'}}} centered >
                    {tab === "preview" ? <Tab value = "preview" icon={<Preview style={{color:'var(--blueberry)'}}/>} className='tabIcon' label ="Preview" style={{color:'var(--blueberry)'}} onClick={() => setTab("preview")}/> : <Tab value = "preview" icon={<Preview style={{color:'var(--graypan)'}}/>} className='tabIcon' label ="Preview" onClick={() => setTab("preview")}/>}
                    {tab === "instruc" ? <Tab value = "instruc" icon = {<Cook style={{color:'var(--blueberry)'}}/>} className='tabIcon' label="Steps" style={{color:'var(--blueberry)'}} onClick={() => setTab("instruc")}/> : <Tab value = "instruc" icon = {<Cook style={{color:'var(--graypan)'}}/>} className='tabIcon' label="Steps" onClick={() => setTab("instruc")}/>}
                </Tabs>
            </div> 
            <div class="content">  {/* content changes depending on the tab */}
                {tab === "preview" && <PreviewRecipe recipe={props.recipe}></PreviewRecipe>}
                {tab === "instruc" && <CookRecipe instructions = {props.recipe.instructions}></CookRecipe>}
            </div>
           
         </div>
    );
}

export default TabBarRecipe;