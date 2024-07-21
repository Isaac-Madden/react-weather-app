import React from "react";

const Weather = ({currentWeather}) => {

    if (currentWeather !== ""){

        let displayWeather = {
            temp_c: currentWeather.temp_c + " degrees",
            condition: currentWeather.condition.text,
            wind_mph: currentWeather.wind_mph + " mph"
        }

        let weatherKeys = Object.keys(displayWeather)
        let icon = "https:"+currentWeather.condition.icon

        return (
            <ul className="ForecastCard">
                <li>Right now</li>
                {
                weatherKeys.map(  (item) => <li key={displayWeather[item]}> {displayWeather[item]}</li>  )
                }
                <img src={icon}></img>
            </ul>
        )
    }

}

export default Weather