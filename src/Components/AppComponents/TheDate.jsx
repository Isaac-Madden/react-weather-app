import React from "react";

let currentDate = new Date().toLocaleDateString('en-gb', { weekday:"long", year:"numeric", month:"short", day:"numeric"})

const TheDate = () => {

    return (
        <div className="TheDate">
        <h3>{currentDate}</h3> 
        </div>
    )
}

export default TheDate