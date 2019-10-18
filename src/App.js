import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRenderProps'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Toggle
        render={({on, toggle}) => (
        <div>
          {on && <h1>Show Me</h1>}
          <button onclick={toggle}>Show / Hide </button>
        </div>

        )}
      />
    </div>
  );
}

export default App;

//updated email
