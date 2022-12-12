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
  
  // setRecipes((oldArray)  => [...oldArray, recipe]); // spread out the old array, and add the new recipe

  // useEffect(() => {
  //   onValue(ref(db), snapshot => {
  //     const data = snapshot.val(); // Data is the recipe
  //     // console.log(data.recipes_5.value)
  //     if (data !== null) {
  //       // Object.values(data.recipes_5.value).map((recipe) => {
  //       //   setRecipes((oldArray)  => [recipe]); // Add each recipe to the recipes array
  //       // });
  //       // setRecipes(Object.values(data.recipes_5.value))
  //     //   Object.values(data).map((recipe) => {
  //     //     setRecipes((oldArray)  => [recipe]); // Add each recipe to the recipes array
  //     //   });
  //       setRecipes([Object.values(data)]);
  //     }
  //     // {console.log(recipes)}
  //   })
  // }, []);
  useEffect(() => {
    async function getData() {
        const dbRef = ref(db, "recipes");
        await get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val().value);
                // setRecipes(snapshot.val().value); // Add each recipe to the recipes array
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
          {/* {recipes.map((recipe) => ( // Map each recipe and then print out ingredients <_ CURRENTLY BROKEN */}
            <Routes>
              {/* <Route path="/landing" element={<LandingPage/>}/> */}
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/browse" element={<Recipe recipes={recipes}/>}/>
              {/* <Route path="/recipedetails" element={<ExpandRecipe recipe={recipe}/>} /> */}
              {recipes && recipes.map((singleRecipe) => {
                    const uri = singleRecipe.label;
                    //console.log("APP: "+uri);
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