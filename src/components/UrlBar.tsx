import React, { useState } from 'react';
import '../styles/UrlBar.css';

interface UrlBarProps {
  onNavigate: (url: string) => void;
}

const UrlBar: React.FC<UrlBarProps> = ({ onNavigate }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNavigate(inputValue.trim());
    setInputValue('');
  };

  return (
    <div className="url-bar">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="url-input"
          placeholder="Enter URL and press Enter"
          value={inputValue}
          onChange={handleInputChange}
          autoFocus
        />
      </form>
    </div>
  );
};

export default UrlBar;
