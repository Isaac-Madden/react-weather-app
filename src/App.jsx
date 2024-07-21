import Header from "./Components/AppComponents/Header"
import SearchBox from "./Components/AppComponents/SearchBox"
import TheDate from "./Components/AppComponents/TheDate"

function App() {
  return (
    <div className="App">
      <a href="#main" class="skip-to-main-content-link">Skip to main content</a>
      <Header />
      <TheDate />
      <main id="main">
        <SearchBox />
      </main>
    </div>
  )
}

export default App
