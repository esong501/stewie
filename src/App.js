// import logo from './img/logo.svg';
// import './App.css';
import { db } from './firebase.js'
import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import React from 'react';
import * as ReactDOM from 'react-dom';
import Recipe from './components/Recipe.js';
import ExpandRecipe from './components/ExpandRecipe/ExpandRecipe.js';
// import RecipeWalkthrough from './components/RecipeWalkthrough/RecipeWalkthrough.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';


function App() {
  // Testing, remove later
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // setRecipes((oldArray)  => [...oldArray, recipe]); // spread out the old array, and add the new recipe

  useEffect(() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val(); // Data is the recipe
      // console.log(data.recipes_5.value)
      if (data !== null) {
        // Object.values(data.recipes_5.value).map((recipe) => {
        //   setRecipes((oldArray)  => [recipe]); // Add each recipe to the recipes array
        // });
        // setRecipes(Object.values(data.recipes_5.value))
      //   Object.values(data).map((recipe) => {
      //     setRecipes((oldArray)  => [recipe]); // Add each recipe to the recipes array
      //   });
        setRecipes([Object.values(data.recipes.value)[1]]);
      }
      // {console.log(recipes)}
    })
  }, []);

  return (  
    <Router>
      <div>
        <Header/>
        {console.log(recipes)}
          {recipes.map((recipe) => ( // Map each recipe and then print out ingredients
            // <h1>Instructions: {recipe.instructions[0]}</h1>
            // <Recipe tbn={recipe.image} name={recipe.label} desc={recipe.instructions[1]}></Recipe> // this is an issue where the array has to be init
            // <Recipe recipe={recipe}></Recipe> 
          // <ExpandRecipe recipe={recipe}></ExpandRecipe>
            <Routes>
              <Route path="/landing" element={<LandingPage/>}/>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/browse" element={<Recipe recipe={recipe}/>}/>
              <Route path="/recipedetails" element={<ExpandRecipe recipe={recipe}/>} />
            </Routes>
          ))}
          {/* {console.log(recipes)}
          {console.log(recipes[1])} */}
          {/* <Routes> */}
              {/* <Route path="/" element={<Recipe recipe={recipes}/>}/>
              <Route path="/recipedetails" element={<ExpandRecipe recipe={recipes}/>} /> */}
          {/* </Routes> */}
          
        {/* <Footer /> */}
      
        </div>
      </Router>
  );

  
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;