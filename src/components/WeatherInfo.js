import React from "react";

function WeatherInfo({ data }) {
  return (
    <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
      </div>
      <div className="min_max">
        {data.main ? <p>Min: {data.main.temp_min}°C</p> : null}
        {data.main ? <p>Max: {data.main.temp_max}°C</p> : null}
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].description}</p> : null}
      </div>
      <div className="more-info">
        {data.main ? <p>Pressão (Nível do Mar) : {data.main.grnd_level} hPa</p> : null}
        {data.main ? <p>Pressão (Nível Terrestre): {data.main.sea_level} hPa</p> : null}
      </div>
    </div>
  );
}

export default WeatherInfo;
