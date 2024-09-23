import React, { useContext, useEffect } from "react";

import Header from "./Components/AppComponents/Header"
import NavBar from "./Components/AppComponents/NavBar"
import MainSearch from "./Components/RouteComponents/MainSearch"
import TheDate from "./Components/AppComponents/TheDate"
import Chart from "./Components/RouteComponents/Chart"
import About from "./Components/RouteComponents/About"
import { Route, Routes } from "react-router-dom";

import { Background } from "./Contexts/BackgroundHandle"

function App() {

  const backgroundContext = useContext(Background);

  const changeBackground = () => {
    document.getElementById('app').className = "App " + backgroundContext.currentBackground;
  }

  useEffect( () => { changeBackground() }, [])

  return (
    <div className="App" id="app">
      <a href="#main" className="skip-to-main-content-link">Skip to main content</a>
      <NavBar />
      <Header />
      <TheDate />
      <main id="main">
        <Routes> 
          <Route path="/" element={<MainSearch />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
