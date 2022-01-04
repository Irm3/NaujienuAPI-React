import React, { useState, Image } from 'react'

const api = {
    key: "REDACTED",
    base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {

    let date = String(new window.Date())
    date = date.slice(3,15)
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${evt.target.value}&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('');
                    console.log(result);
                }
                );
        }
    }

    return (
        <div>
            <div className='container has-text-centered'>
                <h1 class="is-size-5">Iveskite miestą:</h1>
                <input className='input' style={{width: 400}} type="text" placeholder='Ieškoti...' onChange={e => e.target.value} onKeyPress={search} />
            </div>

            {(typeof weather.main != "undefined") ? (


            <div className='container'>
                <div className='container has-text-centered'>
                    <hr />
                    <h1 className='title'>{weather.name}, {weather.sys.country}</h1>
                    <h1>{date}</h1>
                    <hr />
                    <div className='is-size-5'>Temperatūra: {Math.round(weather.main.temp - 273)}°c </div>
                    <div className='is-size-5'>Būsena: {weather.weather[0].main}</div>
                    {/* <Image source={{ uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` }} /> */}
                    <div class="weather-icon"><img src={`icons/${weather.weather[0].icon}.png`} /></div>
                    <div className='is-size-5'>Slėgis: {weather.main.pressure} hPa</div>
                    <div className='is-size-5'>Vėjo greitis: {weather.wind.speed} m/s</div>
                    <div className='is-size-5'>Debesuotumas: {weather.clouds.all} %</div>
                    <div className='is-size-5'>Matomumas: {weather.visibility} m</div>
                    <div className='is-size-5'>Drėgnumas: {weather.main.humidity} </div>
                </div>
            </div>

            
            ) : ('')}
        </div>
            )
}

export default Weather
