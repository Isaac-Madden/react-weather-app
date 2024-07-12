import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather"
import Location from "./Location";

const SearchBox = () => {

    const [city, setCity] = useState("")
    const [currentWeather, setCurrentWeather] = useState("")
    const [currentLocation, setCurrentLocation] = useState("")

    const apiBase = "http://api.weatherapi.com/v1/current.json?"

    const search = () => {
        return axios.get(`${apiBase}key=${process.env.REACT_APP_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`)
        .then(response => { 
            setCurrentWeather(response.data.current)
            setCurrentLocation(response.data.location)
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
        <Weather currentWeather={currentWeather} />
        <Location currentLocation={currentLocation} />
        </>
    )
    }

export default SearchBox