import React from "react"

const RecipeCard = (props) => {
    return (
        <div className='query-box'>
            <label>Search for recipes</label> 
            <input id="input-query" type="text"/>
            <hr/>
                {/* <searchData inputStr={document.getElementById("input-query").value}/> */}
        </div>
    );
}
export default RecipeCard;

// function parseQuery(str) {
//     var arr = str.split(",");
//     var queryField = "";
//     for (var i = 0; i < arr.length; i++) {
//         queryField = queryField+"&="+arr[i];
//     }
//     return queryField;
// };

// function searchData(inputStr) {
//     // parse the search string
//     console.log("SEARCHING FOR QUERY: ", inputStr.value);
//     //const queryField = parseQuery(inputStr);
//     //console.log(queryField);
//     return null;
// }