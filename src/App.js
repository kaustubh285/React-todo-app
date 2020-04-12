import React from 'react';
import './check.css';
import Check from "./Check.js"
import taskData from "./TasksData"

function App() {
  const taskDataList = taskData.map(TaskAtHand =>{
    return(
      <Check task_id = {TaskAtHand.task_id} task={TaskAtHand.task} endby={TaskAtHand.endby} />
    )
  }
  )
  const date = new Date()
  return (
    <div className="">
      <header className="todo-list">
        <h1>First ToDo List - {date.getDate()}th April</h1>
        <h4 className="styleb"> Blue  -  Less urgent</h4>
        <h4 className="styler"> Red  -  More urgent</h4>
      </header>
      <div className="todo-list">
        {taskDataList}
      </div>
    </div>
  );
}

export default App;