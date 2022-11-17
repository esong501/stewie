// import logo from './img/logo.svg';
// import './App.css';
import { db } from './services/Firebase.js'
import { useEffect, useState } from 'react';
import { onValue, ref} from 'firebase/database';
import React from 'react';
import * as ReactDOM from 'react-dom';
import Recipe from './components/Recipe.js';
import ExpandRecipe from './components/ExpandRecipe/ExpandRecipe.js';
import RecipeWalkthrough from './components/RecipeWalkthrough/RecipeWalkthrough.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  // Testing, remove later
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // setRecipes((oldArray)  => [...oldArray, recipe]); // spread out the old array, and add the new recipe

  useEffect(() => {
    const recipeRef = ref(db);
    onValue(recipeRef, (snapshot) => {
      const data = snapshot.val(); // Data is the recipe
      console.log(data);
      if (data !== null) {
        Object.values(data).map((recipe) => {
          setRecipes((oldArray) => [recipe]); // Add each recipe to the recipes array
        });
      }
    })
  }, []);

  return (  
    <Router>
      <div>
        {/* {console.log(recipes)} */}
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
    </Router>
  );

  
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;