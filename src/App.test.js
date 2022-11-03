/*
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

import fetchData from './services/fetchData.mjs'
// import env from "react-dotenv"

const app_id = process.env.EDAMAM_API_ID;
const app_key = process.env.EDAMAM_API_KEY;

console.log(app_id,app_key);
// Example: https://api.edamam.com/api/recipes/v2?type=user&q=chicken&app_id=9e19056d&app_key=4c57ddd569caa4e4fad0e7dc57751635
// Helper:  https://developer.edamam.com/edamam-docs-recipe-api#/
const api_url = 'https://api.edamam.com/api/recipes/v2/?app_id='+app_id+'&app_key='+app_key
    +'&type=public'
    +'&field=ingredients'
    +'&field=label'
    +'&q=chicken';


var reicpeData = fetchData(api_url).then((res) => {
                    console.log(res)
                    return res
                  }); 