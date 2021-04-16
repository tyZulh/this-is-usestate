import React from 'react';

import Header from './components/Header';
import RandomBeer from './components/RandomBeer';

import './App.css';

function App() {
  return (
    <main className="App flex flex-wrap justify-center">
      <Header />
      <RandomBeer />
    </main>
  );
}

export default App;
