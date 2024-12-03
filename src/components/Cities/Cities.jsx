import React from 'react'
import style from '../Cities/Cities.module.css'

function Cities() {
    return (
        <div className={style.cities}>
            <div className={style.heading}>
                <h2>Popular Cities</h2>
                <p>View More</p>
            </div>

            <div className={style.city}>
                <div className={style.imagediv}>
                    <img src="https://img.icons8.com/?size=100&id=0lTJv0Hj5sia&format=png&color=000000" alt="" />
                    <h4>Dehli</h4>
                </div>
                <p>Partly Cloudy</p>
            </div>

            <div className={style.city}>
                <div className={style.imagediv}>
                    <img src="https://img.icons8.com/?size=100&id=QqVqJ6JGmC7i&format=png&color=000000" alt="" />
                    <h4>Mumbai</h4>
                </div>
                <p>Drizzle Rain</p>
            </div>


            <div className={style.city}>
                <div className={style.imagediv}>
                    <img src="https://img.icons8.com/?size=100&id=vVpWsZyDCg9Q&format=png&color=000000" alt="" />
                    <h4>Hyderabad</h4>
                </div>
                <p>Heavy Rain</p>
            </div>


            <div className={style.city}>
                <div className={style.imagediv}>
                    <img src="https://cdn-icons-png.flaticon.com/128/691/691497.png" alt="" />
                    <h4>Bangalore</h4>
                </div>
                <p>Light Thunders</p>
            </div>


            <div className={style.city}>
                <div className={style.imagediv}>
                    <img src="https://cdn-icons-png.flaticon.com/128/606/606795.png" alt="" />
                    <h4>Kolkata</h4>
                </div>
                <p>Mostly Sunny</p>
            </div>


        </div>
    )
}

export default Cities