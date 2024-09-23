import React, { useContext, useState } from "react";
import Weather from "../MainSearchComponents/Weather"
import Forecast from "../MainSearchComponents/Forecast";
import { homeSearch } from "../../API";

import {Background} from "../../Contexts/BackgroundHandle.jsx";

const MainSearch = () => {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [location, setLocation] = useState("")
    const [forecast, setForecast] = useState("")

    const backgroundContext = useContext(Background);
    const setBackgroundContext = backgroundContext.setCurrentBackground

    // console.log(backgroundContext.currentBackground)
 
    const search = () => {

        homeSearch(city)
            .then( response => { 
                setForecast(response.data.forecast.forecastday)
                setWeather(response.data.current)
                setLocation(response.data.location)
                setBackgroundContext(response.data.current.condition.text)
            })
            .then( () => setCity("") )
            .catch( (error) => console.log(error))
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
    }

export default MainSearch