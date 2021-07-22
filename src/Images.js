import React from 'react'
import './Images.css'
import menuCard from './Media/bg4.jpg'

function Menu() {
    return (
        <div className="menu">
            <div className="menu__txt">
                <h1>Images</h1>
                <h5>Address - Kingdom of Dreams, Amrapali Dream Valley, Greater Noida, Uttar Pradesh</h5>
                <h5>Contact No. - 9971068134</h5>
                <h5></h5>  
            </div>

            <div className="menu__card"> 
                <img src={menuCard} alt="Images Gallery" />
            </div>
        </div>
    )
}

export default Menu
