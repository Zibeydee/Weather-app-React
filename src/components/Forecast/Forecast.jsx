import React, { useEffect, useState, useContext } from 'react'
import style from '../Forecast/Forecast.module.css'
import CityContext from '../CityContext/CityContext'
import axios from 'axios'

function Forecast() {

    const { city } = useContext(CityContext)
    const Api_Key = 'f6f1e509edcfff2d5259dfaa5fa39852'
    const [forecastData, setForcestData] = useState(null)
    const [isLoading, setIsLoading] =useState(true)
    const [selectedButton, setSelectedButton] = useState(7);
    const [days, setDays] = useState(7)

    useEffect (() => {
        const fetchForecast = async() => {
            setIsLoading(true)
            try{
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${days}&appid=${Api_Key}`);
                setForcestData(response.data)       
                setIsLoading(false)
            }catch (err){
                console.log(err);
            }
        }
        fetchForecast()

    }, [city,days, Api_Key])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!forecastData) {
        return <div>Error loading weather data</div>
    }

    console.log('forecast', forecastData);

    return (
        <div className={style.forecast}>
            <div className={style.heading}>
                <h2>Forecast</h2>
                <div className={style.buttons}>
                <button className={selectedButton === 7 ? style.selected : ''} onClick={() => {setDays(7);setSelectedButton(7); }}>7 Days</button>
                    <button  className={selectedButton === 10 ? style.selected : ''} onClick={() => {setDays(10); setSelectedButton(10)}}>10 Days</button>
                </div>
            </div>
            {forecastData.list && forecastData.list.length > 0 ? (
                forecastData.list.map((item, index) => (
                    <div key={index} className={style.city}>
                        <div className={style.imagediv}>
                            {item.weather && item.weather.length > 0 ? (
                                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                            ) : (
                                <img src="https://img.icons8.com/?size=48&id=kBdkBkiwut6s&format=png" alt="" />
                            )}
                            <h4>{Math.round(item.main.temp_max - 273.15)} &deg;/{Math.round(item.main.temp_min - 273.15)} &deg;</h4>
                        </div>
                        <p>{new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
                    </div>
                ))
            ) : (
                <div>No forecast data available</div>
            )}
        </div>
    )
}

export default Forecast
