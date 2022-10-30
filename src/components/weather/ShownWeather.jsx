import React from "react";
import { useWeather } from "../../context/WeatherContext";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

export default function ShownWeather() {
  const data = useWeather();
  const city = data.city;
  const sevenDays = data.sevenDays;
  const iconcode = city?.weather?.[0]?.icon;
  const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "100px",
        justifyContent: "center",
      }}
    >
      {sevenDays?.daily?.map((item, index) => {
        const d = new Date(sevenDays?.daily?.[index]?.dt * 1000);
        const dayName = days[d.getDay()];
        if (index === 0) {
          return (
            <Card
              key={index}
              style={{
                width: "200px",
                margin: "0 10px",
                backgroundColor: "lightblue",
              }}
            >
              <CardBody>
                <CardTitle>
                  <h3>{dayName}</h3>
                </CardTitle>
                <CardImg
                  src={iconurl}
                  style={{ width: "150px", height: "150px" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <p>
                    {item?.feels_like?.eve}
                    {"\u00b0"}
                  </p>
                  <p>
                    {item?.feels_like?.morn}
                    {"\u00b0"}
                  </p>
                </div>
              </CardBody>
            </Card>
          );
        } else {
          return (
            <Card key={index} style={{ width: "200px", margin: "0 10px" }}>
              <CardBody>
                <CardTitle>
                  <h3>{dayName}</h3>
                </CardTitle>
                <CardImg
                  src={iconurl}
                  style={{ width: "150px", height: "150px" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <p>
                    {item?.feels_like?.eve}
                    {"\u00b0"}
                  </p>
                  <p>
                    {item?.feels_like?.morn}
                    {"\u00b0"}
                  </p>
                </div>
              </CardBody>
            </Card>
          );
        }
      })}
    </div>
  );
}
