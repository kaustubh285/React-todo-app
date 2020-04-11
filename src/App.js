import React from 'react';
import logo from './logo.svg';
import './check.css';
import Time from "./Time.js"
import Check from "./Check.js"

function App() {

  const date = new Date()
  return (
    <div className="">
      <header className="todo-list">
        <h1>First ToDo List - {date.getDate()}th April</h1>
        <h4 className="styleb"> Blue  -  Less urgent</h4>
        <h4 className="styler"> Red  -  More urgent</h4>
      </header>
      <div className="todo-list">
        <Check details={{task:"Start learning react"}}/>
        <Check details={{task:"Make a todo list using react", endby:"tomorrow"}}/>
        <Check details={{task:"Apply for companies", endby:"today"}}/>
      </div>
    </div>
  );
}

export default App;
