import React, { useEffect, useState, useContext } from 'react'
import style from '../Map/Map.module.css'
import axios from 'axios'
import CityContext from '../CityContext/CityContext'

function Map() {

    const { city } = useContext(CityContext)
    const Api_Key = 'f6f1e509edcfff2d5259dfaa5fa39852'
    const [mapData, setMapData ] =useState(null)
    const [isLoading, setIsLoading] =useState(true)


    useEffect(() => {
      const fetchMap = async () =>{
        setIsLoading(true)
      try{
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${Api_Key}`)
        setMapData(response.data)
        setIsLoading(false)
      }catch(err){
        console.log(err);
      }
      }
      fetchMap()
    }, [city, Api_Key])


    console.log('mapdata', mapData);
  


  return (
    <div >
        <iframe className={style.map}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12450.72213219277!2d48.433549131704964!3d38.72514303316553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4022f27477f4fb2d%3A0xf35f33feccdec27d!2sMonidigah!5e0!3m2!1saz!2saz!4v1718074330141!5m2!1saz!2saz'
        width='600'
        height='450'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'></iframe>
    </div>
  )
}

export default Map