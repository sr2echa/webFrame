import React from 'react';
import './App.css';
import logo from './assets/logo.png'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="drag-region"></div>
      <div className="content">
        <img src={logo} alt="logo" className="logo" />
        <div className="shortcut-hints">
          <div className="shortcut">Go to Website <span className="key">Ctrl + K</span></div>
          <div className="shortcut">Close Webframe <span className="key">Alt + F4</span></div>
          <div className="shortcut">Navigate Back <span className="key">Ctrl + Shift + [</span></div>
          <div className="shortcut">Navigate Forward <span className="key">Ctrl + Shift + ]</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;
