import React from "react"
import "./check.css"

let Check = (props) =>{
    console.log(props)
    return(
        <div className="todo-item">
            <input type="checkbox"></input>
            <p>
                <b>TASK:</b>
                {props.task}
            </p>
            <pre>   </pre>
            <p style={{display:props.endby ? "block" : "none", color: props.endby==="today" ? "red": 'blue'}}>
                <b>END BY:</b>
                {props.endby}
            </p>
        </div>
    )
}

export default Check