import React, { useState } from "react"
import fetchData from "../services/fetchData.mjs";

const RecipeCard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    function searchData(props) {
        // parse the search string
        console.log("SEARCHING FOR QUERY: ", searchTerm);
        const queryField = parseQuery(searchTerm);
        console.log(queryField);
    }

    function parseQuery(str) {
        var arr = str.split(",");
        var queryField = "";
        for (var i = 0; i < arr.length; i++) {
            queryField = queryField+"&="+arr[i];
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
            <hr/>
            {}
        </React.Fragment>
    );
}

export default RecipeCard;