import React from "react";

let currentDate = new Date().toLocaleDateString('en-gb', { weekday:"long", year:"numeric", month:"short", day:"numeric"})

const TheDate = () => {

    return (
            <p className="TheDate">{currentDate}</p>
    )
}

export default TheDate