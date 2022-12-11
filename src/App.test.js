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
import {labels64, instructions} from './recipes/random_recipes_5.js'

const app_id = "9e19056d";
const app_key = "4c57ddd569caa4e4fad0e7dc57751635";

console.log(app_id,app_key);
// Example: https://api.edamam.com/api/recipes/v2?type=user&q=chicken&app_id=9e19056d&app_key=4c57ddd569caa4e4fad0e7dc57751635
// Helper:  https://developer.edamam.com/edamam-docs-recipe-api#/
const api_url = 'https://api.edamam.com/api/recipes/v2/?app_id='+app_id+'&app_key='+app_key
    +'&type=public'
    +'&q=meal';

//console.log(api_url);
var recipeData = await fetchData(api_url)
.then((res) => {  
  return res
}); 
//3 4 12 15 19

console.log(recipeData.hits[3].recipe.label+'\n\t'+recipeData.hits[3].recipe.image);
console.log(recipeData.hits[4].recipe.label+'\n\t'+recipeData.hits[4].recipe.image);
console.log(recipeData.hits[12].recipe.label+'\n\t'+recipeData.hits[12].recipe.image);
console.log(recipeData.hits[15].recipe.label+'\n\t'+recipeData.hits[15].recipe.image);
console.log(recipeData.hits[19].recipe.label+'\n\t'+recipeData.hits[19].recipe.image);

var indices = [3,4,12,15,19]
var recipe_5 = [];
for (var i = 0; i < 5; i++) {
  recipeData.hits[indices[i]].recipe.image = labels64[i];
  recipeData.hits[indices[i]].recipe["instructions"] = instructions[i];
  // console.log(recipeData.hits[i].recipe.label);
  // console.log(recipeData.hits[i].recipe.url);
  recipe_5.push(recipeData.hits[indices[i]].recipe)
}


insertData("recipes_5", JSON.stringify(recipe_5));
// const r = selectData("recipes_5").then((res) => {  
//   return res
// })
// console.log(JSON.parse(r));