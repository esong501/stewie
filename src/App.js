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
        <link rel="stylesheet" href="https://use.typekit.net/sur7rep.css"></link>
        <Panel header={this.props.name} bordered>
          <div className='Recipe-desc'>
            <p>{this.props.desc}</p>
          </div>
        </Panel>
      </div>
    );
  }
}

function App() {
  return (  
    <div>
      <Recipe name="chicken" desc="a chicken dish
      wow how amazing, I truly can't believe how great this chicken dish is
      I wish I had someone to share it with
      sadly all my friends are home and now I have no one to share it with"/>
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
