import React, { useState } from "react";

const Weather = ({currentWeather}) => {

    if (currentWeather === ""){
        return (  <p> Please enter a city! </p>  )
    }
    else {

        let displayWeather = {
            temp_c: currentWeather.temp_c + " degrees",
            condition: currentWeather.condition.text,
            wind_mph: currentWeather.wind_mph + " mph"
        }

        let weatherKeys = Object.keys(displayWeather)

        return (
            <>
                {
                weatherKeys.map(  (item) => <p key={displayWeather[item]}> {displayWeather[item]}</p>  )
                }
            </>
    
        )
    }
}

export default Weather