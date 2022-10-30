import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Recipe from './components/Recipe.js'
import ExpandRecipe from './components/ExpandRecipe/ExpandRecipe.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipe" element={<Recipe />}/>
        <Route path="/recipedetail" element={<ExpandRecipe/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);