import React from "react"


class AddItem extends React.Component{

    onAddTask = (event) =>{
        event.preventDefault()
        console.log(event.target.name)
        console.log(event.target.value)
      }

    render(props){
        return(
            
                <div style={{display: 'flex', flexWrap:'wrap'}} className="item-add">
                    <form  onSubmit={this.taskAdd}>
                        <div style={{padding:15}}>
                            <p>Enter Task to do: </p>
                            <input type="text" placeholder="Task" name="task_det" style={{ padding:15}}></input>
                        </div>
                        <div style={{padding:15}}>
                            <p >Enter End by: </p>
                            <input type="text" placeholder="End by" name="endby_det" style={{padding:15}}></input>
                        </div>
                        <button style={{padding:15, marginTop:30, marginInlineStart:20}}>Add task</button>
                    </form>
                </div>
        )
    }
}
export default AddItem