import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle, Portal, Modal } from './Utilities'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Toggle>
        {({ on, toggle }) => (
          <>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>Still what's up this is Joan</h1>
            </Modal>
          </>

      )}
      </Toggle>



    </div>
  )

}

export default App;
