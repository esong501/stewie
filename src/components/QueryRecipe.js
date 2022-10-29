import React from "react"
import { Panel } from "rsuite";

export default function RecipeCard(props) {
    return(
    <div className='query-box'>
        <label>Search for recipes</label> <input id="input-query" type="text"/>
        <hr/>
            <button id="search-button">SEARCH</button>
    </div>
    );
};