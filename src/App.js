import logo from './logo.svg';
import './App.css';
import { db } from './firebase';
import { useEffect, useState } from 'react';
import { onValue, set, ref } from 'firebase/database';
import React from 'react';
import { Panel, PanelGroup, Placeholder } from 'rsuite';
import * as ReactDOM from 'react-dom';

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

class Recipe extends React.Component {
  render() {
    return (
      <div className='Recipe-panel'>
        <Panel header={this.props.name} bordered>
          <div class="grid-container">
            <div class="grid-child 0">
              <img src={this.props.tbn} width={100} height={100} alt="tbn" />
            </div>
            <div class="grid-child 1">
              <div className='Recipe-desc'>
                <p>{this.props.desc}</p>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    );
  }
}

function App() {
  return (  
    <div>
      <Recipe name="Title Test" tbn={logo} desc="Description Test.
      The purpose of this string is to make sure that recipes will show up properly,
      complete with title, thumbnail, and description."/>
      <Recipe />
      <Recipe />
    </div>
  );

  
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;