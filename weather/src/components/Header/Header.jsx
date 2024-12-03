import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import style from '../Header/Header.module.css'
import CityContext from '../CityContext/CityContext'


function Header() {

  const {setCity } = useContext(CityContext)
  const handleChange = (e) =>{
    setCity(e.target.value)
  }

  console.log(setCity,'test');
  return (
    <div className={style.header}>
      <div className={style.inputcontainer}>
        <input type="text" className={style.input} placeholder='Search for location' onChange={handleChange}/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon} />
      </div>

      <div className={style.login}>
        <img src="https://img.icons8.com/?size=100&id=50b1QDiOqjUz&format=png&color=000000" alt="" />
        <img src="https://img.icons8.com/?size=100&id=yXuLqlSF5u1s&format=png&color=000000" alt="" />
      </div>


    </div>
  )
}

export default Header