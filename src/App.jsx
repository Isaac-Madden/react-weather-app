import Header from "./Components/Header"
import SearchBox from "./Components/SearchBox"
import TheDate from "./Components/TheDate"
import Location from "./Components/Location"
import Temperature from "./Components/Temperature"
import Weather from "./Components/Weather.jsx"

// import 'dotenv/config'
// console.log(process.env) 

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBox />
      <TheDate/>
      <Location />
      <div className="WeatherBox">
        <Temperature />
        <Weather />
      </div>
    </div>
  )
}

export default App
