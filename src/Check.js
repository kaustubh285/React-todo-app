import React from "react"
import "./check.css"

let Check = (props) =>{

    const taskOver ={
        color:"#cdcdcd",
        textDecoration : "line-through"
    }
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.tasktodo.complete} onChange={()=> props.isComplete(props.tasktodo.id)}></input>
            <p style={props.tasktodo.complete ? taskOver : null}>
                <b>TASK:</b>
                {props.tasktodo.task}
            </p>
            <pre>   </pre>
            <p style={{display:props.tasktodo.endby ? "block" : "none", color: props.tasktodo.endby==="today" ? "red": 'blue'}}>
                <b>END BY:</b>
                {props.tasktodo.endby}
            </p>
        </div>
    )
}

export default Check