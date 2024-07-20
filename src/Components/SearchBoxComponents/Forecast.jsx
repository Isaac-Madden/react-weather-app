import React from "react";
import ForecastCard from "./ForecastCard";    

const Forecast = ({currentForecast}) => {

    if (currentForecast !== ""){
        return (
            <> {currentForecast.map( day => <ForecastCard day={day} key={day.date} />  )} </>
        )
    }
}

export default Forecast