import React from "react"
import "./check.css"

let Check = (props) =>{
    console.log(props)
    return(
        <div className="todo-item">
            <input type="checkbox"></input>
            <p>
                <b>TASK:</b>
                {props.details.task}
            </p>
            <pre>   </pre>
            <p style={{display:props.details.endby ? "block" : "none", color: props.details.endby=="today" ? "red": 'blue'}}>
                <b>END BY:</b>
                {props.details.endby}
            </p>
        </div>
    )
}

export default Check