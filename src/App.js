import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const API_URL = process.env.REACT_APP_WEATHER_API_URL;
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const API_UNITS = process.env.REACT_APP_WEATHER_API_UNITS;
  const API_LANG = process.env.REACT_APP_WEATHER_API_LANG;

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `${API_URL}/weather?q=${location}&appid=${API_KEY}&units=${API_UNITS}&lang=${API_LANG}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setLocation("");
        })
        .catch(() => {
          setData({});
        });
    }
  };

  return (
    <div className="App">
      <SearchBar location={location} setLocation={setLocation} searchLocation={searchLocation} />
      <div className="container">
        <WeatherInfo data={data} />
        <WeatherDetails data={data} />
      </div>
    </div>
  );
}

export default App;
