import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();
export default function WeatherProvider({ children }) {
  const [city, setCity] = useState({});
  const [sevenDays, setSevenDays] = useState();
  const [searchedCity, setSearchedCity] = useState('Adana');
  const [allCities, setAllCities] = useState();
  const apiKey = "8fac92f95ac894a363c70fed6a51bb73";
  useEffect(() => {
    fetch("http://localhost:3000/jsonServer")
      .then((res) => res.json())
      .then((data) => setAllCities(data));
  }, []);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city?.coord?.lat}&lon=${city?.coord?.lon}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setSevenDays(data));
  }, [city]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setCity(data));
  }, [searchedCity]);
  const values = {
    city,
    setCity,
    sevenDays,
    searchedCity,
    setSearchedCity,
    allCities,
    setAllCities,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export const useWeather = () => useContext(WeatherContext);
