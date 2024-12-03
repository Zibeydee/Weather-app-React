import React, { useEffect, useState, useContext } from 'react'
import style from '../CurrentWeather/CurrentWeather.module.css'
import axios from 'axios'
import CityContext from '../CityContext/CityContext'

function CurrentWeather() {
    const {city} = useContext(CityContext)
    const [weatherData, setWeatherData] =useState(null)
    const [isLoading, setIsLoading] =useState(true)

    console.log('city' ,city);
    const Api_Key = 'f6f1e509edcfff2d5259dfaa5fa39852'

    useEffect(() => { 
        const fetchWeather = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${Api_Key}`)
                setWeatherData(response.data)
                setIsLoading(false)
            } catch(err) {
                console.log(err);
            }
        }
        fetchWeather()

    }, [city, Api_Key])

    console.log("geldi?",weatherData);
  
   
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!weatherData) {
        return <div>Error loading weather data</div>
    }

  return (
    <div className={style.currentweather}>
        <div className={style.heading} >
        <h2>Current Weather</h2>
        <span>6.25 pm</span>
        </div>

        <div className={style.temperature}>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
            <div className={style.heavy}>
            <span>{weatherData.main.temp}</span> 
            <span className={style.degree}>&deg;C</span>
           
                <p>{weatherData.weather[0].description}</p>
            </div>
        </div>

        <div className={style.details}>
            <div className={style.waves}>
                <img src="https://img.icons8.com/?size=100&id=3023&format=png&color=000000" alt="" />
                <span>173</span>
            </div>

            <div className={style.humidity}>
                <img src="https://cdn-icons-png.flaticon.com/128/13944/13944057.png" alt="" />
                <span>{weatherData.main.humidity}%</span>
            </div>

            <div className={style.wind}>
                <img src="https://cdn-icons-png.flaticon.com/128/2011/2011448.png" alt="" />
                <span>{weatherData.wind.speed}km/h</span>
            </div>

            <div className={style.sun}>
                <img src="https://cdn-icons-png.flaticon.com/128/606/606795.png" alt="" />
                <span>3</span>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather