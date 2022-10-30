import React from "react";
import { Container } from "reactstrap";
import { useWeather } from "../../context/WeatherContext";

export default function AllCities() {
  const data = useWeather();
  const allCities = data.allCities;
  const searchedCity = data.searchedCity;
  const setSearchedCity = data.setSearchedCity;

  const handleChange = (e) => {
    setSearchedCity(e.target.value);
  };
  console.log(allCities);
  console.log(searchedCity);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <select
            className="select"
            value={searchedCity}
            onChange={handleChange}
            style={{
              padding: "10px 20px",
              outline: "none",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "orange",
              cursor: "pointer",
            }}
          >
            {allCities?.map((item, index) => (
              <option className="option" value={item?.name} key={index}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>
      </Container>
    </div>
  );
}
