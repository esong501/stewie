import logo from './logo.svg';
// import './App.css';
// import { db } from './firebase';
// import { useEffect, useState } from 'react';
// import { onValue, set, ref } from 'firebase/database';
import React from 'react';
import * as ReactDOM from 'react-dom';
import Recipe from './components/Recipe.js';
import tbn from './img/bakedchicken.jpg'

  /*
  // Testing, remove later
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);

  //read
  useEffect(() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((recipe) => {
          setRecipes((oldArray)  => [...oldArray, recipe]);
        });
      }
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {recipes.map((recipe) => ( // Map each recipe and then print out ingredients
            <h1>Ingredients: {JSON.stringify(recipe.name.ingredients)}</h1>
          ))}
        </div>
      </header>
*/

function App() {
  return (  
    <div>
      {/* <Recipe name="Baked Chicken" tbn={tbn} desc="6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on
        1/2 teaspoon coarse salt
        1/2 teaspoon Mrs. Dash seasoning
        1/4 teaspoon freshly ground black pepper
        "/> */}
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      {/* <rcolumn /> */}
    </div>
  );

  
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;