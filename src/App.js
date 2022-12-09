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
  
  useEffect(() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val(); // Data is the recipe
      if (data !== null) {
        setRecipes([Object.values(data.recipes_5.value)[1]]);
      }
    })
  }, []);

  return (  
    <Router>
      <div>
        <Header/>
        {console.log(recipes)}
          {recipes.map((recipe) => ( // Map each recipe and then print out ingredients
            <Routes >
            <Route path="/" element={<LandingPage />}/>
            <Route path="/browse" element={<Recipe recipe={recipe}/>}/>
            {/* <Route path="/recipedetails" element={<ExpandRecipe recipe={recipe}/>} /> */}
              {recipes && recipes.map((singleRecipe) => {
                const uri = singleRecipe.label;
                console.log("APP: "+uri);
                return (
                    <Route path = {uri} element={ <ExpandRecipe recipe={singleRecipe}/> }/>
                )
              })}
          </Routes> 
          ))}
        </div>
      </Router>

      
  );

  
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;