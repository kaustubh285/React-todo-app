import React from "react"

let Time = () =>{
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    let classs
    let mes
    const styles = {
        BackgroundColor:"orange"
    }

    if (hours < 9){
        timeOfDay = "Morning"
        classs="orangeo"
        mes = "Did you exercise??"
    } else if (hours >= 9 && hours <= 12){
        timeOfDay = "Afternoon"
        classs="yellowo"
        mes = "Study!!!"
    } else if (hours >= 12 && hours <= 17){
        timeOfDay = "Afternoon"
        classs="yellowo"
        mes = "Did you apply to companies??"
    } else {
        timeOfDay = "Night"
        classs = "redo"
        mes = "Go to sleep!!!"
    } 
    return(
        <div className={classs}>
            <h3>Its {hours} at {timeOfDay} cartoon</h3>
            <p> {mes}</p>
        </div>
    )
}

export default Time