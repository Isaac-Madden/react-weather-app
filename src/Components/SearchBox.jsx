import React, { useState } from "react";

const api = {
    key: "not telling",
    base: "https://api.openweathermap.org/data/3.0/"
}

const SearchBox = () => {

    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState({})

    const search = e => {
        if (e.key === "Enter"){
            fetch(`${api.base}onecall?lat=33.44&lon=-94.04&appid=${api.key}`)
            .then(result => console.log(result))
        }
    }

    return (
        <div className="SearchContainer">
        <input 
            type="text" 
            className="SearchBox" 
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
        />
        </div>
    )
    }

export default SearchBox