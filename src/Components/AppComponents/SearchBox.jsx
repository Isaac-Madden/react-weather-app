import React, { useState } from "react";
import axios from "axios";
import Weather from "../SearchBoxComponents/Weather"
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
        .then( () => setCity(""))
    }

        return (
            <>
            {location !== "" ? <h2>Here's the forcast for {location.name}, {location.country}!</h2> : null }

            <div className="SearchResults">
                <Weather currentWeather={weather} />
                <Forecast currentForecast={forecast} />
            </div>

            {location !== "" ? <h2>Check the weather somewhere else?</h2> : null }

            <div className="SearchContainer">
                <form  onSubmit={ (event)=> {event.preventDefault(); search()  }}>
                    <input className="SearchBox" placeholder="Type a City..." required value={city} onChange={ event => { setCity(event.target.value)} }/>
                    <button className="searchButton" type="submit" >Search</button>
                </form>
            </div>
            </>
        )
    // }


    }

export default SearchBox