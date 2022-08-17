import React from 'react'
import ShoppingCart from '../images/ShoppingCart.png'
import UserCircle from '../images/UserCircle.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <p data-test='logo' className='logo-letter'>S</p>
        </div>
        <h1 data-test='main-header'>ShoesMcgees EStore</h1>
        <div className='cart-and-counter'>
            <img src={UserCircle} className="accounts-image" data-test="accounts-image" alt='' />
            <img src={ShoppingCart} alt='' className='cart-image' data-test='cart-image'/>
            <div className='cart-counter' data-test='cart-counter'>
                <p className='cart-counter-number' data-test='cart-counter-number'>0</p>
            </div>
        </div>
    </div>
  )
}

export default Header