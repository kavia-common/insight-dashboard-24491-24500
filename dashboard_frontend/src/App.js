import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import FigmaFrame1 from './pages/FigmaFrame1';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      {/* Minimal top nav for discovery */}
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <nav style={{ marginTop: 16 }}>
          <Link className="App-link" to="/">Home</Link>{' | '}
          <Link className="App-link" to="/figma/frame-1">Figma Frame 1</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: 24 }}>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          }
        />
        <Route path="/figma/frame-1" element={<FigmaFrame1 />} />
      </Routes>
    </div>
  );
}

export default App;
