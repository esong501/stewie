// import logo from './img/logo.svg';
// import './App.css';
import { db } from './firebase.js'
import { useEffect, useState } from 'react';
import { onValue, ref, get } from 'firebase/database';
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
    async function getData() {
        const dbRef = ref(db, "recipesTEST");
        await get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val().value);
                setRecipes(snapshot.val().value); // Add each recipe to the recipes array
            }
        })
    }
    getData();
}, []);

  return (  
    <Router>
      <div>
        <Header/>
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/browse" element={<Recipe recipes={recipes}/>}/>
              {recipes && recipes.map((singleRecipe) => {
                    const uri = singleRecipe.label;
                    return (
                        <Route path = {uri} element={ <ExpandRecipe recipe={singleRecipe}/> }/>
                    )
                  })}
            </Routes>
        </div>
      </Router>
  );

  
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;