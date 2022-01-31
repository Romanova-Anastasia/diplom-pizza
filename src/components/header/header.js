import React from 'react'
import './header.scss'
import pizza from '../../assets/img/pizza-logo.png'

import Cart from './cart'

const Header = ({togglePopup}) => {
    return (
        <div className="header">
            <div className="header__logo">
                <img className='header__logo' src={pizza} alt="pizza logo" />
                <div>
                    <h1>Ваша пицца</h1>
                    <p>Есть то, что нас объединяет!</p>
                </div>
            </div>
           <Cart togglePopup={togglePopup}/>
        </div>
    )
}
export default Header