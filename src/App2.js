import React from 'react';
import logo from './logo.svg';
import './App.css';
import Time from "./Time.js"
import Check from "./Check.js"
import taskData from "./TasksData"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>First ToDo List</h1>
        <Check />
        <Check />
      <Time />
      </header>
    </div>
  );
}

export default App;
