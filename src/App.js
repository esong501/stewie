// import logo from './img/logo.svg';
// import './App.css';
import { db } from './services/Firebase.js'
import { useEffect, useState, useMemo} from 'react';
import { onValue, ref, get, child, getDatabase } from 'firebase/database';
import React from 'react';
import * as ReactDOM from 'react-dom';
import Recipe from './components/Recipe.js';
import ExpandRecipe from './components/ExpandRecipe/ExpandRecipe.js';
import RecipeWalkthrough from './components/RecipeWalkthrough/RecipeWalkthrough.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import { useRef } from 'react';

const RecipeGrid = ({recipes}) => (
  <>
    {recipes && recipes.map((singleRecipe) => {
        const uri = encodeURIComponent(singleRecipe.label);
        return (
            <Recipe key={singleRecipe.label} recipe={singleRecipe} uri={uri}/>
        )
    })}
</>
);

export default function App() {
    // Testing, remove later
    const [recipes, setRecipes] = useState([]);
    // setRecipes((oldArray)  => [...oldArray, recipe]); // spread out the old array, and add the new recipe

    // async function getRecipes() {
    //   await get(child(dbRef,'recipes_5'))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       setRecipes(snapshot.val().recipes_5.value); // Add each recipe to the recipes array
    //     }
    //   });
    // }

    // useEffect(() => {
    //     onValue(ref(db), snapshot => {
    //       const data = snapshot.val().recipes_5.value; // Data is the recipe
    //       console.log(data);
    //       if (data !== null) {
    //         setRecipes(data); // Add each recipe to the recipes array
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

    // set empty state
    // onclick change state to be sepcific recipe
    // pass into props for expanded recipe
    return (
      <div>
      <Header /> 
      <>{recipes && (<Router>
            {/* <Header /> */}
            <div className = 'pagehead' > Recipes </div>
            <div className = 'maindiv' >
            <div className = 'row' >
              <Routes >
                <Route path="/" element={<RecipeGrid recipes={recipes} />}/>
                  {recipes && recipes.map((singleRecipe) => {
                    const uri = singleRecipe.label;
                    console.log("APP: "+uri);
                    return (
                        <Route path = {uri} element={ <ExpandRecipe recipe={singleRecipe}/> }/>
                    )
                  })}
              </Routes> 
          </div>  
          </div> 
        </Router>)
      }</>
      </div>)
    }
    


    ReactDOM.render( < App /> , document.getElementById('root'));