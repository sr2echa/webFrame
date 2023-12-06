import React, { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { type } from '@tauri-apps/api/os';
import './App.css';
import UrlBar from './components/UrlBar';
import logo from './assets/logo.png';

const App: React.FC = () => {
  const [showUrlBar, setShowUrlBar] = useState(false);
  const [osType, setOsType] = useState('');

  useEffect(() => {
    type().then(setOsType); // Get the OS type

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((osType === 'Darwin' ? event.metaKey : event.altKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setShowUrlBar(true);
      }
      if (event.key === 'Escape') {
        setShowUrlBar(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [osType]);

  const navigateToUrl = (url: string) => {
    invoke('navigate_to', { url });
    setShowUrlBar(false);
  };

  return (
    <>
      <div data-tauri-drag-region className="drag-region"></div>
      {showUrlBar && (
        <div className="url-bar-overlay">
          <UrlBar onNavigate={navigateToUrl} />
        </div>
      )}
      <div className={`App ${showUrlBar ? 'App-blur' : ''}`}>
        <div className="content">
          <img src={logo} className="logo" alt="logo" />
          <div className="shortcut-hints">
            <div className="shortcut">Go to Website <span className="key">Alt + K</span></div>
            <div className="shortcut">Close Webframe <span className="key">{osType === 'Darwin' ? '⌘ + W' : 'Alt + F4'}</span></div>
            {/* <div className="shortcut">Navigate Back <span className="key">Ctrl + Shift + [</span></div>
            <div className="shortcut">Navigate Forward <span className="key">Ctrl + Shift + ]</span></div> */} {/* TODO: Not yet implemented */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
