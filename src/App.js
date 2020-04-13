import React from 'react';
import './check.css';
import Check from "./Check.js"
import taskData from "./TasksData"



class App extends React.Component{

  constructor(){
    super()
    this.state={
      todoData :taskData
    }
    this.completeChange = this.completeChange.bind(this)
  }

  completeChange(id){
    this.setState(prevState=>{
      const newData = prevState.todoData.map(todos =>{
        if(todos.id === id){
          
          return{
            ...todos,
            complete:!todos.complete
          }
        }
        return todos
      })
      return{
        todoData:newData
      } 
    })
  }

  render(){
    
    const taskDataList = this.state.todoData.map(todoThing =>{
    return  <Check key={todoThing.id} tasktodo={todoThing} isComplete={this.completeChange}/>
    })
    return (
      <div className="">
        <header className="todo-list">
          <h1>First ToDo List</h1>
        </header>
        <div className="todo-list">
          {taskDataList}
        </div>
      </div>
    )
  }
}
// function App() {
//   const taskDataList = taskData.map(TaskAtHand =>{
//     return(
//       <Check task_id = {TaskAtHand.task_id} task={TaskAtHand.task} endby={TaskAtHand.endby} />
//     )
//   }
//   )
  
//   ;
// }
export default App;