import React from "react";
import ForecastCard from "./ForecastCard";    

const Forecast = ({currentForecast}) => {

    if (currentForecast !== ""){
        return (
            <div className="ForecastResults">
                {currentForecast.map( day => <ForecastCard day={day} key={day.date} />  )}
            </div>
        )
    }
}

export default Forecast