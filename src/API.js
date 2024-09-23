import axios from "axios";

const apiBase = "http://api.weatherapi.com/v1/forecast.json?"

export const homeSearch = (city) => {
    return axios.get(`${apiBase}key=${process.env.REACT_APP_API_KEY}&q=${city}&days=3`)
    .then(response => { return response })
}