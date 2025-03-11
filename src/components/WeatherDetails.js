import React from "react";

function WeatherDetails({ data }) {
  if (!data.main) return null;

  return (
    <div className="bottom">
      <div className="feels">
        <i className="fa-solid fa-water"></i>
        <p className="description">Sensação</p>
        <p className="bold">{data.main.feels_like.toFixed()}°C</p>
      </div>
      <div className="humidity">
        <i className="fa-solid fa-droplet"></i>
        <p className="description">Humidade</p>
        <p className="bold">{data.main.humidity}%</p>
      </div>
      <div className="wind">
        <i className="fa-solid fa-wind"></i>
        <p className="description">Vento</p>
        <p className="bold">{data.wind.speed.toFixed()} km/h</p>
      </div>
    </div>
  );
}

export default WeatherDetails;
