import React from "react";

const ForecastCard = ({day}) => {

        return (
            <div className="ForecastCard">
                <p>Date: {day.date}</p>
                <p>Sunrise: {day.astro.sunrise}</p>
                <p>Sunrise: {day.astro.sunrise}</p>
                <p>Sunset: {day.astro.sunset}</p>
                <p>Max Temp: {day.day.maxtemp_c}</p>
                <p>Min Temp: {day.day.mintemp_c}</p>
                <p>Chance of rain: {day.day.daily_chance_of_rain}</p>
            </div>
        )
}

export default ForecastCard