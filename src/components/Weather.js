import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css"

function Weather() {
    const [data, setData] = useState({});

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Oak Island,NC,USA&units=imperial&appid=708b58502325a3174d8b7c91fcc3ecc4';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data);
        });
    }, [url]);

    const getWindDirection = (degrees) => {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const index = Math.round(degrees / 22.5) % 8;
        return directions[index];
    }

    return (
        <div className="app">
            <div className="container">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="weather-data">
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp}°F</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].description}</p> : null}
                    </div>                
                    <div className="bottom">
                        <div className="feels">
                            <p className="bold"> Feels Like {data.main ? data.main.feels_like : null}°F</p>
                        </div>
                        <div className="humidity">
                            <p className="bold"> Humidity {data.main ? data.main.humidity : null}%</p>
                        </div>
                        <div className="wind">
                            <p className="bold">Wind {data.wind ? `${data.wind.speed} MPH ${getWindDirection(data.wind.deg)}` : null}</p>
                        </div>
                        <div className="wind-gust">
                            <p className="bold">Wind Gust {data.wind ? `${data.wind.gust} MPH` : null}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;
