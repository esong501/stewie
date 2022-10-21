import React from 'react';
import * as ReactDOM from 'react-dom';

import logo from './icons/logo.svg';
import RecipeCard from './components/RecipeCard.js'
import fetchData from './services/fetchData.mjs'
import './App.css';

const app_id = '9e19056d';
const app_key = '4c57ddd569caa4e4fad0e7dc57751635';

// Example: https://api.edamam.com/api/recipes/v2?type=user&q=chicken&app_id=9e19056d&app_key=4c57ddd569caa4e4fad0e7dc57751635
// Helper:  https://developer.edamam.com/edamam-docs-recipe-api#/
const api_url = 'https://api.edamam.com/api/recipes/v2/?app_id='+app_id+'&app_key='+app_key
    +'&type=public'
    +'&field=ingredients'
    +'&field=label'
    +'&q=chicken';

var recipeData = fetchData(api_url).then((res) => {
  return res
}); 
console.log(recipeData)
const displayData = recipeData.map((data) => {
    console.log(data);
    return (
      <RecipeCard 
        name={data[0]}
        tbn={logo} 
        desc={data[1]}
      />)
    });


function writeTitle() {
  return (
    <h1>
      <link rel="stylesheet" href="https://use.typekit.net/sur7rep.css"></link>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </h1>
  )
}

// class Recipe extends React.Component {
//   render() {
//     return (
//       <div className='Recipe-panel'>
//         <Panel header={this.props.name} bordered>
//           <div class="grid-container">
//             <div class="grid-child 0">
//               <img src={this.props.tbn} width={100} height={100} alt="tbn" />
//             </div>
//             <div class="grid-child 1">
//               <div className='Recipe-desc'>
//                 <p>{this.props.desc}</p>
//               </div>
//             </div>
//           </div>
//         </Panel>
//       </div>
//     );
//   }
// }

function App() {
  return (  
    <div>
      {displayData}
      {/* <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </div>
  );
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);

export default App;
