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
    {recipes && recipes.map((singleRecipe) => (
        <Recipe key={singleRecipe.label} recipe={singleRecipe}/>
    ))}
</>
);

export default function App() {
    // Testing, remove later
    const [recipes, setRecipes] = useState([]);
    const componentIsMounted = useRef(true);
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
        // each useEffect can return a cleanup function
        return () => {
            componentIsMounted.current = false;
        };
    }, []); // no extra deps => the cleanup function run this on component unmount

    useEffect(() => {
        async function getData() {
            const dbRef = ref(db, "recipes_5");
            await get(dbRef).then((snapshot) => {
                if (snapshot.exists() && componentIsMounted.current) {
                    console.log(snapshot.val().value);
                    setRecipes(snapshot.val().value); // Add each recipe to the recipes array
                }
            })
        }

        getData();
    }, []);

    
    

    return (
      <>{recipes && (<Router>
            <Header />
            <div className = 'pagehead' > Recipes </div>
            <div className = 'maindiv' >
            <div className = 'row' >
              <Routes >
                  {recipes && recipes.map((singleRecipe) => {
                      console.log("/recipedetails/" + encodeURIComponent(singleRecipe.label));
                      return (
                          <Route path = { "/recipedetails/" + encodeURIComponent(singleRecipe.label) }
                              element = {<ExpandRecipe key = { singleRecipe.label } recipe = { singleRecipe }/> }
                          />
                      )
                  })}
                  <Route path="/" element={<RecipeGrid recipes={recipes}/>}/>
              </Routes> 
          </div>  
          </div> 
        </Router>)
      }</>)
    }
    


    ReactDOM.render( < App /> , document.getElementById('root'));