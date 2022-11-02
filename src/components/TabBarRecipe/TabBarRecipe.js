import { useState } from 'react';
import { Tabs, Tab} from '@mui/material';
import PreviewRecipe from '../PreviewRecipe/PreviewRecipe.js';
import NotesRecipe from '../NotesRecipe/NotesRecipe.js';
import CookRecipe from '../CookRecipe/CookRecipe.js';

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
//   }

function TabPanel(props) {
    return (
        <div
          role="tabpanel"
          hidden={props.value !== props.index}
          id={`simple-tabpanel-${props.index}`}
          aria-labelledby={`simple-tab-${props.index}`}
        >
          {props.value === props.index && (
            <PreviewRecipe recipe={props.recipe}></PreviewRecipe>
          )}
        </div>
      );
}

function TabBarRecipe(props) {
    const [value, setValue] = useState(0);
    
    return (
        <div>
            <div>
            {console.log(value)}
                {console.log(props)}
                <div class="content">  {/* content changes depending on the tab */}
                    <TabPanel index={0}  value={value} recipe = {props.recipe}>
                        <CookRecipe instructions = {props.recipe.instructions}></CookRecipe>
                    </TabPanel>
                    <TabPanel index={1} value={value}>
                        <PreviewRecipe recipe={props.recipe}></PreviewRecipe>
                    </TabPanel>
                    <TabPanel index={2} value={value}>
                        <NotesRecipe></NotesRecipe>
                    </TabPanel>
                </div>
                <Tabs aria-label="basic tabs example" centered>
                    {/* <Tab label="Preview" onClick={setValue(0)} />
                    <Tab label="Cook" onClick={setValue(1)}/>
                    <Tab label="Notes" onClick={setValue(2)}/> */}
                    <Tab label="Preview" />
                    <Tab label="Cook" />
                    <Tab label="Notes" />
                </Tabs>
            </div>
           
        </div>
    );
}

export default TabBarRecipe;