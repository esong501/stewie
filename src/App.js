// import logo from './img/logo.svg';
// import './App.css';
import { db } from './firebase.js'
import { useEffect, useState } from 'react';
import { onValue, ref, get, child, getDatabase } from 'firebase/database';
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
  
  // useEffect(() => {
  //   onValue(ref(db), snapshot => {
  //     const data = snapshot.val(); // Data is the recipe
  //     console.log(data);
  //     if (data !== null) {
  //       setRecipes([Object.values(data.recipes_5.value)[1]]);
  //     }
  //   })
  // }, []);

  useEffect(() => {
    async function getData() {
        const dbRef = ref(db, "recipes_5");
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
        {console.log(recipes)}
          {/* {recipes.map((recipe) => ( // Map each recipe and then print out ingredients */}
            <Routes >
            <Route path="/" element={<LandingPage />}/>
            {recipes => {
              <Route path="/browse" element={<Recipe recipe={recipes}/>}/>
            }}
            {/* What's broken is the recipe browse page, we need to find a way to display all the recipes maybe we need to pass in the array of recipes as a prop into recipe */}
            {recipes && recipes.map((singleRecipe) => {
                
                const uri = singleRecipe.label;
                console.log("APP: "+uri);
                return (
                    <Route path = {uri} element={ <ExpandRecipe recipe={singleRecipe}/> }/>
                )
              })}
          </Routes> 
           {/* ))} */}
        </div>
      </Router>

      
  );

  
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;