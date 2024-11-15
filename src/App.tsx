import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controller from './Controller/AppController';
import Map from './Components/VisualRelated/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Map />
        <Controller />
      </header>
    </div>
  );
}

export default App;
