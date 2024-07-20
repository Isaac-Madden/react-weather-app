import React from "react";

const ForecastCard = ({day}) => {

    let formattedDateArray = day.date.split("-")

        return (
            <ul className="ForecastCard">
                <li>Date: {formattedDateArray[2]} {formattedDateArray[1]} {formattedDateArray[0]}</li>
                <li>Sunrise: {day.astro.sunrise}</li>
                <li>Sunset: {day.astro.sunset}</li>
                <li>Max Temp: {day.day.maxtemp_c} °C</li>
                <li>Min Temp: {day.day.mintemp_c} °C</li>
                <li>Chance of rain: {day.day.daily_chance_of_rain}%</li>
            </ul>
        )
}

export default ForecastCard