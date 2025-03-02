import React from "react";

function WeatherDetails({ data }) {
  if (!data.main) return null;

  return (
    <div className="bottom">
      <div className="feels">
        <p className="bold">{data.main.feels_like.toFixed()}°C</p>
        <p>Sensação</p>
      </div>
      <div className="humidity">
        <p className="bold">{data.main.humidity}%</p>
        <p>Humidade</p>
      </div>
      <div className="wind">
        <p className="bold">{data.wind.speed.toFixed()} Km/h</p>
        <p>Vento</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
