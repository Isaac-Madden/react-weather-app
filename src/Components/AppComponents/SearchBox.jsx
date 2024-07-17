import React, { useState } from "react";
import axios from "axios";
import Weather from "../SearchBoxComponents/Weather"
import Location from "../SearchBoxComponents/Location";
import Forecast from "../SearchBoxComponents/Forecast";

const SearchBox = () => {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [location, setLocation] = useState("")
    const [forecast, setForecast] = useState("")

    const apiBase = "http://api.weatherapi.com/v1/forecast.json?"

    const search = () => {
        return axios.get(`${apiBase}key=${process.env.REACT_APP_API_KEY}&q=${city}&days=3`)
        .then(response => { 
            setForecast(response.data.forecast.forecastday)
            setWeather(response.data.current)
            setLocation(response.data.location)
        })
    }

    return (
        <>
        <div className="SearchContainer">
            <input 
                type="text" 
                className="SearchBox" 
                placeholder="Enter a city..."
                onChange={event => { setCity(event.target.value) }}
                value={city}
            />
            <button className="searchButton" onClick={ ()=>search() }> Search </button>
        </div>
        <div className="SearchResults">
            <Weather currentWeather={weather} />
            <Location currentLocation={location} />
            <Forecast currentForecast={forecast} />
        </div>
        </>
    )
    }

export default SearchBox