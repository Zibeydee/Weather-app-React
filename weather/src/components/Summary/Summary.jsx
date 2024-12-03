import React, { useState , useContext } from 'react'
import style from '../Summary/Summary.module.css'
import CityContext from '../CityContext/CityContext'
import axios from 'axios'

function Summary() {


  const { city } = useContext(CityContext)
  const Api_Key = 'f6f1e509edcfff2d5259dfaa5fa39852'
  const [summaryData, setSummaryData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  // useEffect(() => {
  //   const fetchSummary = async() =>{
  //     setIsLoading(true)
  //   }try{
  //     const response = await axios.get(``)
  //   }

  // }, [city, Api_Key])




  return (
    <div className={style.summary}>
      <div className={style.heading}>
        <h1 >Summary</h1>
        <div className={style.buttons}>
          <button>Summary</button>
          <button>Hourly</button>
          <button>More Details</button>
        </div>
      </div>

      <div className={style.rain}>
        <p>Rain%</p>
        <span>78%</span>
        <span>79%</span>
        <span>76%</span>
        <span>81%</span>
        <span>76%</span>
        <span>78%</span>
        <span>68%</span>
        <span>61%</span>
        <span>69%</span>
        <span>70%</span>
      </div>

      <div className={style.now}>
        <p>Now</p>
        <span>7 PM</span>
        <span>9 PM</span>
        <span>11 PM</span>
        <span>1 PM</span>
        <span>3 PM</span>
        <span>5 PM</span>
        <span>7 PM</span>
        <span>9 AM</span>
        <span>11 AM</span>
      </div>
    </div>
  )
}

export default Summary