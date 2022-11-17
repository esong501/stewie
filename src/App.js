// import logo from './img/logo.svg';
// import './App.css';
import { db } from './services/Firebase.js'
import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import React from 'react';
import * as ReactDOM from 'react-dom';
import Recipe from './components/Recipe.js';
import ExpandRecipe from './components/ExpandRecipe/ExpandRecipe.js';
import RecipeWalkthrough from './components/RecipeWalkthrough/RecipeWalkthrough.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bchick from './img/newbake.png';
import Query from "./components/QueryRecipe.jsx"

//require('dotenv').config();
function App() {
  // Testing, remove later
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // setRecipes((oldArray)  => [...oldArray, recipe]); // spread out the old array, and add the new recipe

  useEffect(() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val(); // Data is the recipe
      if (data !== null) {
        Object.values(data).map((recipe) => {
          setRecipes((oldArray)  => [recipe]); // Add each recipe to the recipes array
        });
      }
    })
  }, []);

  return (  
    <div>
      {/* <Header /> */}
      {/* <Recipe name="Baked Chicken" tbn={bchick} desc="6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on
        1/2 teaspoon coarse salt
        1/2 teaspoon Mrs. Dash seasoning
        1/4 teaspoon freshly ground black pepper
        "/> */}
      {/* <Query /> */}
      <Recipe />
      {/* <ExpandRecipe /> */}
      {/* <Recipe />
      <Recipe />
      <Recipe /> */}
      {/* <rcolumn /> */}
    
      {/* <h1>Instructions: {recipe.instructions[0]}</h1> */}
      {/* <div>
        {console.log(recipes)}
          {recipes.map((recipe) => ( // Map each recipe and then print out ingredients
            // <h1>Instructions: {recipe.instructions[0]}</h1>
            // <Recipe tbn={recipe.image} name={recipe.label} desc={recipe.instructions[1]}></Recipe> // this is an issue where the array has to be init
            // <Recipe recipe={recipe}></Recipe> 
            // <ExpandRecipe recipe={recipe}></ExpandRecipe>
            <Routes>
              {console.log(recipe)}
              <Route path="/" element={<Recipe recipe={recipe}/>}/>
              <Route path="/recipedetails" element={<ExpandRecipe recipe={recipe}/>} />
            </Routes>
            ))}
          
        {/* <Footer /> */}
      
    </div>
  );
}

// function parseQuery(str) {
//   var arr = str.split(",");
//   var queryField = "";
//   for (var i = 0; i < arr.length; i++) {
//       queryField = queryField+"&="+arr[i];
//   }
//   return queryField;
// };

// function searchData(inputStr) {
//   // parse the search string
//   console.log("SEARCHING FOR QUERY: ", inputStr.value);
//   //const queryField = parseQuery(inputStr);
//   //console.log(queryField);
//   return null;
// }

ReactDOM.render(<App />, document.getElementById('root'));

export default App;