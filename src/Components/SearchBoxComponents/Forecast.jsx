import React from "react";
import ForecastCard from "./ForecastCard";    

const Forecast = ({currentForecast}) => {

    if (currentForecast === ""){
        return (  <p> Please enter a city! </p>  )
    }

    else {
        return (
            <div className="ForecastResults">
                {currentForecast.map( day => <ForecastCard day={day} />  )}
            </div>
        )
    }
}

export default Forecast