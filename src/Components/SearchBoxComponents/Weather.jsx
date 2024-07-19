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
            <div className="WeatherResults">
                {
                weatherKeys.map(  (item) => <p key={displayWeather[item]}> {displayWeather[item]}</p>  )
                }
                <img src={icon}></img>
            </div>
        )
    }

}

export default Weather