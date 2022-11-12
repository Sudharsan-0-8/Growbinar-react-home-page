import React from 'react';
import './style.css';

import Home from './components/Home.js';
import Header from './components/Header.js';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}
