import React from "react"
import { Panel } from "rsuite";

// const componentMapping = {
//     RecipeTitle,
//     RecipeImg,
//     RecipeDescription
//   };

export default function RecipeCard(props) {
    return(
    <div className='Recipe-panel'>
        <Panel header={props.name} bordered>
        <div class="grid-container">
            <div class="grid-child-0">
                <img src={props.tbn} width={100} height={100} alt="tbn" />
            </div>
            <div class="grid-child-1">
                <div className='Recipe-desc'>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
        </Panel>
    </div>
    );
};