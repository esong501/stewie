import React, { useState } from "react"
import {fetchData, parseData} from "../services/fetchData.mjs";

const RecipeCard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    function searchData() {
        // parse the search string
        const queryField = parseQuery(searchTerm);
        
        const api_url = 'https://api.edamam.com/api/recipes/v2/?app_id='+
                        process.env.REACT_APP_API_ID+'&app_key='+
                        process.env.REACT_APP_API_KEY+
                        '&type=public'+
                        '&field=ingredients'+
                        '&field=label'+
                        queryField;

        const queryResponseJSON = fetchData(api_url);
        console.log(queryResponseJSON);
    }

    function parseQuery(str) {
        var arr = str.split(",");
        var queryField = "";
        for (var i = 0; i < arr.length; i++) {
            queryField = queryField+"&q="+arr[i].trim();
        }
        return queryField;
    };

    return (
        <React.Fragment>
            <label>Search for recipes</label> 
            <input 
                id="input-query" 
                type="text"
                onChange={event => {
                    setSearchTerm(event.target.value)
                }}/>
            <hr/>
            <button onClick={searchData}>Search</button>
        </React.Fragment>
    );
}

export default RecipeCard;