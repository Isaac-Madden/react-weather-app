import React from "react";

const Location = ({currentLocation}) => {

        if (currentLocation === ""){
                return (  <p> Please enter a city! </p>  )
        }

        else {
                return (   
                        <div className="LocationResults">
                                <p> {currentLocation.name} </p>  
                                <p> {currentLocation.region} </p>  
                                <p> {currentLocation.country} </p>  
                        </div>
                )
        }

}

export default Location