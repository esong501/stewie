import logo from './logo.svg';
import './App.css';
import React from 'react';

// Asynchronous functions are required for API calls
// but, it's not entirely clear how to obtain the result outside
// of the log.

// class api_test extends React.Component {
//   async function () {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     const data = await response.json() //extract JSON from the http response
//   }
// }

function App() {
  return (
    <div className="App">
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
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"} className="ditto" alt="ditto" />
      </header>
    </div>
  );
}

export default App;
