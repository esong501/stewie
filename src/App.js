// import logo from './img/logo.svg';
// import './App.css';
import { db } from './services/Firebase.js'
import { useEffect, useState } from 'react';
import { onValue, ref, get, child, getDatabase } from 'firebase/database';
import React from 'react';
import * as ReactDOM from 'react-dom';
import Recipe from './components/Recipe.js';
import ExpandRecipe from './components/ExpandRecipe/ExpandRecipe.js';
import RecipeWalkthrough from './components/RecipeWalkthrough/RecipeWalkthrough.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

function App() {
  // Testing, remove later
  const [recipes, setRecipes] = useState([]);
  const dbRef = ref(getDatabase());
  // setRecipes((oldArray)  => [...oldArray, recipe]); // spread out the old array, and add the new recipe

  async function getRecipes() {
    await get(child(dbRef,'recipes_5'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setRecipes(snapshot.val().recipes_5.value); // Add each recipe to the recipes array
      }
    });
  }

  useEffect(() => {
    //   onValue(ref(db), snapshot => {
    //     const data = snapshot.val().recipes_5.value; // Data is the recipe
    //     console.log(data);
    //     if (data !== null) {
    //       setRecipes(data); // Add each recipe to the recipes array
    //   }
    // })
    getRecipes();
  }, []);

  return (
    <Router>
      <Header/>
      <div className='pagehead'>Recipes</div>
        <div className='maindiv'>
          <div className='row'>
            {recipes.map((singleRecipe) => (
              <Routes>
                {console.log(singleRecipe)}
                  <Route path="/" element={<Recipe recipe = {singleRecipe}/>}/>
                  <Route path={"/recipedetails/"+singleRecipe.recipe.label} element={<ExpandRecipe recipe={singleRecipe}/>}/>
                </Routes>
            ))}
          </div> 
        </div>
    </Router>
  );
}
  
ReactDOM.render(<App />, document.getElementById('root'));

export default App;