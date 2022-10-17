import logo from './logo.svg';
import './App.css';
import { db } from './firebase';
import { useEffect, useState } from 'react';
import { onValue, set, ref } from 'firebase/database';

function App() {
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
    </div>
  );
}

export default App;
