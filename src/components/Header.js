import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/'><div className='logo'>
            <p data-test='logo' className='logo-letter'>S</p>
        </div></Link>
        <h1 data-test='main-header'>ShoesMcgees EStore</h1>
        <div className='cart-and-counter'>
            <Link to='/login'> <img src="/images/UserCircle.png" className="accounts-image" data-test="accounts-image" alt='' /> </Link>
            <img src="/images/ShoppingCart.png" alt='' className='cart-image' data-test='cart-image'/>
            <div className='cart-counter' data-test='cart-counter'>
                <p className='cart-counter-number' data-test='cart-counter-number'>0</p>
            </div>
        </div>
    </div>
  )
}

export default Header