import React from 'react'
import Greytshirt from '../images/Greytshirt.png'
import Greyhoodie from '../images/Greyhoodie.png'

const productBox = () => {
  
    const handleClick = () => {
        console.log('Clicked')
    }
  
    return (
    <div className='product-box'>
        <img onClick={handleClick} alt='' src={Greytshirt} className='grey-tshirt' data-test='grey-tshirt-image'/>
        <img alt='' src={Greyhoodie} className='grey-tshirt' data-test='grey-hoodie-image'/>
    </div>
  )
}

export default productBox