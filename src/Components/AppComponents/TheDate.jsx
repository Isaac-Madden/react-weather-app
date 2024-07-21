import React from "react";

let currentDate = new Date().toLocaleDateString('en-gb', { weekday:"long", year:"numeric", month:"short", day:"numeric"})

const TheDate = () => {

    return (
        <h2 aria-label="the current date" role="region">{currentDate}</h2> 
    )
}

export default TheDate