// import logo from './img/logo.svg';
// import './App.css';
import { db } from './firebase.js'
import { useEffect, useState } from 'react';
import { onValue, set, ref } from 'firebase/database';
import React from 'react';
import * as ReactDOM from 'react-dom';
import Recipe from './components/Recipe.js';
import ExpandRecipe from './components/ExpandRecipe/ExpandRecipe.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




  //read


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       
  //     </header>

function App() {
  // Testing, remove later
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  // setRecipes((oldArray)  => [...oldArray, recipe]);
  useEffect(() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((recipe) => {
          setRecipes(()  => [recipe]);
        });
      }
    })
  }, []);
  return (  
    <div>
      {/* <Recipe name="Baked Chicken" tbn={tbn} desc="6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on
        1/2 teaspoon coarse salt
        1/2 teaspoon Mrs. Dash seasoning
        1/4 teaspoon freshly ground black pepper
        "/> */}
      {/* <h1>Instructions: {recipe.instructions[0]}</h1> */}

      <div>
        {recipes.map((recipe) => ( // Map each recipe and then print out ingredients
          // <Recipe tbn={recipe.image} name={recipe.label} desc={recipe.instructions[1]}></Recipe> // this is an issue where the array has to be init
          // <Recipe recipe={recipe}></Recipe> 
          <ExpandRecipe recipe={recipe}></ExpandRecipe>
          ))}
      </div>

      {/* <Recipe name="hi" desc="blah blah" /> */}
      {/* <Recipe name="hi" desc="blah blah" /> */}
      {/* <Recipe name={recipes.instructions} desc={recipes.instructions}></Recipe> */}
      {/* <ExpandRecipe /> */}
      {/* <Recipe />
      <Recipe />
      <Recipe /> */}
      {/* <rcolumn /> */}
      
    </div>
  );

  
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;