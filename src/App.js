import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const API_URL = process.env.REACT_APP_WEATHER_API_URL;
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const API_UNITS = process.env.REACT_APP_WEATHER_API_UNITS;
  const API_LANG = process.env.REACT_APP_WEATHER_API_LANG;

  const [data,setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `${API_URL}/weather?q=${location}&appid=${API_KEY}&units=${API_UNITS}&lang=${API_LANG}`;

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        setLocation('');
      }
      ).catch((error) => {
        console.log(error);
      });
    }
  }

  return (
    <div className="App">
      <div className='search'>
        <input 
        value={location}
        onChange={event=>setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Pesquise sua cidade'
        type='text'/>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className='description'>
            {data.main ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()} °C</p> : null}
            <p>Sensação</p>
          </div>
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity} %</p> : null}
            <p>Humidade</p>
          </div>
          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} Km/h</p> : null}
            <p>Vento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;