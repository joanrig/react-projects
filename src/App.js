import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC'
import Portal from './Portal'
import Modal from './Modal'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Modal />
      <Toggle>
        {({ on, toggle }) => (
        <>
          {on && <h1>Show Me</h1>}
          <button onClick={toggle}>Show / Hide </button>
          <Portal>
            {on && <h1>Hi I'm in a portal!</h1>}
          </Portal>

        </>
      )}
      </Toggle>



    </div>
  )

}

export default App;
