import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Panel, PanelGroup, Placeholder } from 'rsuite';
import * as ReactDOM from 'react-dom';

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

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
