import "./App.css";
import AllCities from "./components/allCities/AllCities";
import BottomComp from "./components/footer/BottomComp";
import ShownWeather from "./components/weather/ShownWeather";
import WeatherProvider from "./context/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <AllCities></AllCities>
        <ShownWeather></ShownWeather>
        <BottomComp></BottomComp>
      </WeatherProvider>
    </div>
  );
}

export default App;
