/*
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/


import {fetchData, parseData} from './services/FetchData.mjs'
import { selectData, insertData, updateData } from './services/FirebaseModule.js'
import {labels64, instructions} from './recipes/chicken_recipe_5.js'

const app_id = "9e19056d";
const app_key = "4c57ddd569caa4e4fad0e7dc57751635";

console.log(app_id,app_key);
// Example: https://api.edamam.com/api/recipes/v2?type=user&q=chicken&app_id=9e19056d&app_key=4c57ddd569caa4e4fad0e7dc57751635
// Helper:  https://developer.edamam.com/edamam-docs-recipe-api#/
const api_url = 'https://api.edamam.com/api/recipes/v2/?app_id='+app_id+'&app_key='+app_key
    +'&type=public'
    +'&field=tags'
    +'&field=cuisineType'
    +'&field=mealType'
    +'&field=dishType'
    +'&field=url'
    +'&field=instructions'
    +'&field=ingredientLines'
    +'&field=label'
    +'&field=image'
    +'&q=chicken';

  console.log(api_url);
var recipeData = await fetchData(api_url)
.then((res) => {  
  return res
}); 



var recipe_5 = [];
for (var i = 0; i < 5; i++) {
  recipeData.hits[i].recipe.image = labels64[i];
  recipeData.hits[i].recipe["instructions"] = instructions[i];
  recipe_5.push(recipeData.hits[i].recipe)
}

console.log(recipe_5);
insertData("recipes_5", recipe_5);